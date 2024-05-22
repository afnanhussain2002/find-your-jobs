import { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import Job from "../job/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10">
      <Title
        title={"Featured Jobs"}
        description={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid grid-cols-2 justify-between items-center">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength == jobs.length && 'hidden'}>
      <button onClick={() => setDataLength(jobs.length)} className="btn text-center">Show All</button>

      </div>
    </div>
  );
};

export default FeaturedJobs;
