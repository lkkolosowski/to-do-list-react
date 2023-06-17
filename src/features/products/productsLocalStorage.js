const localStorageProductsKey = "taskssss";

export const saveProductsInLocalStorage = (products) =>
  localStorage.setItem(localStorageProductsKey, JSON.stringify(products));

export const getProductsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageProductsKey)) || [];
