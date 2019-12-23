import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = (props) => {
    const {
        value,
        url
    } = props;
    return (
        <li>
            <a href={url}>{value}<i className="fa fa-external-link" aria-hidden="true"></i></a>
        </li>
    );
};

ExternalLink.propTypes = {
    value: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default ExternalLink;
