import React from 'react';
import PropTypes from 'prop-types';
import MemorialBanner from '../../navigation/memorialbanner';
import FbLogo from '../../components/fbLogo';
import InstaLogo from '../../components/instaLogo';

class MemorialHome extends React.Component {
  render() {
    return (
      <div className="section-wrapper">
        <h2 className={'home-title'}>Memorial Day 10k</h2>
        <p className={'home-title-date'}>{this.props.enJson.memRaceDate}
          <a className="social" href={this.props.enJson.memRaceFbEvent} target="_blank">
            <FbLogo/>
          </a>
          <a className="social" href="https://www.instagram.com/runvets/" target="_blank">
            <InstaLogo/>
          </a>
        </p>
        <p className={'home-title-date'}>
          <a href="https://www.facebook.com/EpicRacingEvents/">
            <img src="../images/epic-logo.png" alt="epic-logo" className="race-image"/>
          </a>
        </p>
        <MemorialBanner/>
        <div>
          {/*Old: 249*/}
          {/*New: 1MnYYPUD6Hrr0sF1E5Ox9Dlc2zAd7R89RJGtprgvpzVU*/}
          <p>Come join Columbia City in remembering those servicemen and women who gave the ultimate sacrifice by
            leading the Memorial Day Parade through downtown Columbia City on May 30th 2022. The start of the race will
            follow the parade route East on Van Buren Street for the first 3/4 of a mile before continuing on its own
            and finishing at the Fire Museum located on South Whitley street approximately a half mile from the start
            line.</p>
          <p>Part of the 2022 Epic Racing Series, click the logo in the right-hand corner for more information and a
            list of the series races.</p>
          <p>Packet pickup will be Monday morning at Running Around Screen Printing (227 West Van Buren Street Columbia
            City, IN 46725) starting at 8:30 AM till Race time at 10:10 AM. Once the race has started everything will
            shift to the finish line at the Fire Museum. Awards will start at 11:30 AM at the Fire Museum.</p>
        </div>
      </div>
    );
  }
}

MemorialHome.propTypes = {
  enJson: PropTypes.object,
  memRaceDate: PropTypes.string,
  memRaceFbEvent: PropTypes.string,
};

export default MemorialHome;
