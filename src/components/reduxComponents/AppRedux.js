// import { Layout } from "components/Layout/Layout";
// import { AppBar } from "components/AppBar/AppBar";
// import { TaskForm } from "components/TaskForm/TaskForm";
// import { TaskList } from "components/TaskList/TaskList";

import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { fetchTasks } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';

export const AppRedux = () => {
  // ? ДОповн для роботи з бекендом
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
