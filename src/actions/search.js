export const ACT_RECOMMENDATION_SEARCH = "ACT_RECOMMENDATION_SEARCH";
export const actRecommendationSearch = input => { 
    return {
        type: ACT_RECOMMENDATION_SEARCH,
        input 
    };
}

export const ACT_APPLIST_SEARCH = "ACT_APPLIST_SEARCH";
export const actAppListSearch = input => { 
    return {
        type: ACT_APPLIST_SEARCH,
        input 
    };
}

export const dataFilter = (data, input) => {
    let arr = []
    if(input !== null){
        data.forEach(item => {
            if(item['im:name'].label.toLowerCase().includes(input)){
                arr.push(item)
            }
            else if(item.category.attributes.label.toLowerCase().includes(input)){
                arr.push(item)
            }
            else if(item['im:artist'].label.toLowerCase().includes(input)){
                arr.push(item)
            }
            else if(item.summary.label.toLowerCase().includes(input)){
                arr.push(item)
            }
        })  
    }
    return arr
}