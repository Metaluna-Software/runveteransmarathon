import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/heading';
import SectionImage from "../components/sectionImage";

const Banner = (props) => {
    const {
        message
    } = props;

    return (
        <div className='banner-wrapper'>
            <SectionImage/>
        </div>
    );
};

Banner.propTypes = {
    message: PropTypes.string.isRequired
};

export default Banner;
