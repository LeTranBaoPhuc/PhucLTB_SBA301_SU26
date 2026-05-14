import React, { useState, useEffect } from 'react';
import { Carousel as RBCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BannerCarousel({ imageFiles = [] }) {
    const images = imageFiles.map(f => `/images/${f}`)
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => setIndex(selectedIndex)

    return (
        <div className="banner-wrap">
            <RBCarousel activeIndex={index} onSelect={setIndex} fade interval={3000}>
                {images.map((src, i) => (
                    <RBCarousel.Item key={i}>
                        <img className="d-block w-100 banner-img" src={src} alt={`Slide ${i + 1}`} style={{ height: '400px', objectFit: 'cover' }} />
                    </RBCarousel.Item>
                ))}
            </RBCarousel>
        </div>
    )
}