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

export const ACT_APP_LIST_RATING_FETCH_SUCCESS = "ACT_APP_LIST_RATING_FETCH_SUCCESS";
export const actAppListRatingFetchSuccess = data => {
    return {
        type: ACT_APP_LIST_RATING_FETCH_SUCCESS,
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

export const getRating = appList => {
    return appList.map(appData => {
        return actAppListRatingFetch(appData.id.attributes['im:id'])
            .then(rating => {
                return {
                    ...appData,
                    rating: rating 
                }
            })
            .catch(err => {
                throw new err()
            })
    })
}

export const actAppListFetch = () => {
    return (dispatch) => {
        dispatch(actAppListFetchBegin());
        return axios.get("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json")
            .then(res => {
                dispatch(actAppListFetchSuccess(res))
                return res
            })
            .then(res => getRating(res.data.feed.entry))
            .then(resPromiseWithRating => Promise.all(resPromiseWithRating))
            .then(resWithRating => {
                dispatch(actAppListRatingFetchSuccess(resWithRating))
            })
            .catch(err => {
                dispatch(
                    actAppListFetchFail(typeof err === "object" ? err.message : err)
                );
            })
    };
}

const actAppListRatingFetch = id => {
    return axios.get(`https://itunes.apple.com/hk/lookup?id=${id}`, {
        headers: { 
            'content-type': 'application/x-www-form-urlencoded' ,
        },
        proxy: {
            host: 'localhost',
            port: 3000
        }
    })
        .then(res => res.data.results[0].averageUserRating)
        .catch(err => {
            console.log(err)
            throw new err()
        })
};