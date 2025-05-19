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
        //if (!mobileMenuOpened) {

        self.direction === -1 ? showNav.play() : showNav.reverse()

        // }
      },
    })
  }

  initNavScroll()
}
