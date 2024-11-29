'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export const HomePage: React.FC = () => {
  // Referencias individuales para cada sección
  const section1 = useRef<HTMLElement | null>(null);
  const section2 = useRef<HTMLElement | null>(null);
  const section3 = useRef<HTMLElement | null>(null);
  const section4 = useRef<HTMLElement | null>(null);
  const section5 = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [section1.current, section2.current, section3.current, section4.current, section5.current];

    sections.forEach((section, index) => {
      if (!section || index === sections.length - 1) return;

      const nextSection = sections[index + 1];

      // Pin efecto
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        endTrigger: nextSection,
        end: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

      // Efecto persiana
      if (nextSection) {
        gsap.fromTo(
          nextSection,
          { clipPath: 'inset(200% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextSection,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );

        // Efecto de alejamiento de la imagen
        const nextImage = nextSection.querySelector('img');
        if (nextImage) {
          gsap.fromTo(
            nextImage,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: nextSection,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section ref={section1} className="relative flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-5xl">Primera sección</h2>
          <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
            <Image
              src="/assets/images/image1.webp"
              fill
              alt="Imagen sección 1"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section ref={section2} className="relative flex items-center justify-center w-full h-screen bg-gray-200">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-5xl">Segunda sección</h2>
          <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
            <Image
              src="/assets/images/image2.webp"
              fill
              alt="Imagen sección 2"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section ref={section3} className="relative flex items-center justify-center w-full h-screen bg-gray-300">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-5xl">Tercera sección</h2>
          <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
            <Image
              src="/assets/images/image3.webp"
              fill
              alt="Imagen sección 3"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section ref={section4} className="relative flex items-center justify-center w-full h-screen bg-gray-400">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-5xl">Cuarta sección</h2>
          <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
            <Image
              src="/assets/images/image4.webp"
              fill
              alt="Imagen sección 4"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section ref={section5} className="relative flex items-center justify-center w-full h-screen bg-gray-500">
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-5xl">Quinta sección</h2>
          <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
            <Image
              src="/assets/images/image5.webp"
              fill
              alt="Imagen sección 5"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
