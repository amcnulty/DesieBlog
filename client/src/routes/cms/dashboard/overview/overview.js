import React, {Component} from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './overview.css';
import { API } from '../../../../util/api';

class Overview extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    API.getArticlesByKind('Book', (err, response) => {
      if (err) console.log(err);
      else this.setState({ bookArticleCount: response.data.length});
    });
    API.getArticlesByKind('Wine', (err, response) => {
      if (err) console.log(err);
      else this.setState({ wineArticleCount: response.data.length});
    });
    API.getArticlesByKind('Travel', (err, response) => {
      if (err) console.log(err);
      else this.setState({ travelArticleCount: response.data.length});
    });
    API.getArticlesByKind('Recipe', (err, response) => {
      if (err) console.log(err);
      else this.setState({ recipeArticleCount: response.data.length});
    });
    API.getImageUsageInformation((err, response) => {
      if (err) console.log(err);
      else {
        this.setState(response.data);
      }
    });
  }

  render() {
    return (
      <div className="Overview my-4 my-md-0">
        <h1>Welome to your dashboard {this.props.user.data.displayName}!</h1>
        <Row>
          <Col md="6">
            <h3 className="text-center">Articles</h3>
            <ListGroup>
              <ListGroupItem>
                <strong>Total: </strong> {
                  this.state.bookArticleCount && this.state.wineArticleCount && this.state.travelArticleCount && this.state.recipeArticleCount
                  ?
                  this.state.bookArticleCount + this.state.wineArticleCount + this.state.travelArticleCount + this.state.recipeArticleCount
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Books: </strong> {
                  this.state.bookArticleCount
                  ?
                  this.state.bookArticleCount
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Wine: </strong> {
                  this.state.wineArticleCount
                  ?
                  this.state.wineArticleCount
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Travel: </strong> {
                  this.state.travelArticleCount
                  ?
                  this.state.travelArticleCount
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Recipes: </strong> {
                  this.state.recipeArticleCount
                  ?
                  this.state.recipeArticleCount
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="6">
            <h3 className="text-center">Images</h3>
            <ListGroup>
              <ListGroupItem>
                <strong>Plan: </strong> {
                  this.state.plan
                  ?
                  this.state.plan
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Total: </strong> {
                  this.state.resources
                  ?
                  this.state.resources
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Last Updated: </strong> {
                  this.state.last_updated
                  ?
                  this.state.last_updated
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Storage Used: </strong> {
                  this.state.storage
                  ?
                  `${this.state.storage.used_percent}%`
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
              <ListGroupItem>
                <strong>Bandwidth Used: </strong> {
                  this.state.bandwidth
                  ?
                  `${this.state.bandwidth.used_percent}%`
                  :
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Overview;
