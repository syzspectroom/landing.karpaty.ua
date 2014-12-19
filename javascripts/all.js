/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(s,i){var o=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(s).is("body")?window:s),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function s(s){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof s&&s;o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof s&&o[s]()})}e.VERSION="3.3.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",s=0;t.isWindow(this.$scrollElement[0])||(e="position",s=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=t(this),o=i.data("target")||i.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[e]().top+s,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,s=this.getScrollHeight(),i=this.options.offset+s-this.$scrollElement.height(),o=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=s&&this.refresh(),e>=i)return l!=(t=r[r.length-1])&&this.activate(t);if(l&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)l!=r[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var s=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(s).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=s,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);s.call(e,e.data())})})}(jQuery),/**
 * ezMark (Minified) - A Simple Checkbox and Radio button Styling plugin. This plugin allows you to use a custom Image for 
 * Checkbox or Radio button. Its very simple, small and easy to use.
 * 
 * Copyright (c) Abdullah Rubiyath <http://www.itsalif.info/>.
 * Released under MIT License
 * 
 * @author Abdullah Rubiyath
 * @version 1.0
 * @date June 27, 2010
 */
function(t){t.fn.ezMark=function(e){e=e||{};var s={checkboxCls:e.checkboxCls||"ez-checkbox",radioCls:e.radioCls||"ez-radio",checkedCls:e.checkedCls||"ez-checked",selectedCls:e.selectedCls||"ez-selected",hideCls:"ez-hide"};return this.each(function(){var e=t(this),i="checkbox"==e.attr("type")?'<div class="'+s.checkboxCls+'">':'<div class="'+s.radioCls+'">';"checkbox"==e.attr("type")?(e.addClass(s.hideCls).wrap(i).change(function(){t(this).is(":checked")?t(this).parent().addClass(s.checkedCls):t(this).parent().removeClass(s.checkedCls)}),e.is(":checked")&&e.parent().addClass(s.checkedCls)):"radio"==e.attr("type")&&(e.addClass(s.hideCls).wrap(i).change(function(){t('input[name="'+t(this).attr("name")+'"]').each(function(){t(this).is(":checked")?t(this).parent().addClass(s.selectedCls):t(this).parent().removeClass(s.selectedCls)})}),e.is(":checked")&&e.parent().addClass(s.selectedCls))})}}(jQuery),function(){$(function(){var t,e,s,i,o,r,l,c,n;return l=$(".nav-link"),r=$(window),o=$("html,body"),e=$("#section1"),t=r.height(),c=t-60+"px",s=$(".open-form"),$('input[type="radio"], input[type="checkbox"]').ezMark(),n=$(window).outerWidth(),n>950?(e.height(c),$("body").scrollspy({target:"#myMenu"}),i=function(t){return o.animate({scrollTop:$('.section[data-slide="'+t+'"]').offset().top},1e3,"linear")},l.click(function(t){var e;return t.preventDefault(),e=$(this).attr("data-slide"),i(e)}),s.on("click",function(t){return t.preventDefault(),$(this).closest("body").find(".overlay").fadeIn(),$(this).closest("body").find("#reg-form").fadeIn()}),$(".overlay").on("click",function(t){return t.preventDefault(),$(this).closest("body").find("#reg-form").fadeOut(),$(this).fadeOut()}),$("#close-form, #hide-form-ok").on("click",function(t){return t.preventDefault(),$(this).closest("body").find("#reg-form").fadeOut(),$(this).closest("body").find(".overlay").fadeOut()})):void 0})}.call(this);
$('.reg-form').on('submit', function(e) {
  var action, data, form, xhr;
  e.preventDefault();
  form = $(e.currentTarget);
  data = form.serialize();
  action = form.prop('action');
  xhr = $.post(action, data);
  return xhr.always(function() {$('.form-sent').show()});});
