function MyPromisesRace() {
  function fcnSumarLento(numero) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(numero + 1);
      }, 800);
    });
  }
  let fcnSumarRapido = (numero) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("Error en la promesa de la función Sumar Rápido");
      }, 1000);
    });
  };

  Promise.race([fcnSumarLento(5), fcnSumarRapido(10)]).then((respuesta) => {
    console.log("Respuestas: ", respuesta);
  }).catch(error =>{
    console.log("Error en la respuesta de la promesa: ", error)
  });

  return (
    <>
      <div>
        <h1>Programa de Funciones con Promesas Race</h1>
      </div>
    </>
  );
}

export default MyPromisesRace;
