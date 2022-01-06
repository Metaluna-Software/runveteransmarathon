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
        if (data && data.content) {
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
            let item;
            if (message.match(/<img.*\/>/) || message.match(/<img.*>/)) {
              item = message.match(/http(.*?)jpg/);
              if (item) {
                messageArray[i] = item[0];
              } else {
                item = message.match(/http(.*?)jpeg/);
                if (item) {
                  messageArray[i] = item[0];
                } else {
                  item = message.match(/http(.*?)png/);
                  if (item) {
                    messageArray[i] = item[0];
                  }
                }
              }
            } else if (message.match(/<a.*\/>/)) {
              const links = [...str.matchAll(/<a.*href="(.*?)".*>(.*?)<\/a>/gi)];
              messageArray[i] = links[0];
            } else if (message.match(/<strong>/)) {
              messageArray[i] = message.match(/<strong>(.*)/gi)[0]
            } else {
              // remove all other html tags
              messageArray[i] = messageArray[i].replace(/<(?:.|\s)*?>/g, '');
            }
          }
          messageArray = messageArray.filter(n => n !== '');
          this.setState({ isLoading: false, message: messageArray });
        }
      });
    if (this.props.title) {
      const title = <h2>{this.props.title}</h2>;
      this.setState({ title: title });
    }
  }

  render() {
    return (
      <div className={`${this.props.background ? 'info-message' : ''}`}>
        {this.state.title}
        {this.state.isLoading && <Spinner animation='grow' variant='primary'/>}
        {this.props.important &&
        <span><i className='fas fa-exclamation-circle'></i><span>&nbsp;&nbsp;Notice</span></span>}
        <ParseNewLines message={this.state.message}/>
        {this.props.image && <a href={this.props.image} target="_blank"><img src={this.props.image} alt='image'/></a>}
      </div>
    );
  }
}

Section.propTypes = {
  enJson: PropTypes.object,
  title: PropTypes.string,
  important: PropTypes.bool,
  image: PropTypes.string,
  message: PropTypes.string,
  url: PropTypes.string,
  marathonDate: PropTypes.string
};

export default Section;
