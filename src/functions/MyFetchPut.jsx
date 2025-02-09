
function MyFetchPut(){

    //Declaramos el objeto a actualizar
    let usuarioActualizado = {
        nombre: "Aitana",
        edad: 26
    };

    //API PUT DE USUARIO
    fetch("https://reqres.in/api/users/2",{
        method: "PUT",
        body: JSON.stringify(usuarioActualizado), //datos a enviar
        headers: {
            "Content-Type" : "application/json",
        },
    })
     .then((resp) => resp.json())
     .then(console.log)
     .catch((error) => {
        console.log("Error en la petición API PUT");
        console.log(error);
     })

    return(
        <>
            <div>
                <h1>Programa para Fetch API PUT</h1>
            </div>
        </>
    );
}

export default MyFetchPut;
