'use client';

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";


export default function Home() {
  const [imageId, setImageId] = useState<string | null>(null);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton
          onSuccess={(result) => {
            if (result.info && typeof result.info === "object" && "public_id" in result.info) {
              setImageId(result.info.public_id);
            }
          }}
          uploadPreset="image-upload-unsigned"
        />
        {imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </main>
    </>
  );
}
