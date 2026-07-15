import React, { useState } from 'react';
import "./testimonial.css";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "This is the best product I have ever used",
            author: "Jane Doe",
        },
        {
            quote: "This product is amazing",
            author: "John smith",
        },
        {
            quote: "This is very useful",
            author: "Nancy",
        },
        {
            quote: "I Highly recommend this product",
            author: "Johnson",
        },
        {
            quote: "Better to avoid this product",
            author: "Trent",
        },
        {
            quote: "Over all good product",
            author: "ferry",
        }
    ]
    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    }
    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    }
    return (

        <div className="testimonials">
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className='testimonials-author'>
                {testimonials[currentIndex].author}
            </div>
            <div className='testimonials-buttons'>
                <button onClick={handlePrevClick} disabled={currentIndex === 0}>Prev</button>
                <button onClick={handleNextClick} disabled={(currentIndex + 1) - testimonials.length === 0}>Next</button>
            </div>
        </div >

    )
}

export default Testimonial