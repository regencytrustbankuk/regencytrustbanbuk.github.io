// 

if (regAccount != null && regMail != null) {

    let regPage = `
        <section id="reg_page_container">
            <h1>Account Registration</h1>

            <div id="reg_user_msg">
                <h2>Hi, ${atob(regAccount)}</h2>

                <p>We have received for request to open Banking account with us.</p>
                <p>Our <b>Customer Care</b> unit will review your documents and get back to via your e-mail <i><b>${atob(regMail)}</b></i></p>
                <p><strong>Thank you.</strong></p>
            </div>

            <div id="redirect_home_page">
                <a href="../"><< Go Back</a> 
                <p id="redirect_counter">9</p>  
            </div>
        
        </section>
        
    `;

    $("#regApp").html(regPage)
    
    // 
    let timer = 9
    const countDown = setInterval(() => {
        timer--

        if (timer < 0) {
            clearInterval(countDown)
           location.replace("../") 
        }
        else{
             $("#redirect_counter").text(timer)
        }

    }, 1500);
}
else{
    location.replace("../")
}
