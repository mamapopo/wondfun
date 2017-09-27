(function(){
    var docEl=document.documentElement;
    var resize='orientationchange' in window ? 'orientationchange' : 'resize';
    var setRem=function(){
        var screenWidth=docEl.clientWidth||window.screen.width;
        docEl.style.fontSize=(180*screenWidth/1080)+'px';
        console.log(docEl.style.fontSize);
    }
    setRem();
})();