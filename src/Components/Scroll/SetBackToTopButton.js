import React, { useEffect, useState } from 'react'
import scroller from './../../top-arrow.svg'

export default function SetBackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])
    // function for clicking on the button

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior:'smooth'
        })
    }
    return (
        <div>
            {backToTopButton &&
                <button style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    height: '2rem',
                    width: '2rem',
                    backgroundColor: '#007EE5'
                }} onClick={scrollUp}>
                    <img src={scroller} alt='' />
                </button>
            }
        </div>
    )
}
