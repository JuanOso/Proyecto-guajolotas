import React from 'react';
import { Carousel, CarouselItem, CarouselControl,
CarouselIndicators, CarouselCaption} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import styled from 'styled-components';


  const items = [
    {
      src : 'https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/verde_dcimlm.png',
      altText: 'Guajolota de Tamal Verde',
      
    },
    {
      src: 'https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700044/guappjolotas/Mole_quk0tw.png',
      altText: 'Guajolota de Tamal de Mole',
      
    },
    {
      src: 'https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/guayaba_buucjt.png',
      altText: 'Guajolota de Tamal de Guayaba',
      
    }
  ];

const Slider = (props) => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex({ activeIndex: nextIndex });
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
      return (
        
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} 
          style={{}}
          width="30%" height="150px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
        
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
};

export default Slider;