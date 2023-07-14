import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import image from "../../../images/image.jpg";
import { ImageWrapper, Image, Paragraph } from "./styled";

function AuthorPage() {
  return (
    <>
      <Container page author>
        <Header title="O autorze" />
        <Section
          title="Łukasz Kołosowski"
          body={
            <>
              <ImageWrapper>
                <Image avatar src={image} alt="Łukasz" />
              </ImageWrapper>
              <Paragraph>
                Cześć! Nazywam się Łukasz, jestem z Wrocławia.
              </Paragraph>
              <Paragraph>
                Jeżdżę dużo na rowerze. Lubię podziwiać widoczki (góry,
                lasy, morze). Interesuję się programowaniem, muzyką{" "}
                <strong>*</strong> oraz lubię sobie też czasem na siłkę
                pochodzić.
              </Paragraph>
              <Paragraph>
                <strong>*</strong> Ostatnio lubię suchać: <br />
                Techno⚡Deep House⚡Hardstyle⚡Future House⚡DnB
              </Paragraph>
            </>
          }
        />
      </Container>
      <Footer />
    </>
  );
}

export default AuthorPage;
