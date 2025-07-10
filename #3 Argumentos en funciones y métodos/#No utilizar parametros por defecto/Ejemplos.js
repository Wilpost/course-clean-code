// Ejemplo 1: Función con parámetros por defecto

function procesarPedido(clienteId, productos = [], aplicarDescuento = true) {
  if (aplicarDescuento) {
    console.log('Descuento aplicado')
  }
  console.log(
    `Procesando pedido de cliente ${clienteId} con productos: ${productos.join(
      ', '
    )}`
  )
}

// ⚠️ Problemas:
// - productos = [] puede llevar a malentendidos si la función necesita productos obligatoriamente.
// - aplicarDescuento = true supone lógica que no se debería aplicar siempre.
// - No hay separación de responsabilidades ni encapsulamiento de la lógica del pedido.

// ✨ Versión refactorizada sin valores por defecto

class Pedido {
  constructor(clienteId, productos, aplicarDescuento) {
    if (!clienteId || !Array.isArray(productos)) {
      throw new Error('Datos inválidos para el pedido')
    }

    this.clienteId = clienteId
    this.productos = productos
    this.aplicarDescuento = aplicarDescuento
  }
}

class ProcesadorDePedidos {
  procesar(pedido) {
    if (pedido.aplicarDescuento) {
      this._aplicarDescuento(pedido)
    }
    this._procesarProductos(pedido)
  }

  _aplicarDescuento(pedido) {
    console.log('Descuento aplicado')
  }

  _procesarProductos(pedido) {
    console.log(
      `Procesando pedido de cliente ${
        pedido.clienteId
      } con productos: ${pedido.productos.join(', ')}`
    )
  }
}

// 🚀 Ventajas:
// - Se obliga a pasar los datos necesarios: más explícito, más seguro.
// - Pedido encapsula toda la información, mejorando claridad y mantenimiento.
// - Separa la lógica de descuentos y la del pedido en métodos distintos.
