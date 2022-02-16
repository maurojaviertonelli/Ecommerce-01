import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper() {
  return (
    <div className="col">
        <TopBar/>
        <ContentRowTop/>
        <Footer/>
    </div>
  );
}

export default ContentWrapper;