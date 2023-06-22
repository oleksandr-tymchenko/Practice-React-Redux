// import css from "./AppBar.module.css";
import { Section, Title, Wrapper } from "./AppBar.styled";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const AppBar = () => {
  return (
    <Wrapper >
      <Section >
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section >
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
