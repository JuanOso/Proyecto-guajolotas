

class CarritoCompras {
    constructor() {
        this.momentaneoP = []
        this.productos = []
    }

    //metodo para agregar el producto principal a la preseleccion del carrito
    momentaneoPrincipal(actual) {

        this.momentaneoP = [actual]
        this.momentaneoP[0].cantidad = 1
        this.momentaneoTotal()
    }

    //metodo para agregar el producto complementario a la preseleccion del carrito
    momentaneoSecundario(actual, accion) {
        //condicionales para saber cuando se chequea y se deschequea y asi saber cuando cambiar, agregar y borrar
        if (accion === 'borra') {
            this.momentaneoP.pop()
        }
        else if (this.momentaneoP[1]) {
            this.momentaneoP[1] = actual
            this.momentaneoP[1].cantidad = 1
        }
        else if (accion === 'agrega') {
            this.momentaneoP.push(actual)
            this.momentaneoP[1].cantidad = 1
        }
        //llamamos al metodo que hace la suma total momentanea
        this.momentaneoTotal()
    }

    //metodo para sumar la seleccion momentanea
    momentaneoTotal() {
        let precioSecundario = 0
        if (this.momentaneoP[1]) {
            precioSecundario = this.momentaneoP[1].precio
        }
        let total = (parseInt(precioSecundario) + (parseInt(this.momentaneoP[0].precio) * this.momentaneoP[0].cantidad));
        sessionStorage.setItem('preseleccion', total)
    }

    //metodo para agregar el nuevo producto al carrito
    nuevo_producto() {
        let producto_nuevo = this.momentaneoP
        for (let i = 0; i < producto_nuevo.length; i++) {
            if (this.productos[0] === undefined) {
                console.log('es undefined');
                this.productos = producto_nuevo
                break
            } else {
                /*  if (this.productos.indexOf(producto_nuevo[i]) === -1) {
                     this.productos.push(producto_nuevo[i])
                 } else {
                     let ac = this.productos.indexOf(producto_nuevo[i])
                    this.productos[ac].cantidad += producto_nuevo[i].cantidad */

                let contador = this.productos.length
                for (let j = 0; j < contador; j++) {
                    console.log(this.productos[j].id, producto_nuevo[i].id, 'fuera del if');
                    if (this.productos[j].id === producto_nuevo[i].id) {
                        this.productos[j].cantidad += producto_nuevo[i].cantidad
                        break
                    }

                    else if (this.productos[j] !== producto_nuevo[i] && this.productos[j + 1] === undefined) {
                        this.productos.push(producto_nuevo[i])
                        contador++
                        break
                    }

                }
            }

        }
        localStorage.setItem('productostotales', JSON.stringify(this.productos))
        console.log('log carrito ', this.productos);
        return (this.productos)


    }

    precio_total() {
        let total_cuenta = 0
        let listaCarrito = []
        this.productos.forEach(function (data_producto) {
            total_cuenta = parseInt(total_cuenta) + parseInt(data_producto.precio * data_producto.cantidad)
            listaCarrito.push(data_producto.nombre)
        });
        return total_cuenta
    }

    borrar_producto(id) {
        for (const i of this.productos) {
            if (i.id === id) {
                let posicion = this.productos.indexOf(i)
                this.productos.splice(posicion, 1)
            }
        }

        localStorage.setItem('productostotales', JSON.stringify(this.productos))
        return this.productos
    }

    cambiar_cantidades(operacion, idP) {
        for (const i of this.productos) {
            if (i.id === idP && operacion === 'resta') {
                i.cantidad--
                if (i.cantidad <= 0) {
                    this.borrar_producto(i.id)
                }
            } else if (i.id === idP && operacion === 'suma') {
                i.cantidad++
            }
        }
        localStorage.setItem('productostotales', JSON.stringify(this.productos))
        return this.productos
    }

}

export const Carrito = new CarritoCompras()