
function fillAddress(){
    var address = window.prompt("Enter address: ");
    var lineNum = address.split(/\r\n|\r|\n/).length;
    address = address.replace(",","");
    var array = address.replace(/\r/g, "").split(/\n/);


    if(lineNum == 3){
        array1 = array[0].split(" ");
        array2 = array[2].split(" ");
        
        document.getElementById('firstName').value = array1[0];
        document.getElementById('lastName').value = array1[1];
        document.getElementById('addressLine1').value = array[1];
        document.getElementById('city').value = array2[0];
        document.getElementById('stateOrProvince').value = array2[1];
        document.getElementById('postalCode').value = array2[2];
    } else{
        array2 = array[3].split(" ");
    
        document.getElementById('firstName').value = array1[0];
        document.getElementById('firstName').value = array1[1];
        document.getElementById('addressLine1').value = array[1];
        document.getElementById('addressLine2').value = array[2];
        document.getElementById('city').value = array2[0];
        document.getElementById('stateOrProvince').value = array2[1];
        document.getElementById('postalCode').value = array2[2];
    }
}

fillAddress();
