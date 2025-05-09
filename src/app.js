/**
 * Arkade Website
 * @version 1.0.0
 */

import gsap from './utils/gsap'
import {
  defaults,
  MOTION_CONFIG,
  ScrollTrigger,
  SplitText,
  MM,
} from './utils/gsap'
import _scroll from './utils/scroll'
import Faq from './components/faq'
import initHomeFeatures from './components/homeFeatures'
import initHomeHero from './components/homeHero'

export class App {
  static {
    const homeHero = initHomeHero()
    const homeFeatures = initHomeFeatures()
    const homeFaq = new Faq(document.querySelector('.h-faq__list'))
  }
}
