// build time:Thu Apr 16 2020 09:42:01 GMT+0800 (GMT+08:00)
window.onload=function(){var e=document.title;var t;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","../../images/failure.png");$('[rel="shortcut icon"]').attr("href","../../images/failure.png");document.title="(●—●)喔哟，崩溃啦！";clearTimeout(t)}else{$('[rel="icon"]').attr("href","../../images/favicon-32x32-next.png");$('[rel="shortcut icon"]').attr("href","../../images/favicon-32x32.png");document.title="(/≧▽≦/)咦！页面又好了！";t=setTimeout(function(){document.title=e},2e3)}})};
//rebuild by neat 