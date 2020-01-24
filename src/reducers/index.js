import {combineReducers} from "redux";
import map from "../reducers/map";
import roads from "../reducers/roads";
import bridges from "../reducers/bridges";
import dangers from "../reducers/dangers";
import fap from "../reducers/fap";
import ambulance from "../reducers/ambulance";
import airfields from "../reducers/airfields";
import cities from "../reducers/cities";
import roadsigns from "../reducers/roadsigns";
import visibleFilter from "../reducers/layersVisible";
import initial from "../reducers/initial";
import signsVisibleList from "../reducers/signsVisibleList";
import userPreferences from "../reducers/userPreferences";
import selectedObject from "../reducers/selectedObject";
import activeOrder from "../reducers/activeOrder";
import waypointTemplate from "../reducers/waypointTemplate";
import userAuth from "../reducers/userAuth";
import newRoadTemplate from "../reducers/newRoadTemplate";
import schema from "../reducers/schema";
import activeRoad from "../reducers/activeRoad";
import urlAutocompleteDictionaries from "../reducers/urlAutocompleteDictionaries";


export default combineReducers({
  map,
  roads,
  bridges,
  roadsigns,
  visibleFilter,
  initial,
  dangers,
  signsVisibleList,
  userPreferences,
  selectedObject,
  activeOrder,
  waypointTemplate,
  userAuth,
  newRoadTemplate,
  activeRoad,
  urlAutocompleteDictionaries,
  cities,
  airfields,
  ambulance,
  fap,
  schema
})
