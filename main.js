function aleto(){
    var nam,em,ph,q;
    nam=document.getElementById("nam").value;
    em=document.getElementById("em").value;
    ph=document.getElementById("ph").value;
    q=document.getElementById("mes").value;
    if(nam.length>0 && em.length>0 && ph.length>0 && q.length>0){
        alert("YOUR QUERY IS RECIEVED")
    }
   
}
function login(){
    var id,pass;
    id=document.getElementById("us").value;
    pass=document.getElementById("pass").value;
    if(id=="sriram" && pass=="6132"){
        return true;
    }
    else{
        alert("ENTER LEGIT ID AND PASSWORD")
        return false;
    }
}
