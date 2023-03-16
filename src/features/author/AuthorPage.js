import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Łukasz Kołosowski"
        body={
          <>
            <p>Cześć! Nazywam się Łukasz, jestem z Wrocławia.</p>
            <p>
              Jeżdżę dużo na rowerze. Lubię podziwiać widoczki (góry, lasy,
              morze). Interesuję się programowaniem,{" "}
              <strong>muzyką*</strong>, oraz lubię sobie też czasem na
              siłkę pochodzić.
            </p>
            <p><b>*</b> Techno⚡Deep House⚡DnB (...)</p>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
