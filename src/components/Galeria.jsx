"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function Galeria() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const photosPerPage = verifyScreen();
  const observerRef = useRef(null);

  const photos = [
    { id: 1, src: "https://placehold.co/600x400", alt: "Foto 1", caption: "Foto 1" },
    { id: 2, src: "https://placehold.co/600x400", alt: "Foto 2", caption: "Foto 2" },
    { id: 3, src: "https://placehold.co/600x400", alt: "Foto 3", caption: "Foto 3" },
    { id: 4, src: "https://placehold.co/600x400", alt: "Foto 4", caption: "Foto 4" },
    { id: 5, src: "https://placehold.co/600x400", alt: "Foto 5", caption: "Foto 5" },
    { id: 6, src: "https://placehold.co/600x400", alt: "Foto 6", caption: "Foto 6" },
    { id: 7, src: "https://placehold.co/600x400", alt: "Foto 7", caption: "Foto 7" },
    { id: 8, src: "https://placehold.co/600x400", alt: "Foto 8", caption: "Foto 8" },
    { id: 9, src: "https://placehold.co/600x400", alt: "Foto 9", caption: "Foto 9" },
    { id: 10, src: "https://placehold.co/600x400", alt: "Foto 9", caption: "Foto 9" },
    { id: 11, src: "https://placehold.co/600x400", alt: "Foto 9", caption: "Foto 9" },
    { id: 12, src: "https://placehold.co/600x400", alt: "Foto 9", caption: "Foto 9" },
  ];

  function verifyScreen() {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 640) {
      return 2;
    } else {
      return 1;
    }
  }

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && page * photosPerPage < photos.length) {
      setIsLoading(true);
      setPage((prevPage) => prevPage += 1);
    }
  }

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      } else {
        entry.target.classList.remove("animate-fade-in");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });
    const elements = document.querySelectorAll(".photo-item");
    elements.forEach((element) => observer.observe(element));
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [page, observerCallback]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 justify-center min-h-1200 bg-white">
      <div className="container grid gap-8 px-4 md:px-6 lg:gap-12 mx-auto transition-all duration-300 ease-in">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galería de Fotos</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Disfruta de nuestra selección de hermosas fotografías.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.slice(0, page * photosPerPage).map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg opacity-0 photo-item"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 animate-fade-out"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 text-sm font-medium text-card-foreground">{photo.caption}</div>
              </div>
            </div>
          ))}
        </div>

      
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin bg-gray-200 rounded-full"></div>
          </div>
        
        <style>
          {`
            @keyframes fade-in {
              0% {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .animate-fade-in {
              animation: fade-in 0.5s ease-out forwards;
            }
              @keyframes fade-out {
              0% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
              100% {
                opacity: 0;
                transform: translateY(-20px) scale(0);
              }
            }

            .animate-fade-out {
              animation: fade-in-out 0.5s ease-out forwards;
            }
          `}
        </style>
      </div>
    </section>
  );
}
