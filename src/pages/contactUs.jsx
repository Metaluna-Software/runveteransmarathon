import React from 'react';
import Heading from '../components/heading';
import Section from '../components/section';
import PropTypes from 'prop-types';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('../server/contact.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: this.state.email, phone: this.state.phone, message: this.state.message })
    }).then(r => {
      this.setState({ email: '', phone: '', message: '' });
    });
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Contact Us'}/>
        <Section url={this.props.enJson.contactUsDetailWP}/>
        <form onSubmit={this.handleSubmit}>
          <p><label>Your email:</label></p>
          <p><input type={'text'} name={'email'} value={this.state.email} onChange={this.handleChange} size={'60'}/></p>
          <p><label>Your phone:</label></p>
          <p><input type={'text'} name={'phone'} value={this.state.phone} onChange={this.handleChange} size={'60'}/></p>
          <p><label>Your question:</label></p>
          <p><textarea rows='5' cols='60' name={'message'} value={this.state.message} onChange={this.handleChange}/></p>
          <p><input type={'submit'} value={'Send'}/></p>
        </form>
      </div>
    );
  }
}

ContactUs.propTypes = {
  enJson: PropTypes.object,
  contactUsDetailWP: PropTypes.string
};

export default ContactUs;
