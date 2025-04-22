'use client'

import React from 'react'
import { Button } from './ui/button'
import { Upload } from 'lucide-react'
import { CldUploadButton } from 'next-cloudinary'

const UploadButton = () => {
  return (
    <Button asChild>
                    <div className="flex gap-2">
                        <Upload className="h-4 w-4" />
                        <CldUploadButton
                            // onSuccess={(result) => {
                            //     if (result.info && typeof result.info === "object" && "public_id" in result.info) {
                            //         setImageId(result.info.public_id);
                            //     }
                            // }}
                            uploadPreset="image-upload-unsigned"
                        />
                    </div>
                </Button>
  )
}

export default UploadButton