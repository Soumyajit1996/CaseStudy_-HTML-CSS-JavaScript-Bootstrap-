//var userInput=document.getElementById("searchdata").value;
// function carTable(){
//     // if(userInput){
//         //     init(userInput);
//         // }
//         // else{
//             //     alert("Search Bar not be blank");
//             // }
//         }
function carTable(){
    if(localStorage.length!=0){
        var userInput=document.getElementById("searchdata").value;
        if(car.licensenumber==userInput){
            prepearTableCell(1,car.ownername,
                car.carname,
                car.licensenumber,
                car.entrydate,
                car.exitdate);
        }
        else{
            alert("No car Found...Sorry");
        }
    }
    else{
        alert("No Data Found");
    }
}

function prepearTableCell(index,ownername,carname,licensenumber,entrydate,exitdate){
    var table=document.getElementById("cartable");
    var row=table.insertRow();

    var ownerNameCell=row.insertCell(0);
    var carNameCell=row.insertCell(1);
    var licenseNumberCell=row.insertCell(2);
    var dateEntryCell=row.insertCell(3);
    var dateExitCell=row.insertCell(4);
    

    ownerNameCell.innerHTML=ownername;
    carNameCell.innerHTML=carname;
    licenseNumberCell.innerHTML=licensenumber;
    dateEntryCell.innerHTML=entrydate;
    dateExitCell.innerHTML=exitdate;
    actionCell.innerHTML="<button onclick='return deleteTableRow("+index+")'>Delete</button>";
}
function deleteTableRow(index){
        var table=document.getElementById("cartable");
        table.deleteRow(index);
        localStorage.removeItem(index.toString());
        return false;
    }