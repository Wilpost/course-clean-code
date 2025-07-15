import { PaymentMethod } from './PaymentMethod'

export abstract class BasePaymentMethod implements PaymentMethod {
  protected validateIfIsPositiveAmount(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be positive')
    }
  }

  abstract processPayment(amount: number): string
}
