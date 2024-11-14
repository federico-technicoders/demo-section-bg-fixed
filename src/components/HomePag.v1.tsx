// 'use client'
// import { useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"

// export const HomePage = () => {
//     const section1 = useRef(null)
//     const section2 = useRef(null)
//     const section3 = useRef(null)
//     const section4 = useRef(null)
//     const section5 = useRef(null)

//     gsap.registerPlugin(ScrollTrigger)

//     useGSAP(() => {
//         const sections = [section1, section2, section3, section4, section5];

//         sections.forEach((section, index) => {
//             if (index < sections.length - 1) {
//                 const nextSection = sections[index + 1];

//                 ScrollTrigger.create({
//                     trigger: section.current,
//                     start: "top top",
//                     endTrigger: nextSection.current,
//                     end: "top top",
//                     pin: true,
//                     pinSpacing: false,
//                     scrub: true,
//                     markers: true
//                 });

//                 // Animación para revelar el contenido de la siguiente sección
//                 gsap.fromTo(nextSection?.current?.querySelector('div'), 
//                     { 
//                         y: '100%', 
//                         opacity: 0 
//                     },
//                     {
//                         y: '0%',
//                         opacity: 1,
//                         ease: 'none',
//                         scrollTrigger: {
//                             trigger: nextSection.current,
//                             start: 'top bottom',
//                             end: 'top top',
//                             scrub: true,
//                         }
//                     }
//                 );
//             }
//         });
//     });

//     return (
//         <>
//             <section 
//                 ref={section1}
//                 className="relative flex items-center justify-center w-full h-screen overflow-hidden"
//             >
//                 <div 
//                     className="flex justify-center items-center w-full h-full bg-slate-50 text-black"
//                 >
//                     Sección 1
//                 </div>
//             </section>
//             <section 
//                 ref={section2}
//                 className="relative flex items-center justify-center w-full h-screen overflow-hidden"
//             >
//                 <div 
//                     className="flex justify-center items-center w-full h-full bg-slate-200 text-black"
//                 >
//                     Sección 2
//                 </div>
//             </section>
//             <section 
//                 ref={section3}
//                 className="relative flex items-center justify-center w-full h-screen overflow-hidden"
//             >
//                 <div 
//                     className="flex justify-center items-center w-full h-full bg-slate-400 text-black"
//                 >
//                     Sección 3
//                 </div>
//             </section>
//             <section 
//                 ref={section4}
//                 className="relative flex items-center justify-center w-full h-screen overflow-hidden"
//             >
//                 <div 
//                     className="flex justify-center items-center w-full h-full bg-slate-600 text-black"
//                 >
//                     Sección 4
//                 </div>
//             </section>
//             <section 
//                 ref={section5}
//                 className="relative flex items-center justify-center w-full h-screen overflow-hidden"
//             >
//                 <div 
//                     className="flex justify-center items-center w-full h-full bg-slate-800 text-white"
//                 >
//                     Sección 5
//                 </div>
//             </section>
//         </>
//     )
// }
