"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    {imgURL: 'assets/images/hero-1.svg', alt: 'smartwatch'},
    {imgURL: 'assets/images/hero-2.svg', alt: 'bag'},
    {imgURL: 'assets/images/hero-3.svg', alt: 'lamp'},
    {imgURL: 'assets/images/hero-4.svg', alt: 'air fryer'},
    {imgURL: 'assets/images/hero-5.svg', alt: 'chair'},
]


const HeroCarousel = () => {
  return (
    <div className="hero-carousel px-0 py-0">
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            interval={2000}
        >
            {heroImages.map((image) => (
                <Image
                   src={image.imgURL}
                   alt={image.alt}
                   width={300}
                   height={300}
                   
                   key={image.alt}
                />
            ))}
               
        </Carousel>

    </div>
  )
}

export default HeroCarousel