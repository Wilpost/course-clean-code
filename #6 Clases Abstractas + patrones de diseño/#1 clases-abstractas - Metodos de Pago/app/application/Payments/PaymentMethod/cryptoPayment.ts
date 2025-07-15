import { BasePaymentMethod } from '~/Domain/Payment/BasePaymentMethod'

export class CryptoPayment extends BasePaymentMethod {
  processPayment(amount: number): string {
    try {
      this.validateIfIsPositiveAmount(amount)

      return `Processing crypto payment of ${amount}`
    } catch (error) {
      throw new Error('Invalid amount')
    }
  }
}
