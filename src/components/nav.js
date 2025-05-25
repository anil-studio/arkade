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
      const closedHeight = '3.75em'

      gsap.set(nav, { height: closedHeight })

      const tl = gsap.timeline({ paused: true })

      tl.to(nav, {
        height: isOpen ? closedHeight : 'auto',
        duration: MOTION_CONFIG.durationL,
        ease: MOTION_CONFIG.easeInOut,
      })
        .to(
          lines[0],
          {
            yPercent: isOpen ? 0 : 150,
            duration: MOTION_CONFIG.durationS,
          },
          '<'
        )
        .to(
          lines[1],
          {
            yPercent: isOpen ? 0 : -150,
            duration: MOTION_CONFIG.durationS,
          },
          '<'
        )

      btn.addEventListener('click', () => {
        isOpen = !isOpen
        isOpen ? tl.timeScale(1).play() : tl.timeScale(1.75).reverse()
      })
    })
  }

  initNavScroll()
  initMobileNav()
}
