import { BasePaymentMethod } from '~/Domain/Payment/BasePaymentMethod'

export class PaypalPayment extends BasePaymentMethod {
  processPayment(amount: number): string {
    try {
      this.validateIfIsPositiveAmount(amount)

      return `Processing paypal payment of ${amount}`
    } catch (error) {
      throw new Error('Invalid amount')
    }
  }
}
