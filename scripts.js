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

// var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. low lorises have a toxic bite, a rare trait among mammals.";
// function expand(){
//     var para = document.getElementById('para');
//     para.innerHTML = expandedParagraph
// }

// function big(){
//     var para = document.getElementById('para');
//     para.className = para.className + ' bigFont'
// }
// function red(){
//     var para = document.getElementById('para');
//     para.className = para.className + ' redColor'

//     // para.className += 'redColor's
// }


// function here() {
//     var d = document.getElementById("humpty");
//     var pCounter = 0; //2
//     for (var i = 0; i < d.childNodes.length; i++) {
//         if (d.childNodes[i].nodeType === 1) {
//             pCounter++;
//         }
//         if (pCounter === 2) {
//             d.childNodes[i].innerHTML = "All his men.";
//             break;
//         }
//     }
// }
// <div id="humpty">
// <p>All the king's horses.</p>
// <p>All the dude's crew.</p>
// <p>All the town's orthopedists.</p>
// </div>
// function addNode() {
//     var myElement = document.getElementById('element_Name').value
//     var myText = document.getElementById('my_text').value
//     var myId = document.getElementById('my_Id').value
//     var myPara = document.createElement(myElement);  //<p></p>
//     myPara.setAttribute("id", myId);
//     var txt = document.createTextNode(myText)  //  My para inner text
//     myPara.appendChild(txt) // <p>My para inner text</p>
//     var parent = document.getElementById('humpty')   // <element id="humpty">
//     parent.appendChild(myPara)
// }
// function addSelect() {
//     for (var i = 0; i < 32; i++) {
//         var mySelect = document.createElement('option')
//         var myTxt = document.createTextNode(i)
//         mySelect.appendChild(myTxt)
//         var myEle = document.getElementById('myPara');
//         myEle.appendChild(mySelect)
//         console.log('asd')
//     }
// }
// function addnewHtml(){
//     var myId = document.getElementById('element_Id').value;
//     var myInner = document.getElementById('innerAlter').value;
//     var selectElement = document.getElementById(myId);
//     selectElement.innerHTML = myInner
// }
// var createdIDs = []
// function addDiv() {
//     var divId = document.getElementById('text_id').value
//     var found
//     for (var i = 0; i <= createdIDs.length; i++) {
//         if (createdIDs[i] == divId) {
//             found = true
//             break;
//         }
//     }
//     if (found) {
//         alert('already exist with same Id')
//     }
//     else {
//         var innerDiv = document.createElement('div')
//         innerDiv.setAttribute('id', divId)
//         innerDiv.setAttribute('class', 'myClass')
//         innerDiv.innerHTML = divId
//         innerDiv.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
//         var wrapDiv = document.getElementById('wrapDiv')
//         wrapDiv.appendChild(innerDiv)
//         createdIDs.push(divId)
//     }
//     divId = ''
// }
// function removeDiv(){
//     var found;
//     var index
//     var reDiv = document.getElementById('remove_id').value
//     for (var i = 0; i <= createdIDs.length; i++) {
//         if (createdIDs[i] == reDiv) {
//             found = true
//             index = i
//             break;
//         }
//     }
//     if(found){
//         document.getElementById(reDiv).remove()
//         createdIDs.splice(index, 1);
//     }
//     else{
//         alert('DIV NOT FOUND')
//     }
//     reDiv = ''
// }

var plan1 = {
    name: 'basic',
    monthly: 3.99,
    data: 100,
    dataTransfer: 1000,
    pages: 10,
    discountedMonths: [0, 5, 11],
    printAnual: function () {
        alert('your plan is ' + this.name)
    }
}

// alert(plan1.name)
// alert(plan1.printAnual())

function Car(name, company, power, millage, price) {
        this.carName = name,
        this.carCompany = company,
        this.carPower = power,
        this.carMillage = millage,
        this.carPrice = price
}
var arifKiCar = new Car('Civic', 'Honda', '1600cc', '5km', 4200000);
var waqasKiCar = new Car('M7', 'BMW', '3600cc', '0.5km', 25000000);
console.log(waqasKiCar)
alert(arifKiCar.carName)
alert(arifKiCar.carPrice)
alert(waqasKiCar.carCompany)


