import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

let model: any = null;

// Load MobileNet V2 model
export const loadModel = async () => {
  if (!model) {
    try {
      console.log('Loading MobileNet model...');
      model = await Promise.race([
        mobilenet.load(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Model load timeout')), 30000)
        )
      ]);
      console.log('MobileNet model loaded successfully');
    } catch (error) {
      console.error('Error loading MobileNet model:', error);
      throw new Error('Failed to load AI model. Please try again.');
    }
  }
  return model;
};

// Extract features from an image
export const extractFeatures = async (imgElement: HTMLImageElement) => {
  try {
    const model = await loadModel();
    console.log('Converting image to tensor...');
    
    // Ensure image is loaded and valid
    if (!imgElement.complete || imgElement.naturalWidth === 0) {
      throw new Error('Image not fully loaded');
    }

    const tensor = tf.browser.fromPixels(imgElement).toFloat();
    console.log('Running inference...');
    
    const features = await Promise.race([
      model.infer(tensor, true),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Inference timeout')), 10000)
      )
    ]);
    
    console.log('Inference complete');
    return features;
  } catch (error) {
    console.error('Error in extractFeatures:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to process image');
  }
};     

