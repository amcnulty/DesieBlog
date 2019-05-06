import React, {Component} from 'react';
import { Tooltip } from 'reactstrap';
import './imageListItem.css';
import { API } from '../../util/api';

class ImageListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      copyTooltipOpen: false,
      deleteTooltipOpen: false
    }
  }

  toggle = tooltip => {
    this.setState({
      [tooltip]: !this.state[tooltip]
    });
  }

  copyUrl = () => {
    const input = document.getElementById('copyInput');
    input.value = this.props.image.url;
    input.select();
    document.execCommand('copy');
    this.props.showCopyToast();
  }

  deleteImage = () => {
    console.log("Deleting Image");
    API.deleteImage(this.props.image.public_id, (err, res) => {
      if (err) {
        this.props.showErrorToast();
        console.log(err);
      }
      else this.props.showDeleteToast();
    });
    
  }

  render() {
    const toBackgroundUrl = url => `url("${url}")`;

    return (
      <div className="ImageListItem">
        <div
          className="listItemWrapper"
          style={{backgroundImage: toBackgroundUrl(this.props.image.url)}}
        >
          <div className="banner d-flex justify-content-between">
            <button type="button" className="btn btn-link text-white" onClick={this.copyUrl}>
              <i id={`${this.props.image.public_id}copyTooltip`} className="far fa-copy"></i>
              <Tooltip
                target={`${this.props.image.public_id}copyTooltip`}
                isOpen={this.state.copyTooltipOpen}
                toggle={() => this.toggle('copyTooltipOpen')}
              >
                Copy Url
              </Tooltip>
            </button>
            {
              this.props.user.isAdmin
              ?
              <button type="button" className="btn btn-link text-white" onClick={this.deleteImage}>
                <i id={`${this.props.image.public_id}deleteTooltip`} className="fas fa-trash-alt"></i>
                <Tooltip
                  target={`${this.props.image.public_id}deleteTooltip`}
                  isOpen={this.state.deleteTooltipOpen}
                  toggle={() => this.toggle('deleteTooltipOpen')}
                >
                  Delete Image
                </Tooltip>
              </button>
              :
              null
            }
          </div>
        </div>
        <input id="copyInput"></input>
      </div>
    )
  }
}

export default ImageListItem;
