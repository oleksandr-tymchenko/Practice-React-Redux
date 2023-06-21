// import React, { Component } from 'react';
import { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import FormToDo from '../FormToDo/FormToDo';

// import todo from '../../todo.json';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import FormFilteredTodo from 'components/FormToDo/FormFilteredTodo';
import { useSearchParams } from 'react-router-dom';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');
  const [filteredTodoList, setFilteredTodoList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()

  

  const filterText = searchParams.get('filter') ??'';

  useEffect(() => {
    const localToDo = localStorage.getItem('todo');
    if (localToDo) setTodoList(JSON.parse(localToDo));
  }, []);

  useEffect(() => {
    //   !не виконуємо дії при перщому рендері
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

 useEffect(() => {
  todoList && setFilteredTodoList(todoList.filter((todo)=> todo.title.toLowerCase().includes(filterText.trim().toLowerCase()))
  )
 }, [filterText, searchParams, todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = id => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
    toast.error('Delete successfully');
    
  };

  const addToDo = value => {
    if(!value)  {
      toast.error('empty field')
      return;
    };;
    setTodoList(prev => {
      return [
        ...prev,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });
    toast.success('Create successfully');

   
  };
  return (
    <>
      <h1>My To-Do list</h1>
   <FormFilteredTodo setSearchParams={setSearchParams} filterText={filterText} />
      <FormToDo addToDo={addToDo} />
      {filteredTodoList && (
        <ul className="list-group list-group-flush">
          {filteredTodoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;

