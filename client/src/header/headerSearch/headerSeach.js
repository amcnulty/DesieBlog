import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import './headerSearch.css';

class HeaderSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="HeaderSearch">
        <button
          className="db-button"
          type="submit"
          onClick={this.toggle}
        >
          <i className="fa fa-search"></i>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-exclamation-triangle"></i> Information</ModalHeader>
          <ModalBody>
            <label htmlFor="searchBar">Search for an article</label>
            <input id="searchBar" className="form-control" type="text" placeholder="Type search here..."/>
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>CANCEL</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default HeaderSearch;