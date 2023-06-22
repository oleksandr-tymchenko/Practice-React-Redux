// import { Layout } from "components/Layout/Layout";
// import { AppBar } from "components/AppBar/AppBar";
// import { TaskForm } from "components/TaskForm/TaskForm";
// import { TaskList } from "components/TaskList/TaskList";

import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const AppRedux = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
