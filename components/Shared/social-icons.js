import { SocialIcon } from 'react-social-icons';
import socialUrls from '../../utils/socialShareLinks';
import React from 'react';

export default function () {
  const icons = socialUrls.map(url => (<SocialIcon key={url} url={url} style={{ height: 35, width: 35, margin: 5 }} color="black" />));
  return (
    <span >
      {icons}
    </span>);
}
