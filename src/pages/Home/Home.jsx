import React from 'react';
import PropTypes from 'prop-types';
import HomeBanner from './homeBanner/HomeBanner';
import JobCategory from './jobCategoryList/JobCategory';
import FeaturedJobs from './featureJobs/featuredJobs/featuredJobs';

const Home = props => {
    return (
        <div>
            <HomeBanner/>
            <JobCategory/>
            <FeaturedJobs/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;