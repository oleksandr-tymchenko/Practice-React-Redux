// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
// import { addTask } from "redux/actions";
// !Після переходу на slice
// import { addTask } from 'redux/reducer';
// ? замінюємо на данні з бекенду
import { addTask } from 'redux/operations';
// import { Button } from "components/Button/Button";
import { Button } from '../Button/Button';
// import css from "./TaskForm.module.css";
import { Field, Form } from './TaskForm.styled';

export const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  //   const value = useSelector(state => state.tasks)
  //   console.log(value[value.length - 1].text)

  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
