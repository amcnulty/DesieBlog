import React, { Component } from 'react';
import { API } from '../../util/api';
import ImageListItem from '../../components/imageListItem/imageListItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './imageList.css';

class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = refresh => {
    API.getAllImages((err, res) => {
      if (err) console.log(err);
      else {
        this.setState({ images: res.data.resources});
        if (refresh) this.showRefreshToast();
      }
    });
  }

  showCopyToast() {
    toast.success("Url Copied To Clipboard!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  showDeleteToast = () => {
    toast.error("Image Deleted!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    this.getImages(true);
  }
  
  showErrorToast() {
    toast.warn("There Has Been An Error!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  showRefreshToast() {
    toast.success("Images Reloaded", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  render() {
    
    return (
      <div className="ImageList">
        {
          this.state.images.length > 0
          ?
          <React.Fragment>
            <div className="filterBar d-flex flex-row-reverse mx-5">
              <button className="btn btn-link" type="button" onClick={() => this.getImages(true)}><i className="fas fa-sync-alt"></i> Refresh</button>
            </div>
            <div className="row">
              {
                this.state.images.map(image => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3" key={image.public_id}>
                      <ImageListItem
                        user={this.props.user}
                        image={image}
                        showCopyToast={this.showCopyToast}
                        showDeleteToast={this.showDeleteToast}
                        showErrorToast={this.showErrorToast}
                      />
                    </div>
                  )
                })
              }
              <ToastContainer
                autoClose={4000}
              />
            </div>
          </React.Fragment>
          :
          <div className="d-flex justify-content-center">
            <h3>Loading Images...</h3>
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      </div>
    )
  }

}

export default ImageList;
