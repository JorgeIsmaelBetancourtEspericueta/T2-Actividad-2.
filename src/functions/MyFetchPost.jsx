function MyFetchPost() {
  //Declaramos al objeto
  let usuario = {
    nombre: "Aitana",
    edad: 25,
  };

  //API POST DE USUARIO
  fetch("https://reqres.in/", {
    method: "POST",
    body: JSON.stringify(usuario), //data a enviar
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(console.log)
    .catch((error) => {
      console.log("Error en la peticion API POST");
      console.log(error);
    });

  return (
    <>
      <div>
        <h1>Programa para FETCH API POST</h1>
      </div>
    </>
  );
}

export default MyFetchPost;
