import {SET_VISIBLE_SIGNS_LIST} from '../constants/SignsVisibleListConstants'

const initialState = {
    signsVisibleList: [
        "1", "1.1", "1.2", "1.3.1", "1.3.2", "1.4.1", "1.4.2", "1.4.3", "1.4.4", "1.4.5", "1.4.6", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10", "1.11.1", "1.11.2", "1.12.1", "1.12.2", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20.1", "1.20.2", "1.20.3", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "1.27", "1.28", "1.29", "1.30", "1.31", "1.32", "1.33", "1.34.1", "1.34.2", "1.34.3", "1.35",
        "2", "2.1", "2.2", "2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7", "2.4", "2.5", "2.6", "2.7",
        "3", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17.1", "3.17.2", "3.17.3", "3.18.1", "3.18.2", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "3.32", "3.33",
        "4", "4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.1.6", "4.2.1", "4.2.2", "4.2.3", "4.3", "4.4.1", "4.4.2", "4.5.1", "4.5.2", "4.5.3", "4.5.4", "4.5.5", "4.5.6", "4.5.7", "4.6", "4.7", "4.8.1", "4.8.2", "4.8.3",
        "5", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7.1", "5.7.2", "5.8", "5.9", "5.10", "5.11.1", "5.11.2", "5.12.1", "5.12.2", "5.13.1", "5.13.2", "5.13.3", "5.13.4", "5.14", "5.14.1", "5.14.2", "5.14.3", "5.15.1", "5.15.2", "5.15.3", "5.15.4", "5.15.5", "5.15.6", "5.15.7", "5.15.8", "5.16", "5.17", "5.18", "5.19.1", "5.19.2", "5.20", "5.21", "5.22", "5.23.1", "5.23.2", "5.24.1", "5.24.2", "5.25", "5.26", "5.27", "5.28", "5.29", "5.30", "5.31", "5.32", "5.33", "5.34", "5.35", "5.36", "5.37", "5.38",
        "6", "6.1", "6.2", "6.3.1", "6.3.2", "6.4", "6.5", "6.6", "6.7", "6.8.1", "6.8.2", "6.8.3", "6.9.1", "6.9.2", "6.9.3", "6.10.1", "6.10.2", "6.11", "6.12", "6.13", "6.14.1", "6.14.2", "6.15.1", "6.15.2", "6.15.3", "6.16", "6.17", "6.18.1", "6.18.2", "6.18.3", "6.19.1", "6.19.2",
        "7", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "7.10", "7.11", "7.12", "7.13", "7.14", "7.14.1", "7.15", "7.16", "7.17", "7.18", "7.19", "7.20", "7.21",
        "8", "8.1.1", "8.1.2", "8.1.3", "8.1.4", "8.2.1", "8.2.2", "8.2.3", "8.2.4", "8.2.5", "8.2.6", "8.3.1", "8.3.2", "8.3.3", "8.4.1", "8.4.2", "8.4.3", "8.4.3.1", "8.4.4", "8.4.5", "8.4.6", "8.4.7", "8.4.8", "8.4.9", "8.4.10", "8.4.11", "8.4.12", "8.4.13", "8.4.14", "8.4.15", "8.5.1", "8.5.2", "8.5.3", "8.5.4", "8.5.5", "8.5.6", "8.5.7", "8.6.1", "8.6.2", "8.6.3", "8.6.4", "8.6.5", "8.6.6", "8.6.7", "8.6.8", "8.6.9", "8.7", "8.8", "8.9", "8.9.1", "8.9.2", "8.10", "8.11", "8.12", "8.13", "8.14", "8.15", "8.16", "8.17", "8.18", "8.19", "8.20.1", "8.20.2", "8.21.1", "8.21.2", "8.21.3", "8.22.1", "8.22.2", "8.22.3", "8.23", "8.24", "8.25"
    ],
};

export default function signsVisibleList(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBLE_SIGNS_LIST:
            return {
                ...state,
                signsVisibleList: action.payload
            };
        default:
            return state;
    }
}
