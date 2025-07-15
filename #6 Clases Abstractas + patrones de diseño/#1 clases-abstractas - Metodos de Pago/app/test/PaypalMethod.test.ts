import { PaypalPayment } from '../application/Payments/PaymentMethod/PaypalPayment'

describe('PaypalPayment', () => {
  let paypalPayment: PaypalPayment

  beforeEach(() => {
    paypalPayment = new PaypalPayment()
  })

  it('debería procesar un pago correctamente con un monto positivo', () => {
    const amount = 300
    const result = paypalPayment.processPayment(amount)
    expect(result).toBe(`Processing paypal payment of ${amount}`)
  })

  it('debería lanzar un error si el monto es cero', () => {
    expect(() => paypalPayment.processPayment(0)).toThrow('Invalid amount')
  })

  it('debería lanzar un error si el monto es negativo', () => {
    expect(() => paypalPayment.processPayment(-150)).toThrow('Invalid amount')
  })
})
