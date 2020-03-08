import React from 'react';
import PropTypes from 'prop-types';
import ParseNewLines from './parseNewLines';
import Spinner from 'react-bootstrap/Spinner';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      message: [],
      title: ''
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: true });
    this._isMounted && fetch(this.props.url)
      .then(r => {
        return r.json();
      })
      .then(data => {
        let str = data.content.rendered;
        if (this.props.enJson) {
          str = str.replace(/\|marathondate\|/gi, this.props.enJson.marathonDate);
        }
        str = str.replace(/<br>/gi, '\n');

        str = str.replace(/&#8211;/gi, ':');
        str = str.replace(/&#8217;/gi, '\'');
        str = str.replace(/&nbsp;/gi, ' ');
        let messageArray = str.split('\n').filter(n => n != null).filter(n => n !== '');
        for (let i = 0; i < messageArray.length; i++) {
          const message = messageArray[i].trim();
          if (message.match(/<img.*\/>/)) {
            messageArray[i] = message.match(/http(.*?)jpg/)[0];
          } else if (message.match(/<a.*\/>/)) {
            const links = [...str.matchAll(/<a.*href="(.*?)".*>(.*?)<\/a>/gi)];
            messageArray[i] = links[0];
          } else {
            // remove all other html tags
            messageArray[i] = messageArray[i].replace(/<(?:.|\s)*?>/g, '');
          }
        }
        messageArray = messageArray.filter(n => n !== '');
        this.setState({ isLoading: false, message: messageArray });
      });
    if (this.props.title) {
      const title = <h2>{this.props.title}</h2>;
      this.setState({ title: title });
    }
  }

  render() {
    return (
      <div>
        {this.state.title}
        {this.state.isLoading && <Spinner animation='grow' variant='primary'/>}
        <ParseNewLines message={this.state.message}/>
      </div>
    );
  }
}

Section.propTypes = {
  enJson: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  url: PropTypes.string,
  marathonDate: PropTypes.string
};

export default Section;
