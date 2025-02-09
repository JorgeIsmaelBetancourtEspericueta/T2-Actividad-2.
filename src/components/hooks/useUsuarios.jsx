import { useState, useEffect, useRef } from "react";
import reqRespApi from "../../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const RefPage = useRef(0); // Empezamos desde la página 1

  const fnCargaUsuarios = async () => {
    try {
      const response = await reqRespApi.get("/users", {
        params: { page: RefPage.current },
      });

      if (response.data.data.length > 0) {
        setUsuarios(response.data.data);
        RefPage.current++; // Incrementa la página solo si hay datos
      } else {
        alert("No hay más registros");
      }
    } catch (err) {
      console.error("Error al cargar usuarios:", err);
    }
  };

  useEffect(() => {
    fnCargaUsuarios(); // Carga la primera página al montar el componente
  }, []);

  return { usuarios, fnCargaUsuarios };
};
