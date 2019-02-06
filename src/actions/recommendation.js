import axios from 'axios';

export const ACT_RECOMMENDATION_FETCH_BEGIN = "ACT_RECOMMENDATION_FETCH_BEGIN";
export const actRecommendationFetchBegin = () => { 
    return {
        type: ACT_RECOMMENDATION_FETCH_BEGIN 
    };
}

export const ACT_RECOMMENDATION_FETCH_SUCCESS = "ACT_RECOMMENDATION_FETCH_SUCCESS";
export const actRecommendationFetchSuccess = data => { 
    return {
        type: ACT_RECOMMENDATION_FETCH_SUCCESS, 
        data,
    }
};

export const ACT_RECOMMENDATION_FETCH_FAIL = "ACT_RECOMMENDATION_FETCH_FAIL";
export const actRecommendationFetchFail = reason => { 
    return {
        type: ACT_RECOMMENDATION_FETCH_FAIL, 
        reason 
    };
};

export const actRecommendationFetch = () => {
    return (dispatch) => {
        dispatch(actRecommendationFetchBegin());
        return axios.get("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json")
            .then(res => {
                dispatch(actRecommendationFetchSuccess(res))
            })
            .catch(err => {
                dispatch(
                    actRecommendationFetchFail(typeof err === "object" ? err.message : err)
                );
            })
    };
}