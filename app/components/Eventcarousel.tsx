"use client";
import React, { useState, useEffect } from "react";

const RecentEventsCarousel: React.FC = () => {

    const events = [
        {
          id: 1,
          title: "Inauguration of IEEE systems council",
          description: "Inauguration of IEEE systems council at DJHC on teacher's day.",
          imageUrl: "/events/e1.png",
        },
        {
          id: 2,
          title: "Guest Lecture by Prof. Sivaji Chakravorty",
          description: "Prof. Sivaji Chakravorty addressed the students about the latest advancements.",
          imageUrl: "/events/e2.png",
        },
        {
          id: 3,
          title: "IEEE 75th Anniversary",
          description: "IEEE Electron devices society was setup under the systems council.",
          imageUrl: "/events/e1.png",
        },
        {
          id: 4,
          title: "IEEE 75th Anniversary",
          description: "IEEE Electron devices society was setup under the systems council.",
          imageUrl: "/events/e2.png",
        },
        {
          id: 5,
          title: "IEEE 75th Anniversary",
          description: "IEEE Electron devices society was setup under the systems council.",
          imageUrl: "/events/e1.png",
        },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(window.innerWidth >= 1024 ? 3 : 1);
            setCurrentIndex(0); // Reset to the first slide on resize
        };

        handleResize(); // Initial setup
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(events.length / itemsPerSlide);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const getSlideStyle = () => ({
        transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
    });

    return (
        <div className="relative max-w-6xl mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6">Recent Events</h2>

            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={getSlideStyle()}
                >
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex-shrink-0 w-full md:w-1/3 p-4"
                            style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-96">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 h-1/3 mt-2">
                                    <h3 className="text-lg font-sans  font-semibold mb-2">{event.title}</h3>
                                    <p className="text-gray-600 font-sans font-normal overscroll-auto h-1/6">{event.description}</p>
                                    <button className="  mt-4 mx-auto px-4 py-2 bg-blue-500 text-white  rounded-lg hover:bg-blue-600">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-300 font-extrabold text-2xl bg-white p-3 rounded-full hover:text-gray-700"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300 font-extrabold text-2xl p-3 rounded-full hover:text-gray-700"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className="text-center mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Events Archive
                </button>
            </div>
        </div>
    );
};

export default RecentEventsCarousel;
