import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
    const {
        id,
        message
    } = props;

    return (
        <div className='heading-wrapper text-white' id={id}>
            <h3>{message}</h3>
        </div>
    );
};

Heading.propTypes = {
    id: PropTypes.string,
    message: PropTypes.string.isRequired
};

export default Heading;
