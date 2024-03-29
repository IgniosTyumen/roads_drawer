import {
    INITIALIZE_FAILURE,
    INITIALIZE_SUCCESS,
    SET_ROADS_DOWNLOADED,
    SET_ROADS_TO_DOWNLOAD,
    SET_SEGMENTS_DOWNLOADED
} from "../constants/AppGlobalConstants";

import {SET_ALL_USER_PREFERENCES,} from '../constants/UserSettingsConstants'

import {SET_ROADS} from "../constants/RoadsConstants";


import {all, call, put, takeEvery} from 'redux-saga/effects'
import {airfieldsApi, dangersApi, dictionariesApi, medicalOrganizationApi, roadsApi, userApi} from "../api/api";
import {initialState} from "../reducers/userPreferences";

let counterRoadsDownloaded = 0;
let counterDangersDownloaded = 0;
let counterSegmentsDownloaded = 0;

const modifyRoad = (roadsList, segment,dictionaries) => {

    let newRoadList = [...roadsList];
    let updated = newRoadList.find(element=>element.id == segment.road_id);
    if (updated) {
        const city_name = dictionaries.cities.find(element => element.id === updated.city_id)
        const district_name = dictionaries.districts.find(element => element.id === updated.district_id)
        updated.city_name = city_name ? city_name.name : 'Не определено';
        updated.district_name = district_name ? district_name.name : 'Не определено';
    }
    let updatedIndex = roadsList.indexOf(updated);
    if (updatedIndex>=0) {
        if (!updated.segments_set) {
            updated = {
                ...updated,
                segments_set: [{...segment}]
            }
        } else {
            updated.segments_set.push(segment)
        }
        newRoadList[updatedIndex] = updated
    }
    return newRoadList;
}


const applyModifierForSegment = (segmentList, parameter) => {
    let newList = {...segmentList}
    for (let it=0; it<segmentList.params[parameter].length; it++) {

        let updatedSegment = segmentList.segments.find(element => element.id === segmentList.params[parameter][it].segment_id);
        let updatedSegmentIndex = segmentList.segments.indexOf(updatedSegment);
        if (updatedSegment ) {

            if (updatedSegment[parameter]) {
                updatedSegment[parameter].push(segmentList.params[parameter][it])
            } else {
                updatedSegment[parameter] = [segmentList.params[parameter][it]]
            }
            newList.segments[updatedSegmentIndex] = updatedSegment
        }
    }

    return newList
}


function* uploadRoads(page) {
    const responseRoads = yield call(() => roadsApi.getAllRoads());
    counterRoadsDownloaded++;
    yield put({type: SET_ROADS_DOWNLOADED, payload: counterRoadsDownloaded});
    return responseRoads.data;
}


function* uploadSegments(page) {
    const responseSegments = yield call(() => roadsApi.getAllSegments());
    counterSegmentsDownloaded++;
    yield put({type: SET_SEGMENTS_DOWNLOADED, payload: counterSegmentsDownloaded});
    return responseSegments.data;
}

function* uploadAirfields() {
    const airfieldsResponse = yield call(() => airfieldsApi.getAllAirfields());
    return airfieldsResponse;
}
function* uploadMedicalOrganizations() {
    const medicalsResponse = yield call(() => medicalOrganizationApi.getAllMedicalOrganizations());
    return medicalsResponse;
}

function* uploadDangerRoads(page) {
    const danger = yield  call(() => dangersApi.getAllDangers(page));
    counterDangersDownloaded++;
    yield put({type: 'SET_DANGERS_DOWNLOADED', payload: counterDangersDownloaded});
    return danger;
}
function* uploadDictionaries() {
    const [cities, districts] = yield  all( [call(() => dictionariesApi.getCities()), call(() => dictionariesApi.getDistricts())]);
    return {cities:cities.data.objects,
        districts:districts.data.objects};
}


function* uploadOrder() {
    try {
        put({
            type: 'START_USER_AUTH_FETCHING'
        })
        const auth = yield call(() => userApi.getUserAccessParams());
        const userAuthModel = {
            importanceRights: {
                all: auth.data.can_edit_all_roads,
                federal: auth.data.can_edit_federal_roads,
                regional: auth.data.can_edit_regional_roads,
                municipal: auth.data.can_edit_municipal_roads,
                tyumen: auth.data.can_edit_tyumen_roads,
            },
            municipalRoadsAllDistricts:auth.data.municipal_roads_all_districts,
            regionalRoadsAllDistricts: auth.data.regional_roads_all_districts,
            districtRights: auth.data.districts,
            userId: auth.data.id,
            email: auth.data.email,
            first_name: auth.data.first_name,
            last_name: auth.data.last_name,
            phone: auth.data.phone,
            middle_name: auth.data.middle_name

        };
        yield put({
            type: 'SET_USER_AUTH_PARAMS',
            payload: userAuthModel
        })
        yield put({
            type: 'USER_AUTH_FETCHING_SUCCESS'
        })
        return auth;
    } catch (error) {
        put({
            type: 'USER_AUTH_FETCHING_FAILURE'
        })
        console.warn(error);
        throw error
    }
}


function* initialize(action) {
    try {

        yield put({
            type: 'INITIALISATION_STARTS'
        });

        yield put({
            type: SET_ROADS_TO_DOWNLOAD,
            payload: 1,
        });

        const localSettings = localStorage.getItem('customSettings');
        if (localSettings) {
            let userPreferences;
            try {
                userPreferences = JSON.parse(localStorage.getItem('userPreferences'))
                console.log(userPreferences)
            } catch (e) {
                console.log('no user preferences defined, used default settings');
                userPreferences = initialState;
            } finally {
                yield put({
                    type: SET_ALL_USER_PREFERENCES,
                    userPreferences:userPreferences
                })
            }
        }

        let dangers = [];
        const dangersResponse = yield call (()=>uploadDangerRoads(1))

        const order = yield call (()=>uploadOrder())
        const dictionaries = yield call(uploadDictionaries);

        yield put({type: 'UPLOAD_DICTIONARIES', payload: {
                cities:dictionaries.cities,
                districts:dictionaries.districts
            }});
        counterDangersDownloaded++;
        const totalPagesDangers = dangersResponse.data.total_pages;
        dangers = dangersResponse.data.objects;
        let sagasDangers = [];

        for (let page = 2; page <= totalPagesDangers; page++) {
            sagasDangers.push(call(() => uploadDangerRoads(page)));
        }

        // simple road Download
        const sagasRoads = [];
        sagasRoads.push(call(() => uploadRoads()));

        const sagasSegments = [];
        sagasSegments.push(call(() => uploadSegments()));

        const sagasAirfields = [];
        sagasAirfields.push(call(() => uploadAirfields()));

        const sagasMedical = [];
        sagasMedical.push(call(()=>uploadMedicalOrganizations()))


        const [allRoads,allSegments,otherDangers, allAirfields,allMedicals] = yield all([all(sagasRoads) , all (sagasSegments),all(sagasDangers), all(sagasAirfields),all(sagasMedical)]);

        let modifiedSegments = [];
        for (let it in allSegments[0].params){
            modifiedSegments = applyModifierForSegment(allSegments[0],it)
        }

        let roads = allRoads[0].roads;
        for (let it = 0; it<modifiedSegments.segments.length;it++){
            roads = [...modifyRoad(roads,modifiedSegments.segments[it],dictionaries)]
        }

        for (let it in otherDangers) {
            for (let it2 in otherDangers[it].data.objects) {
                dangers.push(otherDangers[it].data.objects[it2])
            }
        }

        const airfields = allAirfields[0].data.objects;
        const fap = allMedicals[0].data.objects.filter(el=>
           el.mo_type=='Фельдшерско-акушерский пункт'
        );
        let ambulance = allMedicals[0].data.objects.filter(el=>el.mo_type!=='Фельдшерско-акушерский пункт');
        // yield put(
        //     {
        //         type: SET_ROADS,
        //         roads: roads,
        //         bridges: [],
        //         roadsigns: [],
        //         dangers: dangers,
        //         airfields:airfields,
        //         // cities:dictionaries.cities.filter(el=>el.is_faraway)
        //         cities:dictionaries.cities,
        //         fap,
        //         ambulance
        //     }
        // );
        yield put(
            {
                type: SET_ROADS,
                roads: roads,
                bridges: [],
                roadsigns: [],
                dangers: dangers,
                airfields:[],
                // cities:dictionaries.cities.filter(el=>el.is_faraway)
                cities:[],
                fap:[],
                ambulance:[]
            }
        );

        const roadNumberPrepared = action.url;
        if (roadNumberPrepared) {
            const road = roads.find(element=>element.id==roadNumberPrepared)
            if (road.line_path || road.segments_set) {
                yield  put({
                    type: 'SET_ROAD_ACTIVE',
                    payload: road
                })
                yield put({
                    type: 'SET_ROAD_ACTIVE_PREVIEW',
                    payload: road
                })
            } else {
                alert('В выбранной дороге отсутсвуют участки, работа с дорогой невозможна. Внесите участки')
            }
        }


        yield put(
            {
                type: INITIALIZE_SUCCESS,
            }
        );
    } catch (e) {
        console.log(e)
        yield put({type: INITIALIZE_FAILURE})

    }

}
//parser starter
// function* initialize(action) {
//     let result = []
//     const responseLayers = yield call(() => parser.getAllTypes());
//     const layers = responseLayers.data;
//     result.push({layers});
//     debugger
//     for (let it=0;it<layers.length;it++){
//         if (layers[it].type==='layer' || layers[it].type==='virtual'){
//             const dataStructure = yield call(() => parser.getStructure(layers[it].code));
//             let params = []
//             for (let parIt = 0; parIt< dataStructure.data.length; parIt++){
//                 params.push(dataStructure.data[parIt].code)
//             }
//             const dataIdListResponse = yield call(() => parser.getDataList(layers[it].code));
//             const dataIdList = dataIdListResponse.data;
//             let data = []
//             for (let dataIt=0; dataIt< dataIdList.length ;dataIt++){
//                 const dataFullListResponse = yield call(() => parser.getData(layers[it].code,dataIdList[dataIt]['id']));
//                 data.push(dataFullListResponse.data)
//             }
//             result.push({
//                 [layers[it].code] : data
//             })
//             const dataFullListResponse = yield call(() => parser.save({
//                 [layers[it].code] : data
//             },layers[it].code));
//         }
//
//     }
//     // const dataFullListResponse = yield call(() => parser.save(result));
//     // const data = yield call(() => parser.getAllTypes(layers,layers))
// }

export function* watchInitializeMixed() {
    yield takeEvery('INITIALIZE_APP', initialize)
}
