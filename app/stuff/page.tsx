'use client';

import { useEffect, useRef, useState } from 'react';
import getData from './data';

interface ImageItem {
    id: number;
    link: string;
}

function ImageCard({ item }: { item: ImageItem }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.01,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={imgRef}
            className="relative overflow-hidden rounded-xl bg-gray-50"
            style={{ aspectRatio: '1239/930' }}
        >
            {isVisible && (
                <>
                    {!isLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" />
                    )}
                    <img
                        src={item.link}
                        alt={`Item ${item.id}`}
                        className={`h-full w-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />
                </>
            )}
        </div>
    );
}

export default function StuffPage() {
    const data = getData();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Cool Stuff
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Eine Sammlung meiner Lieblingsstücke
                    </p>
                </div>
            </header>

            {/* Grid */}
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((item) => (
                        <ImageCard key={item.id} item={item} />
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        {data.length} Items
                    </p>
                </div>
            </footer>
        </div>
    );
}