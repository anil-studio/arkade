import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from './gsap'
import { ScrollTrigger } from './gsap'

// Init
const _scroll = new Lenis({
  duration: 0.6,
})

_scroll.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  _scroll.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

export default _scroll
