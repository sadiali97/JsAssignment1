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



//===========================================
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

//====================================================
function fun1() {
    var arr1 = [];
            var arr2 = new Array();
            arr1 = new Array("Student Name");
            document.getElementById('fun1').innerHTML =arr1;
}
// function fun2() {
//         var obj1 = {};
//         var obj2 = new Object();
//         var = {
//             title:  'Frog',
//             url:    '/img/picture.jpg',
//             width:  300,
//             height: 200
//           };
//         obj1 = new Object("Student Name");
//         alert(obj1);
// }
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
// function fun7(){
//     var deg[7] = [ 'SSC',' HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];  
//     for (var i = course.length - 1; i >= 0; i--){

//     } 
//     document.getElementById('fun7').innerHTML = i + ") " + deg[] + "<br>";
// }
function fun8() {

}
function fun10() {
    var fruits = [22,14,10,12,25];
    document.getElementById('fun9').innerHTML ="Score of Students : " + fruits;
    fruits.sort();
    document.getElementById('fun10').innerHTML ="Ordered Score of Students : " + fruits;
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