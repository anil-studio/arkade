import gsap from '../utils/gsap'
import { MOTION_CONFIG, ScrollTrigger } from '../utils/gsap'

export default function initFooter() {
  const container = document.querySelector('.footer')
  if (!container) return

  function initFooterTitle() {
    const lines = container.querySelectorAll('.h-line')
    const pixelWord = container.querySelector('.h-pixel')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'bottom 10%',
        scrub: false,
        //markers: true,
      },
    })

    tl.from(lines, {
      autoAlpha: 0,
      yPercent: 20,
      stagger: 0.2,
    }).from(
      pixelWord,
      {
        autoAlpha: 0,
        repeat: -1,
        yoyo: true,
        duration: MOTION_CONFIG.durationS,
      },
      '<'
    )
  }

  function initFooterSvg() {
    const svgs = container.querySelectorAll('.footer__visual-svg')
    if (svgs.length < 2) return

    let activeIndex = 0
    let isAnimating = false

    gsap.set(svgs, { autoAlpha: 0 })
    gsap.set(svgs[0], { autoAlpha: 1 })

    function changeRandomSvg() {
      if (isAnimating) return

      isAnimating = true

      // Choisir un nouvel index aléatoire différent de l'actuel
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * svgs.length)
      } while (newIndex === activeIndex)

      // Animer la sortie de l'image actuelle
      gsap.to(svgs[activeIndex], {
        autoAlpha: 0,
        duration: MOTION_CONFIG.durationS,
      })

      // Animer l'entrée de la nouvelle image
      gsap.to(svgs[newIndex], {
        autoAlpha: 1,
        duration: MOTION_CONFIG.durationS,
        onComplete: () => {
          activeIndex = newIndex
          isAnimating = false
        },
      })
    }

    // Lancer la boucle automatique
    const autoChangeInterval = setInterval(() => {
      changeRandomSvg()
    }, 200) // Changer toutes les 2 secondes

    // Optionnel : nettoyer l'interval si nécessaire
    // (par exemple si le composant est détruit)
    return () => {
      clearInterval(autoChangeInterval)
    }
  }

  initFooterTitle()
  const cleanup = initFooterSvg()

  // Retourner la fonction de cleanup si nécessaire
  return cleanup
}
