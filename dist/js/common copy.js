"use strict";$(".header").load("./header.html"),$(".footer").load("./footer.html"),$(".header").on("mouseover",".y-gwc",function(){$(".y-NavDown").show()}),$(".header").on("mouseout",".y-gwc",function(){$(".y-NavDown").hide()}),$(".header").on("mouseover",".y-gzw",function(){$(".y-ewm").show()}),$(".header").on("mouseout",".y-gzw",function(){$(".y-ewm").hide()}),$(".header").on("mouseover",".y-dws",function(){$(".y-denglu").show()}),$(".header").on("mouseout",".y-dws",function(){$(".y-denglu").hide()}),$(".header").on("mouseover",".search-y",function(){$(".y-search").slideDown(400)}),$(window).scroll(function(){200<=$(window).scrollTop()?$(".y-nav").addClass("cur"):$(".y-nav").removeClass("cur")});