// Ejercicio #1

// Código original (sin extracción):

function processPurchase(user) {
  if (user.age >= 18 && user.accountActive && !user.hasOutstandingDebt) {
    console.log('Compra realizada con éxito.')
  } else {
    console.log('No se puede procesar la compra.')
  }
}

// ✅ Código mejorado (con método booleano extraído):

function processPurchase(user) {
  if (canUserMakePurchase(user)) {
    console.log('Compra realizada con éxito.')
  } else {
    console.log('No se puede procesar la compra.')
  }
}

function canUserMakePurchase(user) {
  return user.age >= 18 && user.accountActive && !user.hasOutstandingDebt
}

// Ejercicio #2
// Código JavaScript con métodos booleanos extraídos

function canUserPublish(user) {
  return (
    isAccountActive(user) &&
    hasAcceptedTerms(user) &&
    !isInRestrictedRegion(user) &&
    isAllowedByAge(user) &&
    isAllowedByReportsOrRole(user)
  )
}

// Sub-métodos booleanos extraídos 👇

function isAccountActive(user) {
  return user.accountStatus === 'active'
}

function hasAcceptedTerms(user) {
  return user.termsAccepted === true
}

function isInRestrictedRegion(user) {
  const restrictedRegions = ['North Korea', 'Atlantis', 'Narnia']
  return restrictedRegions.includes(user.location)
}

function isAllowedByAge(user) {
  return user.age >= 18
}

function isAllowedByReportsOrRole(user) {
  const isPrivileged = ['moderator', 'admin'].includes(user.role)
  const hasFewReports = user.reports <= 3

  return isPrivileged || hasFewReports
}

// Mejorando el código
function isValidUserFromPublish(user) {
  return (
    isAccountActive(user) &&
    hasAcceptedTerms(user) &&
    !isInRestrictedRegion(user) &&
    isAllowedByAge(user) &&
    isAllowedByReportsOrRole(user)
  )
}

// Metodo de validacion de usuario para publicar
function canUserPublish(user) {
  return isValidUserFromPublish(user)
}

// Sub-métodos booleanos extraídos 👇

function isAccountActive(user) {
  return user.accountStatus === 'active'
}

function hasAcceptedTerms(user) {
  return user.termsAccepted === true
}

function isInRestrictedRegion(user) {
  const restrictedRegions = ['North Korea', 'Atlantis', 'Narnia']
  return restrictedRegions.includes(user.location)
}

function isAllowedByAge(user) {
  return user.age >= 18
}

function isAllowedByReportsOrRole(user) {
  const isPrivileged = ['moderator', 'admin'].includes(user.role)
  const hasFewReports = user.reports <= 3

  return isPrivileged || hasFewReports
}
