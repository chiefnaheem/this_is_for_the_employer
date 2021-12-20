import { useContext } from 'react';
import { Link } from 'react-router-dom';
import JobContext from '../profile/profile-context';
import ProfileJobList from '../components/Jobs/ProfileJobList';


function ProfilePage() {
  
  const jobsCtx = useContext(JobContext);
  // const deleteHandler = jobsCtx.removeJobs;
  // const updateJobsHandler =jobsCtx.updateJobs

  let content;

  if (jobsCtx.totalJobs === 0) {
    content = <div>
       <p>You got no jobs yet. Start adding some?</p>
    <Link to='/add-job'><button className='btn btn-success'>ADD JOBS</button></Link>
    </div>
  } else {
    content= <ProfileJobList jobs ={jobsCtx.myJobs} />
  }

  return (
    <section>
      <h1>Jobs Uploaded</h1>
        {content}
    </section>
  );
}

export default ProfilePage;