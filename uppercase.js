let str1 = '';
      let str2 = '';
      let str3 = '';
      let final= ''; 
      let array= [];
      let array1= [];
      function capitalise(str1)
      {
         str2 = str1[0].toUpperCase();
          str3 = str1.slice(1,str1.length);
          str3= str3.toLowerCase();
          let a = str2 + str3;
          return a
      }
      str = prompt('enter a sentence:');
      
     
      
       array= str.split(" ");
       console.log(array);
       let l = array.length;
       console.log(l);
       for(let b = 0 ; b<l ; b++)
       {
          str1= array[b]
          final = final + capitalise(str1 +' ');
          
         }
         console.log(final);
      
         