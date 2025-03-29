"use client";
import React, { useState } from "react";
import { extractFeatures } from "../lib/mobilenet";
import { fetchFirebaseImages } from "../lib/firebase";


const ImageCompare = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [similarImage, setSimilarImage] = useState<string | null>(null);

  // Handle image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    setSelectedImage(file);

    // Convert uploaded image to feature vector
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(file);
    imgElement.onload = async () => {
      const uploadedFeatures = await extractFeatures(imgElement);

      // Get all Firebase images
      const firebaseImages = await fetchFirebaseImages();
      let bestMatch = null;
      let bestSimilarity = -1;

      for (const url of firebaseImages) {
        const img = document.createElement("img");
        img.src = url;
        await new Promise((resolve) => (img.onload = resolve)); // Wait for image to load

        const firebaseFeatures = await extractFeatures(img);

        // Calculate cosine similarity
        const similarity = uploadedFeatures.dot(firebaseFeatures).dataSync()[0];

        if (similarity > bestSimilarity) {
          bestSimilarity = similarity;
          bestMatch = url;
        }
      }

      setSimilarImage(bestMatch);
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" width={200} />}
      {similarImage && (
        <div>
          <h3>Best Match:</h3>
          <img src={similarImage} alt="Best match" width={200} />
        </div>
      )}
    </div>
  );
  

};

export default ImageCompare;
