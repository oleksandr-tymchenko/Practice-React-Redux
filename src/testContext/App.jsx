// import React from 'react';
// import Alert from './Alert';
// import Main from './Main';
// import Context from './Context/Context';
// // import { useState } from 'react';

// const App = () => {
//   return (
//     <Context>
//       <div>
//         <p>alert</p>
//         {/* <Alert />
//       <Main /> */}
//       </div>
//     </Context>
//   );
// };

// export default App;
import Alert from './Alert';
import Context from './Context/Context';
import Main from './Main';

const App = () => {
  return (
    <Context>
      <div className="container pt-2">
        <Alert />
        <Main />
      </div>
    </Context>
  );
};

export default App;
