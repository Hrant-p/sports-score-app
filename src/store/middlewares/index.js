import { all, call } from 'redux-saga/effects';
import sportSaga from '../../reduxSagas/sportSaga';

export default function* middleware() {
  yield all([
    call(sportSaga),
  ]);
}
