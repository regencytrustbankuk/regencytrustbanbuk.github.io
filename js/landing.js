// 
$(document).ready(()=>{
    // 
    $("#app_loading").fadeOut("slow", ()=>{
    // 
    let singlePage = "";
    const bankName = "Regency TrustBank";
    const bankCEO = "Brodie, Freya Finlay";
    const yearOpened = 1984;

    // updateAppInterface(`<section id="single_landing_page">${singlePage}</section>`)

        if (regAccount !=null) {
            // check localstorage for login details
        }
        else if (signUp !=null){
            if (localStorage.hasOwnProperty("bankAPP")) {
                location = "./login/dashboard.html";
            }
            else{
                location = "./"
            }
        } 
        else if (navBar !=null) {
            // nav bar color update
            updateNavBarColor(navBar);

            switch (navBar.toLowerCase()) {
                case 'home_loans':
                   singlePage = `

                        <h1> Home Loans</h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/home_loan.webp">
                        </div>

                        <div id="single_page_main_container">
                        
                            <section class="loan_mortage_contents">

                                <h3>First-Time Buyer Mortgage</h3>
                                
                                <div>
                                    <img src="./gallery/singles/loan_home3.avif">
                                    <span>
                                        <p class="singles_first_garagraph">
                                            The "Achieve the Unthinkable" Ad(Ideal for Digital Video/Social Media and First-Time Buyer Portals)Target Audience: Renters, young professionals, first-time buyers overwhelmed by the process.ElementContentHeadlineThe Key to Your First Home is Closer Than You Think.Body CopyStop paying your landlord's mortgage.
                                        </p>

                                        <p>
                                            [Your Bank Name] specialises in making the journey from renter to owner simple and supportive. Our dedicated First-Time Buyer team will walk you through your Agreement in Principle (AIP) and help you secure the deal that works for your budget.
                                        </p>

                                        <p>
                                            Unique Selling Point (USP)Specialist Mortgage Advisers: Free, expert one-to-one advice.Call to ActionStart with our 5-Minute 'How Much Can I Borrow?' Calculator.VisualA close-up of a hand turning a new key in a brightly painted front door.
                                        </p>
                                    </span>
                                </div>
                            </section>
                            
                            <section class="loan_mortage_contents">
                                <h3>Remortgage/Switching Deal</h3>

                                <div>
                                    <img src="./gallery/singles/loan_home2.avif">

                                    <span>
                                        <p class="singles_first_garagraph">
                                            Own your home, not your mortgage rate? Switch to ${bankName} and save with a better deal. Flexible terms, clear costs, and no hidden surprises... just smarter home financing.
                                        </p>

                                        <p>
                                            Room to grow? We’ve got the key. Whether you’re upsizing, renovating, or investing, our home loans are built around your goals. Quick decisions. Fair rates. Trusted service.
                                        </p>
                                    </span>
                                </div>
                            </section>

                            <section class="loan_mortage_contents">
                                <h3>General Brand/Stability</h3>
                                <div>
                                    <img src="./gallery/singles/loan_home1.avif">

                                    <span>
                                        <p class="singles_first_garagraph">
                                            The "Peace of Mind" for Homeowners and property investors valuing security and reliability. In today’s market, you need a mortgage partner you can rely on.
                                        </p>

                                        <p>
                                            At ${bankName}, stability is not a promise... it's our foundation. Whether you’re securing your first home or expanding your portfolio, we offer clear rates and the experienced, UK-based support you need for total confidence. 
                                        </p>

                                        <p>
                                            <b>What are you waiting for?</b> Choose from our range of fixed and flexible deals.
                                        </p>
                                    </span>
                                </div>
                            </section>
                        </div>
                    `; 
                break;

                case 'personal_loans':
                    singlePage = `

                        <h1> Personal Loans</h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/personal_loan.avif">
                        </div>

                        <div id="single_page_main_container">

                           <section>
                                <h2>Take Control of Your Goals with a Personal Loan</h2>
                                <p class="singles_first_garagraph">
                                    Ready to make that dream project a reality? Whether it's consolidating debt, financing a major purchase, or renovating your home, a ${bankName} Personal Loan offers the predictable, fixed-rate finance you need to move forward with confidence.
                                </p>

                                <strong>
                                    Borrow £1,000 – £50,000. Same-day funds. No hidden fees.
                                </strong>

                                <h3>Why choose a Horizon Bank Personal Loan?</h3>
                                
                                <div>
                                    <table>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Benefit</th>
                                        </tr>

                                        <tr>
                                            <td> <b>6.9% APR representative</b> </td>
                                            <td>One clear rate for loans £7,500–£25,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Instant decision</b> </td>
                                            <td>Know in 2 minutes online </td>
                                        </tr>

                                        <tr>
                                            <td> <b>Funds in 2 hours</b> </td>
                                            <td>If approved & signed before 3pm</td>
                                        </tr>

                                        <tr>
                                            <td> <b>No arrangement or early-repayment fees</b> </td>
                                            <td>Keep every penny you save</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Flexible 1–7 year terms</b> </td>
                                            <td>Monthly payments from £25</td>
                                        </tr>
                                    </table>

                                    <p>
                                        <i><b>Representative example:</b> £10,000 over 5 years at 6.9% APR (variable) = £197.66/month. Total repayable £11,859.60.</i>
                                    </p>
                                </div>
                            </section>

                            
                        
                            <section class="personal_loan_contents">

                                <h2>What can you use it for?</h2>

                                <div>
                                    <ul>
                                        <li>
                                            <b>Debt consolidation</b>  <span>Combine cards & loans into one lower payment</span>
                                        </li>

                                        <li>
                                            <b>Home improvements</b>  <span>New kitchen, extension, or energy-saving upgrades</span>
                                        </li>

                                        <li>
                                            <b>Car purchase</b>  <span>New or used, private sale or dealer</span>
                                        </li>

                                        <li>
                                            <b>Wedding or celebration</b>  <span>Make the day unforgettable</span>
                                        </li>

                                        <li>
                                            <b>Anything else</b>  <span>No questions asked</span>
                                        </li>
                                    </ul>
                                </div>

                                <hr>

                                <h3>Eligibility checker (30 seconds – no footprint)</h3>

                                <div>
                                    <ol>
                                        <li> <b>Age 18+</b> and permanent UK resident </li>

                                        <li> <b>Regular income</b> (employed, self-employed, pension) </li>

                                        <li> <b>Good credit history</b> (we’ll soft-search first) </li>

                                        <p>
                                            <i>Check our current rate now – won’t affect your credit score</i>
                                        </p>
                                    </ol>
                                </div>

                                <hr>

                                <h3>How it works</h3>

                                <div>
                                    <ol>
                                        <li> <b>Get a quote</b> – <span>100% online, 2-minute form</span> </li>

                                        <li> <b>See your rate</b> – <span>Personalised, no obligation</span> </li>

                                        <li> <b>Upload docs</b> – <span>Bank statements & ID (self-employed: 3 months)</span> </li>

                                        <li> <b>Sign digitally</b> – <span>Fast-track e-signature</span> </li>

                                        <li> <b>Money sent</b> – <span>Straight to your account</span> </li>
                                    </ol>
                                </div>

                                <hr>
                                
                                <h3>Repayment options</h3>

                                <div>
                                    <table>
                                        <tr>
                                            <th>Term</th>
                                            <th>£10,000</th>
                                            <th>Monthly</th>
                                            <th>Total</th>
                                        </tr>

                                        <tr>
                                            <td> <b>3 years</b> </td>
                                            <td>6.9% APR</td>
                                            <td>£308.66</td>
                                            <td>£11,111.76</td>
                                        </tr>

                                        <tr>
                                            <td> <b>5 years</b> </td>
                                            <td>6.9% APR</td>
                                            <td>£197.66</td>
                                            <td>£11,859.60</td>
                                        </tr>

                                        <tr>
                                            <td> <b>7 years</b> </td>
                                            <td>6.9% APR</td>
                                            <td>£149.32</td>
                                            <td>£12,542.88</td>
                                        </tr>
                                    </table>

                                    <p>
                                        <i>Repay early any time – zero penalties.</i>
                                    </p>
                                </div>
                                
                                <hr>

                                <h3>How to Apply in Three Simple Steps</h3>

                                <div>
                                    <ol>
                                        <li> <b>Calculate:</b> Use our online calculator to select the amount you need and your preferred repayment term to see your estimated monthly payments. </li>

                                        <li> <b>Apply:</b> Complete our secure online application form. It typically takes less than 10 minutes. </li>

                                        <li> <b>Receive:</b> Once approved and you've signed the agreement, the money is often transferred to your [Your Bank Name] account within 24-48 hours. </li>

                                        <p>
                                            <a href="./login/auth.html?origin=true&loc=true">Ready to start?</a>
                                        </p>
                                    </ol>
                                </div>

                            </section>

                        </div>
                    `;

                break;

                case 'auto_loans':
                    singlePage = `

                        <h1> Automobile/Vehicle Loans</h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/auto_loan.webp">
                        </div>

                        <div id="single_page_main_container">

                           <section>
                                <h3>Why choose a ${bankName} Auto Loan?</h3>
                                
                                <div>
                                    <table>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Benefit</th>
                                        </tr>

                                        <tr>
                                            <td> <b>6.4% APR representative</b> </td>
                                            <td>Fixed rate for new & used cars</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Borrow £3,000 – £100,000</b> </td>
                                            <td>Private sale, dealer, or auction</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Same-day payout</b> </td>
                                            <td>If approved & signed before 3pm</td>
                                        </tr>

                                        <tr>
                                            <td> <b>No deposit required</b> </td>
                                            <td>100% finance (subject to status)</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Repay over 1–7 years</b> </td>
                                            <td>Early settlement? Zero fees</td>
                                        </tr>
                                    </table>

                                    <p>
                                        <i><b>Eg:</b>£15,000 over 5 years at 6.4% APR (fixed) = £293.27/month. Total repayable £17,596.20.</i>
                                    </p>
                                </div>

                                <hr>

                                <h2>What can you finance?</h2>
                                <div>
                                    <table>
                                        <tr>
                                            <th>Vehicle type</th>
                                            <th>Max age at end of agreement</th>
                                            <th>Max mileage</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Cars</b> </td>
                                            <td>12 years</td>
                                            <td>120,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Vans/Light commercials</b> </td>
                                            <td>10 years</td>
                                            <td>150,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Motorbikes</b> </td>
                                            <td>8 years</td>
                                            <td>50,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Classic & prestige</b> </td>
                                            <td>Case-by-case</td>
                                            <td>No limit</td>
                                        </tr>  
                                    </table>

                                    <p>
                                        <i>Private sales welcome – we pay seller directly.</i>
                                    </p>
                                </div>

                                <h3>How it works</h3>

                                <div class="auto_loan_flex">

                                    <ol>
                                        <li>
                                            <b>Check your personalised rate</b>
                                         – 
                                         <span>See what you could borrow without affecting your credit score.</span>
                                         </li>
                                        
                                        <li>
                                            <b>Apply online</b>
                                         – 

                                         <span>Quick, secure, and easy-to-complete application process.</span>
                                        </li>

                                        <li>
                                            <b>Get your funds</b>
                                         – 
                                            <span>Once approved, the money can be in your account as soon as the next working day.</span>
                                         </li>

                                         <p>
                                            <i>
                                                You can then pay for your car outright or top up an existing deposit to make your dream car a reality.
                                            </i>
                                        </p>

                                        <a href="./login/auth.html?origin=true&loc=true">Want to <b>Sign</b> that dotted line?</a>
                                    </ol>

                                    
                                    <img src="./gallery/singles/auto_loan.avif">
                                </div>

                            </section>

                        </div>
                    `;

                break;

                case 'entrepreneurs':
                    singlePage = `

                        <h1> Entrepreneurs </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_enterprenurs.png">
                        </div>

                        <div id="single_page_main_container">

                           <section>
                                <h2>Support for Entrepreneurs</h2>
                                <p>
                                    From side-hustle to scale-up – Horizon Bank backs British business builders
                                </p>

                                <h3>Why Horizon Bank for Entrepreneurs?</h3>
                                
                                <div>
                                    <table>
                                        <tr>
                                            <td> <b>We get startups</b> </td>
                                            <td>What it means for you</td>
                                        </tr>

                                        <tr>
                                            <td> <b>No minimum turnover</b> </td>
                                            <td>Open a business account from Day 1 – even pre-revenue</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Same-day decisions</b> </td>
                                            <td>Personal loans up to £50,000 using bank statements only</td>
                                        </tr>

                                        <tr>
                                            <td> <b>12-month fee-free banking</b> </td>
                                            <td>£0 monthly fees on our Entrepreneur Current Account</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Dedicated startup team</b> </td>
                                            <td>UK-based advisors who’ve founded businesses themselves</td>
                                        </tr>

                                        <tr>
                                            <td> <b>£1,000 grant draw</b> </td>
                                            <td>Monthly prize for one new customer – no catch</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            
                        
                            <section class="personal_loan_contents">

                                <h2>Tailored products</h2>

                                <div class="personal_loan_float">
                                    <img src="./gallery/singles/trust_secured.png"> 
                                    <p class="singles_first_garagraph">
                                        Ready to make that dream project a reality? Whether it's consolidating debt, financing a major purchase, or renovating your home, we have a loan offers that is predictable, fixed-rate and is tailored to finance you and move you forward with confidence.
                                    </p>

                                    <p>
                                        We (${bankName}) understand that entrepreneurs are the engine of the UK economy. Starting, scaling, or innovating a business takes courage, and we're here to provide the financial foundations and expert guidance you need to turn vision into reality. We don't just offer accounts; we offer a partnership focused on your growth.
                                    </p>

                                    <p>
                                        <i>We offer unsecured loans designed to be simple, transparent, and built around your budget.</i>
                                    </p>
                                </div>
                            </section>
                                
                                <section class="personal_loan_contents">
                                <h3>Entrepreneur Current Account</h3>
                                <div>
                                    <ul>
                                        <li>Free for 12 months, then £7.50/month</li>

                                        <li>Free Faster Payments, Direct Debits, standing orders</li>

                                        <li>£500 interest-free overdraft (subject to status)</li>

                                        <li>Integrated with Xero, QuickBooks, FreeAgent</li>
                                    </ul>

                                    <p><b>Open in 8 minutes</b></p>
                                </div>

                                <hr>

                                <h3>Startup Loan</h3>
                                <div>
                                    <ul>
                                        <li> £1,000 – £50,000 </li>

                                        <li> 6.9% APR representative </li>

                                        <li> No business accounts needed – use 3 months’ personal bank statements </li>

                                        <li>Funds in 2 hours</li>
                                    </ul>

                                    <p>
                                        Eg: £15,000 over 5 years = £296.49/month. Total £17,789.40.
                                    </p>

                                    <strong>Check rate – no credit footprint</strong>
                                </div>

                                <hr>

                                <h3>Revenue-Based Advance (coming Q1 yearly)</h3>

                                <div>
                                    <ul>
                                        <li> Borrow 1–6 months’ turnover </li>

                                        <li> Repay as % of daily card sales </li>

                                        <li> No fixed payments – flexes with cashflow </li>
                                    </ul>

                                    <i>Register interest</i>
                                </div>

                                <hr>
                                
                                <h3>Business Credit Card</h3>
                                <div>
                                    <ul>
                                        <li> Up to £10,000 limit </li>

                                        <li> 0% on purchases for 6 months </li>

                                        <li> 1.5% cashback on all UK spend </li>
                                    </ul>
                                </div>
                            </section>

                            <section class="personal_loan_contents">

                                <h2>Success stories</h2>

                                <div class="singles_testimonies">
                                    <img src="./gallery/singles/enterprenuer2.avif">
                                    <span>
                                        <q>
                                            Raised £8k personal loan on a soft search – bought stock before my first trade show. Now turning over £180k.
                                        </q>

                                        <h4> — Jess T, Manchester (e-commerce)</h4>
                                    </span>
                                </div>

                                <div class="singles_testimonies">
                                    <img src="./gallery/singles/enterprenuer3.webp">
                                    <span>
                                        <q>
                                            Fee-free banking + £500 overdraft kept us afloat through VAT quarter.
                                        </q>

                                        <h4> — Aisha & Mo, Bristol (café)</h4>
                                    </span>
                                </div>

                            </section>

                            <section class="personal_loan_contents">

                                <h3>Ready to launch?</h3>

                                <div>
                                    <p class="singles_first_garagraph">
                                        Whether you’re at the idea stage or ready to expand, ${bankName} is here to back your ambition. We provide more than just a lending platform. Our specialised solutions help you manage risk and trade effectively, both domestically and internationally.
                                    </p>

                                    <ol>
                                        <li><b>Open account</b> – <span>100% online, verified in 5 minutes</span></li>
                                        <li><b>Speak to a founder</b> - <span>advisor – book a free 15-min</span> call</li>
                                        <li><b>Apply for funding</b> – <span>decision in 2 hours</span></li>
                                    </ol>

                                    <p>
                                        <b>Open a business account</b> or <b>Talk to our business team</b> today and take the next step in your entrepreneurial journey.
                                    </p>
                                    
                                    <p><a href="./login/auth.html?origin=true&loc=true">Get started?</a></p>
                                </div>

                            </section>

                        </div>
                    `;

                break;

                case 'import_export':
                    singlePage = `

                        <h1> Imports/Exports </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_exporters.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="import_export_contents">
                                <h2> Trade with Confidence: Import & Export Finance Solutions</h2>
                                <p>
                                    At ${bankName}, we understand that international trade is complex. Long supply chains, currency fluctuations, and varying payment terms can strain cash flow and introduce risk.
                                </p>

                                <p>
                                    Our dedicated suite of Trade Finance solutions is designed to provide your UK business with the working capital, risk mitigation, and security you need to import goods smoothly and export services globally with confidence.
                                </p>

                                <h3>Tailored Solutions for Importers & Exporters</h3>
                                
                                <div>
                                    <p>
                                        Whether you need finance to pay a foreign supplier or a guarantee that you will be paid for a large order, we have flexible products to bridge the gap in your trade cycle.
                                    </p>

                                    <ul>
                                        <h4>For Importers: Secure Your Supply Chain</h4>

                                        <li>
                                            <b>Import Letters of Credit (LCs):</b> Provide a guarantee of payment to your overseas supplier upon their presentation of specified shipping documents. This gives your supplier confidence and can help you negotiate better purchasing terms.
                                        </li>

                                        <li>
                                            <b>Import Trade Loans:</b> Short-term funding designed to bridge the gap between paying your supplier and receiving payment from your own customers. This keeps your working capital free for day-to-day operations.
                                        </li>

                                        <strong>Benefits</strong>
                                        <li>
                                            <b>Improve Supplier Relations:</b> Pay suppliers quickly, often leading to better pricing.
                                        </li>

                                        <li>
                                            <b>Manage Cash Flow:</b> Defer payment until goods are sold, freeing up immediate capital.
                                        </li>

                                        <h4>For Exporters: Guarantee Your Payment</h4>
                                        <li>
                                            <b>Export Letters of Credit (LCs):</b> Receive a guarantee from your customer's bank that payment will be made, provided you meet the terms of the LC. This is one of the most secure methods of payment in international trade.
                                        </li>

                                        <li>
                                            <b>Export Collections:</b> A trusted, flexible method where we act as a secure intermediary, only releasing the goods to the buyer once payment (or a promise of payment) is confirmed.
                                        </li>

                                        <li>
                                            <b>Invoice Finance for Exports:</b> Convert up to [mention percentage, e.g., 90%] of your export sales invoices into immediate working capital, without waiting for your international customers to pay.
                                        </li>

                                        <strong>Benefits:</strong>

                                        <li>
                                            <b>Mitigate Non-Payment Risk:</b> Significantly reduce the risk of buyer default.
                                        </li>

                                        <li>
                                            Accelerate Cash Flow: Unlock funds immediately to reinvest in your business and take on bigger orders.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        
                            <section class="import_export_contents">

                                <h2>Specialist Trade Risk & Working Capital Tools</h2>

                                <div class="personal_loan_float">
                                    <img src="./gallery/singles/import_export.avif"> 
                                    <p class="singles_first_garagraph">
                                        Beyond core lending products, we offer specialist instruments to further enhance your security and liquidity:
                                    </p>

                                    <h4>International Guarantees & Bonds</h4>

                                    <p>
                                        Reduce performance and financial risk by using our bank to issue Guarantees (e.g., bid, performance, or warranty bonds) on your behalf, providing assurance to your international counterparties.
                                    </p>

                                    <h4>Foreign Exchange (FX) Services</h4>

                                    <p>
                                        Protect your profit margins from the volatility of the currency markets. Our FX specialists can help you implement hedging strategies to secure exchange rates for future payments and receipts.
                                    </p>

                                    <h4>Access to UK Export Finance (UKEF) Schemes</h4>

                                    <p>
                                        As a key partner of UKEF, we can help eligible exporters access government-backed guarantees and insurance products, enabling you to take on larger, more ambitious contracts that might otherwise be considered too high-risk.
                                    </p>

                                    <h3>Your Expert Partner in Global Trade</h3>
                                    <p>
                                        International commerce requires specific expertise. Our dedicated Trade Finance Managers are on hand to provide guidance, whether you're new to importing or an experienced exporter entering a challenging market.
                                    </p>

                                    <p>
                                        <a href="./login/auth.html?origin=true&loc=true">Ready to grow your business beyond UK borders?</a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    `;

                break;

                case 'retail':
                    singlePage = `

                        <h1> SMEs/Retail Businesses </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_retailers.avif">
                        </div>

                        <div id="single_page_main_container">

                           <section class="retail_sme_contents">
                                <h2>SME Banking Solutions</h2>
                                <p>
                                    Running a small or medium-sized business comes with big ambitions and unique challenges. At ${bankName}, we are here to help your business thrive with financial solutions designed specifically for UK SMEs.
                                </p>

                                <p>
                                    Whether you’re just starting out, scaling up, or managing day-to-day operations, our SME Banking services provide the tools, support, and expertise you need to achieve your goals.
                                </p>

                                <h3>What we offer</h3>
                                
                                <div>
                                    <ul>
                                        <li>
                                            <h4>Business Accounts</h4>
                                            <p>
                                                Manage your finances with ease through our range of current accounts tailored for small and medium enterprises. Enjoy secure online banking, mobile access, and dedicated customer support.
                                            </p>
                                        </li>

                                        <li>
                                            <h4>Business Loans and Overdrafts</h4>
                                            <p>
                                                Access the funds you need to invest in new equipment, expand your team, or manage cash flow. Our flexible lending options are designed to suit your business plans and repayment capacity.
                                            </p>
                                        </li>

                                        <li>
                                            <h4>Merchant and Payment Solutions</h4>
                                            <p>
                                                Accept payments securely and efficiently; in person or online. We offer affordable card machines, online payment gateways, and fast settlements to keep your cash flow healthy.
                                            </p>
                                        </li>

                                        <li>
                                            <h4>Trade and Export Finance</h4>
                                            <p>
                                                Support your international ambitions with funding solutions for importers and exporters. Manage currency risks and bridge cash flow gaps with confidence.
                                            </p>
                                        </li>

                                        <li>
                                            <h4>Business Savings and Deposits</h4>
                                            <p>
                                                Make your surplus cash work harder. Choose from instant-access or fixed-term deposit accounts with competitive interest rates.
                                            </p>
                                        </li>
                                    </ul>

                                    <p>
                                        <a href="./login/auth.html?origin=true&loc=true">Ready to take your business further?</a>
                                    </p>

                                </div>
                            </section>
                        </div>
                    `;
                break;

                case 'credit_line':
                    singlePage = `

                        <h1> Business Credit Lines </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_credit_line.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="credit_lines_contents">
                                <h2>Flexible funding that moves with your business</h2>
                                <p>
                                    Every business experiences ups and downs in cash flow. A Business Credit Line from [Bank Name] gives you the flexibility to access funds whenever you need them, helping you manage short-term expenses, seize new opportunities, and keep your operations running smoothly.
                                </p>

                                <h3>What is a Business Credit Line?</h3>
                                
                                <div>
                                    <p>
                                        A Business Credit Line (also known as a revolving credit facility) provides a pre-agreed amount of funding that your business can draw from at any time. You only pay interest on the funds you use, making it a cost-effective way to manage working capital.
                                    </p>

                                    <ul>
                                        <h4>Key features</h4>
                                        <li>
                                            <b>Flexible access to funds</b> Draw down money when you need it and repay it as your cash flow improves.
                                        </li>

                                        <li>
                                            <b>Revolving facility</b> Once you repay, the funds become available to use again.
                                        </li>

                                        <li>
                                            <b>Competitive rates</b> Interest charged only on the amount borrowed, not your total limit.
                                        </li>

                                        <li>
                                            <b>Tailored limits</b> Credit lines available from £[X] up to £[Y], depending on your business needs.
                                        </li>

                                        <li>
                                            <b>Fast, convenient access</b> Use online or mobile banking to draw funds instantly.
                                        </li>

                                        <li>
                                            <b>No early repayment fees</b> Repay anytime without penalty.
                                        </li>
                                    </ul>

                                    <h4>Benefits for your business</h4>

                                    <ol>
                                        <li>Smooth out seasonal cash flow fluctuations.</li>
                                        <li>Pay suppliers or staff while waiting for invoices to clear.</li>
                                        <li>Take advantage of growth or purchase opportunities quickly.</li>
                                        <li>Avoid the need for multiple short-term loans.</li>
                                        <li>Enjoy peace of mind with funds always available in reserve.</li>
                                    </ol>

                                    <h4>Who it’s for</h4>

                                    <ol>
                                        Our Business Credit Lines are ideal for UK businesses that:

                                        <li>Want ongoing access to working capital.</li>
                                        <li>Experience variable cash flow due to seasonality or customer payment terms.</li>
                                        <li>Need a flexible alternative to a traditional loan or overdraft.</li>
                                    </ol>
                                </div>

                                <span>
                                    <img src="./gallery/singles/credit_line.jpg">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Get started:</b> 
                                        <i>Find out how a Business Credit Line could support your cash flow and growth plans.</i>
                                    </a>
                                </span>
                            </section>
                        </div>
                    `;
                break;

                case 'debit_line':
                    singlePage = `

                        <h1> Business Debit Lines </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_debit_line.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="credit_lines_contents">
                                <h2>Stay in control of your cash flow</h2>
                                <p>
                                    Every business faces times when expenses come before income. A Business Debit Line from [Bank Name] gives you the flexibility to cover short-term cash flow gaps, ensuring your business can keep operating smoothly... even when payments are delayed.
                                </p>

                                <h3>What is a Business Debit Line?</h3>
                                
                                <div>
                                    <p>
                                        A Business Debit Line (sometimes called a business overdraft or debit facility) is a pre-approved borrowing limit linked to your business current account. It allows you to withdraw more funds than you have available, up to an agreed limit, providing instant access to working capital when you need it most.
                                    </p>

                                    <ul>
                                        <h4>Key features</h4>
                                        <li>
                                            <b>Flexible borrowing</b> Access funds directly from your business account whenever you need them.
                                        </li>

                                        <li>
                                            <b>Only pay for what you use</b> Interest is charged only on the amount you overdraw, not your full limit.
                                        </li>

                                        <li>
                                            <b>Agreed limit</b> Borrow up to a pre-approved amount, based on your business needs and credit profile.
                                        </li>

                                        <li>
                                            <b>Easy access</b> Funds are available instantly through online banking, mobile app, or card transactions.
                                        </li>

                                        <li>
                                            <b>Renewable facility</b> Your debit line can be reviewed and renewed annually.
                                        </li>
                                    </ul>

                                    <h4>Benefits for your business</h4>

                                    <ol>
                                        <li>Maintain steady cash flow during slow payment periods.</li>
                                        <li>Cover day-to-day expenses like payroll, stock purchases, or supplier payments.</li>
                                        <li>Avoid disruption from unexpected costs or timing issues.</li>
                                        <li>Enjoy peace of mind knowing funds are always available when needed.</li>
                                        <li>Strengthen your business credit profile through responsible use.</li>
                                    </ol>

                                    <h4>Who it’s for</h4>

                                    <ol>
                                        Our Business Debit Lines are ideal for UK businesses that:
                                        
                                        <li>Need short-term working capital support.</li>
                                        <li>Experience seasonal or irregular cash flow.</li>
                                        <li>Prefer flexible borrowing without committing to a fixed loan.</li>
                                    </ol>
                                </div>

                                <span>
                                    <img src="./gallery/singles/debit_line.jpeg">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Get started:</b> 
                                        <i>A Business Debit Line could make managing your cash flow simpler and more predictable.</i>
                                    </a>
                                </span>
                            </section>
                        </div>
                    `;
                break;

                case 'contribution':
                    singlePage = `

                        <h1> Contributory Scheme </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_contribution_line.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="credit_lines_contents">
                                <h2>Building a stronger future together</h2>
                                <p>
                                    A Contributory Scheme from <b>${bankName}</b> is a simple and effective way to help employees save for the future while allowing employers to contribute towards their long-term financial wellbeing. It’s a shared investment in security, loyalty, and sustainable growth.
                                </p>

                                <h3>What is a Contributory Scheme?</h3>
                                
                                <div>
                                    <p>
                                        A Contributory Scheme is a joint savings or pension plan where both the employer and employee make regular contributions. It’s designed to help employees build financial stability — whether for retirement, housing, education, or other long-term goals — while enabling businesses to attract and retain talent.
                                    </p>

                                    <ul>
                                        <h4>Key features</h4>
                                        <li>
                                            <b>hared contributions</b> Both employer and employee pay into the scheme, helping savings grow faster.
                                        </li>

                                        <li>
                                            <b>Flexible structure</b> Contribution rates can be tailored to suit company policy and employee preference.
                                        </li>

                                        <li>
                                            <b>Tax efficiency</b> Contributions may qualify for tax relief under current UK legislation.
                                        </li>

                                        <li>
                                            <b>Professional management</b> Funds are securely managed by our experienced investment specialists.
                                        </li>

                                        <li>
                                            <b>Transparent reporting</b> Regular account statements and online access for easy tracking of contributions and growth.
                                        </li>
                                    </ul>

                                    <h4>Benefits for employers</h4>

                                    <ol>
                                        <li>Strengthen your employee benefits package.</li>
                                        <li>Demonstrate commitment to staff welfare and retention.</li>
                                        <li>Support workforce financial wellbeing and long-term planning.</li>
                                        <li>Enhance your company’s reputation as a responsible employer.</li>
                                    </ol>

                                    <h4>Benefits for employees</h4>

                                    <ol>
                                        <li>Build savings consistently with employer support.</li>
                                        <li>Enjoy potential tax advantages on contributions.</li>
                                        <li>Choose from a range of investment or savings options.</li>
                                        <li>Monitor growth easily through online banking or mobile app access.</li>
                                    </ol>

                                    <h4>Who it’s for</h4>

                                    <ol>
                                        Our Contributory Scheme is ideal for:
                                        
                                        <li>Employers seeking to provide competitive, flexible employee benefits.</li>
                                        <li>Employees who want to grow their savings or retirement fund with shared contributions.</li>
                                    </ol>
                                </div>

                                <span>
                                    <img src="./gallery/singles/contribtory_line.jpg">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Get started:</b> 
                                        <i>Help your team invest in their future — and strengthen your business at the same time.</i>
                                    </a>
                                </span>
                            </section>
                        </div>
                    `;
                break;

                case 'private_savings':
                    singlePage = `

                        <h1> Maximise Your Wealth </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_private_savings.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="private_savings_contents">
                                <h2>Private Savings and Deposit Solutions</h2>
                                <p class="singles_first_garagraph">
                                    For individuals and families with significant capital, managing wealth extends beyond everyday accounts. At ${bankName}, our Private Savings solutions are crafted to provide security, superior returns, and tax-efficient growth on your substantial deposits.
                                </p>

                                <p>
                                    We offer a strategic approach to ensure your idle capital is working as hard as possible, aligned with your specific liquidity needs and risk profile.
                                </p>

                                <h3>Our Private Deposit Product Range</h3>
                                
                                <div>
                                    <p>
                                        We offer a tiered structure of accounts, providing higher preferential rates for larger balances and a choice of access levels.
                                    </p>

                                    <h4>Exclusive Fixed-Term Bonds (Time Deposits)</h4>

                                    <table>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Detail</th>
                                            <th>Benefit to You</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Fixed Rate</b> </td>
                                            <td>Rate is locked for the full term (e.g., 6 months, 1 year, 3 years).</td>
                                            <td>Protection from market fluctuations and absolute certainty of return.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Bespoke Rates</b> </td>
                                            <td>Preferential rates available for deposits over £250,000.</td>
                                            <td>Maximise yield on large capital sums.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Security</b> </td>
                                            <td>Deposits are covered by the Financial Services Compensation Scheme (FSCS), up to the current limit.</td>
                                            <td>Total peace of mind and regulated security.</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            <section class="private_savings_contents">

                                <div class="personal_loan_float">
                                    <h3>Premier Easy Access Savings</h3>
                                    <ul>
                                        <p>
                                            For funds that must remain liquid, our Premier Easy Access accounts offer a competitive variable rate while ensuring your capital is available whenever you need it.
                                        </p>

                                        <li>
                                            <b>Higher Tiered Rates:</b> Interest rates improve as your balance increases, rewarding significant deposits.
                                        </li>

                                        <li>
                                            <b>Instant Access:</b> Unlimited withdrawals and deposits without penalty, managed easily online or via your Relationship Manager.
                                        </li>
                                    </ul>

                                    <h3>Tax-Efficient Cash ISAs</h3>
                                    <ul>
                                        <p>
                                            Utilise your annual ISA allowance to shield your returns from UK tax, helping your wealth grow faster.
                                        </p>

                                        <li>
                                            <b>Fixed Rate Cash ISAs:</b> Lock in a tax-free rate for the year. Ideal for maximising your annual £20,000 allowance.
                                        </li>

                                        <li>
                                            <b>Flexible Cash ISAs:</b> Maintain tax-free status while allowing you to withdraw and replace funds within the same tax year without losing the allowance benefit.
                                        </li>
                                    </ul>

                                    <h3>Our Private Client Advantage</h3>
                                    <ul>
                                        <p>
                                            When you save with our Private Banking service, you gain more than just preferential rates; you gain a dedicated partnership.
                                        </p>

                                        <li>
                                            <b>Dedicated Relationship Manager:</b> A single point of contact who understands your complete financial landscape and can swiftly arrange transfers, open accounts, and provide expert guidance.
                                        </li>

                                        <li>
                                            <b>Multi-Currency Accounts:</b> Access to savings and deposit accounts in major currencies (USD, EUR, etc.), essential for international clients or those with global assets.
                                        </li>

                                        <li>
                                            <b>Integrated Wealth Strategy:</b> Seamless integration with our Wealth Management and Investment teams, ensuring your entire portfolio, from liquid cash to long-term investments; is working coherently towards your financial goals.
                                        </li>
                                    </ul>

                                    <h3>Security & Compliance</h3>
                                    <ul>
                                        <p>
                                            As a regulated UK bank, every private savings solution we offer adheres to the strictest regulatory standards:
                                        </p>

                                        <li>
                                            <b>FSCS Protection:</b> Eligible deposits are protected up to the prevailing limit by the Financial Services Compensation Scheme.
                                        </li>

                                        <li>
                                            <b>Confidentiality:</b> We operate with the utmost discretion and confidentiality regarding your financial affairs.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section class="savings_flex_link">
                                <img src="./gallery/singles/private_savings.jpg">
                                <a href="./login/auth.html?origin=true&loc=true">Unlock the true potential of your capital.</a>
                            </section>

                        </div>
                    `;

                break;

                case 'target_savings':
                    singlePage = `

                        <h1> Hit Your Goals </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_target_savings.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="private_savings_contents">
                                <h2>Target Savings Accounts from ${bankName}</h2>

                                <p class="singles_first_garagraph">
                                    Saving is easier when you have a clear destination. Our Target Savings Accounts are designed for customers in the UK who are focused on achieving a specific financial goal; whether it's a deposit for a new home, a dream wedding, or a comfortable retirement.
                                </p>

                                <p>
                                    We combine competitive rates with the structure and discipline you need to reach your target faster.
                                </p>

                                <h3>How Target Savings Accounts Work</h3>
                                
                                <div>
                                    <p>
                                        A Target Savings Account provides a structured framework for saving towards a large, defined purchase or event over a set period.
                                    </p>

                                    <table>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Detail</th>
                                            <th>Benefit to You</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Goal Setting</b> </td>

                                            <td>Define your specific savings goal (e.g., £15,000 for a deposit) and your target date (e.g., 3 years).</td>

                                            <td>Stay motivated and track your progress visually through our app.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Fixed or Variable Rate Options</b> </td>

                                            <td>PChoose between the predictability of a fixed rate or the potential higher returns of a variable rate linked to market conditions.</td>

                                            <td>Select the risk/reward profile that best suits your goal timeline.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Automated Transfers</b> </td>

                                            <td>Set up automatic, regular transfers (weekly or monthly) from your current account straight into your savings.</td>

                                            <td>Save effortlessly without having to manually move money.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Bonus Rate Eligibility</b> </td>

                                            <td>Earn a higher interest rate by making no more than <b>two withdrawals</b> per year, rewarding your discipline.</td>

                                            <td>Maximise your returns when you commit to your goal.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>FSCS Protection</b> </td>

                                            <td>Your eligible deposits are protected by the Financial Services Compensation Scheme (FSCS), up to the current limit.</td>

                                            <td>Save with complete peace of mind.</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            <section class="private_savings_contents">

                                <div class="personal_loan_float">
                                    <h3>Common Goals our Customers Save for</h3>
                                    <ul>
                                        <p>
                                            Our Target Savings accounts are flexible and can be adapted to almost any major financial milestone:
                                        </p>

                                        <li>
                                            <b>First Home Deposit:</b> Systematically build the capital needed to secure your mortgage deposit.
                                        </li>

                                        <li>
                                            <b>Major Travel:</b> Fund a sabbatical, gap year, or a significant international trip.
                                        </li>

                                        <li>
                                            <b>Educational Fees:</b> Save for university tuition, vocational courses, or professional qualifications.
                                        </li>

                                        <li>
                                            <b>Wedding or Event Fund:</b> Budget accurately and fund your big day without relying on credit.
                                        <li>

                                        <li>
                                            <b>Next Car Purchase:</b> Save for the full cost or a significant down payment on a new vehicle.
                                        </li>
                                    </ul>

                                    <h3>Start Saving Smarter Today</h3>
                                    <ul>
                                        <p>
                                            It only takes a few minutes to start building your savings momentum.
                                        </p>

                                        <li>
                                            <b>Fixed Rate Cash ISAs:</b> Lock in a tax-free rate for the year. Ideal for maximising your annual £20,000 allowance.
                                        </li>

                                        <li>
                                            <b>Flexible Cash ISAs:</b> Maintain tax-free status while allowing you to withdraw and replace funds within the same tax year without losing the allowance benefit.
                                        </li>
                                    </ul>

                                    <h3>Our Private Client Advantage</h3>
                                    <ul>
                                        <p>
                                            When you save with our Private Banking service, you gain more than just preferential rates; you gain a dedicated partnership.
                                        </p>

                                        <li>
                                            <b>Define:</b> Log in to your [Your Bank Name] online banking and set up your new Target Savings Account, naming your goal and setting your target date.
                                        </li>

                                        <li>
                                            <b>Commit:</b> Set up your standing order or automated transfer amount.
                                        </li>

                                        <li>
                                            <b>Track:</b> Watch your progress bar fill up as you move closer to achieving your goal, with interest calculated daily.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section class="savings_flex_link">
                                <img src="./gallery/singles/target_savings.png">
                                <a href="./login/auth.html?origin=true&loc=true">Ready to turn your goal into a reality?</a>
                            </section>

                        </div>
                    `;

                break;

                case 'annual_cash':
                    singlePage = `

                        <h1> Make Every Year Count </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_annual_savings.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="private_savings_contents">
                                <h2>Annual Cash Savings Accounts</h2>

                                <p class="singles_first_garagraph">
                                    For customers looking for a secure, stable home for their capital with reliable, annual interest payments, our <b>Annual Cash Savings Accounts</b> offer the ideal solution. Designed for medium-to-long-term savings, these accounts reward commitment by paying interest at the end of a defined term, typically on the <b>anniversary date of opening</b>.
                                </p>

                                <p>
                                    This structure is perfect for those who want to maximise compound growth while maintaining confidence in a UK-regulated banking environment.
                                </p>

                                <div class="personal_loan_float">

                                    <h3>Key Features & Benefits</h3>

                                    <ul>
                                        <p>
                                            Our Annual Cash Savings Accounts are built on stability, security, and competitive returns for committed savers.
                                        </p>

                                        <li>
                                            <b>Annual Interest Payment:</b> Interest is calculated daily and paid directly into your account on a yearly basis. This allows the interest to compound quickly, as the next year’s return is calculated on a higher balance.
                                        </li>

                                        <li>
                                            <b>Predictable Returns</b>: Choose between a Fixed-Rate option for guaranteed returns over a set period (e.g., 2 or 3 years) or a Variable Rate option for flexibility linked to market movements.
                                        </li>

                                        <li>
                                            <b>FSCS Protection:</b> As a UK-authorised bank, your eligible deposits are protected by the Financial Services Compensation Scheme (FSCS), up to the current limit.
                                        </li>

                                        <li>
                                            <b>Simple Management:</b> Easily monitor your account balance, accrued interest, and term end date via our secure online banking portal or mobile app.
                                        <li>

                                        <li>
                                            Tax Documentation: Receive clear, annual statements and interest certificates to assist with your personal tax returns.
                                        </li>
                                    </ul>

                                    <h3>Who is an Annual Cash Savings Account For?</h3>
                                    <ul>
                                        <p>
                                            This type of savings solution is ideal for UK customers with capital they won't need to access immediately but want to grow steadily.
                                        </p>

                                        <li>
                                            <b>Long-Term Goal Savers:</b> Customers saving for major goals like retirement top-ups, children's future education, or significant planned purchases several years away.
                                        </li>

                                        <li>
                                            <b>Risk-Averse Investors:</b> Those prioritising the security and predictability of cash savings over higher-risk investment options.
                                        </li>

                                        <li>
                                            <b>Wealth Builders:</b> Individuals looking to maximise compounding interest by allowing the annual returns to be rolled immediately back into the capital.
                                        </li>
                                    </ul>

                                    <h3>Important Considerations</h3>
                                    <table>
                                        <tr>
                                            <th>Account</th>
                                            <th>Access</th>
                                            <th>Interest Payment</th>
                                            <th>Best For</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Fixed Rate</b> </td>
                                            <td>Limited/Penalty-based withdrawals during the term.</td>
                                            <td>Paid annually on the anniversary date.</td>
                                            <td>Guaranteed returns and certainty of planning.</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Variable Rate</b> </td>
                                            <td>Defined withdrawal limit without penalty 1-2 per year.</td>
                                            <td>Paid annually on the anniversary date.</td>
                                            <td>Maintaining some flexibility while earning annual interest.</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            <section class="savings_flex_link">
                                <img src="./gallery/singles/annual_savings.avif">
                                <a href="./login/auth.html?origin=true&loc=true">Ready to start compounding your wealth year after year?</a>
                            </section>

                        </div>
                    `;

                break;

                case 'accident_insurance':
                    singlePage = `

                        <h1> Accidents & Disasters Insurance </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_accidents_insurance.webp">
                        </div>

                        <div id="single_page_main_container">

                           <section class="singles_insurance_contents">

                                <h2>Personal/Emergency Insurance</h2>

                                <p class="singles_first_garagraph">
                                    Life is unpredictable, and accidents can happen when you least expect them. Our Personal Accident Insurance provides essential financial protection, giving you and your loved ones peace of mind in the event of an unexpected injury or worse. Whether you're at home, at work, or on the go, this cover helps safeguard your finances against the impact of serious accidents.
                                </p>

                                <h3>What is Personal Accident Insurance?</h3>

                                <div class="insurance_flex_float">
                                    <span>
                                        <p>
                                            Personal Accident Insurance is designed to pay out a tax-free lump sum if you suffer a serious injury or fatality as a direct result of an accident. Unlike health or life insurance, it focuses specifically on accidental events, offering quick financial support to help cover medical costs, lost income, or family needs during recovery.
                                        </p>

                                        <p>
                                            This standalone policy or optional add-on complements your existing car, home, or travel insurance. It's particularly valuable for self-employed individuals, those in high-risk jobs, or anyone wanting extra security beyond standard policies.
                                        </p>
                                    </span>

                                    <img src="./gallery/singles/accident_insurance.jpg">
                                </div>
                                
                            </section>

                            <section class="singles_insurance_contents">
                                <h3>Key Benefits</h3>

                                <p>Our Personal Accident Insurance offers flexible coverage tailored to your needs:</p>

                                <ul>
                                    <li>
                                        <b>Accidental Death:</b> A lump sum payout (typically up to £100,000, depending on your chosen level) to your beneficiaries if an accident results in death within 12 months.
                                    </li>

                                    <li>
                                        <b>Permanent Total Disability:</b> Full payout for life-changing injuries, such as loss of limbs, sight, or hearing, that prevent you from working again.
                                    </li>

                                    <li>
                                        <b>Permanent Partial Disability:</b> Proportional benefits for less severe permanent injuries (e.g., loss of one limb or eye).
                                    </li>

                                    <li>
                                        <b>Temporary Total Disability:</b> Weekly or monthly payments to replace lost income while you're unable to work (optional add-on, up to 104 weeks).
                                    </li>

                                    <li>
                                        <b>Hospitalisation Cash:</b> Daily benefits for hospital stays due to accidental injury.
                                    </li>

                                    <li>
                                        <b>Worldwide Cover:</b> Protection 24/7, anywhere in the world.
                                    </li>

                                    <li>
                                        <b>Family Options:</b> Extend cover to your partner and children at a discounted rate.
                                    </li>

                                    <p>
                                        Payouts are tax-free and can be used however you need – from medical bills and rehabilitation to everyday expenses or home adaptations.
                                    </p>
                                </ul>

                                <div>
                                    <h4>Example payout scale (based on £50,000 cover level):</h4>
                                    <table>
                                        <tr>
                                            <th>Injury Type</th>
                                            <th>Benefit Payout</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Accidental Death</b> </td>
                                            <td>£50,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Loss of two limbs or sight in both eyes</b> </td>
                                            <td>£45,000</td>
                                        </tr>

                                        <tr>
                                            <td><b>Loss of one limb or sight in one eye</b></td>
                                            <td>£23,000</td>
                                        </tr>

                                        <tr>
                                            <td><b>Permanent Total Disability</b></td>
                                            <td>£48,000</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            <section class="singles_insurance_contents">

                                <div>

                                    <h3>Who is it For?</h3>
                                    <ul>
                                        <p>This insurance is ideal for:</p>
                                        <li>Self-employed professionals who don't have employer sick pay.</li>
                                        <li>Those in manual or high-risk occupations (e.g., construction, driving).</li>
                                        <li>Families wanting additional protection beyond packaged bank account perks.</li>
                                        <li>Anyone seeking affordable peace of mind – premiums start from just £5 per month.</li>
                                        
                                        <i>
                                            It's often bundled with our Premium or Platinum current accounts, or available as a standalone product.
                                        </i>
                                    <ul>

                                    <h3>What's Not Covered (Key Exclusions)</h3>
                                    <ul>
                                        <p>
                                            While our policy is comprehensive, certain situations are excluded to keep premiums low:
                                        </p>

                                        <li>Injuries from illness, disease, or natural causes (not accidents).</li>
                                        <li>Self-inflicted injuries or suicide.</li>
                                        <li>Accidents while under the influence of alcohol or non-prescribed drugs.</li>
                                        <li>Participation in hazardous sports (e.g., motorsports, skydiving) unless added as an extra.</li>
                                        <li>War, terrorism, or criminal acts.</li>
                                        <li>Pre-existing medical conditions contributing to the accident.</li>

                                        <i>Full exclusions are detailed in your policy document. We recommend reviewing them carefully.</i>
                                    </ul>

                                    <h3>Why Choose Our Personal Accident Insurance?</h3>
                                    <ul>
                                        <li>
                                            <b>Regulated Protection:</b> Authorised and regulated by the Financial Conduct Authority (FCA), ensuring fair treatment and clear terms.
                                        </li>

                                        <li>
                                            <b>Quick Claims:</b> 24/7 UK-based support with fast payouts – many claims settled within days.
                                        </li>

                                        <li>
                                            <b>No Medical Required:</b> Instant cover for most applicants, no health questions for standard policies.
                                        </li>

                                        <li>
                                            <b>Flexible Options:</b> Choose cover from £10,000 to £500,000, with optional extras like income protection.
                                        </li>

                                        <li>
                                            <b>Bundle and Save:</b> Add to your bank account for discounts on travel, mobile, or breakdown cover.
                                        </li>
                                    </ul>

                                </div>

                                <div class="insurance_flex_link">
                                    <a href="./login/auth.html?origin=true&loc=true">Get a Quote Today: </a>
                                    <i>Protect what matters most.</i>
                                </div>
                            </section>

                        </div>
                    `;

                break;

                case 'life_insurance':
                    singlePage = `

                        <h1> Life Insurance & Investment </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_life_insurance.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="singles_insurance_contents">

                                <p class="singles_first_garagraph">
                                    Life is full of plans – your family’s future, your home, your dreams. Our Life Insurance & Investment Protection combines straightforward, affordable life cover with the opportunity to grow your money over time. It’s more than just a safety net; it’s a way to secure tomorrow while building wealth today.
                                </p>

                                <h3>What is Life Insurance/Investment Protection?</h3>

                                <div class="insurance_flex_float">
                                    <span>
                                        <p>
                                            This is a unit-linked whole-of-life insurance plan that gives you two powerful benefits in one policy:
                                        </p>
                                        <ol>
                                            <li> 
                                                <b>Guaranteed life cover</b> a tax-free lump sum paid to your loved ones if you die.
                                            </li>
                                            <li>
                                                <b>Investment growth potential</b> your premiums are invested in a choice of professionally managed funds, aiming to grow your money over the long term.
                                            </li>
                                        </ol>

                                        <p>
                                            Unlike traditional term life insurance that expires without payout, this plan stays in force for your entire life (as long as premiums are paid) and builds real cash value you can access while you’re still alive.
                                        </p>
                                    </span>

                                    <img src="./gallery/singles/life_insurance.png">
                                </div>
                                
                            </section>

                            <section class="singles_insurance_contents">
                                <h3>Key Benefits</h3>

                                <p>Our Personal Accident Insurance offers flexible coverage tailored to your needs:</p>

                                <ul>
                                    <li>
                                        <b>Lifelong Cover:</b> Protection never expires – guaranteed as long as you keep paying premiums.
                                    </li>

                                    <li>
                                        <b>Tax-Free Payout:</b> Up to £1,000,000+ paid directly to your beneficiaries, outside your estate for Inheritance Tax purposes (when written in trust – free trust service included).
                                    </li>

                                    <li>
                                        <b>Investment Choice:</b> Select from 50+ funds including UK equities, global growth, ethical, fixed interest, or our expertly managed Balanced Portfolio.
                                    </li>

                                    <li>
                                        <b>Potential for Growth:</b> Historically, similar funds have delivered 5–8% average annual returns after charges (past performance is not a guarantee of future results).
                                    </li>

                                    <li>
                                        <b>Access Your Money:</b> Withdraw or borrow against the policy value after year 5 (loans at preferential rates).
                                    </li>

                                    <li>
                                        <b>Critical Illness Boost (optional):</b> Add cover for 50+ serious illnesses – payout while you’re still alive.
                                    </li>

                                    <li>
                                        <b>Waiver of Premium:</b> If you can’t work due to illness or injury, we’ll pay your premiums for you.
                                    </li>
                                </ul>

                                <div>
                                    <h4>Example: £500 monthly premium, male age 35, non-smoker:</h4>
                                    <table>
                                        <tr>
                                            <th>Year</th>
                                            <th>Total Paid</th>
                                            <th>Projected Fund Value (6% growth)</th>
                                            <th>Life Cover Amount</th>
                                        </tr>

                                        <tr>
                                            <td> <b>10</b> </td>
                                            <td>£60,000</td>
                                            <td>£82,400</td>
                                            <td>£650,000</td>
                                        </tr>

                                        <tr>
                                            <td> <b>20</b> </td>
                                            <td>£120,000</td>
                                            <td>£228,900</td>
                                            <td>£780,000</td>
                                        </tr>

                                        <tr>
                                            <td><b>30</b></td>
                                            <td>£180,000</td>
                                            <td>£512,600</td>
                                            <td>£920,000</td>
                                        </tr>
                                    </table>

                                    <p>
                                        <i>Projections are illustrative only. Actual returns may be higher or lower.</i>
                                    </p>
                                </div>
                            </section>

                            <section class="singles_insurance_contents">

                                <div>

                                    <h3>Who is it For?</h3>
                                    <ul>
                                        <p>Perfect if you want:</p>
                                        <li>High-net-worth individuals looking to mitigate Inheritance Tax.</li>
                                        <li>Parents or grandparents funding school/university fees in 10–20 years.</li>
                                        <li>Business owners protecting key people or funding buy-sell agreements.</li>
                                        <li>Anyone aged 18–75 who wants life cover and long-term savings in one tax-efficient plan.</li>
                                        
                                        <i>
                                            Available exclusively to our Premier, Private, or Platinum Banking customers – or as a standalone policy from just £25 per month.
                                        </i>
                                    <ul>

                                    <h3>What's Not Covered</h3>
                                    <ul>
                                        <li>Suicide within the first 12 months (return of premiums only).</li>
                                        <li>Death due to criminal acts or dangerous activities (unless disclosed and accepted).</li>
                                        <li>
                                            Investment risk: your fund value can go down as well as up – you may get back less than you paid in.
                                        </li>
                                        <li>Early surrender in the first 5 years may result in significant penalties.</li>

                                        <i>Full details in your Key Information Document and Policy Terms.</i>
                                    </ul>

                                    <h3>Why Choose Our Life & Investment Plan?</h3>
                                    <ul>
                                        <li>
                                            <b>Trusted Provider:</b> Underwritten by the UK's Central Bank, rated A+ by Standard & Poor’s with over £120bn assets under management.
                                        </li>

                                        <li>
                                            <b>Award-Winning Funds:</b> 12 funds rated 4- or 5-star by Morningstar.
                                        </li>

                                        <li>
                                            <b>Free Trust Setup:</b> Our in-house specialists place your policy in trust at no cost – avoiding 40% Inheritance Tax delays.
                                        </li>

                                        <li>
                                            <b>Dedicated Wealth Team:</b> Annual reviews with your personal relationship manager.
                                        </li>

                                        <li>
                                            <b>Switch Funds Free:</b> Change investment direction unlimited times online, no charges.
                                        </li>

                                        <li>
                                            <b>Loyalty Bonus:</b> 0.5% extra allocation rate after 10 years.
                                        </li>
                                        
                                    </ul>

                                </div>

                                <div class="insurance_flex_link">
                                    <a href="./login/auth.html?origin=true&loc=true">Get Your Personalised Illustration: </a>
                                    <i>See exactly what your plan could be worth.</i>
                                </div>
                            </section>

                        </div>
                    `;

                break;

                case 'car_insurance':
                    singlePage = `

                        <h1> Car Insurance/Payment </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_car_insurance.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="singles_insurance_contents">

                                <h2>Car Insurance & Smart Payment Plan</h2>

                                <p class="singles_first_garagraph">
                                    Drive with complete confidence. Our Car Insurance delivers award-winning cover at competitive prices, backed by 24/7 UK support and a 5-Star Defaqto rating. Now with our exclusive Smart Payment Plan, you can spread the cost interest-free across 10 months – no credit checks, no hidden fees, just simpler budgeting.
                                </p>

                                <h3>What is Our Car Insurance?</h3>

                                <div class="insurance_flex_float">
                                    <span>
                                        <p>
                                            Fully comprehensive cover as standard, protecting you, your car, and everyone on the road. We don’t do “budget” policies that cut corners – every customer gets our highest level of protection, plus a range of optional extras to make your policy truly personal.
                                        </p>
                                    </span>

                                    <img src="./gallery/singles/car_insurance.jpg">
                                </div>
                                
                            </section>

                            <section class="singles_insurance_contents">
                                <h3>Key Benefits – All Included as Standard</h3>

                                <ul>
                                    <li>
                                        <b>Comprehensive Cover Everywhere:</b> UK & EU for up to 90 days per trip.
                                    </li>

                                    <li>
                                        <b>£1,000,000 Third-Party Liability:</b> (unlimited for injury).
                                    </li>

                                    <li>
                                        <b>Uninsured Driver Promise:</b> No excess & your no-claims bonus protected if hit by an uninsured driver.
                                    </li>

                                    <li>
                                        <b>Vandalism & Malicious Damage:</b> covered – even if your car is parked.
                                    </li>

                                    <li>
                                        <b>Windscreen Repair:</b> Unlimited, with approved repairers – no impact on no-claims bonus.
                                    </li>

                                    <li>
                                        <b>Courtesy Car Guaranteed:</b> while yours is being repaired by our approved network.
                                    </li>

                                    <li>
                                        <b>Personal Belongings:</b> Iup to £500.
                                    </li>

                                    <li>
                                        <b>Child Car Seat Replacement:</b> brand new if damaged in an accident.
                                    </li>

                                    <li>
                                        <b>24/7 Accident Helpline</b> & same-day claims reporting app.
                                    </li>
                                </ul>

                                <div>
                                    <h4>Optional Extras (add for as little as £19)</h4>
                                    <table>
                                        <tr>
                                            <th>Extra</th>
                                            <th>Price from</th>
                                            <th>What you get</th>
                                        </tr>

                                        <tr>
                                            <td> <b>Breakdown Cover</b> </td>
                                            <td>£39/year</td>
                                            <td>UK & European roadside rescue with RAC</td>
                                        </tr>

                                        <tr>
                                            <td> <b>Protected No-Claims Bonus</b> </td>
                                            <td>£25/year</td>
                                            <td>Keep full discount after 1 claim</td>
                                        </tr>

                                        <tr>
                                            <td><b>Motor Legal Protection</b></td>
                                            <td>£29/year</td>
                                            <td>£100,000 legal costs to recover losses</td>
                                        </tr>

                                        <tr>
                                            <td><b>Enhanced Courtesy Car</b></td>
                                            <td>£19/year</td>
                                            <td>Like-for-like replacement (not just a tiny hatchback)</td>
                                        </tr>

                                        <tr>
                                            <td><b>Key Cover</b></td>
                                            <td>£19/year</td>
                                            <td>Up to £1,500 for lost/stolen keys</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>

                            <section class="singles_insurance_contents">

                                <div>
                                    <h3>Smart Payment Plan – Spread the Cost for £0 Interest</h3>
                                    <ul>
                                        <p>Why pay £680 in one go when you can pay £68 a month?</p>
                                        <li>0% APR interest-free for 10 months.</li>
                                        <li>No credit check – everyone accepted.</li>
                                        <li>No setup fees or admin charges.</li>
                                        <li>Automatic Direct Debit – miss a payment? We’ll pause cover, not slap penalties.</li>
                                        <li>Pay off early anytime – zero penalty.</li>
                                        
                                        <i>
                                            Example: Vauxhall Corsa, 32-year-old driver, London <br>
                                            Annual premium: £582 → Just £58.20/month with Smart Payment Plan.
                                        </i>
                                    <ul>

                                    <h3>Multi-Car & Family Discounts</h3>
                                    <ul>
                                        <li>Insure 2 cars? 10% off the second.</li>
                                        <li>3 or more? 15% off every car.</li>
                                        <li>Add your partner or children on the same policy – extra 5% family discount.</li>
                                    </ul>

                                    <h3>Who is it For?</h3>
                                    <ul>
                                        <li>New drivers (we love you – telematics black box option saves up to 25%).</li>
                                        <li>Electric & hybrid owners (free charging cable cover included).</li>
                                        <li>High-value cars up to £150,000.</li>
                                        <li>Classic car owners (agreed valuation policies available).</li>
                                        <li>Uber/Bolt drivers (full hire & reward cover from £99 extra).</li>
                                    </ul>

                                    <h3>What's Not Covered (Main Exclusions)</h3>
                                    <ul>
                                        <li>Wear and tear or mechanical breakdown.</li>
                                        <li>Driving other cars (except named drivers aged 25+ with DOC extension).</li>
                                        <li>Track-day use or racing.</li>
                                        <li>Deliberate acts or driving without a valid licence.</li>
                                        <li>Alcohol/drug-related incidents.</li>

                                        <i>Full list in your Policy Booklet – we make it short and in plain English.</i>
                                    </ul>

                                    <h3>Why Choose Us?</h3>
                                    <ul>
                                        <li>Defaqto 5-Star Rated for 9 years running.</li>
                                        <li><b>96% Claims Paid last year:</b> average payout time 4.2 days.</li>
                                        <li><b>Price Promise:</b> We’ll beat your renewal quote from any major UK insurer by £50 (or it’s free).</li>
                                        <li><b>UK Call Centres:</b> real people in Manchester & Glasgow, open 363 days a year.</li>
                                        <li><b>Manage Everything Online:</b> App or online portal – add drivers, update mileage, print documents in seconds.</li>
                                    </ul>
                                </div>

                                <div class="insurance_flex_link">
                                    <a href="./login/auth.html?origin=true&loc=true">Get Your Quote in 60 Seconds: </a>
                                    <i>No forms, no phone menus. Just enter your reg and a few details.</i>
                                </div>
                            </section>

                        </div>
                    `;

                break;

                case 'sports':
                    singlePage = `

                        <h1> Sports & Entertainment Industry </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_sports.png">
                        </div>

                        <div id="single_page_main_container">

                           <section class="sports_entertainment_contents">

                                <h2>Financial expertise for a world that never stands still</h2>

                                <p class="singles_first_garagraph">
                                    Behind every headline performance, every record-breaking moment, and every sold-out show is a business that needs the right financial foundation. At [Bank Name], we understand the unique demands of the sports and entertainment industries; from managing irregular income to financing large-scale projects and protecting future earnings.
                                </p>

                                <p>
                                    Our dedicated Sports & Entertainment Banking team provides tailored financial solutions designed to help athletes, entertainers, and industry professionals focus on what they do best; performing, creating, and achieving excellence.
                                </p>

                                <h3>Our specialist support includes</h3>

                                <div>
                                    <h4>Tailored Banking Solutions</h4>
                                    <p>
                                        Personalised current and savings accounts designed for variable income streams, endorsements, and appearance fees.
                                    </p>

                                    <h4>Wealth and Cash Flow Management</h4>
                                    <p>
                                        Flexible tools to help manage unpredictable earnings, tax obligations, and long-term investments — ensuring financial stability during and beyond your career.
                                    </p>

                                    <h4>Business and Project Finance</h4>
                                    <p>
                                        Funding options for clubs, production companies, agencies, and event organisers — including loans, credit lines, and asset finance for venues, equipment, and media projects.
                                    </p>

                                    <h4>Property and Investment Services</h4>
                                    <p>
                                        Expert guidance on property purchases, investment portfolios, and financial planning to help grow and protect your wealth.
                                    </p>

                                    <h4>Dedicated Relationship Managers</h4>
                                    <p>
                                        Work directly with specialists who understand your world — providing discreet, expert advice tailored to your career, lifestyle, and financial goals.
                                    </p> 
                                </div>

                            </section>

                            <section class="sports_entertainment_contents">

                                <h3>Who we support</h3>
                                <ul>
                                    <p>Our Sports & Entertainment team works with:</p>

                                    <li>Professional athletes, coaches, and sporting organisations</li>
                                    <li>Film, television, and music professionals</li>
                                    <li>Talent agencies, production houses, and record labels</li>
                                    <li>Event promoters, venue operators, and media companies</li>
                                </ul>

                                <h3>Why choose [Bank Name]?</h3>
                                <ul>
                                    <li>
                                        <b>Industry expertise:</b> We understand the unique income patterns, risks, and opportunities in your field.
                                    </li>

                                    <li>
                                        <b>Tailored advice:</b> Personal and business banking designed around your goals.
                                    </li>

                                    <li>
                                        <b>Global reach:</b> International banking services for touring, sponsorships, and overseas investments.
                                    </li>

                                    <li>
                                        <b>Trusted partnership:</b> Discreet, experienced support from a dedicated relationship team.
                                    </li>
                                </ul>

                                <div class="sports_entertainment_link">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Let’s build your success together: </b>
                                        <i>
                                            Whether you’re rising through the ranks or leading a global brand, our Sports & Entertainment Banking specialists are here to support you every step of the way.
                                        </i>
                                    </a>
                                </div>

                            </section>

                        </div>
                    `;

                break;

                case 'education':
                    singlePage = `

                        <h1> Supporting the Education Sector </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_education.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="sports_entertainment_contents">

                                <h2>Empowering learning through financial partnership</h2>

                                <p class="singles_first_garagraph">
                                    Education shapes the future — and at [Bank Name], we’re proud to support the schools, colleges, universities, and training providers that make it possible. We understand the financial challenges and opportunities that come with running an educational institution, from funding expansion to managing day-to-day operations.
                                </p>

                                <p>
                                    Our Education Banking team offers tailored financial solutions to help institutions grow, innovate, and deliver exceptional outcomes for students and communities across the UK.
                                </p>

                                <h3>Our specialist support includes</h3>

                                <div>
                                    <h4>Bespoke Banking Solutions</h4>
                                    <p>
                                        Dedicated current and deposit accounts for schools, colleges, and universities — designed to simplify financial management and improve cash flow visibility.
                                    </p>

                                    <h4>Funding and Investment</h4>
                                    <p>
                                        Flexible financing options for capital projects, campus expansion, technology upgrades, or sustainability initiatives. Whether you need a loan, credit line, or structured finance solution, our experts can help you find the right fit.
                                    </p>

                                    <h4>Cash Flow and Treasury Management</h4>
                                    <p>
                                        Smart tools to help manage fee income, grants, payroll, and supplier payments efficiently — giving you greater control over your institution’s finances.
                                    </p>

                                    <h4>Digital Transformation Support</h4>
                                    <p>
                                        Access to banking technology that streamlines payments, enhances financial reporting, and supports your digital-first strategy.
                                    </p>

                                    <h4>Sustainability and Green Finance</h4>
                                    <p>
                                        Funding options and advisory services to help educational institutions reduce carbon footprints and invest in renewable energy, sustainable buildings, and low-impact operations.
                                    </p> 
                                </div>

                            </section>

                            <section class="sports_entertainment_contents">

                                <h3>Why choose ${bankName}?</h3>
                                <ul>
                                    <li>
                                        <b>Sector expertise:</b> Decades of experience supporting education providers across the UK.
                                    </li>
                                    <li>
                                        <b>Tailored solutions:</b> Financial services designed for the unique needs of the education sector.
                                    </li>
                                    <li>
                                        <b>Dedicated relationship managers:</b> Specialists who understand your funding cycles and priorities.
                                    </li>
                                    <li>
                                        <b>Commitment to community impact:</b> Supporting education as a cornerstone of local and national growth.
                                    </li>
                                </ul>

                                <div class="sports_entertainment_link">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Partner with us in shaping the future: </b>
                                        <i>
                                            Together, we can help your institution achieve its goals and continue inspiring future generations.
                                        </i>
                                    </a>
                                </div>

                            </section>

                        </div>
                    `;

                break;

                case 'community_service':
                    singlePage = `

                        <h1> Supporting Community Services </h1>

                        <div id="about_main_img_container">
                            <img class="nav_main_img" src="./gallery/pics/explore_community_service.jpg">
                        </div>

                        <div id="single_page_main_container">

                           <section class="sports_entertainment_contents">

                                <h2>Strengthening communities through partnership and purpose</h2>

                                <p class="singles_first_garagraph">
                                    At ${bankName}, we believe strong communities build a stronger nation. That’s why we’re proud to partner with the charities, social enterprises, and community organisations that make a real difference across the UK.
                                </p>

                                <p>
                                    Our Community Service Banking solutions are designed to help local initiatives grow, sustain operations, and continue providing vital support where it’s needed most. Whether you’re managing a charity, housing association, faith group, or non-profit organisation, we’re here to help you achieve your goals.
                                </p>

                                <h3>Our specialist support includes</h3>

                                <div>
                                    <h4>Community and Charity Accounts</h4>
                                    <p>
                                        Simple, transparent current and deposit accounts built for non-profit and community organisations — helping you manage donations, grants, and everyday expenses efficiently.
                                    </p>

                                    <h4>Funding and Finance Options</h4>
                                    <p>
                                        Access to affordable lending solutions, including community development loans and social impact finance, to support new projects, facilities, or outreach programmes.
                                    </p>

                                    <h4>Cash Flow and Treasury Management</h4>
                                    <p>
                                        Tools and guidance to help manage variable income streams, grant cycles, and operational costs, giving you greater financial stability.
                                    </p>

                                    <h4>Digital Banking and Payments</h4>
                                    <p>
                                        Secure online and mobile banking to help you manage funds, make payments, and receive donations with ease.
                                    </p>

                                    <h4>Advisory and Relationship Support</h4>
                                    <p>
                                        Dedicated Community Banking Managers who understand the unique challenges of non-profits — providing guidance on financial planning, fundraising, and sustainability.
                                    </p> 
                                </div>

                            </section>

                            <section class="sports_entertainment_contents">

                                <h3>Who we support</h3>
                                <ul>
                                    <p>Our Community Banking services are available for:</p>
                                    <li>Charities and not-for-profit organisations</li>
                                    <li><Community interest companies (CICs) and social enterprises/li>
                                    <li>Faith and volunteer groups</li>
                                    <li>Local authorities and housing associations</li>
                                    <li>outh, education, and health-based community initiatives</li>
                                </ul>

                                <h3>Why choose us?</h3>
                                <ul>
                                    <li>
                                        <b>Specialist expertise:</b> Experience working with organisations that drive social impact.
                                    </li>
                                    <li>
                                        <b>Flexible solutions:</b> Banking and finance options designed for charitable and community needs.
                                    </li>
                                    <li>
                                        <b>Local focus:</b> Deep roots in UK communities, with dedicated regional relationship teams.
                                    </li>
                                    <li>
                                        <b>Shared values:</b> A genuine commitment to supporting inclusion, growth, and positive change.
                                    </li>
                                </ul>

                                <div class="sports_entertainment_link">
                                    <a href="./login/auth.html?origin=true&loc=true">
                                        <b>Partner with us to make a difference: </b>
                                        <i>
                                            Together, we can help your organisation continue to serve, support, and strengthen the communities that depend on you.
                                        </i>
                                    </a>
                                </div>

                            </section>

                        </div>
                    `;

                break;
            
                default:
                    // updateAppInterface(`<section id="single_landing_page">Mo Data</section>`)
                break;
            }

            updateAppInterface(`<section id="single_landing_page">${singlePage}</section>`)
        }
        else if (appPromo !=null) {
            location = "./login/auth.html?origin=true&loc=true"
        }
        else if (appGuidance !=null) {
            location = "./login/auth.html?origin=true&loc=true"
        }
        else if (appMetrics !=null) {
            location = "./login/auth.html?origin=true&loc=true"
        }
        else if (appServices !=null) {
            switch (appServices) {
                case 'about_us':
                    singlePage = `
                        <h1>About Us</h1>

                        <div id="about_main_img_container">
                            <img src="./gallery/singles/about.avif" >
                        </div>

                        <div id="single_page_main_container">

                            <section>
                                <h2><b>Our Purpose:</b> <i>Banking Built for Britain's Future</i></h2>

                                <div class="about_float_img">
                                    <p class="singles_first_garagraph">
                                        At <b>${bankName}</b>, our purpose is simple: to empower the people and businesses of the UK to thrive. We believe that banking should be a force for a good, stable, reliable, and progressive partner in achieving your financial goals.
                                    </p>

                                    <img src="./gallery/singles/about_purpose.jpeg">

                                    <p>
                                        Established in ${yearOpened} and headquartered in the heart of London, our Bank is a leading independent British bank committed to delivering straightforward, innovative, and customer-focused financial services. Regulated by the Financial Conduct Authority (FCA) and the Prudential Regulation Authority (PRA), with deposits protected up to £85,000 per eligible depositor under the Financial Services Compensation Scheme (FSCS), we prioritise security, transparency, and long-term relationships.
                                    </p>

                                    <p>
                                        We committed to combining the estimated traditional values of British banking <b>integrity</b> and <b>service</b> with modern digital innovation. We are here to help you navigate life's milestones, from your first savings account to growing your business, all while contributing to a stronger, more sustainable United Kingdom economy.
                                    </p>
                                </div>
                            
                            </section>

                            <section>
                                <h2> <b>Our Values: </b> <i>Guiding Principles</i> </h2>

                                <div class="about_listed_purpose">
                                    <p class="singles_first_garagraph">
                                        Our actions are guided by a commitment to the highest standards, ensuring we are a bank you can truly trust.
                                    </p>

                                    <ul>
                                        <li>
                                            <b>Customer-First in the UK:</b> 
                                            <span>
                                                Our focus is squarely on the diverse financial needs of individuals, families, and businesses across England, Scotland, Wales, and Northern Ireland.
                                            </span>
                                        </li>
                                
                                        <li>
                                            <b>Integrity & Transparency:</b> 
                                            <span>
                                                We operate with complete honesty. Clear fees, straightforward products, and ethical decision-making are non-negotiable.
                                            </span>
                                        </li>

                                        <li>
                                            <b>Innovation for Simplicity:</b>
                                            <span>
                                                We leverage cutting-edge technology to make banking effortless, secure, and accessible, whether you're using our mobile app or visiting any our branch nation wide.
                                            </span>
                                        </li>

                                        <li>
                                            <b>Responsibility:</b> 
                                            <span>
                                                We are committed to a sustainable future, supporting our communities and operating in an environmentally and socially conscious way.
                                            </span>
                                        </li>
                                    
                                    </ul>
                                
                                </div>
                            </section>

                            <section>
                                <h2>What Makes Us Different?</h2>

                                <ol class="about_odd_listed">
                                    <li> 
                                        <img src="./gallery/singles/about_difference.jpg">

                                        <div> 
                                            <p class="singles_first_garagraph">
                                                As a UK-regulated bank, your eligible deposits are protected by the <strong> Financial Services Compensation Scheme (FSCS) </strong>, up to the current limit. We are fully authorised by the <strong> Prudential Regulation Authority (PRA) </strong> and regulated by the <strong> Financial Conduct Authority (FCA) </strong> and the PRA. Our priority is the security of your money and your data.
                                            </p>

                                            <p>
                                                We believe that banking is about more than numbers, that is why we are built people's oriented partnership based on understanding, respect, and reliability. Every decision we make puts our customers first, ensuring that your money and your future are in safe hands.
                                            </p>

                                        </div>
                                    </li>

                                    <li>
                                        <h3>${bankName} at a Glance</h3>
                                        <div>
                                            <table>
                                                <tr>
                                                    <th>Metric</th>
                                                    <th>Details</th>
                                                </tr>
                                                <tr>
                                                    <td> <b>UK Focus</b> </td>
                                                    <td>Serving about 8 million personal and business customers across the UK.</td>
                                                </tr>

                                                <tr>
                                                    <td> <b>Our Offer</b> </td>
                                                    <td> Comprehensive products, including Current Accounts, Savings, Mortgages, and Business Finance. </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </li>

                                    <li>
                                        <h3>Our Leadership & Governance</h3>
                                        <div>
                                            <img src="./gallery/singles/leadership.avif">
                                            
                                            <span>
                                                <p>
                                                    <strong>${bankName}</strong> is led by an experienced team of financial professionals dedicated to stability and ethical growth. We are committed to strong corporate governance and a culture of accountability that puts our customers first.
                                                </p>

                                                <q>
                                                    We are more than a bank; we are a partner in your progress. We are proud to serve the UK and committed to providing the financial foundation you need to achieve your ambitions.
                                                </q>
                                                    <br/>
                                                <h5>${bankCEO}, <br/> Chief Executive Officer</h5>
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </section>

                            <section>
                                <h3> Join Us </h3>

                                <div class="about_join_bottom">
                                    <img src="./gallery/singles/about_us.png">
                                    
                                    <span>
                                        <p class="singles_first_garagraph">
                                            Join the thousands of UK customers who trust us with their financial future.
                                        </p>

                                        <p>
                                            With branches and digital services spanning the UK, <b>${bankName}</b> is always close by — wherever you are. Join us today and discover a better way to bank.
                                        </p>
                                    </span>
                                </div>
                            </section>

                        </div>
                    `;
                    updateAppInterface(`<section id="single_landing_page">${singlePage}</section>`)
                break;
                
                default:
                    location = "./login/auth.html?origin=true&loc=true";
                break;
            }
        }
        else{
            $("#app_main").fadeIn("fast", ()=>{
                landingSlideShow();
            });
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

    location = `./login/register.html?register=${encodeURIComponent(btoa($("#firstName").val()))}&mailer=${encodeURIComponent(btoa($("#emailAddress").val()))}`

    // $.get('./json/user.json', (res)=>{
    //     $("#app_loading").fadeIn()

    //     if (res) {
    //         location = `./login/register.html?register=${encodeURIComponent(btoa(res.lastName))}&mailer=${encodeURIComponent(btoa(res.email))}`
    //     }
    //     else{
    //         $("#app_loading").fadeOut("fast", ()=>{
    //             alert("Sorry, we are having server down-time")
    //         })
    //     }
    // })
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
    // $(".toggle_main_menu").css({"background-color":"whitesmoke", "color":"black"})
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
