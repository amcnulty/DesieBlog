import React, {Component} from 'react';
import './manageBooks.css';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, TabContent, TabPane, Collapse } from 'reactstrap';

class ManageBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      tabsShowing: false
    }
  }

  setActiveTab = tab => {
    this.setState({activeTab: tab});
  }

  render() {

    return (
      <div className="ManageBooks">
        <Navbar expand="sm" light>
          <NavbarToggler onClick={() => this.setState({tabsShowing: !this.state.tabsShowing})}/>
          <Collapse isOpen={this.state.tabsShowing} navbar>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={(this.state.activeTab === '1') ? 'active' : ''}
                  onClick={() => {this.setActiveTab('1'); this.setState({tabsShowing: false})}}
                >
                  New Article
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={(this.state.activeTab === '2') ? 'active' : ''}
                  onClick={() => {this.setActiveTab('2'); this.setState({tabsShowing: false})}}
                >
                  Update Article
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={(this.state.activeTab === '3') ? 'active' : ''}
                  onClick={() => {this.setActiveTab('3'); this.setState({tabsShowing: false})}}
                >
                  Delete Article
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            Tab 1 content
          </TabPane>
          <TabPane tabId="2">
            Tab 2 content
          </TabPane>
          <TabPane tabId="3">
            Tab 3 content
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default ManageBooks;
