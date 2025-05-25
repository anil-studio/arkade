import gsap from '../gsap'
import { MOTION_CONFIG, ScrollTrigger } from '../gsap'

export default function initFadeList() {
  const lists = document.querySelectorAll("[data-fade='list']")

  if (lists.length === 0) {
    return
  }

  lists.forEach((list) => {
    const items = gsap.utils.toArray(list.children)
    if (items.length === 0) {
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top 90%',
        trigger: list,
        markers: false,
      },
    })

    tl.fromTo(
      items,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.2,
        duration: MOTION_CONFIG.durationL,
        ease: MOTION_CONFIG.easeOut,
        onComplete: () => {
          // Rafraîchir ScrollTrigger spécifiquement pour les enfants
          // après que l'animation principale soit terminée
          ScrollTrigger.update()
        },
      }
    )
  })
}
