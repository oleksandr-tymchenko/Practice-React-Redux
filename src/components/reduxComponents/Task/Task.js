// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
// import { deleteTask, toggleCompleted } from "redux/actions";
// !Після переходу на slice
// import { deleteTask, toggleCompleted } from 'redux/reducer';

// ! deleteTask, toggleCompleted  буде приходити з operations
import { deleteTask, toggleCompleted } from 'redux/operations';

import { MdClose } from 'react-icons/md';
// import css from "./Task.module.css";
import { Btn, Checkbox, Text, Wrapper } from './Task.styled';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Btn type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
