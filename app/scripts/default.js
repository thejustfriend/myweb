// Generated by CoffeeScript 1.6.3
(function(){var e;e=skrollr.init({edgeStrategy:"set",easing:{WTF:Math.random,inverted:function(e){return 1-e}}});$(document).ready(function(){return $("[role=navigation] > .primary > li.current_page").each(function(){var e;e=$(this).attr("page");return $(this).parents("[role=navigation]").find(".primary-bg").find("."+e).css("display","block")})});$(window).on("scroll",function(){return $("#location").html($(window).scrollTop())});$(window).load(function(){return $(".loading").delay(500).fadeOut(1e3)})}).call(this);