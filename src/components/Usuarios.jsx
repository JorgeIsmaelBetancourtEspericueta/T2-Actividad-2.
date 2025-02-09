import { useUsuarios } from './hooks/useUsuarios';

export const Usuarios = () => {
  const { usuarios, fnCargaUsuarios } = useUsuarios();

  const renderItem = (usuario) => (
    <tr key={usuario.id}>
      <td>
        <img
          src={usuario.avatar}
          alt={usuario.first_name}
          style={{ width: 50, borderRadius: 100 }}
        />
      </td>
      <td>{usuario.first_name} {usuario.last_name}</td>
      <td>{usuario.email}</td>
    </tr>
  );

  return (
    <div style={{ padding: 20 }}>
      <h3>Usuarios</h3>
      <table className="table" border="1" cellPadding="10" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => renderItem(usuario))
          ) : (
            <tr>
              <td colSpan="3">Cargando usuarios...</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={fnCargaUsuarios} style={{ marginTop: 10 }}>Siguiente</button>
    </div>
  );
};
