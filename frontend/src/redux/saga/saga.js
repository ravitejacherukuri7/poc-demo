import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  REQUEST_ROUTE,
  POST_ROUTE,
  routeLoadingAC,
  routeSuccessAC,
  routeFailAC,
  itemsRequestAC,
} from "../action/RouteAction";

export default function* root() {
  yield all([fork(sagaWatcherGet), fork(sagaWatcherPost)]);
}

function* sagaWatcherGet() {
  yield takeEvery(REQUEST_ROUTE, sagaWorkerGet);
}

function* sagaWorkerGet() {
  try {
    yield put(routeLoadingAC());
    const payload = yield call(axios.get, `http://localhost:3005/api/route`);
    yield put(routeSuccessAC(payload.data));
  } catch (e) {
    yield put(routeFailAC());
  }
}

function* sagaWatcherPost() {
  yield takeEvery(POST_ROUTE, sagaWorkerPost);
}

// function* sagaWorkerPost({ payload }) {
//   const descripton = payload.description;
//   console.log(descripton);
//   try {
//     const res = yield call(
//       axios.post,
//       `http://localhost:3005/api/route`,
//       descripton
//     );
//     console.log(res.status, "res");
//   } catch (e) {
//     yield put(routeFailAC());
//   }
// }

function* sagaWorkerPost(suggestion) {
  const description = suggestion.payload.description.toString();
  console.log(description);
  try {
    const payload = yield call(axios.post, `http://localhost:3005/api/route`, {
      description,
    });
    yield put(itemsRequestAC());
    console.log(payload.data);
  } catch (e) {
    yield put(routeFailAC());
  }
}
