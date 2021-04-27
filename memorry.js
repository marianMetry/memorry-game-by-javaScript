var count=0, oddName="", oddId="" ;     
function myselect(id,name) {
    "use strict";
    count++;
    document.getElementById(id).style.display = "block"; 

    if (count%2 == 0)
    {
        
        if(name === oddName)
        {
            document.getElementById(id).style.display = "block"; 
        } 
        else
        {
        setTimeout(function(){ 
        document.getElementById(id).style.display = "none"; 
        document.getElementById(oddId).style.display ="none"; }, 1000);
         
        
        }
              
        
        
   }
    else
    { 
        oddName = name;
        oddId=id;
        document.getElementById(id).style.display = "block";
    }

    
        
    
}
get_random = function (list) {
return list[Math.floor((Math.random()*list.length))];
}
alert(get_random([2,3,5]));
