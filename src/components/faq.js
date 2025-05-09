import gsap from '../utils/gsap'
import {
  defaults,
  MOTION_CONFIG,
  ScrollTrigger,
  SplitText,
  MM,
} from '../utils/gsap'

export default class Faq {
  constructor(container) {
    this.container = container
    if (!this.container) return

    this.items = this.container.querySelectorAll('[data-faq="item"]')
    this.openAnimations = new Map()
    this.closeAnimations = new Map()

    this.init()
    this.addEventListeners()
  }

  init() {
    this.items.forEach((item) => {
      const question = item.querySelector('[data-faq="question"]')
      const icon = item.querySelector('[data-faq="icon"] .is-middle')

      gsap.set(item, { height: question.offsetHeight })

      const openTl = gsap.timeline({ paused: true })
      openTl
        .to(item, {
          height: 'auto',
        })
        .to(
          icon,
          {
            yPercent: -100,
            duration: MOTION_CONFIG.durationS,
          },
          '<'
        )
        .to(icon, {
          yPercent: -200,
          duration: MOTION_CONFIG.durationS,
        })

      const closeTl = gsap.timeline({ paused: true })
      closeTl
        .to(item, {
          height: question.offsetHeight,
        })
        .to(
          icon,
          {
            yPercent: 0,
          },
          '<'
        )

      this.openAnimations.set(item, openTl)
      this.closeAnimations.set(item, closeTl)
    })

    if (this.items.length > 0) {
      const firstItem = this.items[0]

      firstItem.classList.add('is-active')
      const icon = firstItem.querySelector('[data-faq="icon"] .is-middle')
      gsap.set(firstItem, { height: 'auto' })
      gsap.set(icon, { yPercent: -200 })
    }
  }

  addEventListeners() {
    this.items.forEach((item) => {
      item.addEventListener('click', () => {
        this.toggleItem(item)
      })
    })
  }

  toggleItem(item) {
    const isActive = item.classList.contains('is-active')

    if (isActive) {
      // Fermer l'item actif
      item.classList.remove('is-active')

      // Arrêter toute animation en cours
      const openTl = this.openAnimations.get(item)
      const closeTl = this.closeAnimations.get(item)
      openTl.pause()

      // Lancer l'animation de fermeture
      closeTl.restart()
    } else {
      // Fermer tout autre item actif
      this.items.forEach((el) => {
        if (el !== item && el.classList.contains('is-active')) {
          el.classList.remove('is-active')

          // Arrêter et lancer les animations
          const elOpenTl = this.openAnimations.get(el)
          const elCloseTl = this.closeAnimations.get(el)
          elOpenTl.pause()
          elCloseTl.restart()
        }
      })

      // Ouvrir le nouvel item
      item.classList.add('is-active')

      // Arrêter l'animation de fermeture et lancer l'ouverture
      const openTl = this.openAnimations.get(item)
      const closeTl = this.closeAnimations.get(item)
      closeTl.pause()
      openTl.restart()
    }
  }
}
