import { User } from './entities/User'

export interface PromotionStrategy {
  calculateDiscount(cartTotal: number, user: User): number
}
