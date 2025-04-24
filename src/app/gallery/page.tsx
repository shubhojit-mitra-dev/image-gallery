import React from 'react'
import UploadButton from '@/components/UploadButton'
import cloudinary from "cloudinary";
import GalleryGrid from '@/components/gallery-grid';

export const revalidate = 10;

export type SearchResult = {
    public_id: string;
    tags: string[];
  };

export default async function Gallery() {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(80)
        .execute()) as { resources: SearchResult[] };
    return (
        <section className='flex flex-col gap-8'>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton />
                
            </div>
            <GalleryGrid images={results.resources} />
        </section>
    )
}
