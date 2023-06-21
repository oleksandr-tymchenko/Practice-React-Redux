import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ToDo from './ToDo';

const ToDoDetails = () => {
  const location=useLocation()
  const { id } = useParams();
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    const localToDo = localStorage.getItem('todo');
    if (localToDo) setTodoList(JSON.parse(localToDo));
  }, []);
  return <>
  <Suspense>
  <Link to={location.state} >Go back</Link>
    {todoList?.map(
        todo => 
        todo.id === id && <ToDo key={todo.id}todo={todo}/>)}

  </Suspense>
              
  </>
};

export default ToDoDetails;
