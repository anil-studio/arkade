import gsap from '../utils/gsap'
import {
  defaults,
  MOTION_CONFIG,
  ScrollTrigger,
  SplitText,
  MM,
} from '../utils/gsap'

export default function initHomeFeatures() {
  const container = document.querySelector('.h-features__layout')
  if (!container) return

  const refs = {
    visualBlocks: container.querySelectorAll('.h-features__visual'),
    contentBlocks: container.querySelectorAll('.h-features__content'),
  }

  refs.visualBlocks.forEach((block) => {
    const row = block.parentElement
    gsap.from(block, {
      scrollTrigger: {
        trigger: row,
        scrub: 0.8,
        markers: false,
        start: 'top 90%',
        end: 'top 30%',
      },
      yPercent: 30,
      duration: MOTION_CONFIG.durationL,
      onComplete: () => {
        ScrollTrigger.refresh()
      },
    })
  })
}
