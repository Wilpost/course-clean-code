export interface PaymentMethod {
    processPayment(amount: number): string;
}