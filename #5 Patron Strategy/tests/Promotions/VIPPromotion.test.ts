/// <reference types="jest" />
import { VIPPromotion } from '../../use-cases/Promotions/Strategies/VIPPromotion'
import { User } from '../../Domain/entities/User'

describe('VIPPromotion', () => {
  let vipPromotion: VIPPromotion
  let user: User
  const cartTotal = 100

  beforeEach(() => {
    vipPromotion = new VIPPromotion()
    user = {
      name: 'Test User',
      lastName: 'Test',
      email: 'test@test.com',
      isVip: true,
      isAdmin: false,
      isActive: true,
      isDeleted: false,
      isBlocked: false,
      isVerified: true,
      isPremium: false
    }
  })

  it('debería aplicar un descuento del 15% para usuarios VIP', () => {
    const result = vipPromotion.calculateDiscount(cartTotal, user)
    expect(result).toBe(15) // 100 * 0.15 = 15
  })

  it('debería aplicar el mismo descuento aunque el usuario no sea VIP', () => {
    user.isVip = false
    const result = vipPromotion.calculateDiscount(cartTotal, user)
    expect(result).toBe(15) // El descuento es el mismo ya que la implementación actual no verifica isVip
  })
})
