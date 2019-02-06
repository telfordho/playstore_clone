import {
    ACT_APP_LIST_FETCH_BEGIN,
    ACT_APP_LIST_FETCH_SUCCESS,
    ACT_APP_LIST_FETCH_FAIL
} from "../actions/list";

const initialState = {
    data: [],
    status: "uninitialised",
};

export default (state = initialState, action) => {
    switch (action.type) {

        case ACT_APP_LIST_FETCH_BEGIN:
            return { data: [], status: "fetching" };

        case ACT_APP_LIST_FETCH_SUCCESS:
            return {
                data: action.data.data.feed.entry,
                status: "viewing",
            };

        case ACT_APP_LIST_FETCH_FAIL:
            return { data: [], status: "failed", failReason: action.reason };

        default:
            return state;
        }
    }
