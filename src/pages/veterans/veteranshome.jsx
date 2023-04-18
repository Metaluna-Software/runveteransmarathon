import React from 'react';
import Banner from '../../navigation/banner';
import Section from '../../components/section';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';
import Donors from '../../components/donors';

class VeteransHome extends React.Component {
  render() {
    return (
      <div className='section-wrapper'>
        <div>
          <p>For <span className={'memorial-info-link'}>Memorial Mile</span> choose Events at the top or <a href='./memorial.html'>click here</a></p>
        </div>
        <div className={'title-container'}>
          <div>
            <h2 className={'home-title'}>Veterans Marathon and Heroes 5k</h2>
          </div>
          <div>
            <p className={'home-title-date'}>{this.props.enJson.marathonDate}
              <a className="social" href="https://www.facebook.com/RunVetsMarathon/" target="_blank">
                <svg version="1.1" id="facebookSvg" x="0px" y="0px" width="24px" height="24px"
                     viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                  <path fill="#545b62" d="M22.676,0H1.325C0.593,0,0,0.593,0,1.325v21.35C0,23.407,0.593,24,1.325,24H12.82v-9.294H9.692v-3.622h3.128
	V8.413c0-3.1,1.894-4.788,4.657-4.788c1.326,0,2.464,0.1,2.796,0.144v3.238l-1.918,0.001c-1.505,0-1.796,0.716-1.796,1.763v2.313
	h3.588l-0.467,3.622h-3.121V24h6.117C23.407,24,24,23.407,24,22.675V1.325C24,0.593,23.407,0,22.676,0"/>
                </svg>
              </a>
              <a className="social" href="https://www.instagram.com/runvets/" target="_blank">
                <svg version="1.1" id="instagramSvg" x="0px" y="0px" width="24px" height="24px"
                     viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                  <path fill="#545b62" d="M12,2.162c3.204,0,3.583,0.012,4.849,0.07c1.17,0.054,1.805,0.249,2.229,0.414
	c0.561,0.217,0.96,0.477,1.38,0.897c0.42,0.42,0.681,0.82,0.897,1.38c0.164,0.424,0.359,1.058,0.414,2.228
	c0.058,1.266,0.069,1.645,0.069,4.849s-0.012,3.584-0.069,4.851c-0.055,1.17-0.25,1.803-0.414,2.227
	c-0.217,0.562-0.478,0.959-0.897,1.379c-0.42,0.421-0.819,0.682-1.38,0.898c-0.424,0.166-1.059,0.359-2.229,0.414
	c-1.265,0.057-1.645,0.069-4.849,0.069c-3.205,0-3.584-0.013-4.849-0.069c-1.17-0.055-1.805-0.248-2.228-0.414
	c-0.561-0.217-0.96-0.478-1.38-0.898c-0.42-0.42-0.68-0.817-0.898-1.379c-0.164-0.424-0.359-1.057-0.413-2.227
	c-0.058-1.267-0.07-1.646-0.07-4.851s0.012-3.583,0.07-4.849c0.054-1.17,0.249-1.804,0.413-2.228c0.218-0.56,0.478-0.96,0.898-1.38
	c0.42-0.42,0.819-0.68,1.38-0.897c0.423-0.165,1.058-0.36,2.228-0.414C8.416,2.174,8.796,2.162,12,2.162 M12,0
	C8.741,0,8.332,0.015,7.052,0.072C5.775,0.13,4.903,0.333,4.14,0.63C3.351,0.937,2.681,1.348,2.014,2.015
	C1.347,2.682,0.937,3.352,0.63,4.141c-0.297,0.762-0.5,1.634-0.558,2.913C0.014,8.333,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948
	c0.058,1.277,0.261,2.15,0.558,2.912c0.307,0.789,0.717,1.459,1.384,2.125c0.667,0.668,1.337,1.077,2.126,1.385
	c0.763,0.297,1.635,0.5,2.912,0.559C8.332,23.985,8.741,24,12,24s3.667-0.015,4.946-0.071c1.279-0.059,2.15-0.262,2.914-0.559
	c0.789-0.308,1.459-0.717,2.125-1.385c0.668-0.666,1.078-1.336,1.385-2.125c0.297-0.762,0.5-1.635,0.559-2.912
	C23.985,15.668,24,15.259,24,12c0-3.259-0.015-3.667-0.071-4.946c-0.059-1.279-0.262-2.151-0.559-2.913
	c-0.307-0.789-0.717-1.458-1.385-2.126c-0.666-0.667-1.336-1.078-2.125-1.385c-0.764-0.297-1.635-0.5-2.914-0.558
	C15.667,0.015,15.259,0,12,0"/>
                  <path fill="#545b62" d="M12,5.838c-3.403,0-6.162,2.76-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162
	c3.403,0,6.162-2.759,6.162-6.162C18.162,8.598,15.403,5.838,12,5.838 M12,16c-2.209,0-4-1.792-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4
	C16,14.208,14.209,16,12,16"/>
                  <path fill="#545b62" d="M19.846,5.595c0,0.795-0.646,1.439-1.44,1.439s-1.439-0.644-1.439-1.439c0-0.795,0.645-1.44,1.439-1.44
	S19.846,4.799,19.846,5.595"/>
                </svg>
              </a>
            </p>
          </div>
        </div>
        <Banner/>
        <Section url={this.props.enJson.homeWelcomeWP}/>
        <Sponsors/>
        <Donors/>
      </div>
    );
  }
}

VeteransHome.propTypes = {
  enJson: PropTypes.object,
  marathonDate: PropTypes.string,
  homeWelcomeWP: PropTypes.string
};

export default VeteransHome;
