import React from 'react';
import get from 'lodash.get';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import { articleUrlStrg, titleStrg } from '../../utils/Constants';

function stickySocialIconDesk(props){
  const { articles } = props;
  const articleUrl = get(articles, articleUrlStrg);
  const title = get(articles, titleStrg);

  //social sharing via react-share
  const { FacebookShareButton, WhatsappShareButton, EmailShareButton } = ShareButtons;
  const { FacebookShareCount } = ShareCounts;
  const FacebookIcon = generateShareIcon('facebook');
  const WhatsappIcon = generateShareIcon('whatsapp');
  const EmailIcon = generateShareIcon('email');
  const shareUrl = `http://www.secondwindnation.com/post?slug=${articleUrl}`;

  return(
    <div style={{ width: '96vw', maxWidth: 1000 }}>
      <FacebookShareButton url={shareUrl} quote={title} style={{ cursor: 'pointer', width: 10, marginBottom: 15 }}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      {/*<FacebookShareCount url={shareUrl} style={{ backgroundColor: '#03b998', fontFamily: 'Roboto' }}>
        {count => count}
      </FacebookShareCount>*/}
      <WhatsappShareButton url={shareUrl} separator=":: " title={title} style={{ cursor: 'pointer', width: 10, marginBottom: 15 }}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl} subject={title} body={shareUrl} style={{ cursor: 'pointer', width: 10 }}>
        <EmailIcon size={40} round />
      </EmailShareButton>
    </div>
  )
}

export default stickySocialIconDesk;
