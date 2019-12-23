import React from 'react';
import PropTypes from 'prop-types';

const SectionImage = (props) => {
    const {
        message
    } = props;
    return (
        <div className='section-image-wrapper'>
            <div className='section-content'>
                <div>{message}</div>
            </div>
        </div>
    );
};

SectionImage.propTypes = {
    message: PropTypes.string
};
export default SectionImage;
