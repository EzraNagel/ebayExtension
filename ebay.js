
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
        document.getElementById('addressLine2').value = "";
        city(array2);
        document.getElementByDataTestId('')

    } else{
        array2 = array[3].split(" ");
    
        document.getElementById('firstName').value = array1[0];
        document.getElementById('firstName').value = array1[1];
        document.getElementById('addressLine1').value = array[1];
        document.getElementById('addressLine2').value = array[2];
        city(array2);
    }
    message();
}

function message(){
    Id = document.querySelector("*[data-test-id='MESSAGE_TO_SELLER_TEXT_AREA']").getAttribute("id");
    document.getElementById(Id).value = 'Thank you for this item! This is being sent to someone else so please do not include any invoices or ebay materials. Thanks!';
}

function city(addressLine){
    if(addressLine.length >= 4){
        document.getElementById('city').value = addressLine[0] + " " + addressLine[1];
        document.getElementsByName('stateOrProvince')[0].value = addressLine[2];
        document.getElementById('postalCode').value = addressLine[3];
    }
    else{
        document.getElementById('city').value = addressLine[0];
        document.getElementById('stateOrProvince')[0].value = addressLine[1];
        document.getElementById('postalCode').value = addressLine[2];
    }
}

fillAddress();
