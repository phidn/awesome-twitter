import { all } from "redux-saga/effects";
import * as App from "./AppSaga";

export function * rootSaga() {
  yield all([
    App.watchGetAllPostsSaga()
  ]);
}
