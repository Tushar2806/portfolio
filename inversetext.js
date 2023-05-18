let str = '';
let str1 = '';
str = prompt('enter a sentence:');
let i = str.length;
for(let a = i-1 ; a>=0; a--)
{
   str1= str1+str[a];
}
console.log(str1);

