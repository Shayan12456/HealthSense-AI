const cloudinary = require("../../utils/cloudConfig");


import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { fileUri, fileName } = await req.json();

    const response = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      resource_type: "auto",
      filename_override: fileName,
      folder: "product-images",
      use_filename: true,
    });

    return NextResponse.json({ success: true, result: response });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
