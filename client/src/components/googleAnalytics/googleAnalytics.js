import React, {Component} from 'react';
import ReactGA from 'react-ga';


class GoogleAnalytics extends Component {
  
  componentWillMount() {
    this.listener = this.props.history.listen(() => {
      ReactGA.initialize('UA-133762520-1');
      ReactGA.pageview(this.props.history.location.pathname);
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (<span></span>)
  }

}

export default GoogleAnalytics;