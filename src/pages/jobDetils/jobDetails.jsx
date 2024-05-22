
import { useLoaderData, useParams } from "react-router-dom";
import backgroundImage from '../../assets/images/bg1.png'

// job_details
const JobDetails = () => {
  const data = useLoaderData();
  const params = useParams();
  const filterJob = data.find(
    (singleData) => singleData.id == params.detailsId
  );
  console.log(filterJob);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = filterJob;

  return (
    <>
      <div
        className="hero min-h-[400px] bg-sky-500"
      >
        
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
      
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
