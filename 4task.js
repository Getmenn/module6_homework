let first =prompt('Введите первое число');
let second =prompt('Второе число');
let integer =first;
let rez=(second+1-first)*1000;
function varInterval(a,b)
{
  if(integer<=second)
  {
    console.log(integer);
    integer++;
  }
  
}

 const intervalId = setInterval(varInterval,1000,first,second);
setTimeout(function(){
  clearInterval(intervalId)
},rez);





