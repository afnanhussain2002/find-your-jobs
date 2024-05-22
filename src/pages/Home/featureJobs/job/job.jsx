
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary,id  } = job
    return (
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
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
};

export default Job;