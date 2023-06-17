import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import { getExampleProducts } from "./getExampleProducts";
import { saveProductsInLocalStorage } from "./productsLocalStorage";
import {
  fetchExampleProducts,
  fetchExampleProductsSuccess,
  fetchExampleProductsError,
  selectProducts,
  selectProduct,
} from "./productListSlice";

function* fetchExampleProductsHandler() {
  try {
    const productEan = yield select(selectProduct);
    const exampleProducts = yield getExampleProducts(productEan);
    yield put(fetchExampleProductsSuccess(exampleProducts));
  } catch (error) {
    yield put(fetchExampleProductsError());
    yield call(
      alert(
        "An error occured. Please check your internet connection or try again later."
      )
    );
  }
}

function* saveProductsInLocalStorageHandler() {
  const products = yield select(selectProducts);
  yield call(saveProductsInLocalStorage, products);
}

export function* productListSaga() {
  yield takeLatest(fetchExampleProducts.type, fetchExampleProductsHandler);
  yield takeEvery("*", saveProductsInLocalStorageHandler);
}
