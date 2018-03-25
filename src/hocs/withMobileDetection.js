import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

const detectMobile = () => {
  const mobile = [
    'iphone',
    'ipad',
    'android',
    'blackberry',
    'nokia',
    'opera mini',
    'windows mobile',
    'windows phone',
    'iemobile',
  ];
  const ua = navigator.userAgent.toLowerCase();

  for (var i in mobile) {
    if (ua.includes(mobile[i])) {
      return true;
    }
  }

  return false;
};

export default function withMobileDetection(Component) {
  function DetectMobile(props) {
    return <Component isMobile={detectMobile()} {...props} />;
  }

  DetectMobile.displayName = `withMobileDetection(${getDisplayName(
    Component
  )})`;
  return DetectMobile;
}
