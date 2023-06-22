import { statusFilters } from "./constants";

// Імпортуємо функцію композиції редюсерів
import { combineReducers } from "redux";


const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

// export const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case "tasks/addTask": 
//       // Потрібно повернути новий об'єкт стану
//       return {
//         // в якому є всі дані існуючого стану
//         ...state,
//         // та новий масив задач
//         tasks: [
//           // в якому є всі існуючі завдання
//           ...state.tasks,
//           // та об'єкт нового завдання
//           action.payload,
//         ],
//       };
//       case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//       case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//       case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
    
//     default:
//       // Кожен редюсер отримує всі екшени, відправлені в стор.
//       // Якщо редюсер не повинен обробляти якийсь тип екшену,
//       // необхідно повернути наявний стан без змін.
//       return state;
//   }
// };

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];
  
  // Відповідає лише за оновлення властивості tasks
  // Тепер значенням параметра state буде масив завдань
  const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
      case "tasks/addTask":
        return [...state, action.payload];
      case "tasks/deleteTask":
        return state.filter(task => task.id !== action.payload);
      case "tasks/toggleCompleted":
        return state.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        });
      default:
        return state;
    }
  };
  
  const filtersInitialState = {
    status: statusFilters.all,
  };
  
  // Відповідає лише за оновлення властивості filters
  // Тепер значенням параметра state буде об'єкт фільтрів
  const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
      case "filters/setStatusFilter":
        return {
          ...state,
          status: action.payload,
        };
      default:
        return state;
    }
  };

//   // Код редюсерів tasksReducer та filtersReducer

// export const rootReducer = (state = {}, action) => {
//     // Повертаємо об'єкт стану
//     return {
//       // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//       tasks: tasksReducer(state.tasks, action),
//       filters: filtersReducer(state.filters, action),
//     };
//   };

// Код альтерн редюсерів tasksReducer та filtersReducer
export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
  });