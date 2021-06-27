function changecontent(){
    let x=document.getElementById("know-more"); 
    
     if(x.style.display!="block")
{
    x.style.display="block";
}
else{
    
 x.style.display="none";
}
    
}

function validation(){

    let x=document.getElementById("name-input").value
    let y=document.getElementById("email-input").value
    let z=document.getElementById("batch-input").value
    if(x=="")
    {
    document.getElementById("name-validation").style.display="block";
    }
   
    if(y=="")
    {
    document.getElementById("email-validation").style.display="block";
    }

    if(z=="None")
{
document.getElementById("batch-validation").style.display="block";
}
if(x||y||z=="")
{
    return false;
}


}