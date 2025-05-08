import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from './gsap'

// Init
const lenis = new Lenis({
  autoRaf: true,
  duration: 1.05,
  autoResize: true,
})

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

export default lenis
