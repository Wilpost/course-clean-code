import { User } from '../../Domain/entities/User'
import { PromotionStrategy } from '../../Domain/Promotions'

export class ApplyPromotionUseCase {
  constructor(private readonly strategy: PromotionStrategy) {}

  execute(cartTotal: number, user: User): number {
    return this.strategy.calculateDiscount(cartTotal, user)
  }
}
