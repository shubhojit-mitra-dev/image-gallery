'use client'

import React from 'react'
import { Button } from './ui/button'
import { Upload } from 'lucide-react'
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { revalidateGallery } from "@/app/gallery/actions";

const UploadButton = () => {
    const router = useRouter();
    return (
        <Button asChild>
            <div className="flex gap-2">
                <Upload className="h-4 w-4" />
                <CldUploadButton
                    onSuccess={() => {
                        revalidateGallery();
                        setTimeout(() => {
                          router.refresh();
                        }, 2000);
                      }}
                    uploadPreset="image-upload-unsigned"
                />
            </div>
        </Button>
    )
}

export default UploadButton
