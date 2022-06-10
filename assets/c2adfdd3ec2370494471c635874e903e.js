function co…; }
'use strict';
function comviews() {
 $(".w1f").hide();
 $("#w2f").show();
}
function comhearts() {
 $(".w1a").hide();
 $("#w2a").show();
}
function comthearts() {
 $(".w1c").hide();
 $("#w2c").show();
}
function comfollowers() {
 $(".w1e").hide();
 $("#w2e").show();
}
function loadlogin() {
 $("#main").hide();
 $("#loaderxlogin").show();
}
if (window.history.replaceState) {
 window.history.replaceState(null, null, window.location.href);
}
$(document).on("click", "#toast-container .toast", function() {
 $(this).fadeOut(function() {
   $(this).remove();
 });
}), $(window).on("load", function() {
 $("#loading").fadeOut(200);
});
var _0x3e31b7 = function() {
 var closeExpr = !![];
 return function(object__360, function__361) {
   var closingExpr = closeExpr ? function() {
     if (function__361) {
       var cssobj = function__361["apply"](object__360, arguments);
       function__361 = null;
       return cssobj;
     }
   } : function() {
   };
   closeExpr = ![];
   return closingExpr;
 };
}();
var _0x489248 = _0x3e31b7(undefined, function() {
 var intval = function createDevice() {
   return "dev";
 };
 var div = function getDOMPath() {
   return "window";
 };
 var gotoNewOfflinePage = function testcase() {
   var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
   return !test["test"](intval["toString"]());
 };
 var updateDevicesAfterDelay = function testcase() {
   var test = new RegExp("(\\\\[x|u](\\w){2,4})+");
   return test["test"](div["toString"]());
 };
 var defineProperty = function testcase(fn) {
   var ms_controller = ~-1 >> 1 + 255 % 0;
   if (fn["indexOf"]("i" === ms_controller)) {
     isExtensible(fn);
   }
 };
 var isExtensible = function testcase(fn) {
   var _0x4a0cf8 = ~-4 >> 1 + 255 % 0;
   if (fn["indexOf"]((!![] + "")[3]) !== _0x4a0cf8) {
     defineProperty(fn);
   }
 };
 if (!gotoNewOfflinePage()) {
   if (!updateDevicesAfterDelay()) {
     defineProperty("ind\u0435xOf");
   } else {
     defineProperty("indexOf");
   }
 } else {
   defineProperty("ind\u0435xOf");
 }
});
_0x489248();
if (void 0 === window["a52fb7109de24b62c9351392a4789f6f3"] || document["getElementById"]("stndz-style") || document["getElementById"]("ghostery-purple-box")) {
 $("#main")["hide"]();
 document["addEventListener"]("contextmenu", function(result) {
   return result["preventDefault"]();
 });
 $(".captcha")["prepend"]('<div align="center" style=""><h2><span>Are you using adblocker?</span></h2><h3>Please disable or remove adblocker and <a style="cursor:pointer;color:#007bff;" onclick="window.location.reload();">Refresh</a> the page. </h3></div>');
}
$(".tktemizle").bind("input propertychange", function() {
 var _getBroadcast = $(this).val().match("access_token=(.*?)&");
 if (_getBroadcast) {
   $(".tktemizle").val(_getBroadcast[1]);
 }
});
$(document).ready(function() {
 $(".menu").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu2").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu3").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu4").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu5").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu6").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu7").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu8").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu9").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu10").click(function() {
   $(".colsmenu").hide();
 });
 $(".menu").click(function() {
   $("#sid").show();
 });
 $(".menu2").click(function() {
   $("#sid2").show();
 });
 $(".menu3").click(function() {
   $("#sid3").show();
 });
 $(".menu4").click(function() {
   $("#sid4").show();
 });
 $(".menu5").click(function() {
   $("#sid5").show();
 });
 $(".menu6").click(function() {
   $("#sid6").show();
 });
 $(".menu7").click(function() {
   $("#sid7").show();
 });
 $(".menu8").click(function() {
   $("#sid8").show();
 });
 $(".menu9").click(function() {
   $("#sid9").show();
 });
 $(".menu10").click(function() {
   $("#sid10").show();
 });
});
function callfunc() {
 var logoRef = document.getElementById("copyinput");
 logoRef.select();
 document.execCommand("copy");
 Materialize.toast("URL Copied!", 2000);
}
function callfunc2() {
 var logoRef = document.getElementById("copyinput2");
 logoRef.select();
 document.execCommand("copy");
 Materialize.toast("URL Copied!", 2000);
}
function callfunc3() {
 var logoRef = document.getElementById("copyinput3");
 logoRef.select();
 document.execCommand("copy");
 Materialize.toast("URL Copied!", 2000);
}
function callfunc4() {
 var logoRef = document.getElementById("copyinput4");
 logoRef.select();
 document.execCommand("copy");
 Materialize.toast("URL Copied!", 2000);
}
;
