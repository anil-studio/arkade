import gsap from '../utils/gsap'
import { MOTION_CONFIG, ScrollTrigger } from '../utils/gsap'

export default function initEyebrows() {
  const eyebrows = document.querySelectorAll('.eyebrow')

  if (eyebrows.length === 0) return

  eyebrows.forEach((el) => {
    const squares = el.querySelectorAll('.eyebrow__block')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        scrub: false,
      },
    })

    tl.from(squares, {
      autoAlpha: 0,
      stagger: { amount: 0.4, from: 'random', repeat: 3 },
      duration: 0.2,
    })
  })
}
