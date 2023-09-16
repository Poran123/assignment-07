/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './card.css'

const Card = ({selectCourse,remaining,totalCredit}) => {
    return (
        <div className='card'>
        <h2 className='blue'>Credit hour remaining :{remaining} hr</h2>
        <hr />
        <h2 className='text'>Course Name</h2>
        {
               <ol>
               {selectCourse.map((course, index) => (
                 <li key={course.id} className='text'>{index + 1}. {course.course_name}</li>
               ))}
             </ol>
             
           
            }
 <hr />
        <h3 className='text'>Total Credit:{totalCredit}</h3>
        <hr />
        <h3 className='text'>Total Price:4653$</h3>
        
    </div>
    );
};

export default Card;