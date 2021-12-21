import React from 'react'
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import data from './data';
function Review() {
    const [index, setIndex] = useState(0);
   const {name, job, image,text} = data[index]
const checkNumber=(num)=>{
  if(num>data.length-1){
    return 0
  }
  if(num<0){
  return data.length -1
}
return num
}


   const prevPerson =()=>{
  setIndex((index)=>{
let newIndex= index-1
return checkNumber(newIndex)
  })
}
 const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };


  //random person btn
  const randomPerson = ()=>{
   let randomNumber = Math.floor(Math.random()*data.length) 
   if(randomNumber===index){
     randomNumber=index+1
   }
   setIndex(checkNumber(randomNumber))
  }
  return (
   <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'><FaQuoteRight/></span>
      </div>
     
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      
      <div className='button-container'>
         <button className='prev-btn'onClick={prevPerson}><FaChevronLeft/></button>
        <button  className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
       </div>
       <button className='random-btn' onClick={randomPerson} >Change Randomly</button>
      </article>
   
  )
}

export default Review
