'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const PixilaryImage = () => {
    const { resolvedTheme } = useTheme();
    const [imageSrc, setImageSrc] = useState('/pixilary-light.png');
    
    // Only update the image source after component mounts on client
    useEffect(() => {
        setImageSrc(resolvedTheme === 'dark' 
            ? '/pixilary-dark.png' 
            : '/pixilary-light.png');
    }, [resolvedTheme]);

    return (
        <div suppressHydrationWarning>
            <Image
                src={imageSrc}
                alt="App preview"
                width={1824}
                height={1080}
                className="rounded-lg w-full"
                priority
            />
        </div>
    )
}

export default PixilaryImage