export const constructUrl = (arr, queryObj) => {
    let queryString = Object.keys(queryObj)
        .map(x => `${x}=${queryObj[x]}`)
        .join("&");

    return arr.join("/") + (queryString ? `?${queryString}` : "");
};

export const filterListByCountry = (list, country) => {
    const newData = list.filter(obj => obj.has(country));
    return newData.map(item => item.get(country));
};
