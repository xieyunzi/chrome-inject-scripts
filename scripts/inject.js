import R from 'ramda'
import _ from 'lodash'
import $ from 'jquery'

// inject for browser console
const inject = {
  R: R,
  _: _,
  $: $,
}
window.xzinject = inject
