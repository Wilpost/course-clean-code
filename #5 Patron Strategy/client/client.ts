import { ApplyPromotionUseCase } from '../use-cases/Promotions/ApplyPromotions.use-case'
import { VIPPromotion } from '../use-cases/Promotions/Strategies/VIPPromotion'

const applyPromotionUseCase = new ApplyPromotionUseCase(new VIPPromotion())

const cartTotal = 100
const user = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  isVip: true,
  isAdmin: false,
  isActive: true,
  isDeleted: false,
  isBlocked: false,
  isVerified: true,
  isPremium: false
}

const result = applyPromotionUseCase.execute(cartTotal, user)

console.log(result)
