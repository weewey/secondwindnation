import React from 'react';
import Typography from 'material-ui/Typography';
import HeaderTabs from '../components/Shared/HeaderTabs';
import withRoot from '../components/withRoot';

function ContactSuccess() {
  return (
    <div>
      <HeaderTabs pathname={null} />
      <div style={{ marginTop: '150px', marginLeft: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <Typography type="display2">Thank you for contacting us. We will contact you shortly. </Typography>
      </div>
    </div>
  );
}
export default withRoot(ContactSuccess);
