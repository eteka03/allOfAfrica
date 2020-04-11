import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Image({image}) {
    return (
        
             <LazyLoadImage
      alt={image.alt ? image.alt : 'UNDEFINED'}
      height={image.height}
      src={image.src} 
      width={image.width}
      style={image.style}
      />
        
    )
}
