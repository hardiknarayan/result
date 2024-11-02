import React from 'react'
import './result.css';

const Result = () => {
  const names = [
    "Aarav", "Ishika", "Rahul", "Meera", "Aditya", "Sara", "Riya", "Kunal", "Priya", "Vikram",
    "Arjun", "Nisha", "Kabir", "Sneha", "Mohan", "Sana", "Amit", "Pooja", "Rohan", "Anjali",
    "Varun", "Simran", "Raj", "Naina", "Siddharth", "Tina", "Aman", "Divya", "Ishan", "Neha",
    "Krishna", "Preeti", "Vivek", "Aditi", "Nikhil", "Sakshi", "Manish", "Ankita", "Gaurav", "Ruchi",
    "Jay", "Kriti", "Harsh", "Ritika", "Akash", "Swati", "Karan", "Shruti", "Abhinav", "Pallavi",
    "Rakesh", "Sonia", "Yash", "Meghna", "Saurav", "Nidhi", "Kishore", "Vaishali", "Aniket", "Deepa",
    "Suresh", "Bhavna", "Chirag", "Tanvi", "Ashok", "Seema", "Lakshya", "Neeta", "Ravi", "Jaya",
    "Pranav", "Komal", "Sameer", "Kavita", "Anshul", "Shalini", "Raghav", "Garima", "Abhishek", "Monika",
    "Shivam", "Karishma", "Vikas", "Alka", "Rishi", "Poonam", "Tejas", "Sarika", "Rajat", "Snehal",
    "Akshay", "Jasmin", "Mayank", "Lavanya", "Hemant", "Chitra", "Naveen", "Hema", "Sagar", "Jyoti"
  ];
  const studentName = names[Math.floor(Math.random() * names.length)];



    let english=Math.round(Math.random()*(100-20)+20)
    let physics=Math.round(Math.random()*(100-20)+20)
    let chemistry=Math.round(Math.random()*(100-20)+20)
    let maths=Math.round(Math.random()*(100-20)+20)
    let biology=Math.round(Math.random()*(100-20)+20)
    let sum=english+physics+chemistry+maths+biology
    let ans=(sum/500)*100
    let msg="Pass"
    if(ans<49){
      msg="fail ,Your marks is less than 50%"
      
    }
    
  return (
    <>
    <div class="final">
      <div class="first">
    <h3>Name:- {studentName}</h3>    
    <h4>English:-{english}</h4>
    <h4>Physics :-{physics}</h4>
    <h4>Chemistry:-{chemistry}</h4>
    <h4>Mathematics:-{maths}</h4>
    <h4>Biology:-{biology}</h4>
    </div>
    <br/>
    <div class="second">
    <h4>Your Percentage is:- {Math.round(ans)}%</h4>
    <h4>Final Result is:- {msg}</h4>
    </div>
    </div>


    
    </>
  )
}

export default Result