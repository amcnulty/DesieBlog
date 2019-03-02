import React, { Component } from 'react';

class AdComponent extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-6787537902815513",
      enable_page_level_ads: true
    });
  }

  render() {
    return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-6787537902815513'
        data-ad-slot='6787537902815513'
        data-ad-format='auto' />
    )
  }

}

export default AdComponent;
