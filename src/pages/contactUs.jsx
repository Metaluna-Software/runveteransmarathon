import React from 'react';
import Sponsors from '../components/sponsors';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrxeuLafhvcQE12tu2NjYQuE4dImK2XoScSKtFWD77JkQ7wA/viewform?embedded=true"
          width="640" height="864" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
        </iframe>
        <Sponsors/>
      </div>
    );
  }
}

export default ContactUs;
