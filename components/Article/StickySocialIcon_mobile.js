import React from 'react';
import get from 'lodash.get';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import Grid from 'material-ui/Grid';

import { articleUrlStrg, titleStrg } from '../../utils/Constants';

function stickySocialIconMobile(props){
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
    <Grid container direction="row" align="center" justify="flex-end" style={{ maxWidth: 370 }}>
      <Grid item>
        <FacebookShareButton url={shareUrl} quote={title} style={{ cursor: 'pointer', width: 25 }}>
          <FacebookIcon size={35} round />
        </FacebookShareButton>
      </Grid>
      {/*<FacebookShareCount url={shareUrl} style={{ backgroundColor: '#03b998', fontFamily: 'Roboto' }}>
        {count => count}
      </FacebookShareCount>*/}
      <Grid item>
        <WhatsappShareButton url={shareUrl} separator=":: " title={title} style={{ cursor: 'pointer', width: 25 }}>
          <WhatsappIcon size={35} round />
        </WhatsappShareButton>
      </Grid>
      <Grid item>
        <EmailShareButton url={shareUrl} subject={title} body={shareUrl} style={{ cursor: 'pointer', width: 25 }}>
          <EmailIcon size={35} round />
        </EmailShareButton>
      </Grid>
    </Grid>
  )
}

export default stickySocialIconMobile;
