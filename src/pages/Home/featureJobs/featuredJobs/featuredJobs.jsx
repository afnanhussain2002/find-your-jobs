import { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import Job from "../job/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
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
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
