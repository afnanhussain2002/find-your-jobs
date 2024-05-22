

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getItemFromLS } from '../../components/localstrorage';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const data = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])

  useEffect(()=>{
     if (data.length > 0) {
        const stroedJobs = getItemFromLS()
        const savedJobs = []
        for( const id of stroedJobs){
           const jobs = data.filter( job => job.id === id)

           if (jobs) {
            savedJobs.push(jobs)
           }
        }
        console.log(savedJobs);
        setAppliedJobs(savedJobs)
     }
  },[data])
    
    return (
        <div>
            
        </div>
    );
};

AppliedJobs.propTypes = {
   
};

export default AppliedJobs;