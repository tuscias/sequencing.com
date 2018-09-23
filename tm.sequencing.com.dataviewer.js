// ==UserScript==
// @name UnlockDataViewer@sequencing.com 
// @description Top and Down buttons everywhere (no Jquery) 
// @version 0.1
// @author tuscias
// @license MIT
// @include https://sequencing.com/*
// @run-at document-end
// @grant none
// @require         http://code.jquery.com/jquery-latest.js
// ==/UserScript==

let selector = '.page-secure-app-results .dataTable .hide-content, .page-data-viewer-data .dataTable .hide-content';
let ruleText = selector + '{}';
let found = false;

//remove watermark
$('.data-standart-water-mark').remove();

// remove blurry text
for (const stylesheet of document.styleSheets) {
    if (found) {
        break;
    }

    let i = 0;
    for (const cssRule of stylesheet.cssRules) {
        if (cssRule.selectorText == selector) {
            stylesheet.deleteRule(i);
            stylesheet.inserRule(ruleText, i);
            found = true;
            break;
        }

        i++;
    }
}
