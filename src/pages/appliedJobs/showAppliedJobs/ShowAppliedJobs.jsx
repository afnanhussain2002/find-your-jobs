
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ShowAppliedJobs = ({appliedJob, handleRemoveFromLS}) => {
    console.log(appliedJob[0]);

    
    
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary,id  } = appliedJob[0]
    return (
        <>
            <div className='text-left'>
            <img className='w-32' src={logo} alt={company_name} />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div className='flex gap-1'>
                <p className='text-sky-500 border border-sky-500 p-2'>{remote_or_onsite}</p>
                <p className='text-sky-500 border border-sky-500 p-2'>{job_type}</p>
            </div>
            <div className='flex'>
                <p>{location}</p>
                <p> Salary: {salary}</p>
            </div>
            <Link to={`/${id}`}><button className='btn bg-sky-500 text-white'>View Details</button>  </Link>
            <button onClick={()=> handleRemoveFromLS(id)} className='btn'>Remove</button>
        </div>
    
        </>
    );
};

ShowAppliedJobs.propTypes = {
    appliedJob: PropTypes.array,
};

export default ShowAppliedJobs;