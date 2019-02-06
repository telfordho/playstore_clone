import axios from 'axios';

export const ACT_APP_LIST_FETCH_BEGIN = "ACT_APP_LIST_FETCH_BEGIN";
export const actAppListFetchBegin = () => { 
    return {
        type: ACT_APP_LIST_FETCH_BEGIN 
    };
}

export const ACT_APP_LIST_FETCH_SUCCESS = "ACT_APP_LIST_FETCH_SUCCESS";
export const actAppListFetchSuccess = data => { 
    return {
        type: ACT_APP_LIST_FETCH_SUCCESS, 
        data,
    }
};

export const ACT_APP_LIST_FETCH_FAIL = "ACT_APP_LIST_FETCH_FAIL";
export const actAppListFetchFail = reason => { 
    return {
        type: ACT_APP_LIST_FETCH_FAIL, 
        reason 
    };
};

export const actAppListFetch = () => {
    return (dispatch) => {
        dispatch(actAppListFetchBegin());
        return axios.get("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json")
            .then(res => {
                dispatch(actAppListFetchSuccess(res))
            })
            .catch(err => {
                dispatch(
                    actAppListFetchFail(typeof err === "object" ? err.message : err)
                );
            })
    };
}