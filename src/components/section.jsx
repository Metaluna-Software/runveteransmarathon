import React from 'react';
import PropTypes from 'prop-types';
import ParseNewLines from './parseNewLines';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      message: '',
      title: '',
      links: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
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
        const links = [...str.matchAll(/<a.*href="(.*?)".*>(.*?)<\/a>/gi)];
        str = str.replace(/<(?:.|\s)*?>/g, '');
        str = str.replace(/&#8211;/gi, ':');
        str = str.replace(/&#8217;/gi, '\'');
        str = str.replace(/&nbsp;/gi, ' ');
        this.setState({ links: links, message: str });
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
        <ParseNewLines links={this.state.links} message={this.state.message}/>
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
