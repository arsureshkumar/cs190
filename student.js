    a_name = 'Arjun Sureshkumar';
    a_message = 'cs190 Javascript Lab 2';
    code = 491;
    current = 1;
    mytype = "direct";

        function getBreaks345(){
            var number = 0;
            do{
                number = prompt("Enter Number of Breaks");
            } while (number < 1 && number > 5)
            var message = "";
            for(i = 0; i < number; i++){
                message = message + "<br>"
            }
            document.getElementById("breaks345").innerHTML = message;
        }
        function getCards415(){
            var number = 0;
            do{
                number = prompt("Enter Number of Cards");
            } while (number < 2 && number > 7)
            var message = "Card #0";
            for(i = 1; i < number; i++){
                message = message + " Card #" + i;
            }
            document.getElementById("cards415").innerHTML = message;
        }
        function getName739(){
            answer = prompt("Enter Name: ");
            var length = "";
            if (answer.length < 5){
                length = "short";
            } else if (answer.length < 10){
                length = "medium";
            } else {
                length = "long";
            }
            var message = "Your Name Is: " + answer + " You have a " + length + " name";
            alert(message);
            document.getElementById("name739").innerHTML = message;
        }
        function getAge222(){
            answer = prompt("Enter Age: ");
            var age = "";
            if (answer < 18){
                age = " kid";
            } else if (answer < 50){
                age = "n adult";
            } else {
                age = " senior citizen";
            }
            var message = "Your Age Is: " + answer + " You are a" + age;
            alert(message);
            document.getElementById("age222").innerHTML = message;
        }
        function confirmlink286(linkname) {
            if (confirm("Are you sure you want to jump to " + linkname + "?"))
                 location = linkname;
        }
        function displayinfo833(){
            alert(a_name +" "+ a_message +" "+ code);
        }
        function displayspecial428(){
    
           if (current == 1){
              alert("The current special is #1");
           }
           if (current == 2){
              alert("The current special is #2");
           }
           if (current == 3 ){
              alert("The current special is #3");
           }
           current = current + 1;
           if (current > 3) {
             current = 1;   // wrap around
           }
    
        }
        function changetype871(){
            var newtype;
            if (mytype == "direct"){
                newtype = "advertising";
            }
            if (mytype == "advertising"){
                newtype = "subscription";
            }
            if (mytype == "subscription"){
                newtype = "direct";
            }
            mytype = newtype;
        }
        function displaytype661(){
            if (mytype == "direct"){
                alert("Buy Now! From this web page! My children need new shoes!");
            }
            if (mytype == "advertising"){
                alert("Support our advertisers! Click on an ad, so I can make money!");
            }
            if (mytype == "subscription"){
                alert("Renew your subscription today! My children need medicine!");
            } 
        }