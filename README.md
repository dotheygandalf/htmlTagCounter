# Tag Counter
This is a small webapp that allows users to view HTML source code for websites.  It provides a list of elements, both standard and non-standard, and a count of the occurences of each one.  By default, it sorts the tags in descending order, and where there is a tie, sorts them alphabetically.

## UI Features
* Support for both mobile and desktop experiences
* Clicking on an element type will highlight the selected elements in the source view and scroll to the first occurence.
* A search for elements for when the list gets really long.
* URL validation
* Error handling when requests don't return content-type text/html.
* Error handling when requests fail.
* HTML source prettification on the server side using the js-beautify library.
* Syntax highlighting using the CodeMirror library.

## Notes
* Hosted on Amazon EC2

## Deployment Prereqs
`node`, `npm`, `bower', '`grunt-cli'

## Deployment Steps
1. Run `npm install`
1. Run `bower install`
1. Run `grunt`
1. Start the server by running `node index.js`, or using forever with `forever start index.js`

## Client Side Libraries
* Angular.js
* Angular UI Bootstrap
* Angular Animate
* Bootstrap
* CodeMirror
* Font Awesome
* Lodash
* jQuery

## Server Side Libraries
* express
* jQuery
* js-beautify
* jsdom
* q
* request