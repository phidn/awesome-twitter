import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Get task type
function * getAllPosts(action) {
  try {
    const {data, status} = yield call(() => {
      try {
        return axios({
          url: "/api/v1/post",
          method: "GET"
        });       
      } catch (error) {
        console.log("~ error", error);
      }
    });

    console.log("~ data, status", data, status);
    if(status === 200) {
      // yield put({
      //   type: "GET_ALL_POSTS",
      //   payload: data.data
      // });
    }

  } catch (error) {
    console.log("~ error", error.response?.data);
  }
}

export function * watchGetAllPostsSaga() {
  yield takeLatest("GET_ALL_POSTS_SAGA", getAllPosts);
}


