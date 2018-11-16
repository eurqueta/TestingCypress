export default class GeneradorNombres {

    generarNombre () {
        let r = Math.random().toString(36).substring(7);

        return `nombre ${r}`
    }
}