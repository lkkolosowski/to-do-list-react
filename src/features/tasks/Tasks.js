import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import FetchExampleTasksButton from "./FetchExampleTasksButton";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section
        title="Co masz do zrobienia?"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
