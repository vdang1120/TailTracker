import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

// Load MobileNet V2 model
export const loadModel = async () => {
  const model = await mobilenet.load();
  return model;
};

// Extract features from an image
export const extractFeatures = async (imgElement: HTMLImageElement) => {
  const model = await loadModel();
  const tensor = tf.browser.fromPixels(imgElement).toFloat();
  const features = model.infer(tensor, true); // Get feature embeddings
  return features;
};     

