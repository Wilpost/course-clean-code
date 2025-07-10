// ✅ Ejemplo: Controlador de Notificaciones sin booleanos
// Supongamos que tenemos una API con dos rutas:
// - /notificacion/urgente
// - /notificacion/normal
// Aquí está cómo podríamos estructurar el controlador:


class NotificacionController {
  enviarUrgente(req, res) {
    const mensaje = req.body.mensaje
    console.log(`🚨 URGENTE: ${mensaje}`)
    // lógica para envío de notificación urgente (ej. SMS, push, etc.)
    res.status(200).json({ tipo: 'urgente', mensaje })
  }

  enviarNormal(req, res) {
    const mensaje = req.body.mensaje
    console.log(`📩 Normal: ${mensaje}`)
    // lógica para envío normal (ej. solo email, menos prioridad)
    res.status(200).json({ tipo: 'normal', mensaje })
  }
}

// 🛠️ Enrutador usando Express

const express = require('express')
const router = express.Router()
const controlador = new NotificacionController()

router.post('/notificacion/urgente', (req, res) =>
  controlador.enviarUrgente(req, res)
)
router.post('/notificacion/normal', (req, res) =>
  controlador.enviarNormal(req, res)
)

// 💬 ¿Y si usáramos booleanos?
// Podríamos tener algo como:

router.post('/notificacion', (req, res) => controlador.enviar(req, res))

// Y en la clase:

enviar(req, res) {
  const { mensaje, urgente } = req.body;
  if (urgente) {
    // lógica urgente
  } else {
    // lógica normal
  }
}

// 😕 Esto genera ambigüedad en la semántica del endpoint, y exige que el cliente conozca el comportamiento del parámetro urgente.
// Separar los métodos (y rutas) da claridad, y permite evolucionar el comportamiento de cada tipo sin afectar al otro.


// ----- Explorando código de Revify ----------


// ❌ En el metodo registerBillingPlan, se le esta pasando un parametro que es un booleano, y esto es para saber si el plan es de prueba o no:

// ------------------------------------------------------------
// async registerBillingPlan(sessionId: string, planData: PlanEntity, isTest: boolean): Promise<string | any> {
//     try {
//       const returnUrl = `https://admin.shopify.com/store/${this.extractShopName(sessionId)}/apps/${process.env.NODE_ENV === 'development' ? 'revify-dev-1' : 'revify-app'}/app/confirmation`;

//       if (!isTest && process.env.NODE_ENV === 'development') {
//         isTest = true;
//       }
//      ...more code
//   }
// ------------------------------------------------------------

// ✅ Solución - Crear otro metodo para crear un plan de prueba y otro para crear un plan de producción

 // async registerProductionBillingPlan(sessionId: string, planData: PlanEntity): Promise<string | any> { ... }
 // async registerDevelopmentBillingPlan(sessionId: string, planData: PlanEntity): Promise<string | any> { ... }

 // Ahora se podria hacer algo como esto:
 // if (process.env.NODE_ENV === 'development') {
//        BillingService.registerDevelopmentBillingPlan(sessionId, planData)
//   } else {
//        BillingService.registerProductionBillingPlan(sessionId, planData)
//   }
