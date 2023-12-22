import { useState, forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
