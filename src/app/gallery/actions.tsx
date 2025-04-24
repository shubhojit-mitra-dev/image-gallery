"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from 'next/cache';

export async function setAsFavoriteAction(
  publicId: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  revalidatePath('/gallery');
  revalidatePath('/favorites');
}

export async function revalidateGallery() {
  revalidatePath('/gallery');
}
