import { PaymentMethodFactory } from '~/application/Payments/PaymentMethodFactory'

export const loader = () => {
  const creditCardPaymentMethod =
    PaymentMethodFactory.createPaymentMethod('credit-card')
  const paypalPaymentMethod = PaymentMethodFactory.createPaymentMethod('paypal')
  const cryptoPaymentMethod = PaymentMethodFactory.createPaymentMethod('crypto')

  const resultCreditCard = creditCardPaymentMethod.processPayment(100)
  const resultPaypal = paypalPaymentMethod.processPayment(200)
  const resultCrypto = cryptoPaymentMethod.processPayment(300)

  console.log('Credit Card: ', resultCreditCard)
  console.log('Paypal: ', resultPaypal)
  console.log('Crypto: ', resultCrypto)

  return {
    message: resultCreditCard,
    messagePaypal: resultPaypal,
    messageCrypto: resultCrypto
  }
}

export default function App() {
  return <div>Hello World</div>
}
