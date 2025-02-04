import reqRespApi from "../api/reqRes";
import { useEffect, useRef, useState } from "react";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]); // El estado va dentro del componente

  const RefPage = useRef(0);

  useEffect(() => {
    fnCargaUsuarios();
  }, []);

  const fnCargaUsuarios = async () => {
    const response = await reqRespApi
      .get('/users', {
        params: {
          page: RefPage.current,
        },
      })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          setUsuarios(resp.data.data); // Guardamos la lista de usuarios en el estado
          RefPage.current++;
        }else{
            alert('No hay más registros')
        }
      })
      .catch((err) => console.log(err));
  };

  const renderItem = (usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ width: 50, borderRadius: 100 }}
          />
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => renderItem(usuario))}{" "}
          {/* Renderizamos la lista de usuarios */}
        </tbody>
      </table>
      <button onClick={fnCargaUsuarios}>Siguiente</button>
    </>
  );
};
