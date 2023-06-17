import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./features/products/productListSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;