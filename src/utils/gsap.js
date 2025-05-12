import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin)

console.log('Projet initialisé')

const MOTION_CONFIG = {
  easeIn: 'expo.in',
  easeOut: 'expo.out',
  easeInOut: 'expo.inOut',
  durationS: 0.4,
  durationM: 0.6,
  durationL: 0.8,
}

const MM = gsap.matchMedia()

const defaults = {
  ease: MOTION_CONFIG.easeOut,
  duration: MOTION_CONFIG.durationM,
}

gsap.defaults(defaults)

export default gsap
export {
  defaults,
  MOTION_CONFIG,
  ScrollTrigger,
  SplitText,
  MM,
  ScrambleTextPlugin,
}
