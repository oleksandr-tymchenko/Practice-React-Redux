// import { Button } from "components/Button/Button";
// import css from "./StatusFilter.module.css";


import { Button } from "../Button/Button";
import { Wrapper } from "./StatusFilter.styled";
// Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
import { getStatusFilter } from "redux/selectors";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/actions";
// Імпортуємо генератор екшену



export const StatusFilter = () => {
      // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
// Отримуємо значення фільтра із стану Redux
const filter = useSelector(getStatusFilter);

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper >
      <Button selected={filter === statusFilters.all}
      onClick={() => handleFilterChange(statusFilters.all)}
      >All</Button>
      <Button selected={filter === statusFilters.active}
      onClick={() => handleFilterChange(statusFilters.active)}
      >Active</Button>
      <Button selected={filter === statusFilters.completed}
      onClick={() => handleFilterChange(statusFilters.completed)}
      >Completed</Button>
    </Wrapper>
  );
};