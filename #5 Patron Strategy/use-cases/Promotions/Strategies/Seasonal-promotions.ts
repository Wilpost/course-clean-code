import { PromotionStrategy } from '../../../Domain/Promotions'
import { User } from '../../../Domain/entities/User'

export class SeasonalPromotion implements PromotionStrategy {
  calculateDiscount(cartTotal: number, user: User): number {
    const currentMonth = new Date().getMonth()

    // Temporada navideña (Diciembre)
    if (currentMonth === 11) {
      return cartTotal * 0.25 // 25% de descuento
    }

    // Temporada de verano (Junio - Agosto)
    if (currentMonth >= 5 && currentMonth <= 7) {
      return cartTotal * 0.15 // 15% de descuento
    }

    // Black Friday (Noviembre)
    if (currentMonth === 10) {
      return cartTotal * 0.3 // 30% de descuento
    }

    // Sin descuento para otras temporadas
    return 0
  }
}
