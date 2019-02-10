import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import ChipInput from 'material-ui-chip-input';
import {API} from '../../util/api';
import ArticleThumbnail from '../articleThumbnail/articleThumbnail';
import './updateArticleForm.css';

class UpdateArticleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.article,
      modal: false
    }
  }

  previewArticle = () => {
    localStorage.setItem('articleData', JSON.stringify(this.getArticleData()));
    localStorage.setItem('type', this.props.articleData.type);
    window.open('/cms/preview', '_blank');
  }
  
  saveArticle = () => {
  }

  getArticleData = () => {
    const data = {};
    // req.author = this.props.articleAuthor;
    this.props.articleData.fields.forEach(field => {
      data[field.name] = this.state[field.value];
    });
    data.body = this.state.body;
    return data;
  }

  setTitle = e => {
    this.setState({
      urlTitle: e.target.value.replace(/\s+/g, '-').toLowerCase(),
      bannerText: e.target.value,
      path: this.getPath() + e.target.value.replace(/\s+/g, '-').toLowerCase()
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  getPath = () => {
    return this.props.articleData.relativePath;
  }

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    });
  }

  getInputs = () => {
    return this.props.articleData.inputs.map(input => {
      return (
        <div key={input.id} className="form-group">
          <label htmlFor={input.id}>{input.label}</label>
          {input.type !== 'chip' ?
          <input
            id={input.id}
            className="form-control"
            type={input.type}
            value={this.state[input.id]}
            onChange={this.handleChange}
          />
          :
          <ChipInput
            className="form-control"
            onChange={(chips) => this.handleChangeChips(chips, input.id)}
          /> }
        </div>
      )
    });
  }

  handleChangeChips = (chips, id) => {
    this.setState({[id]: chips});
  }

  render() {
    return (
      <div className="UpdateArticleForm mb-5">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <h3>Article Thumbnail Information</h3>
            <div className="form-group">
              <label htmlFor="title">Article Title</label>
              <input
                id="title"
                className="form-control"
                type="text"
                value={this.state.title}
                onChange={(event) => {this.handleChange(event); this.setTitle(event)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="urlTitle">Url Title</label>
              <input
                id="urlTitle"
                className="form-control"
                type="text"
                value={this.state.urlTitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="path">Path</label>
              <input
                id="path"
                className="form-control"
                readOnly={true}
                type="text"
                value={this.state.path}
                placeholder={`${this.getPath()}path-to-article`}
              />
            </div>
            <div className="form-group">
              <label htmlFor="thumbnailImage">Thumbnail Image</label>
              <input
                id="thumbnailImage"
                className="form-control"
                type="text"
                value={this.state.thumbnailImage}
                onChange={this.handleChange}
                placeholder="http://path-to-image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerText">Thumbnail Banner Text</label>
              <input
                id="bannerText"
                className="form-control"
                type="text"
                value={this.state.bannerText}
                onChange={this.handleChange}
              />
            </div>
            {this.getInputs()}
          </div>
          <div className="col-lg-5 col-12">
            <Card>
              <CardHeader>Thumbnail Preview</CardHeader>
              <CardBody className="align-self-center w-100">
                <ArticleThumbnail
                  thumbnailImage={!this.state.thumbnailImage || this.state.thumbnailImage === '' ? '/res/images/default.png' : this.state.thumbnailImage}
                  bannerText={this.state.bannerText}
                 />
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-md-11">
            <h3 className="text-center">Article Body</h3>
            <textarea
              id="body"
              className="w-100"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-7 col-12 d-flex">
            <button className="btn btn-success w-50 mr-3" onClick={this.saveArticle}>Save Article</button>
            <button className="btn btn-primary w-50" onClick={this.previewArticle}>Preview Article</button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-exclamation-triangle"></i> Information</ModalHeader>
          <ModalBody>
            Article Save Successful!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UpdateArticleForm;
