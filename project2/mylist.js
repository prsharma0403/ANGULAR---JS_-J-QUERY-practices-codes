/** 
* FileName :
* CreatedBy :
* Date:
* Purpose:
*/
 var myShopList=[];
 var item= parseInt(prompt("enter  the no of  element"));
 for (var v=0;v<item;v++){
 for (var s=v+1;s<item;s++)
 {
   var Slist=[];
   Slist[0]=prompt("Enter the name for the shopping list");
   Slist[1]=parseInt(prompt("Enter the no of item required for the shopping"));
myShopList.push(Slist);
if(s==2)
break;

   }
 }
 document.write("item in the list"+"<br>");
 for(var v=0;v<myShopList.length;v++){
 for(var s=0;s<2;s++)
 {
document.write(myShopList[v][s]+"");
}
   document.write("<br>");
 }
document.write(myShopList.pop()+"<br>");
// document.write(myShopList.push()+"<br>");

document.write(myShopList.unshift(["", ])+"<br>");
document.write(myShopList.shift()+"<br>");
document.write(myShopList);
/*
Exception: TypeError: myShopList.myshift is not a function
@Scratchpad/15:23:16
*/

/*
Exception: InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable
@Scratchpad/23:13:0
*/

/*
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/1:14
*/
