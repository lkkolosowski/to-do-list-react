import Barcode from "react-barcode";

const ProductBarcode = ({ value }) => {
  return (
    <Barcode
      width={1}
      height={40}
      displayValue={false}
      value={value}
      margin={0}
    />
  );
};

export default ProductBarcode;
