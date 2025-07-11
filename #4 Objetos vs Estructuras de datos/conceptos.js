// 🧩 ¿Qué son los objetos?
// Un objeto es una instancia de una clase que agrupa datos (atributos) y comportamientos (métodos). Representa entidades del mundo real o conceptos del dominio.
// En JavaScript:

const usuario = {
  nombre: 'Wilyer',
  edad: 28,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

// 🎯 Un objeto encapsula:
// - Datos → nombre, edad
// - Comportamientos → saludar()

// 🧱 ¿Qué son las estructuras de datos?
// Las estructuras de datos son formas de organizar, almacenar y gestionar la información para que sea eficiente su acceso y manipulación. Están pensadas para optimizar recursos según el problema a resolver.
// Ejemplos comunes:
// - Array o Listas: colecciones ordenadas de elementos.
// - Stack y Queue: manejo por orden de entrada/salida.
// - Tree, Graph: estructuras jerárquicas o de nodos conectados.
// - HashMap o Diccionario: pares clave-valor.
// 🔍 Cada estructura tiene un propósito específico según cómo quieras acceder o modificar los datos
