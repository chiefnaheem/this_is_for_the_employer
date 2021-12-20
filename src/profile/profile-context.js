/* eslint-disable no-undef */
import { createContext, useState, useEffect } from 'react';

const JobContext = createContext({
  myJobs: [],
  totalJobs: 0,
  updateJobs: (jobToAdd) => {},
  removeJobs:(e, id) => {}
  // itemIsMarked: (id) => {}
});

export function JobContextProvider(props) {
  const [jobs, setUserJobs] = useState([]);

  

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWJiNjVlYTRkNjE0NjFlMDQ3M2ZmM2YiLCJmdWxsbmFtZSI6Ikdvb2dsZSBOaWdlcmlhIiwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNjM5ODE3ODA0LCJleHAiOjE2NDI0MDk4MDR9.su3bmtOlfTAtMLwqq21b3I6lRdSOrCZnIjHEc1s0RT0'
  
  //DELETE JOBS
  const removeJobsHandler = async(id) =>{
    console.log('z')
    // console.log(e)
    console.log(id)
    try {
      // e.preventDefault()
      console.log(id)
        const res = await fetch (`https://job-finder-api-group4.herokuapp.com/api/v1/jobs/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization' : `Bearer ${token}`         
            },
          })
          // setUserJobs(userJobs.filter((job) => job.id !== id))
        const data = res.json()
        console.log(data)
        alert(`This job has been deleted!`)
        setUserJobs(await fetchJobs())
        // return setUserJobs    
    }
    catch(err) {
      return (`an error ${err.message} occurred`)
    }
  
  }

  
  // GET ALL JOBS
  const fetchJobs = async () => {
    try {
      const res = await fetch('https://job-finder-api-group4.herokuapp.com/api/v1/jobs/all', {
        headers: {
          'Content-Type': 'application/json',
          // 'x-auth-token': token,
          'Authorization' : `Bearer ${token}`         
        },
      })
      const data = await res.json()
      const dataLog = {data}.data.jobs
      return dataLog;
      
    }
    catch(err){
      return `${err.message}`
    }


  }
  useEffect (() => {
    const getJobsHandler = async () => {
      const jobsFromServer = await fetchJobs()
      
      const jobs = [];
      for (const key in jobsFromServer) {
        const job = {
          id: key,
          ...jobsFromServer[key]
        };

        jobs.push(job);
      }
      console.log(jobs)
      setUserJobs(jobs)
    } 
    getJobsHandler()
  }, []);

  //UPDATE JOBS
  const fetchJob = async (e, id) => {
    e.preventDefault()
    const res = await fetch(`https://job-finder-api-group4.herokuapp.com/api/v1/jobs/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`         
      },
    })
    const data = await res.json()
    return data
            
  }
        
  const updateJobsHandler = async(updatedJob, id) => {
    // e.preventDefault()
    try {
        const jobToUpdate = await fetchJob(id)
        setUserJobs(jobToUpdate)
        const res = await fetch (`https://job-finder-api-group4.herokuapp.com/api/v1/jobs/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type' : 'applications/json',
              'Authorization' : `Bearer ${token}`         
            },
            body: JSON.stringify(updatedJob),
        })
        const data = await res.json()
        console.log(data)
        setUserJobs(data) 
        alert(`This job, ${jobs.position} has been updated`)
    }
    catch(err) {
      return `${err.message}`
    }
    
  }
  

  const context = {
    myJobs: jobs,
    totalJobs: jobs.length,
    updateJobs: updateJobsHandler,
    removeJobs: removeJobsHandler
    // itemIsMarked: itemIsMarkedHandler
  };

  return (
    <JobContext.Provider value={context}>
      {props.children}
    </JobContext.Provider>
  );
}

export default JobContext;