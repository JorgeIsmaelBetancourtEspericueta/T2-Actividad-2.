import { useEffect, useReducer } from "react";

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

// Definimos el objeto payload directamente cuando se necesite
const authActionLogout = { type: "logout" };

const authActionLogin = (username, nombre) => ({
  type: "login",
  payload: {
    username,
    nombre,
  },
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "MITOKEN1234567890",
        username,
        nombre,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        username: "Dr.FIC",
        nombre: "Frank",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="AlertaInfo_Div">Validando Información...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {state.token ? (
        <div className="AlertSuccess_Div">Autenticado como {state.nombre}</div>
      ) : (
        <div className="AlertDanger_Div">No Autenticado...</div>
      )}
      {state.token ? (
        <button className="Login_Button" onClick={logout}>Logout</button>
      ) : (
        <button className="Logout_Button" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
