import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, description}) => {
    return (
        <div className="text-center">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className='mt-3'>{description}</p>

           </div>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Title;