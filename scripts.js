// var fName;
// fName =  prompt('please enter your first name')
// var lName = prompt('please enter your last name');
// var age = prompt('please enter your age',40);
// var ageInDays = age*365 ;
// alert('Hi! ' + fName + ' ' + lName);
// alert('your age is ' + age);
// alert('your age in days ' + ageInDays);
// age++;
// alert('your age in next year ' + age)
//  var exp = (2 * 4) * (4 + 2)        //34
//  alert(exp)
// var country = prompt('please enter your Country', 'Pakistan');
// if (country == 'Pakistan') {
//     var pro = prompt('please enter your province', 'Punjab');
//     if (pro == 'Punjab') {
//         var loc = prompt('please enter your city', 'Lahore');
//         if (loc == 'Faisalabad' || loc == 'Islamabad' || loc == 'Lahore') {
//             alert('you are eligiable')
//         }
//         else {
//             alert('you are pakistani but city is not in our dataBase')
//         }
//     }
//     else{
//         alert('your province is not punjab')
//     }
// }
// else {
//     alert('we are currently not availiable ' +  country)
// }
// var cities = ['Lahore','Faisalabad','Peshawar','karachi','larkana','Islamabad','Multan','rawalpindi'];
// var provinces = [];
// provinces[0]='punjab'
// provinces[1]='sindh'
// provinces[2]='kpk'
// provinces[4]='balochistan'
// cities.push('rawalpindi'); //adds the value at the end
// cities.pop(); //delete the value at the end
// cities.unshift('rawalpindi'); //adds the value at the start
// cities.shift(); //delete the value at the start
// var slicedArray = cities.slice(2,4);
// alert(slicedArray);
// var slicedArray = cities.splice(2,0,'Mycity','MyCity2');
// alert(slicedArray)
// alert(cities[1]);
// alert(cities[0]);
// alert(cities[0]);
// alert(cities[0]);
// alert(cities[0]);
// alert(cities[0]);
// var userCity = prompt('enter your city'); //Faisalabad
// var match = false;
// var le =  cities.length-1 //1000
// for(var i = 0 ; i <= le; i++){ //Faisalabad
//     if(cities[i]==userCity){
//         match = true;
//         break; 
//     }
//     alert(i)
// }
// if(match==true){
//     alert('your answer is correct')
// }
// else(
//     alert(userCity + ' your answer is false')
// )
// console.log(userAnswer)

// var questions = ['what is the largest city of Pakistan','largest country','famous programming language in 2019','Laptop or pc']
// var answers = ['Karachi','China','Javascript','pc']

// var userAnswer = []
// var score = 0
// for( var i =0 ; i<questions.length ; i++){
//     var ans = prompt(questions[i])
//      userAnswer.push(ans)
// }
// for( var i =0 ; i<questions.length ; i++){
//     if(answers[i]==userAnswer[i]){
//         alert('your answer of question number ' + parseInt(i+1)  + ' is correct' )
//         score++
//     }
//     else{
//         alert('your answer of question number ' + parseInt(i+1) + ' is false')
//     }
// }
// var percentage = (score/answers.length) * 100;

// alert('your percentage is ' + percentage + ' %')

// 'Anjum' == 'anjum' //false
var name1 = 'AnJUm' //'anjum'
var name2 = 'ANJUM'

//  if()
// var last = name1.length -1
// alert(name1[0])

// if(name1.toUpperCase()==name2){
//     alert('true')
// }
// else{
//     alert('false')
// }
// var para = "Sometimes it's useful to know how many characters are in a string. For example, suppose you want to slice the first three characters from any string than exceeds three characters in length, for example, slicing 'Nov' from 'November'. To find the number of characters in a string, you use the same language you've already learned to find the number of elements in an array"
var para = 'string dasdfas string'
// var fullStop = 0

// // for(var i = 0 ; i < para.length ; i++){
// //     if(para.slice(i,i+6)=='string'){ ///  == Sometimes
// //         fullStop++
// //     }

// // }
// var firstChar = para.lastIndexOf("Sometime12s");  // 1  // -1
// if(firstChar==-1){
//     alert('not found')
// }
// else{
//     alert('found')
// }
// alert('fullstop occurs '+fullStop +' this many times')
// para.charAt(0)
// for (var i = 0; i < para.length; i++) {
//      if (para.slice(i, i + 5) === "string") {
//         para = para.slice(0, 1) + "character" + para.slice(i + 5);
//      }
//  }
//       alert(para)


// var a = true;
// var b = false;
// var c = false;

// if ( a || b && c) {
//    alert('first')
// }
// else {
//    alert('second');
// }
//  var rollNumber = Math.random();
//  rollNumber =  rollNumber * 10
//  rollNumber = Math.round(rollNumber)
//  alert(rollNumber)
//  1 + 1 //2
//  "1" - "Arif" // NaN
// var todayDate = new Date()
// todayDate.setFullYear(todayDate.getFullYear()+2)
// var hours = todayDate.getDate()
// var minutes = todayDate.getMonth()
// // alert(todayDate.getMinutes())
// // alert(todayDate.getFullYear())
// var area1
// function sayTimeToUser(person) {
//     var todayDate = new Date()
//     var hours = todayDate.getDate()
//     var minutes = todayDate.getMonth()
//     alert(person + ' ' + hours + ' ' + ' ' + minutes);
// }

function calculateAreaOfCircle(radius) {
    var area = radius * 2
    area = area * 3.14
    return area;
}

// var area = calculateAreaOfCircle(12)
// alert(area)
// sayTimeToUser('Anjum')

// var dayOfWeek = "Friday"

// if (daysOfWeek == "Monday") {
//     alert('workDay')
// }
// else if (daysOfWeek == "Tuesday") {
//     alert('day after workDay')
// }
// else if (daysOfWeek == "Wednesday") {
//     alert('1')
// }
// else if (daysOfWeek == "Thursday") {
//     alert('2')
// }
// else if (daysOfWeek == "Friday") {
//     alert('3')
// }
// else if (daysOfWeek == "Saturday") {
//     alert('4')
// }
// else if (daysOfWeek == "Sunday") {
//     alert('5')
// }
// else {
//     alert('Not correct information')
// }



// switch (daysOfWeek) {
//     case "Monday":
//         alert('workDay')
//         break;
//     case "Tuesday":
//         alert('Day after work')
//         break;
//     case "Wednesday":
//         alert('workDay')
//         break;
//     case "Thursday":
//         alert('workDay')
//         break;
//     case "Friday":
//         alert('workDay')
//         break;
//     case "Saturday":
//         alert('workDay')
//         break;
//     case "Sunday":
//         alert('workDay')
//         break;
//     default:
//         alert('not correct input')
// }



// var months = ['januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December']
// var weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// var todayDate = new Date()
// var month = todayDate.getMonth()
// alert(month)
// alert(months[month])

var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. low lorises have a toxic bite, a rare trait among mammals.";
function expand(){
    var para = document.getElementById('para');
    para.innerHTML = expandedParagraph
}

function big(){
    var para = document.getElementById('para');
    para.className = para.className + ' bigFont'
}
function red(){
    var para = document.getElementById('para');
    para.className = para.className + ' redColor'

    // para.className += 'redColor's
}