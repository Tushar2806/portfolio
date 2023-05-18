let a = prompt("enter first number: ");
let b = prompt("enter second number");
for(let i = 1 ; i<=100; i = i+1 )
{
   if( i%a == 0)
{
      
      if( i%b ==0)
      {
         console.log("fizz "+ "buzz");
      }
      else{
         console.log("fizz");
      }
}
   else if(i%b == 0)
 { 
   console.log("buss");
 }

else
{
   console.log(i)
}
  }

