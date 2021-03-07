var p = document.querySelector('p');
var but1 = document.getElementById('up');
var but2 = document.getElementById('down');
var image = document.createElement('img');
document.body.appendChild(image);
var counter = 0 ;
but1.addEventListener('click', function count(){
    counter ++;
    p.innerHTML = counter ;
    if(counter == +10){
   
    image.setAttribute("src","ex3/emoji1.jpg");
    }

})
but2.addEventListener('click', function count(){
    counter --;
    p.innerHTML = counter ;
    if(counter == -10){
        
    image.setAttribute("src","ex3/image/imoji2.jpg");
    }
    
})
