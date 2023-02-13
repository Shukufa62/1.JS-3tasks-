var partofday=new Date().getHours();


console.log(partofday);
if(partofday>=6 && partofday<=12){
    alert("Good Morning!")
   document.body.style.backgroundColor='grey'
   document.body.style.color='purple'

}
else if (partofday>=13 && partofday<=19){
    alert('Have a good day!')
   document.body.style.backgroundColor='yellow'
   document.body.style.color='red'

    
}
else if(partofday>=20 && partofday<=24){
    alert('Good evening!')
    document.body.style.backgroundColor='blue'
    document.body.style.color='yellow'

  
}
else{
    alert("Good night")
    document.body.style.backgroundColor='navy'
   
    document.body.style.color='white'
}