'use client'
import { use, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"



export const HomePage = () => {
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const section4 = useRef(null)
    // const section5 = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const section1Current = section1.current
        const section2Current = section2.current
        const section3Current = section3.current
        const section4Current = section4.current
        // const section5Current = section5.current

        ScrollTrigger.create({
            trigger: section1Current,
            start: "top top",
            endTrigger: section2Current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true
        })

        ScrollTrigger.create({
            trigger: section2Current,
            start: "top top",
            endTrigger: section3Current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true
        })

        ScrollTrigger.create({
            trigger: section3Current,
            start: "top top",
            endTrigger: section4Current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true
        })
    })


    return (
        <>
            <section 
                ref={section1}
                className="relative flex items-center justify-center w-full h-screen"
            >
                <div 
                    className="flex justify-center items-center w-full h-full bg-slate-50 text-black"
                >
                    Sección 1
                </div>
            </section>
            <section 
                ref={section2}
                className="relative flex items-center justify-center w-full h-screen"
            >
                <div 
                    className="flex justify-center items-center w-full h-full bg-slate-200 text-black"
                >
                    Sección 2
                </div>
            </section>
            <section 
                ref={section3}
                className="relative flex items-center justify-center w-full h-screen"
            >
                <div 
                    className="flex justify-center items-center w-full h-full bg-slate-400 text-black"
                >
                    Sección 3
                </div>
            </section>
            <section 
                ref={section4}
                className="relative flex items-center justify-center w-full h-screen"
            >
                <div 
                    className="flex justify-center items-center w-full h-full bg-slate-600 text-black"
                >
                    Sección 4
                </div>
            </section>
            <section 
                // ref={section1}
                className="relative flex items-center justify-center w-full h-screen"
            >
                <div 
                    className="flex justify-center items-center w-full h-full bg-slate-800 text-black"
                >
                    Sección 5
                </div>
            </section>
        </>
    )
}
