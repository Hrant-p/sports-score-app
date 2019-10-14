const sportsSelector = state => state.get('sportReducer');

export const sportTypeSelector = state => sportsSelector(state).get('currentPageSport');
export const footballSelector = state => sportsSelector(state).get('football');
export const basketballSelector = state => sportsSelector(state).get('basketball');
export const rugbySelector = state => sportsSelector(state).get('rugby');
export const valleyballSelector = state => sportsSelector(state).get('valleyball');
export const errorSelector = state => sportsSelector(state).get('error');
export const isLoadingSelector = state => sportsSelector(state).get('isLoading');

