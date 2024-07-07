var companyname2 = "Book Haven";
var address5 = "259 Main St. Valencia, CA 91344";
var phonenumber2 = "(555) 706-1234";

var product1 = { name: "HP 4426", id: "4426", desc: "Newest and Best Laptop from HP Computer" };
var product2 = { name: "Apple 88123 iPad", id: "88123", desc: "Apple Tablet Computer" };
var product3 = { name: "Dell Dimension 2400", id: "2400X", desc: "A fast 2.4 ghz computer" };

var imgurl524 = 'https://www.college1.com/images/';
var cardimgurl597 = 'https://www.college1.com/images/cards/gbCard';

var cardnum276 = -1;

var adnum892 = 1;
var winobj875 = -1;

// var product4 = null; getProduct273(jsonobj4);
// var product5 = null; getProduct273(jsonobj5);

var product4 = {};
var product5 = {};

var jsonobj4 = { type:"dvdcd", number:"1" }; 
var jsonobj5 = { type:"dvdcd", number:"2" };

var cardsInHand = [];

function getHeader() {
    var headerHtml = `
        <div style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; font-size: 2em;">
            ${companyname2}
        </div>
    `;
    return headerHtml;
}

function getFooter(companyName, address, phoneNumber) {
    var footerHtml = `
        <div style="background-color: #333; color: white; padding: 10px; text-align: center; font-size: 0.8em;">
            <p>${companyName}</p>
            <p>${address}</p>
            <p>${phoneNumber}</p>
        </div>
    `;
    return footerHtml;
}

function makeMenu9(size) {
    var menuHTML = `
        Menu:<br>
        <button onclick="execButton453(product1)">Product #1</button>
        <button onclick="execButton453(product2)">Product #2</button>
        <button onclick="execButton453(product3)">Product #3</button>
        <button onclick="execButton453(product4)">Product #4</button>
        <button onclick="execButton453(product5)">Product #5</button><br>
        <button onclick="dealCards250()">Deal Cards</button>
        <button onclick="hitCard785()">Hit Card</button><br>
        <button onclick="popupAd631()">PopUp Ad</button>
        <button onclick="closeAd631()">Close Ad</button><br>
        <button onclick="makeForm990()">Enter Data</button>
    `;
    return menuHTML;
}

function makeMain9(myproduct) {
    var produrl = imgurl524 + myproduct.id + ".gif";
    let productHTML = `
        My Product<br>
        Product Name: ${myproduct.name} <br>
        Product ID: ${myproduct.id} <br>
        Product Description: ${myproduct.desc} <br>
        <form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>
            <input type='hidden' name='business' value='kin@kinskards.com'>
            <input type='hidden' name='cmd' value='_cart'>
            <input type='hidden' name='add' value='1'>
            <input type='hidden' name='item_name' value='${myproduct.name}'>
            <input type='hidden' name='amount' value='24.95'>
            <input type='hidden' name='currency_code' value='USD'>
            <input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'>
            <img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'>
        </form><br> 
        <img src="${produrl}" width=250 height=400>`;
    return productHTML;
}

function execButton453(product) {
    let productHTML = makeMain9(product); 
    let mainSection = document.getElementById('main957');
    mainSection.innerHTML = productHTML;
}

function popupAd631() {
    var ads = [
        "<h1>Ad 1: Buy One Get One Free!</h1><p>Don't miss this one in a lifetime offer!</p>",
        "<h1>Ad 2: 20% OFF All Books!</h1><p>Save big today!</p>",
        "<h1>Ad 3: FREE Shipping!</h1><p>Enjoy free shipping on all orders.</p>"
    ];

    if (winobj875 == -1 || winobj875.closed) {
        winobj875 = window.open("", "adWindow", "width=300,height=200");
    }

    winobj875.document.open();
    winobj875.document.write(ads[adnum892 - 1]);
    winobj875.document.close();

    adnum892++;
    if (adnum892 > ads.length) {
        adnum892 = 1; // Wrap around to the first ad
    }
}

function closeAd631() {
    if (winobj875 && !winobj875.closed) {
        winobj875.close();
        winobj875 = -1; // Reset the window object variable
    }
}

function makeForm990() {
    var formHTML = `
    <form onSubmit='return checkForm591()' name='customerform'>
        <table width="100%" border="1">
            <tr>
                <td>First Name: <input type='text' name='firstname'></td>
                <td align='right'> Last Name: <input type='text' name='lastname'></td>
            </tr>
            <tr>
                <td colspan='2'>Address: <input type='text' name='address' size='50'></td>
            </tr>
            <tr>
                <td>City: <input type='text' name='city'></td>
                <td align='right'>State: <input type='text' name='state' size='3'> 
                Zip: <input type='text' name='zip' size='6'></td>
            </tr>
            <tr>
                <td colspan='2'>Email Address: <input type='text' name='emailaddr' size='50'></td>
            </tr>
            <tr>
                <td><input type='submit' value='Submit'></td>
                <td align='right'><input type='reset'></td>
            </tr>
        </table>
    </form>`;
    
    document.body.innerHTML += formHTML;
}

function calculateHandScore() {
    let score = 0;
    let aceCount = 0;

    for (let cardNumber of cardsInHand) {
        let rank = cardNumber % 13; // Card rank from 0 to 12 (Ace to King)

        if (rank >= 2 && rank <= 9) {
            score += (rank + 1); // Cards 2 to 10 are worth their face value
        } else if (rank >= 10 && rank <= 12) {
            score += 10; // Cards Jack, Queen, King are worth 10
        } else if (rank === 0) {
            aceCount++; // Count Aces separately
        }
    }

    // Adjust score for Aces (each Ace can be 1 or 11)
    for (let i = 0; i < aceCount; i++) {
        if (score + 11 <= 21) {
            score += 11;
        } else {
            score += 1;
        }
    }

    return score;
}

function hitCard785() {

    if (cardnum276 === -1) {
        alert("Please deal cards first!");
        return;
    }

    // Check if maximum number of cards (5) already reached
    if (cardnum276 >= 5) {
        alert("Maximum number of cards reached!");
        return;
    }

    // Generate a new card number that is not already in cardsInHand
    let newCardNumber;
    do {
        newCardNumber = getRandomCard();
    } while (cardsInHand.includes(newCardNumber));

    // Add the new card number to cardsInHand
    cardsInHand.push(newCardNumber);

    // Flip the next facedown card face up
    let nextCardIndex = cardnum276;
    let cardurl = cardimgurl597 + newCardNumber + `.gif`;
    document.getElementById(`card${nextCardIndex}`).src = cardurl;

    // Update card count
    cardnum276++;

    // Calculate and display score
    let score = calculateHandScore();
    document.getElementById('scoreDisplay').textContent = `Score: ${score}`;

    // Check for bust (score > 21)
    if (score > 21) {
        alert("Bust! You've exceeded 21.");
        // Handle bust scenario if needed
    }
}

function getRandomCard() {
    return Math.floor(Math.random() * 52);
}


function dealCards250() {
    let cardHTML = '';
    cardsInHand = []; 

    // Create HTML for 2 face-up cards
    for (let i = 0; i < 2; i++) {
        let cardnumber = getRandomCard();
        cardsInHand.push(cardnumber);
        let cardurl = cardimgurl597 + cardnumber + '.gif';
        cardHTML += `<img id="card${i}" src="${cardurl}" alt="Card ${i}"> `;
    }
    // Create HTML for 3 face-down cards
    for (let i = 2; i < 5; i++) {
        let cardnumber = 52;  // Use card number 52 for the back of the card
        let cardurl = cardimgurl597 + cardnumber + '.gif';
        cardHTML += `<img id="card${i}" src="${cardurl}" alt="Card ${i}"> `;
    }
    // Insert the card HTML into the main section
    const mainSection = document.getElementById('main957');
    mainSection.innerHTML = cardHTML;

    // Update card count
    cardnum276 = 2;
}

function checkForm591() { 
    var form = document.customerform;
    var missingFields = [];

    if (form.firstname.value.trim() === "") {
        missingFields.push("First Name");
    }
    if (form.lastname.value.trim() === "") {
        missingFields.push("Last Name");
    }
    if (form.address.value.trim() === "") {
        missingFields.push("Address");
    }
    if (form.city.value.trim() === "") {
        missingFields.push("City");
    }
    if (form.state.value.trim() === "") {
        missingFields.push("State");
    }
    if (form.zip.value.trim() === "") {
        missingFields.push("Zip");
    }
    if (form.emailaddr.value.trim() === "") {
        missingFields.push("Email Address");
    }

    if (missingFields.length > 0) {
        alert("The following fields are missing input: " + missingFields.join(", "));
        return false;
    } else {
        form.action = "https://www.college1.com/classes/javascript/survey.php";
        return true;
    }
}

function getProduct273(jsonobj) {
  var server = 'https://www.college1.com/getproduct.php';
  var jsonstr = JSON.stringify(jsonobj);           // This is a string in JSON format
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", server+"?jsonstr=" + jsonstr, true); // open connection to server
  xmlhttp.send();  // send request, causes onreadystatechange to run when reply is ready 

  xmlhttp.onreadystatechange = function () {  
      //console.log('hello ' + this.readyState + ' ' + this.status);
      if (this.readyState == 4 && this.status == 200) {
        replystr =  this.responseText;           // replystr MUST BE GLOBAL
        //console.log(replystr);
        if (product4 == null)
            product4 = JSON.parse(replystr);
        else if (product5 == null)
            product5 = JSON.parse(replystr);
        else
            console.log('Error, no object variable available');
      }
   };
}

function myFunc(myObj) {   //required function, getproduct2.php will call it
    if (product4 == null) 
        product4 = myObj;
    else if (product5 == null)
        product5 = myObj;
    else
        console.log('Error, no object variable available');
}