export const constructUrl = (arr, queryObj) => {
    let queryString = Object.keys(queryObj)
        .map(x => `${x}=${queryObj[x]}`)
        .join("&");

    return arr.join("/") + (queryString ? `?${queryString}` : "");
};

export const filterListByCountry = (list, country) => {
    try {
        if (list && list.size > 0) {
            const newData = list.filter(obj => {
                if (!obj) return new Map();
                return obj.has(country)
            });
            return newData.map(item => {
                if (!item) return [];
                return item.get(country)
            });
        }

    } catch (e) {
        console.log(e);
    }
};
