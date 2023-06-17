import Form from "./Form";
import ProductList from "./ProductList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Search from "./Search";
import SearchList from "./Search/SearchList";

function ProductsPage() {
  return (
    <>
      <Container page products>
        <Header title="Food Market" />
        <Section body={<Form />} />
        <Section body={<><Search /><SearchList /></>} />
        <Section body={<ProductList />} />
      </Container>
      <Footer />
    </>
  );
}

export default ProductsPage;
