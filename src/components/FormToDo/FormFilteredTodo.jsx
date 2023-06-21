// import { Component, useState } from 'react';

import React from 'react'

const FormFilteredToDo = ({setSearchParams, filterText}) => {
    
//   const [filter, setFilter] = useState('');
  const handleChange = ({ target }) => {
    setSearchParams({filter: target.value})
  };
  return (
          <form >
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Filter:
          </label>
          <input
     
            type="text"
            className="form-control"
            id="exampleInput"
            onChange={handleChange}
            value={filterText}
          />
        </div>
       
      </form>
  )
}

export default FormFilteredToDo



// class FormFilteredTodo extends Component {
//   state = {
//     todo: '',
//   };
//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

  
//   render() {
//     return (
//       <form >
//         <div className="mb-3">
//           <label htmlFor="exampleInput" className="form-label">
//             Filter:
//           </label>
//           <input
//             name="todo"
//             type="text"
//             className="form-control"
//             id="exampleInput"
//             onChange={this.handleChange}
//             // value={this.state.todo}
//           />
//         </div>
       
//       </form>
//     );
//   }
// }

// export default FormFilteredTodo;
