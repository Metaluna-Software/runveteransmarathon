import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
    const {
        value,
        url
    } = props;
    return (
        <li>
            <a href={url}>{value}</a>
        </li>
    );
};

Link.propTypes = {
    value: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Link;
