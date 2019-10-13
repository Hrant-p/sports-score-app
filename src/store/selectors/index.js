const sportsSelector = state => state.get('sportReducer');

export const sportTypeSelector = state => sportsSelector(state).get('sportType');
export const infoByCountrySelector = state => sportsSelector(state).get('infoByCountry');
export const errorSelector = state => sportsSelector(state).get('error');
export const isLoadingSelector = state => sportsSelector(state).get('isLoading');

