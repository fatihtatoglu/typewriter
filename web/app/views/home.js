// This file was automatically generated from home.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Typewriter.views.home.
 * @public
 */

goog.provide('Typewriter.views.home');

goog.require('soy');
goog.require('soydata.VERY_UNSAFE');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {!goog.soy.data.SanitizedHtml}
 * @suppress {checkTypes|uselessCode}
 */
Typewriter.views.home.content = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '<div' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="Typewriter.views.home.content app\\templates\\home.soy:7"' : '') + '><h1>This is hpme page.</h1></div><ul' + ((goog.DEBUG && soy.$$debugSoyTemplateInfo) ? ' data-debug-soy="Typewriter.views.home.content app\\templates\\home.soy:11"' : '') + '>';
  var item5List = opt_data.parameters.links;
  var item5ListLen = item5List.length;
  for (var item5Index = 0; item5Index < item5ListLen; item5Index++) {
    var item5Data = item5List[item5Index];
    output += '<li><a href=\'' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(item5Data['route'])) + '\'>' + soy.$$escapeHtml(item5Data['name']) + '</a></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Typewriter.views.home.content.soyTemplateName = 'Typewriter.views.home.content';
}
