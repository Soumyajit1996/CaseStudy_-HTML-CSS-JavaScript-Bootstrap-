
function onRegisterPressed(){
    var owner=document.getElementById("ownername").value;
    var car=document.getElementById("carname").value;
    var licenseNumber=document.getElementById("licensenumber").value;
    var entryDate=document.getElementById("entrydate").value;
    var exitDate=document.getElementById("exitdate").value;
    var carObj={
        ownername:owner,
        carname:car,
        licensenumber:licenseNumber,
        entrydate:entryDate,
        exitdate:exitDate
    };
    
    localStorage.setItem("1",JSON.stringify(carObj));

    //clear Car Details

    document.getElementById("ownername").value="";
    document.getElementById("carname").value="";
    document.getElementById("licensenumber").value="";
    document.getElementById("entrydate").value="";
    document.getElementById("exitdate").value="";
    alert("Data Insered");
    return false;
}