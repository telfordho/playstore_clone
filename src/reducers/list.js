import {
    ACT_APP_LIST_FETCH_BEGIN,
    ACT_APP_LIST_FETCH_SUCCESS,
    ACT_APP_LIST_RATING_FETCH_SUCCESS,
    ACT_APP_LIST_FETCH_FAIL
} from "../actions/list";

import { ACT_APPLIST_SEARCH, dataFilter } from "../actions/search"

const initialState = {
    data: [],
    search: [],
    status: "uninitialised",
};

export default (state = initialState, action) => {
    switch (action.type) {

        case ACT_APP_LIST_FETCH_BEGIN:
            return { data: [], search:[], status: "fetching" };

        case ACT_APP_LIST_FETCH_SUCCESS:
            return {
                data: action.data.data.feed.entry,
                search: action.data.data.feed.entry,
                status: "fetched",
            };
        case ACT_APP_LIST_RATING_FETCH_SUCCESS:
            return {
                data: action.data,
                search: action.data,
                status: "success",
            };
        case ACT_APP_LIST_FETCH_FAIL:
            return { data: [], search: [], status: "failed", failReason: action.reason };

        case ACT_APPLIST_SEARCH:
            return {
                data: state.data,
                search: dataFilter(state.data, action.input),
                status: "searching",
            }

        default:
            return state;
        }
    }
