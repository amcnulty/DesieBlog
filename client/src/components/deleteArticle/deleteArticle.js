import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticleList from '../articleList/articleList';
import './deleteArticle.css';
import { API } from '../../util/api';

class DeleteArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articlesLoaded: false,
      selectedArticle: {},
      modal: false
    }
  }

  componentDidMount = () => {
    this.loadArticles();
  }

  loadArticles = () => {
    this.setState({articlesLoaded: false});
    API.getArticlesByKind(this.props.kind, (err, articles) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({
          articles: articles.data,
          articlesLoaded: true
        });
      }
    });
  }

  handleArticleSelect = id => {
    API.getArticleById(id, (err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({selectedArticle: res.data});
        this.toggle();
      }
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteArticle = () => {
    this.toggle();
    API.deleteArticle(this.state.selectedArticle._id, (err, res) => {
      if (err) {
        console.log(err);
        this.showErrorToast();
      }
      else {
        this.showDeleteToast()
      }
    });
  }

  showDeleteToast = () => {
    toast.error("Article Deleted!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    this.loadArticles();
  }
  
  showErrorToast() {
    toast.warn("There Has Been An Error!", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  render() {
    return (
      <div className="DeleteArticle">
        {
          this.state.articlesLoaded
          ?
            <React.Fragment>
              <h1 className="text-center">Choose Article To Delete</h1>
              <div className="filterBar d-flex flex-row-reverse mx-5">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => this.loadArticles()}
                >
                  <i className="fas fa-sync-alt"></i> Refresh
                </button>
              </div>
              <ArticleList
                articles={this.state.articles}
                inEditor={true}
                onArticleSelect={this.handleArticleSelect}
              />
            </React.Fragment>
          :
          <div className="d-flex justify-content-center">
            <h3>Loading Articles...</h3>
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-exclamation-triangle"></i> Warning</ModalHeader>
          <ModalBody>
            Are you sure you want to delete {this.state.selectedArticle.title}?
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>Cancel</Button>
            <Button color="danger" onClick={() => this.deleteArticle()}>Delete</Button>
          </ModalFooter>
        </Modal>
        <ToastContainer
          autoClose={4000}
        />
      </div>
    )
  }
}

export default DeleteArticle;
