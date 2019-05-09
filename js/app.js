document.documentElement.style .setProperty('--primary', '#add2e6');
document.documentElement.style .setProperty('--secondary', 'red');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#FAFAFA');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1024px');
document.documentElement.style .setProperty('--navbar-background', 'red');
document.documentElement.style .setProperty('--navbar-text-color', '#000');
document.documentElement.style .setProperty('--header-background', '#e4f5cd');
document.documentElement.style .setProperty('--header-text-color', '#fff');
document.documentElement.style .setProperty('--footer-background', '#fff');
document.documentElement.style .setProperty('--footer-text-color', '#000');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');


const navbar_data = [
   {
       brand:  "Fellowship Healthcare Group",
   }
];
function navbar_template(navbar) {
   return `
    <ul class="menu-list">
        <li><a href="./"><h3 class="text-black">${navbar.brand}</h3></a></li>
    </ul>
 `;
}

document.getElementById("navbar").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       brand: "Fellowship Healthcare Group",
   }
];
function footer_template(foot) {
    return `
    <div class="grid set-cols-1">

         <div class="column start-vertical-between">

            <h4>Copyright 2019. ${foot.brand}. All Rights Reserved.</h4>

            <p><b>Attention: </b> In offering this website, eHealthInsurance Services, Inc. is required to comply with all applicable federal law, including the standards established under 45 CFR 155.220(c) and (d) and standards established under 45 CFR 155.260 to protect the privacy and security of personally identifiable information. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance MarketplaceSM website. </p>

        </div>

        <ul class="column menu-start">

            <li> <a href="privacy.html"> Privacy </a> </li> 
          
            <li> <a href="terms.html"> Term of Use </a> </li>

        </ul>
        
    </div>
  `;
}
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
