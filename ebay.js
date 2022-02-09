
function fillAddress(){
    var address = window.prompt("Enter address: ");
    var lineNum = address.split(/\r\n|\r|\n/).length;
    address = address.replace(",","");
    var array = address.replace(/\r/g, "").split(/\n/);


    if(lineNum == 3){
        array2 = array[2].split(" ");

        document.getElementById('s0-0-16-6-name-field-name-field').value = array[0];
        document.getElementById('s0-0-16-6-address-autocomplete-field-addressLine1-field-addressLine1-field').value = array[1];
        document.getElementById('s0-0-16-6-city-field-city-field').value = array2[0];
        document.getElementsByName('stateDD')[0].value = array2[1];
        document.getElementById('s0-0-16-6-zipCode-field-zipCode-field').value = array2[2];
    } else{
        array2 = array[3].split(" ");
    
        document.getElementById('s0-0-16-6-name-field-name-field').value = array[0];
        document.getElementById('s0-0-16-6-address-autocomplete-field-addressLine1-field-addressLine1-field').value = array[1];
        document.getElementById('s0-0-16-6-addressLine2-field-addressLine2-field').value = array[2];
        document.getElementById('s0-0-16-6-city-field-city-field').value = array2[0];
        document.getElementsByName('stateDD')[0].value = array2[1];
        document.getElementById('s0-0-16-6-zipCode-field-zipCode-field').value = array2[2];
    }
}

fillAddress();