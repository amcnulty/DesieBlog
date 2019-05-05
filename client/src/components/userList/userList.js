import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Card, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import './userList.sass';
import { API } from '../../util/api';

class UserList extends Component {

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

  handleDeleteUser = user => {
    this.setState({currentUser: user});
    this.toggle();
  }
  
  deleteUser = user => {
    this.toggle();
    API.deleteUser(user, (err, res) => {
      if (err) {
        console.log(err);
        toast.warn('There has been an error!', {
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
      else if (res.status === 200) {
        toast.success('User Deleted!', {
          position: toast.POSITION.BOTTOM_CENTER
        });
        this.props.refresh();
      }
    });
  }

  render() {
    return (
      this.props.users
      ?
      <React.Fragment>
        <ListGroup className="d-none d-md-block">
          {this.props.users.map((user, index) => {
            return <ListGroupItem key={index} className="d-flex justify-content-between">
              <span className="d-flex flex-column">
                <span className="font-weight-bold">Username:</span> {user.username}
              </span>
              <span className="d-flex flex-column">
                <span className="font-weight-bold">Display Name:</span> {user.displayName}
              </span>
              <span className="d-flex flex-column">
                <span className="font-weight-bold">Admin:</span> {user.isAdmin ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times text-danger"></i>}
              </span>
              <Button color="danger" onClick={() => this.handleDeleteUser(user)}>Delete User</Button>
            </ListGroupItem>
          })}
        </ListGroup>
        {this.props.users.map((user, index) => {
          return <Card className="d-md-none text-center my-1" key={index}>
            <CardBody className="d-flex flex-column">
              <span>
                <span className="font-weight-bold">Username:</span> {user.username}
              </span>
              <span>
                <span className="font-weight-bold">Display Name:</span> {user.displayName}
              </span>
              <span>
                <span className="font-weight-bold">Admin:</span> {user.isAdmin ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times text-danger"></i>}
              </span>
            </CardBody>
            <CardFooter>
              <Button color="danger" onClick={() => this.handleDeleteUser(user)}>Delete User</Button>
            </CardFooter>
          </Card>
        })}
        <ToastContainer
          autoClose={4000}
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-exclamation-triangle"></i> Information</ModalHeader>
          <ModalBody>
            Are you sure you want to delete {this.state.currentUser ? this.state.currentUser.displayName : null}?
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>CANCEL</Button>
            <Button color="danger" onClick={() => this.deleteUser(this.state.currentUser)}>Delete</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
      :
      null
    )
  }
}

export default UserList;