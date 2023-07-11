// Q1
// var number = Number( window.prompt( "Enter number :" ) )
// console.log( number );


// Q2
// var number = Number(window.prompt("Enter number :"))
// if(number%3==0 && number%4==0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// Q3
// var number1 = Number( window.prompt( "Enter first number :" ) );
// var number2 = Number(  window.prompt( "Enter second number :" )  );
// if(number1>number2){
//     console.log(number1);
// }
// else if(number2>number1){
//     console.log(number2);
// }
// else{
//     console.log("the two numbers are equal");
// }


// Q4
// var number = Number(window.prompt("Enter number :"))
// if(number>0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }


// Q5
// var number1 = Number( window.prompt( "Enter first number :" ) );
// var number2 = Number(  window.prompt( "Enter second number :" )  );
// var number3 = Number(  window.prompt( "Enter third number :" )  );
// {if(number1>number2 && number2>number3 ){
//     console.log("max element =",number1);
// }
// else if(number2>number1 && number2>number3){
//     console.log("max element =",number2);
// }
// else{
//     console.log("max element =",number3);
// }
// }
// {if(number1<number2 && number2<number3){
//     console.log("min element =",number1);
// }
// else if(number2<number1 && number2<number3){
//     console.log("min element =",number2);
// }
// else{
//     console.log("min element =",number3);
// }}



// Q6
// var number = Number( window.prompt( "Enter number :" ) );
// if(number%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// Q7
// var char = window.prompt( "Enter char :" )
// if(char=='a' || char=='o' || char=='e' || char=='i' || char=='u'){
//     console.log("vowel");
// }
// else{
//     console.log("consontant");
// }


// Q8
// var number = Number( window.prompt( "Enter a number :" ) );
// for(var i=1;i<=number;i++){
//     console.log(i)
// }


// Q9
// var number = Number( window.prompt( "Enter number :" ) );
// for(var i=2;i<=12;i++){
//     console.log(number*i)
// }


// Q10
// var number = Number( window.prompt( "Enter number :" ) );
// for(var i=1;i<=number;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// Q11
// var number1 = Number( window.prompt( "Enter first number :" ) );
// var number2 = Number(  window.prompt( "Enter second number :" )  );
// var sum = 1; 
// for (var i=0;i<number2;i++) { 
//   sum = sum * number1; 
// }
// console.log(sum);


// Q12
// var number1 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number2 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number3 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number4 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number5 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var sum=0;
// sum=number1+number2+number3+number4+number5;
// var avg=sum/5;
// var percentge=sum/500*100;
// console.log("Total marks =",sum);
// console.log("Average marks =",avg);
// console.log("Percentage =",percentge);


// Q13
// var num = Number( window.prompt( "Enter month number:" ) );
// if(num==1||num==3||num==5||num==7||num==8||num==10){
//     console.log("Days in month :",31);
// }
// else if(num==6||num==9||num==11){
//     console.log("Days in month :",30);
// }
// else if(num==2){
//     console.log("Days in month :",28);
// }
// else{
//     console.log("Days in month :",29);
// }


// Q14
// var number1 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number2 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number3 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number4 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var number5 = Number( window.prompt( "Enter marks of five subjects :" ) );
// var sum=0;
// sum=number1+number2+number3+number4+number5;
// var percentge=sum/500*100;
// if(percentge>=90){
//     console.log("Grade A");
// }
// else if(percentge>=80){
//     console.log("Grade B");
// }
// else if(percentge>=70){
//     console.log("Grade C");
// }
// else if(percentge>=60){
//     console.log("Grade D");
// }
// else if(percentge>=40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }



// Q15
// var days = window.prompt("Enter a  month");
// switch(   true   ){
//     case (days==6||days==9||days==11):
//         console.log(30);
//     break;

//     case (days==1||days==3||days==5||days==7||days==8||days==10):
//         console.log(31);
//     break;


//     case (days==2):
//         console.log(28);
//     break;

//     default:
//         console.log(29);
//     break;
// }


// Q16
// var char = window.prompt( "Enter char :" )
// switch(true){
// case(char=='a' || char=='o' || char=='e' || char=='i' || char=='u'):
//     console.log("vowel");
//     break;

//     default:
//     console.log("consontant");
//     break;

// }



// Q17
// var num1 = Number(window.prompt( "Enter number one :" ))
// var num2 = Number(window.prompt( "Enter number two :" ))
// switch(true){
//     case(num1>num2):
//     console.log("The bigger number is:",num1);
//     break;

//     case(num1<num2):
//     console.log("The bigger number is:",num2);
//     break;    

//     default:
//     console.log("the two numbers are equal");
//     break;

// }


// Q18
// var num = Number(window.prompt( "Enter number :" ))
// switch(true){
//     case(num%2==0):
//     console.log("The number is even");
//     break;

//     default:
//     console.log("The number is odd");
//     break;

// }



// Q19
// var num = Number(window.prompt( "Enter number :" ))
// switch(true){
//     case(num>0):
//     console.log("The number is positive");
//     break;

//     case(num<0):
//     console.log("The number is negative");
//     break;

//     default:
//     console.log("The number is zero");
//     break;

// }


// Q20
// var num1 = Number(window.prompt( "Enter number one :" ))
// var sign=window.prompt( "Enter the sign :" );
// var num2 = Number(window.prompt( "Enter number two :" ))
// switch(sign){
//     case '+':
//     console.log("The result is:",num1+num2);
//     break;

//     case '-':
//     console.log("The result is",num1-num2);
//     break;   
    
//     case '*':
//     console.log("The result is",num1*num2);
//     break;

//     case '/':
//     console.log("The result is",num1/num2);
//     break;

//     default:
//     console.log("Enter a correct sign");
//     break;

// }
