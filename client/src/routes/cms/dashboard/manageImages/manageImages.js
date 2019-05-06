import React from 'react';
import ImageUpload from '../../../../components/imageUpload/imageUpload';
import ImageList from '../../../../components/imageList/imageList';
import './manageImages.css';

const ManageImages = props => {
  return (
    <div className="ManageImages my-5">
      <h1 className="text-center">Upload New Image</h1>
      <ImageUpload/>
      <h1 className="text-center mt-5">Edit/Delete Images</h1>
      <ImageList user={props.user}/>
    </div>
  )
}

export default ManageImages;
