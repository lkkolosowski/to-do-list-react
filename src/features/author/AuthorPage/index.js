import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { ImageWrapper, Image, Paragraph } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Łukasz Kołosowski"
        body={
          <>
            <ImageWrapper>
              <Image
                rounded
                src={process.env.PUBLIC_URL + "/image.jpg"}
                alt="Łukasz"
                width="300"
              />
            </ImageWrapper>
            <Paragraph>
              Cześć! Nazywam się Łukasz, jestem z Wrocławia.
            </Paragraph>
            <Paragraph>
              Jeżdżę dużo na rowerze. Lubię podziwiać widoczki (góry, lasy,
              morze). Interesuję się programowaniem, muzyką{" "}
              <strong>*</strong>, oraz lubię sobie też czasem na siłkę
              pochodzić.
            </Paragraph>
            <Paragraph>
              <strong>*</strong> Ostatnio lubię suchać: <br />
              Techno⚡Deep House⚡Future House⚡DnB
            </Paragraph>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
