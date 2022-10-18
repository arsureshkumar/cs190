var companyname5 = "Love A Book";
var address3 = "905 Main St. Valencia, CA 91344";
var phonenumber2 = "(555) 856-1234";

var product1 = {
    name:"The Meme Book by Mobo Gallery",
    id:"9781329653375",
    desc: 
        "The Meme Book is a funny coffee table book, a way to share your favorite memes with your technophobe grandma, " +
        "or a comment on the times. It can be all or none of these things. This collection of memes pulled from the Int" +
        "ernet and framed in the book is funny and fun. The purpose of this volume is simply to curate some of the funn" +
        "iest memes and to raise a discussion about this new form of art. Is it really new? If so, what is novel about " +
        "it compared to other editorial forms of art? How can we approach this sociologically? What can this collection" +
        " of provocative memes show us about the future, and about the present? What does this curation add to existing" +
        "conversations about art? How can memes exist as fingers on the pulse of today's youth? Will these memes stand " +
        "in the long-term as examples of twenty-first century culture, or will this volume stand as the only evidence t" +
        "hat they ever existed? (description from Google Books)"
    };

var product2 = {
    name:"The Meme Machine by Susan Blackmore",
    id:"0-19-286212-X",
    desc: 
        "In the book, Blackmore examines the difficulties associated with the meme including its definition and how to " +
        "spot one as well as the difficulties which arise from seeing it as being like the gene. She sees the meme in t" +
        "erms of being a universal replicator, of which the gene is but an example, rather than being like the gene its" +
        "elf. Universal replicators possess three key characteristics: high fidelity replication, high levels of fecund" +
        "ity (and therefore many copies) and longevity. She believes that these are earlier days for memes than genes, " +
        "and that while memes have attained/evolved a sufficiently high level of these characteristics to qualify as re" +
        "plicators, they are not as effective replicators as genes by these key characteristics. (description from Wiki" +
        "pedia)"
    };

var product3 = {
    name:"The Electric Meme by Robert Aunger",
    id:"9781476740560",
    desc: 
        "From biology to culture to the new new economy, the buzzword on everyone's lips is 'meme.' How do animals lear" +
        "n things? How does human culture evolve? How does viral marketing work? The answer to these disparate question" +
        "s and even to what is the nature of thought itself is, simply, the meme. For decades researchers have been con" +
        "vinced that memes were The Next Big Thing for the understanding of society and ourselves. But no one has so fa" +
        "r been able to define what they are. Until now. (description by Google Books)"
    };

var product4 = {};
var product5 = {};

var jsonobj4 = { "type":"books", "number":"1" };
var jsonobj5 = { "type":"books", "number":"2" };

var imgurl630 = 'http://college1.com/images/';
var cardimgurl469 = 'http://college1.com/images/cards/gbCard';

var cardnum255 = -1;
var card_array = [];


card_array2 = [...card_array].map(function(number){
    return(number % 13);
});

var adnum430 = 1;
var objwin210 = -1;

function getProduct985(jsonobj) {
    var server = 'http://college1.com/getproduct.php';
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
function checkForm595(){
    if ((document.customerform.firstname.value.length <= 0) || 
    (document.customerform.lastname.value.length <= 0) || 
    (document.customerform.address.value.length <= 0) || 
    (document.customerform.city.value.length <= 0) || 
    (document.customerform.state.value.length <= 0) || 
    (document.customerform.zip.value.length <= 0) || 
    (document.customerform.emailaddr.value.length <= 0)){
        alert("Please enter all fields.")
        return false
    }
}
function makeForm466(){
    return(`<form onSubmit='return checkForm595()' name='customerform'
    action='http://college1.com/classes/javascript/survey.php' method="post">
    <table width=100% border=1>
    <tr><td>First Name: <input type='text' name='firstname'></td>
    <td align=right> Last Name: <input type='text' name='lastname'></td></tr>
    <tr><td colspan=2>Address: <input type='text' name='address' size =50></td></tr>
    <tr><td>City: <input type='text' name='city'></td>
    <td align=right>State: <input type='text' name='state' size=3> 
    Zip: <input type='text' name='zip' size=6></td>
    <tr><td colspan=2>Email Address: <input type='text' name='emailaddr' size=50>
    </td></tr><tr><td><input type='submit' value='Submit'></td>
    <td align=right><input type='reset'></td></tr></table></form>`);
}
function popupAd942(){
    objwin210 = open("","dynamicHTML","width=400,height=400");
    
    if (adnum430 == 1){
        objwin210.document.writeln(`<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=lightgreen>
            <TR><TD>
            <h1 ALIGN=CENTER>Get your reading fix!</h1>
            </TD></TR>
            </TABLE>`);
    } else if(adnum430 == 2){
        objwin210.document.writeln(`<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=lightred>
            <TR><TD>
            <h1 ALIGN=CENTER>Buy books today!</h1>
            </TD></TR>
            </TABLE>`);
    } else if (adnum430 == 0){
        objwin210.document.writeln(`<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=lightblue>
            <TR><TD>
            <h1 ALIGN=CENTER>Books are the way to a better life!</h1>
            </TD></TR>
            </TABLE>`);
    }
    adnum430 = (adnum430 + 1) % 3;

}
function closeAd942(){
    objwin210.close();
    objwin210 = -1;
}
function hitCard980(){
    if ((cardnum255 < card_array.length) && (cardnum255 != -1)){
        document.getElementById("card" + cardnum255).src =  cardimgurl469 + card_array[cardnum255] + ".gif";
        cardnum255++;
    }

}
function dealCards823(){
    var return_string = "";
    var cardurl = "";
    cardnum255 = 2;

    card_array = [];
    while(card_array.length < 5){
        var random_number = Math.floor(Math.random() * 52);
        if(card_array.indexOf(random_number) === -1){
            card_array.push(random_number);
        }
    }

    for (var i = 0; i < card_array.length; i++){
        if (i < cardnum255){
            return_string += `<img src="` + cardimgurl469 + card_array[i] + `.gif" id="card` + i + `">`;
        } else {
            return_string += `<img src="` + cardimgurl469 + 52 + `.gif" id="card` + i + `">`;
        }
    }

    console.log(card_array);
    console.log(card_array2);

    return(return_string);
}
function getHeader(){
    var return_string = "";
    var date = new Date();
    return_string = return_string + "<p style='text-align:right;font-family:verdana;'>" + date.toLocaleString() + "</p>";
    return_string = return_string + "<h1 style='text-align:center;font-family:verdana;'>" + companyname5 + "</h1>";
    return (return_string)
}
function getFooter(){
    var list = [address3, phonenumber2, navigator.appName, navigator.appVersion, navigator.platform];
    return_string = companyname5;
    for(var i = 0; i < list.length; i++){
        return_string = return_string + " | " + list[i];
    }
    return (("<p style='text-align:center;font-family:garamond;'><i>" + return_string  + "</i></p>"));
}
function makeMenu6(size){
    var return_string = "";
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeMain5(product1)">Product 1</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeMain5(product2)">Product 2</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeMain5(product3)">Product 3</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeMain5(product4)">Product 4</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeMain5(product5)">Product 5</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = dealCards823()">Deal Cards</button><br>`;
    return_string = return_string + `<button onclick="hitCard980()">Hit Cards</button><br>`;
    return_string = return_string + `<button onclick="popupAd942()">PopUp Ad</button><br>`;
    return_string = return_string + `<button onclick="closeAd942()">Close Ad</button><br>`;
    return_string = return_string + `<button onclick="getElementById('main522').innerHTML = makeForm466()">Enter Data</button><br>`;
    for(var i = 0; i < size; i++){
        return_string = return_string + 'Menu <br>'
    }
    return(return_string);
}
function makeMain5(product){
    //var produrl = imgurl630 + product.id + '.gif';
    var return_string = 
        `<table style='width:100%' border=1 cellpadding=10><tr>
        <td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>
        <span id='prod_img'><img src="` + product.id + `.jpg" width=200 height=300></span></td>
        <td id='prod_name'>` + product.name + `</td>
        <td style='text-align:right' id='prod_id'>` + product.id + `</td></tr>
        <tr><td style='text-align:center' colspan=2>
        <span id='prod_bar'>Shopping Cart Link Bar</span> </td></tr>
        <tr><td colspan=2 id='prod_desc'>` + product.desc + `</td></tr>
        </table>`;
    return return_string;
}
function makeLinkBar519(){
    var return_string = '';
    return_string = return_string + 'Shopping Cart Link Bar';
    return(return_string);
}