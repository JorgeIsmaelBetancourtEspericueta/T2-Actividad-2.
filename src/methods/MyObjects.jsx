function MyObjects() {

    const persona = {
      nombre: 'Jorge',
      edad: 21,
      direccion: {
          pais: 'Mexico',
          estado: 'Nayarit',
          ciudad: 'Tepic',
          direccion: 'Siberia 114'
      }
    }
    console.log("JSON Person:",JSON.stringify(persona,null,2))
    return (
      <>
        <div>
          {/* <h1>Programa de Objetos Literales</h1> */}
          <h3>Objetos Literales</h3>
          <code>
              <pre>
                  {JSON.stringify(persona,null,2)}
              </pre>
          </code>
        </div>
      </>
    );
  }
  export default MyObjects;
  