import { CryptoPayment } from '../application/Payments/PaymentMethod/cryptoPayment'

describe('CryptoPayment', () => {
  let cryptoPayment: CryptoPayment

  beforeEach(() => {
    cryptoPayment = new CryptoPayment()
  })

  it('debería procesar un pago correctamente con un monto positivo', () => {
    const amount = 200
    const result = cryptoPayment.processPayment(amount)
    expect(result).toBe(`Processing crypto payment of ${amount}`)
  })

  it('debería lanzar un error si el monto es cero', () => {
    expect(() => cryptoPayment.processPayment(0)).toThrow('Invalid amount')
  })

  it('debería lanzar un error si el monto es negativo', () => {
    expect(() => cryptoPayment.processPayment(-100)).toThrow('Invalid amount')
  })
})
