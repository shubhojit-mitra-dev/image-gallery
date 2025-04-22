import UploadButton from '@/components/UploadButton'
import React from 'react'

const page = () => {
    return (
        <section className=''>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton />
            </div>
        </section>
    )
}

export default page