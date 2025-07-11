/// <reference types="jest" />

import { NoDiscountPromotion } from '../../use-cases/Promotions/Strategies/noDiscountPromotion'
import { User } from '../../Domain/entities/User'

describe('NoDiscountPromotion', () => {
  let noDiscountPromotion: NoDiscountPromotion
  let user: User
  const cartTotal = 100

  beforeEach(() => {
    noDiscountPromotion = new NoDiscountPromotion()
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

  it('debería aplicar un descuento del 0% para usuarios VIP', () => {
    const result = noDiscountPromotion.calculateDiscount(cartTotal, user)
    expect(result).toBe(0) // 100 * 0.15 = 15
  })

  it('debería aplicar el mismo descuento aunque el usuario no sea VIP', () => {
    user.isVip = false
    const result = noDiscountPromotion.calculateDiscount(cartTotal, user)
    expect(result).toBe(0) // El descuento es el mismo ya que la implementación actual no verifica isVip
  })
})
