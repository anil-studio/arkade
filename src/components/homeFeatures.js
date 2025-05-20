import gsap from '../utils/gsap'
import { MOTION_CONFIG, ScrollTrigger } from '../utils/gsap'

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
        scrub: true,
        markers: false,
        start: 'top 90%',
        end: 'top 30%',
      },
      yPercent: 30,
      duration: MOTION_CONFIG.durationL,
      onComplete: () => {
        ScrollTrigger.update()
      },
    })
  })

  refs.contentBlocks.forEach((block) => {
    const refs = {
      eyebrow: block.querySelector('.eyebrow'),
      title: block.querySelector('.h3'),
      text: block.querySelector('.text-regular'),
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 70%',
        scrub: false,
      },
      onComplete: () => {
        ScrollTrigger.refresh()
      },
    })
    if (refs.eyebrow) {
      tl.from(refs.eyebrow, {
        autoAlpha: 0,
        yPercent: 20,
      })
    }
    tl.from(
      refs.title,
      {
        autoAlpha: 0,
        yPercent: 20,
      },
      '<0.2'
    ).from(
      refs.text,
      {
        autoAlpha: 0,
        yPercent: 20,
      },
      '<0.2'
    )
  })
}
