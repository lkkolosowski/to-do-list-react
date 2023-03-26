import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import FetchExampleTasksButton from "./FetchExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Search from "./Search";

function TasksPage() {
  return (
    <>
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraHeaderContent={<FetchExampleTasksButton />}
        />
        <Section title="Wyszukiwarka" body={<Search />} />
        <Section
          title="Co masz do zrobienia?"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
      <Footer />
    </>
  );
}

export default TasksPage;
