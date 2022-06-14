import React from'react';

const slidesInfo = [
    {
        src:"https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Project1",
        desc:"Project1"
    }, 
    {
        src:"https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        alt:"Project2", 
        desc:"Project2"
    }, 
    {
        src:"https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        alt:"Project3", 
        desc:"Project3"
    }
]

const slides = slidesInfo.map(slide =>(
    <div clasName="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
        <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;