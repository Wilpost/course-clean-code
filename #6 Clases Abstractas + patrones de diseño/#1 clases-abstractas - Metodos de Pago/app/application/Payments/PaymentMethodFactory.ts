import { PaymentMethod } from '~/Domain/Payment/PaymentMethod'
import { CreditCardPayment } from './PaymentMethod/CreditCardPayment'
import { CryptoPayment } from './PaymentMethod/cryptoPayment'
import { PaypalPayment } from './PaymentMethod/PaypalPayment'

type TypePaymentMethod = 'credit-card' | 'paypal' | 'crypto'

export class PaymentMethodFactory {
  static createPaymentMethod(type: TypePaymentMethod): PaymentMethod {
    switch (type) {
      case 'credit-card':
        return new CreditCardPayment()
      case 'paypal':
        return new PaypalPayment()
      case 'crypto':
        return new CryptoPayment()
      default:
        throw new Error('Invalid payment method')
    }
  }
}
