import { PromotionStrategy } from '../../../Domain/Promotions'
import { User } from '../../../Domain/entities/User'

export class VIPPromotion implements PromotionStrategy {
  calculateDiscount(cartTotal: number, user: User): number {
    return cartTotal * 0.15
  }
}
