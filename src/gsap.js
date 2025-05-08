import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

console.log('Projet initialisé')

const MOTION_CONFIG = {
  easeIn: 'power3.in',
  easeOut: 'power3.out',
  easeInOut: 'power3.inOut',
  durationS: 0.3,
  durationM: 0.4,
  durationL: 0.6,
}

const MM = gsap.matchMedia()

const defaults = {
  ease: MOTION_CONFIG.easeOut,
  duration: MOTION_CONFIG.durationM,
}

gsap.defaults(defaults)

export default gsap
export { defaults, MOTION_CONFIG, ScrollTrigger, SplitText, MM }
