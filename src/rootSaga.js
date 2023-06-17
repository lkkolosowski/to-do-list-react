import { all } from "redux-saga/effects";
import { productListSaga } from "./features/products/productListSaga";

export default function* rootSaga() {
  yield all([productListSaga()]);
}
