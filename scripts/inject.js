import R from 'ramda'
import _ from 'lodash'
import $ from 'jquery'
import cheerio from 'cheerio'

// inject for browser console
const inject = {
  // lib
  l: {
    R: R,
    _: _,
    $: $,
    cheerio: cheerio,
  },

  // help
  h: {
    R: 'http://devdocs.io/ramda/',
    _: 'http://devdocs.io/lodash/',
    $: 'http://devdocs.io/jquery/',
    cheerio: 'https://github.com/cheeriojs/cheerio',
  }
}

window.xzinject = inject
console.log('`xzinject` defined.')

// short name
if (typeof window['xz'] === 'undefined') {
  window.xz = inject
  console.log('`xz` defined.')
}
