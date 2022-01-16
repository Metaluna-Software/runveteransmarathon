import React from 'react';
import Banner from '../../navigation/banner';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';
import Donors from '../../components/donors';
import InstaLogo from '../../components/instaLogo';
import FbLogo from '../../components/fbLogo';

class VeteransHome extends React.Component {
  render() {
    return (
      <div className={'section-wrapper'}>
        <div>
          <p> For
            <span className={'memorial-info-link'}>Memorial 10k</span>
            choose Events at the top or <a href="./memorial.html">click here</a></p>
        </div>
        <div className={'title-container'}>
          <div>
            <h2 className={'home-title'}>Veterans Marathon and Heroes 5k</h2>
          </div>
          <div>
            <p className={'home-title-date'}>{this.props.enJson.marathonDate}
              <a className="social" href="https://www.facebook.com/RunVetsMarathon/" target="_blank">
                <FbLogo/>
              </a>
              <a className="social" href="https://www.instagram.com/runvets/" target="_blank">
                <InstaLogo/>
              </a>
            </p>
          </div>
        </div>
        <Banner/>
        <div>
          {/*Old: 1*/}
          {/*New: 1bs6u9O5OpAl-i7CKzKQnBKGMm8Vw9Dw5lvConGT1mdU*/}
          <p>The Bird Family is proud to continue the tradition of the Veterans Marathon, a superb event honoring our
            nation’s Veterans and Local Heroes.</p>
          <p>Located in the heart of northeast Indiana, Columbia City is a small-town community with true Hoosier
            values. It’s a community rooted in its agricultural heritage, strengthened by its commercial and residential
            development, and proud of its hometown heroes.</p>
          <p>In honor of those servicemen and servicewomen throughout the nation, we present the 14th Annual Veterans
            Marathon, Half-Marathon and Heroes 5K on November 12, 2022. Located in Northeast Indiana. We can promise
            that flags will be waving at the start, a gently rolling countryside course, and a race experience you will
            always remember.</p>
          <p>The 2022 race will honor the Marine Corp for the 14th Annual race by featuring the branch on the finishers
            medal and race colors. 50% of race profits will be donated to our local AmVets #2919. The 5k will honor the
            Whitley County Sheriff's Department as our Heroes for 2022. 25% of the race profits will also be donated to
            them.</p>
          <p>Come experience the challenge and excitement of running the Marathon, Half-Marathon or 5K and do so in
            honor of America’s veterans and heroes.</p>
        </div>
        <Sponsors/>
        <Donors/>
      </div>
    );
  }
}

VeteransHome.propTypes = {
  enJson: PropTypes.object,
  marathonDate: PropTypes.string,
};

export default VeteransHome;
