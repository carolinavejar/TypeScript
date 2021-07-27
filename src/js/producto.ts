interface ProductoI {
    nombre: string;
    precio: number;
    descuento: boolean;
    cantDescuento: number;
    stock: number
}

class Producto implements ProductoI {
    
    constructor(public nombre:string, public precio: number, public descuento: boolean = false, public cantDescuento:number, public stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.stock = stock
    }
    static validarDatos(nombre: any, precio: any | number, descuento: boolean, stock: any, descuentoCantidad:any): boolean {
        if (!parseInt(precio) || precio <= 0) {
            return false;
        }
        if (!parseInt(descuentoCantidad) || descuentoCantidad <= 0) {
            return false;
        }
        if (!parseInt(stock) || stock <= 0) {
            return false;
        }
        if (!parseInt(precio) || precio <= 0) {
            return false;
        }
        if (nombre.length == 0) {
            return false;
        }
        return true;
    }
}

function clickAgregarProducto(): void {
    let nombre = ( < HTMLInputElement > document.getElementById("txtNombre")).value;
    let precio = ( < HTMLInputElement > document.getElementById("txtPrecio")).value;
    let descuentoChk = ( < HTMLInputElement > document.getElementById("chkDscto")).checked;
    let descuentoCantidad = ( < HTMLInputElement > document.getElementById("chkDscto")).value;
    let stock = ( < HTMLInputElement > document.getElementById("txtStock")).value;
    console.log("Prueba");

    if(Producto.validarDatos(nombre, precio, descuentoChk, stock, descuentoCantidad)) {
        let producto = new Producto(nombre, parseInt(precio), descuentoChk, parseInt(descuentoCantidad), parseInt(stock));

        //Agrega producto
    }

}