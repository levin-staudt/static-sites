'use client';

import { useEffect, useRef, useState } from 'react';
import getData from './data';

const STORAGE_KEY = 'stuff-columns';
const MIN_COLUMNS = 1;
const MAX_COLUMNS = 7;
const DEFAULT_COLUMNS = 4;

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

function ColumnSwitcher({ columns, onChange }: { columns: number; onChange: (n: number) => void }) {
    return (
        <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm text-gray-500">Spalten:</span>
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
                <button
                    onClick={() => onChange(Math.max(MIN_COLUMNS, columns - 1))}
                    disabled={columns <= MIN_COLUMNS}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-white hover:text-gray-900 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
                    aria-label="Weniger Spalten"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                    </svg>
                </button>
                <span className="flex h-8 w-8 items-center justify-center text-sm font-medium text-gray-900">
                    {columns}
                </span>
                <button
                    onClick={() => onChange(Math.min(MAX_COLUMNS, columns + 1))}
                    disabled={columns >= MAX_COLUMNS}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-white hover:text-gray-900 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
                    aria-label="Mehr Spalten"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

const columnClasses: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
};

export default function StuffPage() {
    const data = getData();
    const [columns, setColumns] = useState(DEFAULT_COLUMNS);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = parseInt(stored, 10);
            if (parsed >= MIN_COLUMNS && parsed <= MAX_COLUMNS) {
                setColumns(parsed);
            }
        }
        setMounted(true);
    }, []);

    const handleColumnChange = (newColumns: number) => {
        setColumns(newColumns);
        localStorage.setItem(STORAGE_KEY, newColumns.toString());
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Cool Stuff
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Eine Sammlung meiner Lieblingsstücke
                            </p>
                        </div>
                        {mounted && (
                            <ColumnSwitcher columns={columns} onChange={handleColumnChange} />
                        )}
                    </div>
                </div>
            </header>

            {/* Grid */}
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columnClasses[columns]}`}>
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