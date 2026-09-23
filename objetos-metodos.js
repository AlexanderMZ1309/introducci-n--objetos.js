// ejemplo de objeto con metodos 

// datos de un producto
const producto = {
    id:"p-07",
    nombre:"agua de jamaica",
    precio: 15,
    categoria: "bebida",
    diponible: true,

    // metodos
    resumen() {
        return this.nombre + " - $" + this.precio + " (" + this.categoria + ")";
    },
    estaDisponible() {
        return this.diponible;
    }

};

// paso uno mostrando el objeto
console.log("---objeto completo---")
console.log(producto);

