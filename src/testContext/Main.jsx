// import React from 'react';
// // import { useContext } from 'react';
// // import { Context } from './App';
// import { useCustomContext } from './Context/Context';

// const Main = () => {
//   //   const context = useContext(Context);
//   const context = useCustomContext();
//   return (
//     <div>
//       <h1>Hello Context</h1>
//       <button onClick={() => context.toggle(!context.toggleValue)}>
//         Open Alert
//       </button>
//     </div>
//   );
// };

// export default Main;
import { useCustomContext } from './Context/Context';
const Main = () => {
  const context = useCustomContext();

  return (
    <div>
      <h1>Hello Context</h1>
      <button
        onClick={() => context.toggle(!context.toggleValue)}
        className="btn btn-success"
      >
        Open Alert
      </button>
    </div>
  );
};

export default Main;
