// 
$(document).ready(()=>{
    $("#app_loading").fadeOut("slow", ()=>{
        // check url to change nav background

        if (regAcoount !=null) {
            // check localstorage for login details
            
        }
        else if (navBar !=null) {
             updateNavBarColor(navBar)
            updateAppInterface(navBar)
        }
        else if (appPromo !=null) {
            updateAppInterface(appPromo)
        }
        else if (appGuidance !=null) {
            updateAppInterface(appGuidance)
        }
        else if (appMetrics !=null) {
            updateAppInterface(appMetrics)
        }
        else if (appServices !=null) {
            updateAppInterface(appServices)
        }
        else{
            $("#app_main").show()
        }
    })
})

// validate email
const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// validate phone
const phoneRegex = /^\+?\d{10,}$/;

// 
const card = document.getElementById("3d-card");
const input_fronts = document.querySelectorAll(".input_front");
const input_backs = document.querySelectorAll(".input_back");
const checkBox = document.getElementById("confirm_checkbox")

function openRegister() {
    // 
    input_fronts.forEach(input_front => {
       if (input_front.value == "") {
              input_front.style.borderColor = "red";
        }
        else{
           input_front.style.borderColor = "silver"; 
        }
    });

    if ($("#firstName").val() == "" || $("#middleName").val() == "" || $("#lastName").val() == "" || $("#emailAddress").val() == "") {
        return   
    }

    if (!validEmail.test($("#emailAddress").val())) {
       $("#emailAddress").css({"border-color":"red"})
       return 
    }
    else{
        $("#emailAddress").css({"border-color":"silver"})
    }

    // 
    card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
    // 
    card.style.transform = "rotateY(0deg)";
}

// 
$("#reg_form").on('submit', (e)=>{
    e.preventDefault()
    // 
    input_backs.forEach(input_back => {
       if (input_back.value == "") {
              input_back.style.borderColor = "red";
        }
        else{
           input_back.style.borderColor = "silver"; 
        }
    });

    if ($("#gender").val() == "" || $("#phone").val() == "" || $("#dateBirth").val() == "" || $("#id_number").val() == "") {
        return   
    }

    if (!phoneRegex.test($("#phone").val())) {
       $("#phone").css({"border-color":"red"})
       return 
    }
    else{
        $("#phone").css({"border-color":"silver"})
    }

    if (checkBox.checked == false) {
        $("#confirm_checkbox").css({"appearance":"none", "-webkit-appearance":"none", "border-color":"red"})
        return
    }

    $.get('./json/user.json', (res)=>{
        $("#app_loading").fadeIn()

        if (res) {
            location = `./login/register.html?register=${encodeURIComponent(btoa(res.lastName))}&mailer=${encodeURIComponent(btoa(res.email))}`
        }
        else{
            $("#app_loading").fadeOut("fast", ()=>{
                alert("Sorry, we are having server down-time")
            })
        }
    })
})

// 
$("#confirm_checkbox").on('click', ()=>{
    $("#confirm_checkbox").css({"appearance":"auto", "-webkit-appearance":"auto", "-moz-appearance":"auto"})
})

// marquee
$.get('./json/marquee.json', (res)=>{
    
    for (let i = 0; i < res.length; i++) {
        setTimeout(() => {
            $("#nav_marquee").append(`<span>${res[i].info}</span> `)
        }, i * 3000);
    }
});

// 
$("#mobileMenu").on('click', ()=>{
    $("#nav_mid").fadeToggle()
})

// 
if ($(window).innerWidth() <= 1030) {
    // change nav bar color
   const mobileNavBars = document.querySelectorAll(".toggle_main_menu")

   mobileNavBars.forEach(bar => {
        bar.addEventListener('click', ()=>{
            $(".toggle_main_menu").css({"background-color":"white", "color":"black"})
            $(bar).css({"background-color":"var(--secondary-red)", "color":"white"})

            let showNav = bar.getElementsByClassName("nav_float_menu")[0]

            $(".nav_float_menu").hide()
            $(showNav).show()
        })
   });
}



// 
// function dropMainMenu(x) {
//     return
//     let navMenu = x.parentElement
//     let navFloatMenu = navMenu.getElementsByClassName("nav_float_menu")[0]

//     // $(".toggle_main_menu").css({"background-color":"transparent"})
//         $(".nav_float_menu").css({"display":"none"})

//         $(navFloatMenu).fadeIn("slow")
// }
