// ==UserScript==
// @name         Unlock Data Viewer @ sequencing.com 
// @namespace    http://github.com/tuscias
// @version      0.1
// @description  removees blurry text from Data Viewer
// @author       tuscias
// @match        https://sequencing.com/*
// @grant        none
// @run-at document-end
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
