import { BasePaymentMethod } from '~/Domain/Payment/BasePaymentMethod'

export class CreditCardPayment extends BasePaymentMethod {
  processPayment(amount: number): string {
    try {
      this.validateIfIsPositiveAmount(amount)

      return `Processing credit card payment of ${amount}`
    } catch (error) {
      throw new Error('Invalid amount')
    }
  }
}
