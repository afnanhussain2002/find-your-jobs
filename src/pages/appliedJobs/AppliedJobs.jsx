import { useEffect, useState } from "react";
import {
  getItemFromLS,
  removeItemFromLS,
} from "../../components/localstrorage";
import { useLoaderData } from "react-router-dom";
import ShowAppliedJobs from "./showAppliedJobs/ShowAppliedJobs";

const AppliedJobs = () => {
  const data = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      const stroedJobs = getItemFromLS();
      const savedJobs = [];
      for (const id of stroedJobs) {
        const jobs = data.filter((job) => job.id === id);

        if (jobs) {
          savedJobs.push(jobs);
        }
      }
      console.log(savedJobs);
      setAppliedJobs(savedJobs);
      setDisplayJobs(savedJobs)
    }
  }, [data]);
//    reove from ls
  const handleRemoveFromLS = (id) => {
   
    const afterRemoveItem = appliedJobs.filter(idx => idx === id)

    if (afterRemoveItem) {
        
        removeItemFromLS(id);
    }
    setAppliedJobs(afterRemoveItem)
    
    
  };

  const handleJobFilter = filter => {
    if (filter == 'all') {
        setDisplayJobs(appliedJobs)
    }else if(filter =='remote'){
        const remoteJobs = appliedJobs.filter(job => job[0].remote_or_onsite =='Remote')
        setDisplayJobs(remoteJobs)
    }else if ( filter == 'onsite') {
        const onsiteJob = appliedJobs.filter(job => job[0].remote_or_onsite =='Onsite')
        setDisplayJobs(onsiteJob)
    }
  }



  return (
    <>
  <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={() => handleJobFilter('all')}>All</a></li>
    <li><a onClick={() => handleJobFilter('remote')}>Remote</a></li>
    <li><a onClick={() => handleJobFilter('onsite')}>Onsite</a></li>
    
  </ul>
</div>
    <div>
        
      {displayJobs.map((appliedJob, idx) => (
        <ShowAppliedJobs
          key={idx}
          appliedJob={appliedJob}
          handleRemoveFromLS={handleRemoveFromLS}
        ></ShowAppliedJobs>
      ))}
    </div>
    
    </>
  );
};

export default AppliedJobs;
