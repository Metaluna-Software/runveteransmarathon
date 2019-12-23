import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
    const {
        message
    } = props;
    return (
        <div className='section-wrapper'>
            <div className='section-content'>
                <div>{message}</div>
            </div>
        </div>
    );
};

Section.propTypes = {
    message: PropTypes.array.isRequired
};
export default Section;
