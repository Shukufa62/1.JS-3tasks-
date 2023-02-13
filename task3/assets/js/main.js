var button=document.getElementById('btn');
var body=document.getElementById('bd');

function Turn(){
    if(body.style.backgroundColor==='black')
    {
       body.style.backgroundColor='white'
       button.innerHTML='Dark Mode'
       body.style.color='black'

    }
    else{
        body.style.backgroundColor='black'
       button.innerHTML='Light Mode'
       body.style.color='white'


    }


}
   
