import React from 'react';
import ImageUpload from '../../../../components/imageUpload/imageUpload';
import './manageImages.js';

const ManageImages = props => {
  return (
    <div className="ManageImages my-5">
      <h1 className="text-center">Upload New Image</h1>
      <ImageUpload/>
    </div>
  )
}

export default ManageImages;
