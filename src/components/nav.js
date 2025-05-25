import gsap from '../utils/gsap'
import {
  defaults,
  MOTION_CONFIG,
  ScrollTrigger,
  SplitText,
  MM,
} from '../utils/gsap'

export default function initNav() {
  const nav = document.querySelector('[data-nav]')
  let isOpen = false
  function initNavScroll() {
    let showNav = gsap
      .from(nav, {
        yPercent: -100,
        paused: true,
        ease: MOTION_CONFIG.easeInOut,
      })

      .progress(1)

    ScrollTrigger.create({
      start: 'top top',

      end: 'max',

      onUpdate: (self) => {
        if (isOpen === false) {
          self.direction === -1 ? showNav.play() : showNav.reverse()
        }
      },
    })
  }

  function initMobileNav() {
    MM.add('(max-width: 480px)', () => {
      const btn = nav.querySelector('.nav__btn')
      const lines = btn.querySelectorAll('.nav__btn-line')

      gsap.set(nav, { height: '3.5em' })

      const tl = gsap.timeline({ paused: true })

      tl.to(nav, {
        height: isOpen ? '3.5em' : 'auto',
        duration: MOTION_CONFIG.durationL,
        ease: MOTION_CONFIG.easeInOut,
      })
        .to(lines[0], {
          yPercent: isOpen ? 100 : 0,
          duration: MOTION_CONFIG.durationL,
          ease: MOTION_CONFIG.easeInOut,
        })
        .to(lines[1], {
          yPercent: isOpen ? -100 : 0,
          duration: MOTION_CONFIG.durationM,
        })

      btn.addEventListener('click', () => {
        isOpen = !isOpen
        console.log(isOpen)
        isOpen ? tl.timeScale(1).play() : tl.timeScale(1.75).reverse()
      })
    })
  }

  initNavScroll()
  initMobileNav()
}
