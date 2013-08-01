// Shamelessly adapted from https://gist.github.com/maccman/5674933#file-jquery-onclose-coffee and https://gist.github.com/maccman/6125215. For the background see: http://blog.alexmaccaw.com/jswebapps-onbeforeunload
'use strict';

var $ = typeof require === 'function'
    ? require('jquery')
    : window.$
  , methods = ['PUT', 'POST', 'DELETE', 'PATCH']

$.activeTransforms = 0

$(document).ajaxSend(function(e, xhr, settings) {
  if (settings.warn === false || methods.indexOf(settings.type) < 0) return
  return $.activeTransforms++
})

$(document).ajaxComplete(function(e, xhr, settings) {
  if (settings.warn === false || methods.indexOf(settings.type) < 0) return
  return $.activeTransforms--
})

window.onbeforeunload || (window.onbeforeunload = function() {
  if ($.activeTransforms) {
    return 'There are some pending network requests which\nmeans closing the page may lose unsaved data.'
  }
})
