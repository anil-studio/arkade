import gsap from '../utils/gsap'
import { MOTION_CONFIG, ScrollTrigger, ScrambleTextPlugin } from '../utils/gsap'

export default function initHomeHero() {
  const container = document.querySelector('.h-hero__layout')
  if (!container) return

  const refs = {
    titleWords: container.querySelectorAll('.h-word'),
    titleSquares: container.querySelectorAll('.h-highlighted__square'),
    subtitle: container.querySelector('.h-hero__subtitle'),
    btn: container.querySelector('.btn-w'),
    bottomList: Array.from(container.querySelector('.h-hero__list').children),
  }

  const tl = gsap.timeline()

  tl.from(refs.titleWords, {
    autoAlpha: 0,
    yPercent: 20,
    stagger: 0.2,
    // duration: 0.2,
  })
    /*.from(
      refs.titleSquares,
      {
        autoAlpha: 0,
        stagger: { amount: 0.4, from: 'random', repeat: 5 },
        duration: 0.2,
      },
      '>-0.4'
    )*/
    .from(
      [refs.subtitle, refs.btn],
      {
        autoAlpha: 0,
        yPercent: 20,
        stagger: 0.2,
        // duration: 0.2,
      },
      '<0.4'
    )
    .from(
      refs.bottomList,
      {
        autoAlpha: 0,
        stagger: 0.1,
        // duration: 0.2,
        onComplete: () => {
          initScrambleLoop()
        },
      },
      '<0.4'
    )

  function initScrambleLoop() {
    const text = container.querySelector('.h-scramble-word')

    const scrambleTl = gsap.timeline({ repeat: -1, ease: 'none' })

    scrambleTl
      .to(text, {
        scrambleText: {
          text: 'Bitcoin',
          chars: 'lowercase',
          speed: 1,
        },
        duration: 2,
      })
      .to(text, {
        scrambleText: {
          text: 'apps',
          chars: 'lowercase',
          speed: 1,
        },
        duration: 2,
      })
      .to(text, {
        scrambleText: {
          text: 'finance',
          chars: 'lowercase',
          speed: 1,
        },
        duration: 2,
      })
      .to(text, {
        scrambleText: {
          text: 'trust',
          chars: 'lowercase',
          speed: 1,
        },
        duration: 2,
      })
      .to(text, {
        scrambleText: {
          text: 'money',
          chars: 'lowercase',
          speed: 1,
        },
        duration: 2,
      })
  }
}
