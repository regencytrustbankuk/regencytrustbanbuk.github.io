// 
if (localStorage.hasOwnProperty("bankAPP")) {
    location.replace("./dashboard.html")
}

// 
if (authOrigin == null || authLocation == null) {
    location.replace("../")
}

// 
const inputs = document.querySelectorAll(".inputs")

// 
inputs.forEach(input => {
    input.addEventListener('keyup', ()=>{

        if (input.value.length >= 6) {
            $("#acount_btn").css({"visibility":"visible"})
        }
        else{
            $("#acount_btn").css({"visibility":"hidden"})
        }

        // 
        if (inputs[0].value.length > 12) {
            const accountNum = inputs[0].value.substring(0, inputs[0].value.length - 1);
            inputs[0].value = accountNum
        }

        if (isNaN(parseInt(inputs[1].value))) {
            inputs[1].value = ""
            inputs[1].style.borderColor = "red"
            return
        }

        if (inputs[1].value.length > 6) {
            const passCode = inputs[1].value.substring(0, inputs[1].value.length - 1);
            inputs[1].value = passCode
        }
    })
});

// 
$("#auth_form").on('submit', (e)=>{
    e.preventDefault();
    // 
    if (parseInt($("#account_num").val()) != parseInt(userData.accountNumber)) {
        $("#account_num").css({"border-color":"red"})
        return
    }
    else{
        $("#account_num").css({"border-color":"gray"})
    }

    // 
    if (parseInt($("#account_pin").val()) != parseInt(userData.passCode)) {
        $("#account_pin").css({"border-color":"red"})
        return
    }
    else{
        $("#account_pin").css({"border-color":"gray"})
    }

    let loginDetail = {};
    loginDetail.id =  userData.id;
    loginDetail.firstName = userData.firstName;
    loginDetail.middleName = userData.middleName;
    loginDetail.lastName = userData.lastName;
    loginDetail.email = userData.email;
    loginDetail.dateBirth = userData.dateBirth;
    loginDetail.phoneNumber = userData.phoneNumber;
    loginDetail.homeAddress = userData.homeAddress;
    loginDetail.accountNumber = userData.accountNumber;
    loginDetail.passCode = userData.passCode;
    loginDetail.pinCode = userData.pinCode;
    loginDetail.photo = userData.photo;
    loginDetail.balance = userData.balance;
    loginDetail.currency = userData.currency;
    loginDetail.currencySymbol = userData.currencySymbol;
    loginDetail.customerCare = userData.customerCare;

    localStorage.setItem('bankAPP', JSON.stringify(loginDetail))

    location.replace("./dashboard.html")
})


// 
let togglePass = document.getElementById("account_pin")
function changePassStatus(x) {
    if (togglePass.type === "password") {
        $(x).attr('src', '../icons/show.svg')
        togglePass.type = "text"
    }
    else{
       $(x).attr('src', '../icons/hide.svg')
        togglePass.type = "password" 
    }
}