
function fillAddress(){
    var address = window.prompt("Enter address: ");
    var lineNum = address.split(/\r\n|\r|\n/).length;
    address = address.replace(",","");
    var array = address.replace(/\r/g, "").split(/\n/);

    document.querySelector('[data-test-id="EXPAND_SHIPPING_ADDRESSES"]').click();
    setTimeout(function(){
        document.querySelector('[data-test-id="GET_ADDRESS_FORM"]').removeAttribute("data-test-id");
        document.querySelector('[data-test-id="GET_ADDRESS_FORM"]').click();
    setTimeout(function(){  
        
        if(lineNum == 3){
            array1 = array[0].split(" ");
            array2 = array[2].split(" ");
        
            name(array1);
            document.getElementById('addressLine1').value = array[1];
            document.getElementById('addressLine2').value = "";
            city(array2);
    

        } else{
            array1 = array[0].split(" ");
            array2 = array[3].split(" ");
        
            name(array1);
            document.getElementById('addressLine1').value = array[1];
            document.getElementById('addressLine2').value = array[2];
            city(array2);
        }
        
        setTimeout(function(){
            document.querySelector('[data-test-id="EDIT_ADDRESS_SUBMIT"]').click();
            setTimeout(function(){
                alert(address);
                setMessage();
            }, 2000);
        }, 2000);
        
    }, 2000);
        
    }, 2000);
}

function name(nameLine){
    console.log(nameLine);
    if (nameLine.length == 1){
        document.getElementById('firstName').value = array1[0];
        document.getElementById('lastName').value = ".";
    }
    else if (nameLine.length == 2){
        document.getElementById('firstName').value = array1[0];
        document.getElementById('lastName').value = array1[1];
    }
    else if (nameLine.length == 3){
        document.getElementById('firstName').value = array1[0];
        document.getElementById('lastName').value = array1[1] + " " + array1[2];
    }

}
function selectCity(city){
    if(city.length == 2){
        document.getElementById('stateOrProvince').value = city;
    }
    else{
        for(var i = 0; i < document.getElementById("stateOrProvince").length;i++){
            if(document.getElementById("stateOrProvince").options[i].value == city){
                document.getElementById("stateOrProvince").selectedIndex = i;
            }
        }
    }
}

function city(addressLine){
    if(addressLine.length >= 4){
        document.getElementById('city').value = addressLine[0] + " " + addressLine[1];
        selectCity(addressLine[2]);
        document.getElementById('postalCode').value = addressLine[3];
    }
    else{
        document.getElementById('city').value = addressLine[0];
        selectCity(addressLine[1]);
        document.getElementById('postalCode').value = addressLine[2];
    }
}

fillAddress();

function setMessage(){
    setTimeout(function(){
        document.querySelector('[data-test-id="MESSAGE_TO_SELLER_OPEN"]').click();
        alert("Thank you for this item! This is being sent to someone else, so please do not include any invoices or ebay materials. Thanks!");
    }, 6000);
  
}


