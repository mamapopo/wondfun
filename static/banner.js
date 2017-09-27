window.onload=function(){
    var banner=document.getElementById('banner');
    var imgs=document.getElementById('imgs');
    function next(){
        var left=imgs.offsetLeft-banner.offsetWidth;
        console.log(left);
        var go=setInterval(function(){ 
           
        aleft=imgs.offsetLeft-10;
         imgs.style.left=aleft+'px';
         if(aleft<left) {
             clearInterval(go);
         }
   },30)   
       }
          setInterval(function(){
            next();

          },5000)
      
       
    }


    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                console.log(xhr.responseText);
            }
        }
    }
    xhr.open('GET','xxx',true);
    xhr.send();
   
   
