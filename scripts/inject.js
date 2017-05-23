import R from 'ramda'
import _ from 'lodash'
import $ from 'jquery'
import cheerio from 'cheerio'

// inject for browser console
const inject = {
  R: R,
  _: _,
  $: $,
  cheerio: cheerio,
}
window.xzinject = inject
