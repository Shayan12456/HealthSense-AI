"use client";

import React, { useState } from "react";
import { Upload, X, Info } from "lucide-react";

function SkinDiagnosisApp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = async () => {
        const fileUri = reader.result;
        setIsUploading(true);

        try {
          // API Call to Upload the File
          const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileUri, // Base64-encoded file
              fileName: file.name,
            }),
          });

          const data = await response.json();

          if (data.success) {
            setUploadedImageUrl(data.result.secure_url);
            setSelectedImage(data.result.secure_url);
            console.log("Uploaded URL:", data.result.secure_url);
          } else {
            console.error("Upload failed:");
            alert("Upload failed. Please try again.");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          alert("An error occurred while uploading the image.");
        } finally {
          setIsUploading(false);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!uploadedImageUrl) {
      alert("Please upload an image before submitting the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/imageprocess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: uploadedImageUrl, description, what: "image" }),
      });

      const data = await response.json();
      await alert(data.response)

      
    } catch (error) {
      console.error("Error processing the image:", error);
      alert("An error occurred during processing.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Life Lens</h1>
        <p>Upload an image and submit the form for analysis</p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Image Upload */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Upload Image</h2>

            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setUploadedImageUrl(null);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => document.getElementById("fileInput").click()}
                  className="w-full bg-gray-100 border-2 border-dashed border-gray-300 p-6 rounded-lg text-center"
                >
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <span className="text-gray-500">Click to upload image</span>
                </button>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            )}

            {isUploading && <p>Uploading...</p>}
          </div>

          {/* Description Input */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Describe Symptoms</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the symptoms or affected area..."
              rows="6"
              className="w-full border border-gray-300 rounded-lg p-3"
            ></textarea>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !uploadedImageUrl}
              className={`w-full px-4 py-2 mt-4 rounded-lg text-white ${
                isSubmitting || !uploadedImageUrl
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-6 flex items-start">
          <Info className="h-5 w-5 mr-2" />
          <p>
            The uploaded image will be analyzed. Please consult a healthcare professional for any
            medical advice.
          </p>
        </div>
      </main>
    </div>
  );
}

export default SkinDiagnosisApp;
