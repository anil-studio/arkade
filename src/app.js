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
import initMainBtn from './components/mainBtn'
import initFooter from './components/footer'

export class App {
  static {
    gsap.set('[data-visibility]', { visibility: 'visible' })
    const homeHero = initHomeHero()
    const homeFeatures = initHomeFeatures()
    const homeFaq = new Faq(document.querySelector('.h-faq__list'))
    const mainBtn = initMainBtn()
    const footer = initFooter()
  }
}
