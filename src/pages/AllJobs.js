import { useState, useEffect } from 'react';

import JobList from '../components/Jobs/JobList';
import FilterBar from './FilterBar';
import JobDetails from '../components/Jobs/JobDetails';


function AllJobs(props) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWJiNjVlYTRkNjE0NjFlMDQ3M2ZmM2YiLCJmdWxsbmFtZSI6Ikdvb2dsZSBOaWdlcmlhIiwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNjM5ODE3ODA0LCJleHAiOjE2NDI0MDk4MDR9.su3bmtOlfTAtMLwqq21b3I6lRdSOrCZnIjHEc1s0RT0'
  const [singleJob, setSingleJob] = useState({});
  const [sidebarJobs, setSidebarJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAllJobs() {
    try {
      setIsLoading(true);
      let res = await fetch("https://job-finder-api-group4.herokuapp.com/api/v1/jobs/all", {
        headers: {
          'Authorization' : `Bearer ${token}`         
        },
      });
      const data = await res.json();
      const dataLog = {data}.data.jobs
      console.log(dataLog)
      const jobs = [];
      for (const key in dataLog) {
          const job = {
            id: key,
            ...dataLog[key]
          };
  
          jobs.push(job);
      }
      
      setJobs(jobs);
      setSidebarJobs(jobs);
      setIsLoading(false);
    }
    catch(err) {
      // throw new Error('please check your internet connection') 
      return `there is an ${err} in your connection`
    }
    
  }
  // set single jobs after every change in sidebar jobs
  useEffect(() => {
    setSingleJob(sidebarJobs[0]);
  }, [sidebarJobs]);

  useEffect(() => {
    // set the initial sep i.e. fetch the db.json & set the Jobs array
    // and one first item of job to displayJob object
    fetchAllJobs()
  }, []);

  const displayJob = (id) => {
    console.log(id)
    let obj = {};
    sidebarJobs.forEach(item => {
      if (item.id === id) {
        obj = { ...item };
      }
    });
    setSingleJob(obj);
  };

  const filterOutput = (a, b) => {
    let newArray;
    switch (a) {
      case "1":
        newArray = jobs.filter(item => item.type === "full-time");
        break;
      case "2":
        newArray = jobs.filter(item => item.type === "contract");
        break;
      case "3":
        newArray = jobs.filter(item => item.type === "part-time");
        break;
      default:
        newArray = [...jobs];
    }
    // Make all the changes in a new array and setSidebarJobs equal to that array.
    switch (b) {
      case "1":
        newArray = newArray.filter(item => item.location === "Lagos");
        break;
      case "2":
        newArray = newArray.filter(item => item.location === "Abuja");
        break;
      case "3":
        newArray = newArray.filter(item => item.location === "Jos");
        break;
      case "4":
        newArray = newArray.filter(item => item.location === "Remote");
        break;
      default:
        newArray = [...jobs]
    }

    setSidebarJobs(newArray);
  };


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (  
    <div id="parent">
        <div className="container py-5">
            <h2 className="text-primary mb-4" style={{textAlign: "center", marginTop:"0"}}>Current Open Positions:</h2>
            <div className="row">
                <FilterBar filterOutput={filterOutput} />
           </div>
            <div className="container">
                <JobList jobs={sidebarJobs} displayJob={displayJob} />
                <JobDetails job={singleJob} />
            </div>
        </div>
    </div> 
  )  
}

export default AllJobs;

