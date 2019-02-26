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

export const ACT_RECOMMENDATION_RATING_FETCH_SUCCESS = "ACT_RECOMMENDATION_RATING_FETCH_SUCCESS";
export const actRecommendationRatingFetchSuccess = data => {
    return {
        type: ACT_RECOMMENDATION_RATING_FETCH_SUCCESS,
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

export const getRating = appList => {
    return appList.map(appData => {
        return actRecommendationRatingFetch(appData.id.attributes['im:id'])
            .then(rating => {
                return {
                    ...appData,
                    rating
                }
            })
            .catch(err => {
                throw err
            })
    })
}

export const actRecommendationFetch = () => {
    return (dispatch) => {
        dispatch(actRecommendationFetchBegin());
        return axios.get("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json")
            .then(res => {
                dispatch(actRecommendationFetchSuccess(res))
                return res
            })
            .then(res => getRating(res.data.feed.entry))
            .then(resPromiseWithRating => Promise.all(resPromiseWithRating))
            .then(resWithRating => {
                dispatch(actRecommendationRatingFetchSuccess(resWithRating))
            })
            .catch(err => {
                dispatch(
                    actRecommendationFetchFail(typeof err === "object" ? err.message : err)
                );
            })
    };
}

const actRecommendationRatingFetch = id => {
    return axios.get(`https://cors-anywhere.herokuapp.com/itunes.apple.com/hk/lookup?id=${id}`)
        .then(res => res.data.results[0].averageUserRating || res.data.results[0].averageUserRatingForCurrentVersion)
        .catch(err => {
            throw err
        })
};