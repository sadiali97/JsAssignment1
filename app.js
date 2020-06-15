//========================================= C H A P T E R # 1
function alt2() {
    alert("Error! Please emter a valid password.");
}
function alt3() {
    alert("JavaScript Alert\n Welcome to JS land...");
}
function alt4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding\n Prevent this page from creating additional dialogs")
}
function alt5() {
    alert("WELCOME TO ThIS PAGE");
}
function alt6() {
    alert("The script tag is placed on\n Body (Inside your page's HTML)");
}

//========================================= C H A P T E R # 2
function chap2() {
    var username="Sadia";
    alert(username);
    var myName=" Sadia Ali";
    alert(myName);
    var message="Hello World";
    alert(message);
}
function bio() {
    name1="I'm Sadia Ali";
    age="I'm 23 years old";
    certified="certified Mobile Application Development";
    alert(name1);
    alert(age);
    alert(certified);
}
function pizza() {

}
function email() {
    var email="sadiaali624726@gmail.com";
    alert("My email Address is: " + email);
}
function book() {
    var book="A smarter way to learn JavaScript";
    alert("I am trying to learn from the book " + book);
}
function design() {
    design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
    alert(design);
}
//================================================= C H A P T E R # 3
function age() {
    var age=23;
    alert("I am " + age + " years old");
}
function birthYear() {
    var birthYear=1997;
    alert("My birth year is " + birthYear + "\nData type of my decleared variable is number");
}
function cStore() {
    var yourName="Abdul Basit";
    var productNmae="TSirt";
    var productQty=5;
    document.getElementById('cStore').innerHTML=yourName + " ordered " + productQty + " " + productNmae + " on XYZ clothing store";
    }

//=========================================== C H A P T E R # 4
function box1() {
    var a = "Sadia Ali";
    var b = 23;
    var c = "Web & Mobile Hybrid Application Development";
    document.getElementById('box1').innerHTML ="I am " + a + ", I am " + b + " years old and I am learning " + c;
}
function box2() {
    document.getElementById('box2').innerHTML ="<h2>Legal Variables are : $name, _IDname, letter, name1</h2>" + 
    "<br>" + "<h2>Illegal Variables are : name, ID, 1234, var, ABC</h2>";
}
function box3() {
    document.getElementById('box3').innerHTML ="<h2>“Rules for naming JS variables”</h2>" + 
    "<br>" + "<p>Variable names can only contain: any letter starting from lowercase, should not a reserve keyword, should not starting from a number, $my_1stVariable $name, _IDname, letter, name1 </p>" + 
    "<br>" + "<p>Variables must begin with a $name, _IDname, letter, name1 </p>" + "<br>" + 
    "<p>Variable names are case Sensitive </p>" + "<br>" + "<p>Variable names should not be JS Keyword</p>";
}

//=========================================== C H A P T E R # 5
function boxes1() {
    var a = 10;
    var b = 5;
    // alert("The sum of " + a + " and " + b + " is : " + c);
    document.getElementById('boxes1').innerHTML="The sum of " + a + " and " + b + " is : " + eval(a+b);
    document.getElementById('boxes2').innerHTML="The sub of " + a + " and " + b + " is : " + eval(a-b);
    document.getElementById('boxes3').innerHTML="The mul of " + a + " and " + b + " is : " + a*b;
    document.getElementById('boxes4').innerHTML="The div of " + a + " and " + b + " is : " + a/b;
}
function boxes5() {
    var a;
    a = "Value after variable declaration is undefined";
    var b = 5;
    document.getElementById('boxes5').innerHTML= a + "<br>Initial value : " + b + 
    "<br>Value after increament is : " + ++b + "<br>Value after addition is : " + eval(b+7) + 
    "<br>After the decreament is : " + eval((b+7)-1) + "<br>The remainder is : " + eval(b%3);
}
function boxes6() {
    var ticket = 600;
    var qty = 5;
    document.getElementById('boxes6').innerHTML="Total cost to buy " + qty + " ticket to a movie is " + eval(ticket*qty) + "PKR";
}
function boxes7() {
    var a = prompt('Type no. to see table');
    var myString = "";
    for (i=1; i<=10; i++) {
    myString += a + " x "+  i +" = " +(i*a)+ "<br/>";
    }
    document.getElementById('boxes7').innerHTML = myString;
}
function boxes8() {
    var cel = 32;
    var far = 70;
    var conv = eval((cel*9/5)+32);
    document.getElementById('boxes8').innerHTML= cel + "<sup>0</sup>C is " + conv + "<sup>0</sup>F";
}
function boxes9() {
    var p1 = 650;
    var p2 = 100;
    var qty1 = 3;
    var qty2 = 7;
    var charges =100;
    var total = eval((p1*qty1)+(p2*qty2)+charges);
    document.getElementById('boxes9').innerHTML= "<h2>Shopping Cart</h2><br>" + " price of item 1 is " + p1 + 
    "<br>Quantity of item 1 is " + qty1 + "<br>Price of item 2 is " + p2 + "<br>quantity of item 2 is " + qty2 + 
    "<br>Shipping Charges " + charges + "<br>Total cost of your oreder is " + total;
}
function boxes10() {
    var tmarks = 100;
    var obtMarks = 80;
    var per = eval((obtMarks*100)/tmarks);
    document.getElementById('boxe10').innerHTML= "Total Marks : " + tmarks + "<br>Obtained Marks : " + obtMarks + 
    "<br>Percentage : " + per + "%";
}
function boxes11() {
    var a = eval(10*104);
    var b = eval(25*28);
    document.getElementById('boxes11').innerHTML = "<h2>Currency in PKR</h2><br>" + "Total Currency in PKR : " + eval(a+b);
}
function boxes12() {
    var a = 2;
    var b = eval(a+5);
    var c = eval(b*10);
    var d = eval(c/2);
    document.getElementById('boxes12').innerHTML = "The value of a variable is : " + a + "<br>After adding 5 is : " + 
    b + "<br>Multiplay by 10 is : " + c + "<br>Dividing by 2 is : " + d;
}
function boxes13() {
    var currentyr = 2020;
    var birthyr = 1997;
    var age = eval(currentyr-birthyr);
    document.getElementById('boxes13').innerHTML = "<h2>Age Calculate</h2><br>Current Year : " + currentyr + 
    "<br>Birth Year : " + birthyr + "<br>Your Age is : " + age;
}
function boxes14() {
    var r = 20;
    var c =eval(2*3.14*r);
    var a = eval(3.14*(r*r));
    document.getElementById('boxes14').innerHTML = "Radius of a circle is : " + r + "<br>The circumference is : " + 
    c + "<br>The Area is : " + a;
}



//=========================================== C H A P T E R # 6 - 9
function mth1() {
    var a = 10;
    document.getElementById('mth1').innerHTML="<h2>Result:</h2> " + "<br>" + "The value of a is : " + a + 
    "<br>" + "<br>The value of ++a is : " + ++a  + "<br>Now the value is : " + a + "<br>" 
    +"<br>The value of a++ is : " + a + "<br>Now The value of a is : " + ++a + "<br>" 
    +"<br>The value of --a is : " + --a + "<br>Now The value of a is : " + a + "<br>" 
    +"<br>The value of a-- is : " + a-- + "<br>Now The value of a is : " + a;
}
function mth2() {
    var a = 2;
    var b = 1;
    var result =eval(--a - --b + ++b + b--); 
    document.getElementById('mth2').innerHTML="a is : " + a + "<br>b is : " + b + "<br>Result : " + result;
}
function mth3() {
    a = prompt('Type User Name');
}
function mth4() {
//not understand
    var a = Number(prompt('type a number'));
    var b = "sadia";
    result = a * b;
    document.getElementById('mth4').innerHTML= result;
}
function mth5() {
    var a1 = prompt('Type Subjects Name');
    var a2 = prompt('Type Subjects Name');
    var a3 = prompt('Type Subjects Name');
    var b1 = a1;
    var b2 = a2;
    var b3 = a3;
    var tmarks = 100;
    var c1 = Number(prompt('Type Obtained marks of 1st Subject'));
    var c2 = Number(prompt('Type Obtained marks of 2nd Subject'));
    var c3 = Number(prompt('Type Obtained marks of 3rd Subject'));
    var tobtmarks = eval(c1+c2+c3);
    var per1 = eval((c1*100)/tmarks);
    var per2 = eval((c2*100)/tmarks);
    var per3 = eval((c3*100)/tmarks);
    var tper = eval((per1+per2+per3)/3);
    document.getElementById('mth5').innerHTML= "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" + 
    "<tr><td>" + a1 + "</td><td>" + tmarks + "</td><td>" + c1 + "</td><td>" + per1 + "%</td></tr>" + 
    "<tr><td>" + a2 + "</td><td>" + tmarks + "</td><td>" + c2 + "</td><td>" + per2 + "%</td></tr>" +
    "<tr><td>" + a3 + "</td><td>" + tmarks + "</td><td>" + c3 + "</td><td>" + per3 + "%</td></tr>" + 
    "<tr><td>" + " " + "</td><td>" + eval(tmarks + tmarks + tmarks) + "</td><td>" + " " + "</td><td>" + tper + "%</td></tr>" + "<table/>";
}

//=========================================== C H A P T E R # 9 - 11
function city() {
    var city=prompt('type your city name here','your city name is');
    if(city == "karachi"){
        document.getElementById('city').innerHTML="Welcome to city of light " + city;
    }
    else{
        document.getElementById('city').innerHTML=city + " is not city of light";
    }
}
function gender() {
    var gender=prompt('type your gender here','your gender is');
    if(gender == "male"){
        document.getElementById('gender').innerHTML="Good Morning Sir";
    }
    else if(gender == "female"){
        document.getElementById('gender').innerHTML="No Message For you";
    }
    else{
        document.getElementById('gender').innerHTML="No Message For you";
    }
}
function signal() {
    var color=prompt('type color for signal red/yellow/green','type red/yelleow/green');
    if(color == "red"){
        document.getElementById('signal').innerHTML="Must Stop";
    }
    else if(color == "yellow"){
        document.getElementById('signal').innerHTML="Ready to Move";
    }
    else if(color == "green"){
        document.getElementById('signal').innerHTML="Move Now";
    }
    else{
        document.getElementById('gender').innerHTML="No Message For you Please correct your Message";
    }
}
function fuel() {
    var fuel=prompt('type remaining fuel','type remining fuel in litter');
    if(fuel <= 0.25){
        document.getElementById('fuel').innerHTML="Please refill the fuel in your car";
    }
    else{
        document.getElementById('fuel').innerHTML="No Need to fill the Fuel";
    }
}
function condition1() {
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
}
function condition2() {
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }    
}
function condition3() {
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
}
function condition4() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    } 
}
function condition5() {
    if(true){
    alert("True");
    }
    if(false){
    alert("False");
    }
}
function condition6() {
    if("car" < "cat"){
    alert("car is smaller than cat");
    }    
}
function markSheet() {
    var tMarks=300;
    var obtMarks=Number(prompt('Type here Obtained Marks (1-300)','ontained marks'));
    var percentage=eval((obtMarks*100)/tMarks);
    if(percentage < 60 && percentage >=10) {
        document.getElementById('mSheet').innerHTML ="Total Marks : " + tMarks + "<br>" + 
        "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + 
        "Grade : Fail" + "<br>" + "Remarks : Sorry";
    }
    else if(percentage >= 60 && percentage <70) {
        document.getElementById('mSheet').innerHTML ="Total Marks : " + tMarks + "<br>" + 
        "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + 
        "Grade : B" + "<br>" + "Remarks : You Need to improve";
    }
    else if(percentage >= 70 && percentage <80) {
        document.getElementById('mSheet').innerHTML ="Total Marks : " + tMarks + "<br>" + 
        "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + 
        "Grade : A" + "<br>" + "Remarks : Goode";
    }
    else if(percentage >= 80 && percentage <=100) {
        document.getElementById('mSheet').innerHTML ="Total Marks : " + tMarks + "<br>" + 
        "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + "Grade : A-One"
        + "<br>" + "Remarks : Excellent";
    }
    else{
        document.getElementById('mSheet').innerHTML = "Grade : Not Existing";
    }
}
function game() {
    var scrtNum=Number(prompt('Type a number from 1 to 10','type here'));
    var a=5;
    if(scrtNum === a){
        document.getElementById('game').innerHTML = "Bingo! Correct Answer";
    }
    else{
        document.getElementById('game').innerHTML = "“Close enough to the correct answer”";
    }
}
function chNum() {
    var a=Number(prompt('type num to check divisible by 3 or not','type number'));
    if(a%3 == 0) {
        document.getElementById('chNum1').innerHTML =a + " is divisible by 3";
    }
    else{
        document.getElementById('chNum1').innerHTML = a +" is not divisible by 3";
    }
    var b=Number(prompt('type num to check Even/Odd','type number'));
    if(b%2 == 0) {
        document.getElementById('chNum2').innerHTML =b + " is Even Number";
    }
    else{
        document.getElementById('chNum2').innerHTML = b +" is Odd Number";
    }
}
function temp() {
    var t=Number(prompt('Type num for temperature','type num here'));
    if(t>40) {
        document.getElementById('temp').innerHTML ="“It is too hot outside.”";
    }
    else if(t>30) {
        document.getElementById('temp').innerHTML =" “The Weather today is Normal.”";
    }
    else if(t>20) {
        document.getElementById('temp').innerHTML ="“Today’s Weather is cool.”";
    }
    else if(t>10) {
        document.getElementById('temp').innerHTML ="“OMG! Today’s weather is so Cool.”";
    }
    else{
        document.getElementById('temp').innerHTML ="Type Correct Temperature";
    }
}

//=========================================== C H A P T E R # 12 - 13
function ascii() {

}
function lrg() {
    var val1=Number(prompt('Type Number to chaeck equal/larger','type number'));
    var val2=Number(prompt('Type Number to chaeck equal/larger','type number'));
    if(val1 == val2) {
        document.getElementById('lrg').innerHTML =val1 + " is equal to " + val2;
    }
    else if(val1 > val2) {
        document.getElementById('lrg').innerHTML =val1 + " is larger than " + val2;
    }
    else{
        document.getElementById('lrg').innerHTML =val1 + " is smaller than " + val2;
    }
}
function posneg() {
    var val=Number(prompt('Type Number to chaeck positive/negative/zero','type number'));
    if(val > 0) {
        document.getElementById('posneg').innerHTML =val + " is a possitive number ";
    }
    else if(val < 0) {
        document.getElementById('posneg').innerHTML =val + " is a negative number ";
    }
    else{
        document.getElementById('posneg').innerHTML =" The value is zero ";
    }
}
function vowel() {
    var str=prompt('type a character to check vowel', 'type a character');
    if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' || 
    str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U'){
        document.getElementById('vowel').innerHTML ="True";
    }
    else{
        document.getElementById('vowel').innerHTML ="False";
    }
}
function password() {
    var pass="MobileApp";
    var userpass=prompt('type your password','Hint: MobileApp');
    if(pass === userpass) {
        document.getElementById('pass').innerHTML ="Correct! The password you entered matches the original password";
    }
    else{
        document.getElementById('pass').innerHTML ="Incorrect password";
    }
}
function time() {
}
function cal() {
    var a = 20;
    var b = 10;
    document.getElementById('cal1').innerHTML="The sum of " + a + " and " + b + " is : " + eval(a+b);
    document.getElementById('cal2').innerHTML="The sub of " + a + " and " + b + " is : " + eval(a-b);
    document.getElementById('cal3').innerHTML="The mul of " + a + " and " + b + " is : " + a*b;
    document.getElementById('cal4').innerHTML="The div of " + a + " and " + b + " is : " + a/b;
}
//======================================== C H A P T E R # 14 - 16
function fun1() {
    var arr1 = [];
            var arr2 = new Array();
            arr1 = new Array("Student Name");
            document.getElementById('fun1').innerHTML =arr1;
}
function fun2() {
    var person = {firstName:"", 
    lastName:""};
    document.getElementById('fun2').innerHTML = person;
}
function fun3() {
    var fruit = ["Apple", " Mango", " Banana"];
    document.getElementById('fun3').innerHTML = fruit;
}
function fun4() {
    var numbr = [1,2,3,4,5];
    document.getElementById('fun4').innerHTML = numbr;
}
function fun6() {
    var mixedArray = [1, "Bob", "Now is", true];
    document.getElementById('fun6').innerHTML = mixedArray;
}
function fun7(){
    var deg = [ 'SSC',' HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
    var mydeg = "";
    for (var i = 0 ; i <= 7 ; i++){
        mydeg += i + ") " + deg[i] + "<br>";
    document.getElementById('fun7').innerHTML = mydeg;
    }
}
// function fun8() {
//     var stName = [ 'Ali','Ahmed', 'Ahsan'];
//     var a1 =Number(prompt('type score'));
//     for (var i = 0 ; i <= 2 ; i++){

//     }
//     var tmarks = 500;
//     var per = "";
//     for (var i = 0 ; i <= 2 ; i++){
//         per += "Score of " + stName[i] + ". Percentage : " + eval(()) + "<br>";
//     document.getElementById('fun8').innerHTML = mydeg;
//     }
// }
// }
function fun9(){
    var deg = [ 'red','yellow','blue','green'];
    var mydeg = "";
    for (var i = 0 ; i <= deg.length ; i++){
        mydeg += i + ") " + deg[i] + "<br>";
    document.getElementById('fun9').innerHTML = mydeg;
    }
}
function fun10() {
    var fruits = [22,14,10,12,25];
    document.getElementById('fun9').innerHTML ="Score of Students : " + fruits;
    fruits.sort();
    document.getElementById('fun10').innerHTML ="Ordered Score of Students : " + fruits;
}
function fun11(){
    var deg = [ ' Karachi ',' Lahore', ' Islamabad'];
    var mydeg = "";
    for (var i = 0 ; i <= 2 ; i++){
        mydeg += deg[i] ;
    document.getElementById('fun11').innerHTML = mydeg;
    }
}
// function cal() {
//     var x=Number(prompt('type a 1st number','type here'));
// 	var y=Number(prompt('type a 2nd number','type here'));
// 	var sum=eval(x+y);
// 	document.getElementById('sum').innerHTML="the Addition of " + x + " and " + y + " is " + sum ; 
// 	var sub=eval(x-y);
// 	document.getElementById('sub').innerHTML="the subtraction of " + x + " and " + y + " is " + sub ; 
// 	var mul =eval(x*y);
// 	document.getElementById('mul').innerHTML="the multiplication of " + x + " and " + y + " is " + mul ; 
// }

//======================================= C H A P T E R # 17 - 20
function func1() {
    // var arr[][] = "";
    // alert(arr[][]);
}
function func2() {

}
function func3() {
    var count = "";
    for (i=1; i<=10; i++) {
    count += i + "<br/>";
    }
    document.getElementById('func3').innerHTML = count;    
}
function func4() {
    var a = Number(prompt('Type no. to see table'));
    var b = Number(prompt('type length'));
    var myString = "";
    for (i=1; i<=b; i++) {
    myString += a + " x "+  i +" = " +(i*a)+ "<br/>";
    }
    document.getElementById('func4').innerHTML = myString;
}
function func5() {
    var frt = ["Apple","Banana","Mango","Orange","Strawberry"];
    for (var i = 0; i < frt.length; i++) {
    document.getElementById('func5').innerHTML = "" + frt[i];
    }
}







