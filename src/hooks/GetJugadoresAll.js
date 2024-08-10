export const GetJugadoresAll = async() => {
    const variableEnt = import.meta.env.VITE_BACKEND_URL

    const url = `${variableEnt}/listarjugadores`
    const resp = await fetch(url);
    const data = await resp.json();

    const jugadores = data.map( jug => ({
        ide_jug: jug.ide_jug,
        nom_jug: jug.nom_jug,
        total: jug.puntaje
    }));

  return jugadores;
}
