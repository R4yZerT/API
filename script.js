const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_agent");
    let valor = inputTexto.value;
    peticion(valor);
}

const peticion = (Nombre) => {
    const baseURL = 'https://valorant-api.com';
    const endpoint = '/v1/agents';
    const url = `${baseURL}${endpoint}`;

    axios.get(url)
    .then(res => {
        const agentes = res.data.data; // Accedemos al array de agentes
        const agenteEncontrado = agentes.find(agente => agente.displayName.toLowerCase() === Nombre.toLowerCase());
        
        if (agenteEncontrado) {
            printData(agenteEncontrado);
        } else {
            console.log("No se encontró el agente con ese nombre");
        }
    })
    .catch(err => console.log(err));
}

const printData = (data) => {
    let respuesta = document.getElementById("show-info");
    respuesta.innerHTML = `
    <h1>Name: ${data['displayName']}</h1>
    <h2>Description: ${data['description']}</h2>
    <h1>Role: ${data['role']['displayName']} </h1>
    <h2>Role Description: ${data['role']['description']} </h2>
    <img src="${data['displayIcon']}" alt="${data['displayName']}" />
    `;
}
