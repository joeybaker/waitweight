WaitWeight
==========

Warns the user if they try to leave the page before AJAX requests complete.

Shamelessly adapted from @maccman https://gist.github.com/maccman/5674933#file-jquery-onclose-coffee and https://gist.github.com/maccman/6125215.

For the background see: http://blog.alexmaccaw.com/jswebapps-onbeforeunload

## Install

## Use
Just like any other jQuery plugin. Affects all `$.ajax` requests, unless you pass: `$.ajax({warn: false})`
