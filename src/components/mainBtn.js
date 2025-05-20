import gsap from '../utils/gsap'
import { MOTION_CONFIG, ScrollTrigger } from '../utils/gsap'

export default function initMainBtn() {
  const btns = document.querySelectorAll('[data-btn="primary"]')
  if (btns.length === 0) return

  btns.forEach((btn) => {
    const inner = btn.querySelector('.btn-inner')
    const icon = {
      top: btn.querySelector('.icon-top'),
      middle: btn.querySelector('.icon-middle'),
      bottom: btn.querySelector('.icon-bottom'),
    }

    const tl = gsap.timeline({ paused: true })

    tl.to(inner, {
      y: '0.375em',
    })
    if (icon.top) {
      tl.to(
        [icon.top, icon.bottom],
        {
          xPercent: 100,
          duration: MOTION_CONFIG.durationS,
        },
        '0.1'
      )
        .to(icon.top, {
          yPercent: 100,
          duration: MOTION_CONFIG.durationS,
        })
        .to(
          icon.bottom,
          {
            yPercent: -100,
            duration: MOTION_CONFIG.durationS,
          },
          '<'
        )
        .to([icon.top, icon.middle, icon.bottom], {
          autoAlpha: 0,
          repeat: 10,
          yoyo: true,
          duration: MOTION_CONFIG.durationS,
        })
    }

    btn.addEventListener('mouseenter', () => {
      tl.timeScale(1).play()
    })

    btn.addEventListener('mouseleave', () => {
      tl.progress(0.25)
      tl.timeScale(1.5).reverse()
    })
  })
}
