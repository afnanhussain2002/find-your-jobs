
import { useLoaderData, useParams } from "react-router-dom";
import { addItemToLS } from "../../components/localstrorage";



// job_details
const JobDetails = () => {
  const data = useLoaderData();
  const params = useParams();
  const filterJob = data.find(
    (singleData) => singleData.id == params.detailsId
  );
  
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information
  } = filterJob;

  const handleAddItem = id => addItemToLS(id)

  

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

      <div className="mt-10 flex gap-10">
        <div className="flex flex-col text-left flex-1">
        <p>Job Description: {job_description} </p><br />
         <p>Job Responsibility: {job_responsibility}</p><br />
         <p>Educational Requirements: {educational_requirements}</p><br />
         <p>Experiences: {experiences}</p>
        </div>
        <div className="bg-gray-100 p-5 text-left">
             <p className="font-bold">Job Details</p><br />
             <hr />
             <p><span className="font-bold">Salary: {salary}</span></p><br />
             <p><span className="font-bold">Job Title: {job_title}</span></p><br />
             <p className="font-bold">Contact Information</p><br />
             <hr />
             <p><span className="font-bold">Phone: {contact_information.phone}</span></p><br />
             <p><span className="font-bold">Email: {contact_information.email}</span></p><br />
             <p><span className="font-bold">Address: {location}</span></p><br />
             <button onClick={()=> handleAddItem (id)} className="btn">Apply Now</button>
        </div>
      </div>
      <div>
     
      </div>
    </>
  );
};

export default JobDetails;
