"use strict";
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
//   });
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, descuento, cantDescuento, stock) {
        if (descuento === void 0) { descuento = false; }
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.cantDescuento = cantDescuento;
        this.stock = stock;
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.stock = stock;
    }
    Producto.validarDatos = function (nombre, precio, descuento, stock, descuentoCantidad) {
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
    };
    return Producto;
}());
function clickAgregarProducto() {
    var nombre = document.getElementById("txtNombre").value;
    var precio = document.getElementById("txtPrecio").value;
    var descuentoChk = document.getElementById("chkDscto").checked;
    var descuentoCantidad = document.getElementById("chkDscto").value;
    var stock = document.getElementById("txtStock").value;
    console.log("Prueba");
    if (Producto.validarDatos(nombre, precio, descuentoChk, stock, descuentoCantidad)) {
        var producto = new Producto(nombre, parseInt(precio), descuentoChk, parseInt(descuentoCantidad), parseInt(stock));
        //Agrega producto
    }
}
