import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import MyFunctions from "./fuctions/MyFunctions.jsx";
//import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromisesAll';
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/*<MyPromises/> */}
    <MyPromisesAll/>
  </StrictMode>,
);

