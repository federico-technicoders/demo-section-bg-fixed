// 'use client'
// import { useRef, useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Image from "next/image"

// export const HomePage = () => {
//     const container = useRef<HTMLDivElement>(null)
//     const sections = useRef<HTMLElement[]>([])

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger)

//         if (!container.current) return

//         const sectionElements = sections.current

//         sectionElements.forEach((section, index) => {
//             if (index < sectionElements.length - 1) {
//                 const nextSection = sectionElements[index + 1]

//                 ScrollTrigger.create({
//                     trigger: section,
//                     start: "top top",
//                     endTrigger: nextSection,
//                     end: "top top",
//                     pin: true,
//                     pinSpacing: false,
//                     scrub: true,
//                     markers: true
//                 })

//                 // Efecto persiana
//                 gsap.fromTo(nextSection, 
//                     { clipPath: 'inset(100% 0 0 0)' },
//                     {
//                         clipPath: 'inset(0% 0 0 0)',
//                         ease: 'none',
//                         scrollTrigger: {
//                             trigger: nextSection,
//                             start: 'top bottom',
//                             end: 'top top',
//                             scrub: true,
//                         }
//                     }
//                 )

//                 // Efecto de alejamiento de la imagen
//                 const nextImage = nextSection?.querySelector('img')
//                 if (nextImage) {
//                     gsap.fromTo(nextImage,
//                         { scale: 1.2 },
//                         {
//                             scale: 1,
//                             ease: 'none',
//                             scrollTrigger: {
//                                 trigger: nextSection,
//                                 start: 'top bottom',
//                                 end: 'top top',
//                                 scrub: true,
//                             }
//                         }
//                     )
//                 }
//             }
//         })

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//         }
//     }, [])

//     const addToSectionsRef = (el: HTMLElement | null) => {
//         if (el && !sections.current.includes(el)) {
//             sections.current.push(el)
//         }
//     }

//     return (
//         <div ref={container}>
//             {[1, 2, 3, 4, 5].map((num) => (
//                 <section 
//                     key={num}
//                     ref={addToSectionsRef}
//                     className="relative flex items-center justify-center w-full h-screen"
//                 >
//                     <div 
//                         className="relative flex justify-center items-center w-full h-full overflow-hidden"
//                     >
//                         <Image src={`/assets/images/image${num}.webp`} fill alt={`imagen section ${num}`} style={{objectFit: 'cover'}} />
//                     </div>
//                 </section>
//             ))}
//         </div>
//     )
// }
