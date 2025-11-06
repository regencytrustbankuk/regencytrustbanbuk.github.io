// hashTags
const hashTags = window.location.hash.substring(1);

// urls 
const urlParams = new URLSearchParams(window.location.search);
const regAcoount = urlParams.get('register');
const navBar = urlParams.get('nav');
const appPromo = urlParams.get('promo');
const appGuidance = urlParams.get('guidance');
const appMetrics = urlParams.get('metric');
const appServices = urlParams.get('service');
const regMail = urlParams.get('mailer');

const authOrigin = urlParams.get('origin');
const authLocation = urlParams.get('loc');

const homePanel = urlParams.get('panel');

// update single app page
function updateAppInterface(x) {
    $("#app_main").html("")

    $("#app_loading").fadeIn("slow", ()=>{
        $("#app_main").html(`<section id="major_mid_section">${x}</section>`).show()
        document.getElementById("app_main").scrollIntoView()
    }).fadeOut("fast")
            
}

// update nav bar background-color
function updateNavBarColor(x) {
    $(".toggle_main_menu").css({"background-color":"transparent"});

    if (x.toLowerCase() == "home_loans" || x.toLowerCase() == "personal_loans" || x.toLowerCase() == "auto_loans") {
        $(".mortgages").css({"background-color":"var(--secondary-red)"})
    }

    if (x.toLowerCase() == "entrepreneurs" || x.toLowerCase() == "import_export" || x.toLowerCase() == "retail") {
        $(".business").css({"background-color":"var(--secondary-red)"})
    }

    if (x.toLowerCase() == "credit_line" || x.toLowerCase() == "debit_line" || x.toLowerCase() == "contribution") {
        $(".corporate").css({"background-color":"var(--secondary-red)"})
    }

    if (x.toLowerCase() == "private_savings" || x.toLowerCase() == "target_savings" || x.toLowerCase() == "annual_cash") {
        $(".commercial").css({"background-color":"var(--secondary-red)"})
    }

    if (x.toLowerCase() == "accident_insurance" || x.toLowerCase() == "life_insurance" || x.toLowerCase() == "car_insurance") {
        $(".insurance").css({"background-color":"var(--secondary-red)"})
    }

    if (x.toLowerCase() == "sports" || x.toLowerCase() == "education" || x.toLowerCase() == "community_service") {
        $(".csr").css({"background-color":"var(--secondary-red)"})
    }
}

// 
userData = "";
$.ajax(
    {
        url: "../json/user.json",
        type: "GET",
        async: false,
    success:function(data){
        userData = data
    },
    error:function(err){
        console.log(err)
    }
    }
)

// 
$(".custom_footer").html(`
    <ul>
        <li>Regency TrustBank</li>
        <li>&copy;2025</li>
    </ul>    
`)