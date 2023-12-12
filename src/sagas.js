// sagas.js
import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { ActionTypes, makeMove, resetGame } from "./actions";

function* watchResetGame() {
  yield takeLeading(ActionTypes.RESET_GAME, handleResetGame);
}

function* handleResetGame() {
  yield put(resetGame());
}

function * watchClicks() {
  yield takeEvery(ActionTypes.MAKE_MOVE, handleClick);
}

function* handleClick() {
  yield put(makeMove());
}

export default function* rootSaga() {
  yield watchResetGame();
  yield watchClicks();
}