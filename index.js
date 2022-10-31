// // // var a=5;
// // // var b=6;
// // // a=a+b;
// // // b=a-b;
// // // a=a-b;
// // // console.log(a);
// // // alert(b);
// // // //document.log(b);

// // // const name="ajay pratap";
// // // const age=24;
// // // const address="surat";
// // // const personaldetail="My name is "+ name + ", age "+age+", address is "+address;
// // // console.log(personaldetail);

// // // let output_Array=personaldetail.split(',')
// // // console.log(output_Array);

// // // const newarray=new Array(1,2,3,4,5);
// // // console.log(newarray);

// // // const fruit=['orange','mongo','banana'];
// // // console.log(fruit);
// // // fruit[3]="apple";
// // // console.log(fruit);

// // // fruit.push('chicku');
// // // fruit.unshift("watermelon");
// // // console.log(fruit);

// // // fruit.pop();
// // // console.log(fruit);

// // // console.log(fruit.indexOf('apple'));

// // // const person=
// // //     {
// // //         id:1,
// // //         name:"ajay pratap singh",
// // //         hobbies:['movie','singing','dancing'],
// // //         address:{
// // //             city:'vadodara',
// // //             state:'guajraat'
            
// // //         }
// // //     }
// // //     console.log(person.hobbies[0]);
// // //      const {address:{state}}=person;
// // //      console.log(state);

// // //     const person1=[
// // //     {
// // //         id:1,
// // //         name:"ajay",
// // //         hobbies:['play','football','dancing'],
// // //         address:{
// // //             city:'vadodara',
// // //             state:'guajraat'
            
// // //         }
// // //     },
// // //     {
// // //         id:2,
// // //         name:"ajay pratap",
// // //         hobbies:['movie','panipuri','barking'],
// // //         address:{
// // //                 city:'surat',
// // //                 state:'guajraat'

// // //         }
// // //     },
// // //     {
// // //         id:3,
// // //         name:"ajay pratap singh",
// // //         hobbies:['eating','karate','talking'],
// // //         address:{
// // //             city:'navsari',
// // //             state:'guajraat'
            
// // //        }
// // //     },

// // // ];

// // // for(let i=0;i<person1.length;i++)
// // // {
// // //     console.log(person1[i].id);
// // // }
// // // // const{ address:{state}}=person1;
// // // // console.log(state);

// // // ///function to c

// // // //Write a function to take temperature in degree celcius and return in degree kelvin
// // // //Take the same function and add one more argument to it, "conversionUnit".Based on 
// // // //the conversionUnit , return value of temperature in Celcius or Kelvin

// // // function  convertTemp(temperatureValue, conversionUnit){
// // //     if(conversionUnit=='K')
// // //     {
// // //         let output=273+temperatureValue;
// // //         let final_output=" ";
        
// // //         final_output=final_output+output+conversionUnit;
// // //         return final_output;
// // //     }else if(conversionUnit=='C')
// // //     {
// // //         let output=temperatureValue-273;
// // //         let final_output=" ";
        
// // //         final_output=final_output+output+conversionUnit;
// // //         return final_output;

// // //     }

// // // }
// // //     console.log(convertTemp(35, 'C'));

class Student
{
    constructor(first_name, last_name , roll_number , Sex, age)
    {
        this.first_name=first_name;
        this.last_name=last_name;
        this.roll_number=roll_number;
        this.Sex=Sex;
        this.age=age;
    }

    fullname()
    {
        console.log(this.first_name+" "+ this.last_name);
    }
    checking_eligible()
    {
        if(this.age>24)
        {
            console.log("You are eligible for date");
        }
        else
        {
            console.log("ohh Sorry !!You are not eligible for date"); 
        }
    }
}

const student1=new Student('ajay','singh',49,'male',24);
const student2=new Student('mangal','singh',40,'male',26);

student1.fullname();
student2.fullname();

student1.checking_eligible();
student2.checking_eligible();

if(student1.age>student2.age)
    {
        console.log(student2.first_name+" "+student2.last_name);
    }
    else
    {
        console.log(student2.first_name+" "+student2.last_name);
    }



// // //     ////////////////////
// // //     function Student(first_name, last_name , roll_number , Sex, age)
// // //     {
// // //         this.first_name=first_name;
// // //         this.last_name=last_name;
// // //         this.roll_number=roll_number;
// // //         this.Sex=Sex;
// // //         this.age=age;
// // //         this.getbirthyear=function(){
// // //             return this.age;
// // //         }
// // //         this.fullname=function(){
// // //             return `${this.first_name} ${this.last_name}`;
// // //         }
// // //     } 

// // //     const student1=new Student('ajay','singh',49,'male',24);
// // //     const student2=new Student('mangal','singh',40,'male',26);

// // //     if(student1.age>student2.age)
// // //     {
// // //         console.log(student2.first_name+student2.last_name);
// // //     }
// // //     else
// // //     {
// // //         console.log(student2.first_name+student2.last_name);
// // //     }

// // //     console.log(student1.fullname);

// // //     if(student1.age>24)
// // //     {
// // //         console.log('eligible');
// // //     }
// // //     else
// // //     {
// // //         console.log('not eligible');
// // //     }
// // ////////////////////////////////////////////
// //     class User{
// //         static counts=0;
// //         constructor(fname,lname,age)
// //         {
// //             this.fname=fname;
// //             this.lname=lname;
// //             this.age=age;
// //             User.counts++;;
// //         }

// //          countobjece()
// //         {
// //             console.log("number of Objext is "+User.counts);
// //         }


// //     }
    

// //     class member extends User{
// //         constructor(fname,lname,age,membership){
// //             super(fname,lname,age);
// //             this.membership=membership;
// //             let todaydate=new Date();
// //             const membershipactivetillyear= todaydate.getFullYear();
// //             const membershipactivetillmonth= todaydate.getMonth();
// //             const membershipactivetillday= todaydate.getDay();
// //           //  console.log("today year "+membershipactivetillyear);
// //            this.membershiptilldate=new Date(
// //                 membershipactivetillyear,
// //                 membershipactivetillmonth+1,
// //                 membershipactivetillday

// //            )
// //         //    console.log("today date"+todaydate);
// //         //    console.log("today date"+this.membershilptilldate);

// //         }

// //         printdegination(){
// //             console.log(this.lname+" is with designation "+ this.membership+" "+this.membershiptilldate);
// //         }

// //         renewmembership()
// //         {
// //             const membershipactivetillyear1= this.membershiptilldate.getFullYear();
// //             const membershipactivetillmonth1=this.membershiptilldate.getMonth();
// //             const membershipactivetillday1= this.membershiptilldate.getDay();

// //             if(this.membership==="monthly")
// //             {
// //                 this.membershiptilldate=new Date(
// //                     membershipactivetillyear1,
// //                     membershipactivetillmonth1+1,
// //                     membershipactivetillday1
    
// //                )
// //             }else if(this.membership==="yearly")
// //             {
// //                 this.membershiptilldate=new Date(
// //                     membershipactivetillyear1+1,
// //                     membershipactivetillmonth1,
// //                     membershipactivetillday1
    
// //                )  
// //             }
// //         }

// //         membershilptilldates()
// //         {
// //             console.log("till date is "+this.membershiptilldate);
// //         }
// //     }
// //     const obj1=new User('ajay','singh',24);
// //     const obj2=new User('aja','singh',24);
// //   //  console.log(User.counts);

// //     const obj3=new member('manag','bhau','45','monthly');
// //     const obj4=new member('Vikram','Rathod','56','yearly');

// //     obj4.printdegination();
// //     obj4.renewmembership();
// //  //   obj3.countobjece();
// //     obj4.membershilptilldates();

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));



// const btn = document.querySelector('.btn');

// const ul= document.querySelector('.items');
// ul.firstElementChild.textContent="hello";
// ul.children[1].textContent='Bread';
// ul.children[0].style.background='red';
// ul.children[2].style.background='yellow';

// const btn = document.querySelector('.btn');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const message=document.querySelector('.msg');
// const body= document.querySelector('#my-form');
// btn.addEventListener('click',e=>{
//     e.preventDefault();
//     if(nameInput.value=='' || emailInput.value=='')
//     {
//         message.textContent="Field is empty";
//     }else
//     {
//         console.log(nameInput.value);
//         console.log(emailInput.value);
//         message.textContent=" ";
//     }
    
// });

// btn.addEventListener('mouseover', e=>{
//     e.preventDefault();
//     body.style.background="yellow";

// });

// btn.addEventListener('mouseout', e=>{
//     e.preventDefault();
//     body.style.background="blue";

// });



