/// <reference types="jest" />
import { CreditCardPayment } from '../application/Payments/PaymentMethod/CreditCardPayment'

describe('CreditCardPayment', () => {
  let creditCardPayment: CreditCardPayment

  beforeEach(() => {
    creditCardPayment = new CreditCardPayment()
  })

  it('debería procesar un pago correctamente con un monto positivo', () => {
    const amount = 100
    const result = creditCardPayment.processPayment(amount)
    expect(result).toBe(`Processing credit card payment of ${amount}`)
  })

  it('debería lanzar un error si el monto es cero', () => {
    expect(() => creditCardPayment.processPayment(0)).toThrow('Invalid amount')
  })

  it('debería lanzar un error si el monto es negativo', () => {
    expect(() => creditCardPayment.processPayment(-50)).toThrow(
      'Invalid amount'
    )
  })
})
