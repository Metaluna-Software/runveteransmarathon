import React from 'react';
import Heading from '../../components/heading';

class MemorialRaceDay extends React.Component {
  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Race Information'}/>
        {/*Old: 251*/}
        {/*New: 1nR6eDutfYbEtoLQQahmvIr8QtTJZ1wCciqSfY6t2BPc*/}
        <div>
          <h2>{'Information'}</h2>
          <p>Packet Pick Up will be available starting at 8:30 AM on race day at Running Around Screen Printing located
            at 227 West Van Buren Street Columbia City, IN 46725. This is a Chip Timed race timed by Erunner Timing.
            Each participant will receive a unisex district-made tank top. </p>
          <p><img src="../images/Memorial_Tank_2022.png" alt="memorial-tank" className="race-image"/></p>
          <p>The start of the 10K will be a few blocks west of packet pick-up located at the intersection of Van Buren
            Street and Elm Street. The Race will start promptly after the National Anthem is played at 10:10 AM.</p>
          <p>The course will be led by local police for the first mile to Morsches Park, once runners have turned left
            into the park they will be on an open course led by bikers. Reminder to stay alert and respect the rules of
            the road.</p>
          <p>Two Water stations will be placed at approximately 2 miles and 4 miles on the course. Water and Gatorade as
            well as other refreshments will be available post race near the finish line. The Kitchen, a local catering
            business, will once again supply all finishers with a sandwich option while waiting for the results.</p>
          <p>Parking will be available throughout Columbia City, we ask that participants refrain from parking along Van
            Buren Street (Start line/Parade Route) and Whitley Street South of Ellsworth St and Hanna St. (Finish
            Line). </p>
        </div>
        <div>
          <h2>{'Race price'}</h2>
          <table className="price-table">
            <thead>
            <tr>
              <th>Price change</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Registration Opens (January 1st)</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Price Increases:</td>
            </tr>
            <tr>
              <td>February 6th</td>
              <td>$35</td>
            </tr>
            <tr>
              <td>May 1st</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>Race Day (May 30th)</td>
              <td>$50</td>
            </tr>
            </tbody>
          </table>
        </div>
        {/*Old: 253*/}
        {/*New: 1nR6eDutfYbEtoLQQahmvIr8QtTJZ1wCciqSfY6t2BPc*/}
        <div>
          <h2>{'Awards'}</h2>
          <p>Awards will take place at 11:30 AM by the Fire Museum near the Finish Line.</p>
          <p>Awards will be presented to the Overall Male and Female and the Overall Masters Male and Female.</p>
          <p>Age Group Awards will be given to Top 3 in each age group:</p>
          <p>14-Under, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59, 60-64, 65+</p>
          <p>Results will be available shortly after the race is concluded at <a
            href="http://erunner.biz">erunner.biz</a></p>
        </div>
      </div>
    );
  }
}

export default MemorialRaceDay;
