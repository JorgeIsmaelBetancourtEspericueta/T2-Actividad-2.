import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from './App.jsx'
//import MyFunctions from "./fuctions/MyFunctions.jsx";
//import MyPromises from './functions/MyPromises.jsx';
//import MyPromisesAll from './functions/MyPromisesAll';
//import MyPromisesRace from './functions/MyPromisesRace';
//import MyFetchAPIs from './functions/MyFetchAPIs';
//import MyFetchPost from './functions/MyFetchPost';
//import MyFetchPut from './functions/MyFetchPut';
//import MyFetchBlob from './functions/MyFetchBlob';
//import MyDataTypes from "./methods/MyDataTypes";
//import MyObjects from "./methods/MyObjects";
//import { Contador } from "./components/Contador";
//import { ContadorHook } from "./components/ContadorHook";
//import { Login } from "./components/Login";
// import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./components/Formularios";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/*<MyPromises/> */}
    {/*<MyPromisesAll/>*/}
    {/*<MyPromisesRace/>*/}
    {/*<MyFetchAPIs/>*/}
    {/*<MyFetchPost/>*/}
    {/*<MyFetchPut/>*/}
    {/*<MyFetchBlob/>*/}
    {/* {<MyDataTypes/>} */}
    {/* {<MyObjects/>} */}
    {/* <Contador/> */}
    {/* {<ContadorHook/>} */}
    {/* {<Login/>} */}
    {/* {<Usuarios/>} */}
    <Formularios/>
  </StrictMode>
);
