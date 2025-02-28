// App.jsx
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./App.css"

function App() {
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)
  const leftDotsRef = useRef([])
  const rightDotsRef = useRef([])
  const questionBubbleRef = useRef(null)
  const answerBubbleRef = useRef(null)

  useEffect(() => {
    // Clear the refs arrays
    leftDotsRef.current = []
    rightDotsRef.current = []

    // Initial animations
    gsap.fromTo(
      [leftCircleRef.current, rightCircleRef.current],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.3 },
    )

    // Animate dots with delay
    setTimeout(() => {
      gsap.fromTo(
        [...leftDotsRef.current, ...rightDotsRef.current],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "elastic.out(1, 0.3)",
        },
      )

      // Floating animation for dots
      ;[...leftDotsRef.current, ...rightDotsRef.current].forEach((dot, index) => {
        gsap.to(dot, {
          y: "-=8",
          duration: 1.5 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    }, 100)

    // Speech bubbles animation
    gsap.fromTo(questionBubbleRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 1.8 })

    gsap.fromTo(answerBubbleRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 2.3 })
  }, [])

  const addToDotsRef = (el, isLeft) => {
    if (el && isLeft) {
      leftDotsRef.current.push(el)
    } else if (el) {
      rightDotsRef.current.push(el)
    }
  }

  return (
    <div className="app-container">
      <div className="circles-container">
        {/* Left Circle - Student (Person asking question) */}
        <div className="circle-wrapper left-circle">
          <div className="circle" ref={leftCircleRef}>
            <img src="/placeholder.svg?height=220&width=220" alt="Student" className="person-image" />
          </div>
          <div className="dashed-circle"></div>
          <div className="dot blue" ref={(el) => addToDotsRef(el, true)} style={{ top: "20%", left: "5%" }}></div>
          <div className="dot orange" ref={(el) => addToDotsRef(el, true)} style={{ bottom: "25%", left: "10%" }}></div>
          
          {/* Question connected to left circle */}
          <div className="question-bubble" ref={questionBubbleRef}>
            Alakh Sir, What is PW?
          </div>
        </div>

        {/* Right Circle - Teacher (Alakh Sir - Person answering) */}
        <div className="circle-wrapper right-circle">
          <div className="circle" ref={rightCircleRef}>
            <img src="/placeholder.svg?height=220&width=220" alt="Teacher" className="person-image" />
          </div>
          <div className="dashed-circle"></div>
          <div className="dot blue" ref={(el) => addToDotsRef(el, false)} style={{ top: "15%", right: "5%" }}></div>
          <div className="dot pink" ref={(el) => addToDotsRef(el, false)} style={{ top: "45%", right: "-2%" }}></div>
          <div
            className="dot orange"
            ref={(el) => addToDotsRef(el, false)}
            style={{ bottom: "25%", right: "10%" }}
          ></div>
          
          {/* Answer connected to right circle */}
          <div className="answer-bubble" ref={answerBubbleRef}>
            PW is where students learn with love and can grow with guidance
          </div>
        </div>
      </div>
    </div>
  )
}

export default App