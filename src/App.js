import React from 'react';
import './App.css';

import MobileBookshelf from './MobileBookshelf/MobileBookshelf';
import DesktopBookshelf from './DesktopBookshelf/DesktopBookshelf';

import withMobileDetection from './hocs/withMobileDetection';

function App({ isMobile }) {
  return isMobile ? <MobileBookshelf /> : <DesktopBookshelf />;
}

export default withMobileDetection(App);
