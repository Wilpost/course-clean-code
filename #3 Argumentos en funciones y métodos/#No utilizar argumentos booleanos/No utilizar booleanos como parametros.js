function enviarNotificacion(mensaje, esUrgente) {
  if (esUrgente) {
    console.log(`🚨 URGENTE: ${mensaje}`)
    // lógica para notificaciones urgentes
  } else {
    console.log(`📩 Normal: ${mensaje}`)
    // lógica para notificaciones normales
  }
}

// Uso:
enviarNotificacion('El servidor está caído', true) // 🧠 El parámetro true podría no ser tan claro si ves esa llamada en el código sin contexto.

// ✅ Opción con funciones separadas

function enviarNotificacionUrgente(mensaje) {
  console.log(`🚨 URGENTE: ${mensaje}`)
  // lógica para notificaciones urgentes
}

function enviarNotificacionNormal(mensaje) {
  console.log(`📩 Normal: ${mensaje}`)
  // lógica para notificaciones normales
}

// Uso:
enviarNotificacionUrgente('El servidor está caído')

// 💡 Ahora no hay duda: sabes exactamente qué hace la función desde el nombre. Esto mejora la claridad, facilita el mantenimiento y reduce errores.
