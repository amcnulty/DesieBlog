import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../../util/api';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: true,
      title: '',
      urlTitle: '',
      authorsInput: [''],
      path: '',
      thumbnailImage: '',
      bannerText: '',
      bookImage: '',
      body: '',
      editorState: EditorState.createEmpty()
    }
    // API.userPresent((err, res) => {
    //   if (err) {
    //     if (res === 401) {
    //       this.props.history.push('/cms');
    //     }
    //     console.log(err);
    //   }
    //   this.setState({user: res});
    // });
  }

  componentDidMount() {}

  logout = e => {
    API.logoutUser((err, status) => {
      if (status === 200) this.props.history.push('/cms');
    });
  }

  saveArticle = () => {
    const req = {
      title: this.state.title,
      urlTitle: this.state.urlTitle,
      authors: this.state.authorsInput.split(','),
      path: '/books/' + this.state.urlTitle,
      thumbnailImage: this.state.thumbnailImage,
      bannerText: this.state.bannerText,
      bookImage: this.state.bookImage,
      body: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    }
    API.creatBookArticle(req, (err, status) => {
      if (err) console.log(err);
      if (status === 200); // Success!
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  }

  setTitle = e => {
    this.setState({
      urlTitle: e.target.value.replace(/\s+/g, '-').toLowerCase()
    });
  }

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    });
  }

  render() {
    const { editorState } = this.state;
    return this.state.user ? (
      <div className="Dashboard">
        <h1>Dashboard works!</h1>
        <button onClick={this.logout}>Logout</button>
        <input
          id="title"
          className="form-control my-1"
          type="text"
          value={this.state.title}
          onChange={(event) => {this.handleChange(event); this.setTitle(event)}}
          placeholder="Article Title"
        />
        <input
          id="urlTitle"
          className="form-control my-1"
          type="text"
          value={this.state.urlTitle}
          onChange={this.handleChange}
          placeholder="url-title-of-book"
        />
        <input
          id="authorsInput"
          className="form-control my-1"
          type="text"
          value={this.state.authorsInput}
          onChange={this.handleChange}
          placeholder="Author 1,Author 2,Author 3"
        />
        <input
          id="path"
          className="form-control my-1"
          type="text"
          readOnly="true"
          value={this.state.path}
          onChange={this.handleChange}
          placeholder="/books/path-to-book"
        />
        <input
          id="thumbnailImage"
          className="form-control my-1"
          type="text"
          value={this.state.thumbnailImage}
          onChange={this.handleChange}
          placeholder="thumbnail image url"
        />
        <input
          id="bannerText"
          className="form-control my-1"
          type="text"
          value={this.state.bannerText}
          onChange={this.handleChange}
          placeholder="Thumbnail banner text"
        />
        <input
          id="bookImage"
          className="form-control my-1"
          type="text"
          value={this.state.bookImage}
          onChange={this.handleChange}
          placeholder="Book Image URL"
        />
        <Editor
          onEditorStateChange={editorState}
          onEditorStateChange={this.onEditorStateChange}
          wrapperClassName="editorWrapper"
          toolbarClassName="toolbar"
          editorClassName="editor"
        />
        <textarea
          className="preview"
          disabled="true"
          value={(!!editorState) ? draftToHtml(convertToRaw(editorState.getCurrentContent())) : ''}
        />
        <button onClick={this.saveArticle}>Save Article</button>
      </div>
    )
    : <h1>Redirecting...</h1>;
  }
}

export default Dashboard;