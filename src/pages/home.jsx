import React from 'react';
import Banner from '../navigation/banner';
import Section from '../components/section';

const Home = (props) => {
  const {
    enJson
  } = props;
  return (
    <div>
      <Banner
        message={enJson.homeBanner}
      />
      <Section
        message={enJson.homeWelcome}
      />
    </div>
  )
};

export default Home;
