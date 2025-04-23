import PixilaryImage from '@/components/pixilary-image'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container pt-32 lg:pt-20 pb-20">
        {/* Content */}
        <div className="max-w-[800px] mx-auto text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Showcase your images
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                anywhere in the cloud
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              A powerful image management platform built on Cloudinary. Upload, organize,
              transform, and share your visual content with unmatched flexibility and
              performance—all from a single intuitive interface.
            </p>
          </div>

          <div className="relative w-full max-w-[1200px] mx-auto mt-20">
            <div className="relative">
              <div className="relative bg-background/95 backdrop-blur rounded-lg shadow-2xl">
                <PixilaryImage />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient Effect */}
      </div>
      <footer>
        <div className="container py-5">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pixilary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page