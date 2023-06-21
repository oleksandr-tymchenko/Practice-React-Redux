import React from 'react';
// import { useContext } from 'react';
// import { Context } from '../App';
import { useCustomContext } from 'testContext/Context/Context';

const Alert2 = () => {
  //   const context = useContext(Context);

  const context = useCustomContext();
  //   console.log(context);

  return context.toggleValue && <div>Mesageeeee</div>;
};

export default Alert2;
