// import React from 'react'
// import UpdateJobForm from './UpdateJobForm'
// import { useState } from 'react'

// const ManipulateJob = () => {
    
//     const [userJobs, setUserJobs] = useState([])
//       // const [ tasks, setTasks ] = useState([])
    
    
//     const fetchJob = async (id) => {
//         const res = await fetch(`https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json/${id}`)
//         const data = await res.json()
//         return data
        
//     }
    
//     //UPDATE JOBS
    

//     return (
//         <section>
//             <h1 style={{textAlign:"center", fontFamily:"Open Sans, sans serif", color: 'brown', fontSize:'1.6rem', marginBottom: "2rem"}}>UPDATE JOB</h1>
//             <UpdateJobForm onUpdateJob={updateJobsHandler} />
//        </section>
//     )
// }

// export default ManipulateJob
// // const data = await res.json()
// //         setUserJobs(userJobs.map((job) => job.id === id ? {...job, data} : job))
// // const updatedTask = {...jobToUpdate, reminder: !taskToToggle.reminder}
