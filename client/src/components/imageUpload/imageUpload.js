import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Fade } from 'reactstrap';
import { API } from '../../util/api';
import './imageUpload.css';

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fadeIn: false,
      uploadSuccessful: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFileUpload = (accepted, unaccepted) => {
    API.uploadImage(accepted[0], null, (err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({
          url: res.data.url,
          modal: true,
          uploadSuccessful: true
        });
      }
    });
  }

  copyUrl = e => {
    this.urlInput.select();
    document.execCommand('copy');
    this.setState({
      fadeIn: true
    });
    setTimeout(() => {
      this.setState({
        fadeIn: false
      })
    }, 1500);
  }

  render() {

    return (
      <div className="ImageUpload">
        <Dropzone
          onDrop={this.handleFileUpload}
          accept="image/*"
          maxSize={200000}
        >
        {({getRootProps, getInputProps}) => {
          return (
            <div
              {...getRootProps()}
              className="dropzone col-8 offset-2 px-0"
            >
              <input {...getInputProps()} />
              <div className="d-flex flex-column align-items-center justify-content-around h-100 py-5 bg-light">
                <i className="fas fa-cloud-upload-alt largeText"></i>
                <h3>Drop Files Here</h3>
                <button type="button" className="btn btn-success">Browse</button>
              </div>
            </div>
          )
        }}
        </Dropzone>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-exclamation-triangle"></i> Information</ModalHeader>
            {
              this.state.uploadSuccessful ? 
              (
                <ModalBody>
                  <h4 className="text-center">Upload Successful!</h4>
                  <div className="form-group">
                    <label>Image URL</label>
                    <div className="input-group">
                      <input
                        type="text"
                        readOnly={true}
                        className="form-control"
                        value={this.state.url}
                        ref={(input) => this.urlInput = input}
                      />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.copyUrl}>
                          <i className="far fa-copy"></i> Copy
                        </button>
                      </div>
                    </div>
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3 text-success text-bold text-center">
                      Copied to clipboard!
                    </Fade>
                  </div>
                </ModalBody>
              )
              :
              (
                <ModalBody>
                  <h4 className="text-center text-danger">There has been an error!</h4>
                  <p className="text-center">Make sure image is <strong>no larger than 200 kb</strong> in size!</p>
                </ModalBody>
              )
            }
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ImageUpload;
