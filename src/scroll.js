import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from './gsap'
import { ScrollTrigger } from './gsap'

// Init
const scroll = new Lenis({
  autoRaf: true,
  duration: 1.05,
  autoResize: true,
})

scroll.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  scroll.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

export default scroll
