import ProfileJobs from './ProfileJobs';
import classes from './JobList.module.css';

function ProfileJobList({ jobs, displayJob }) {
  return (
    <ul className={classes.list}>
      
      {jobs.map((item) => (
        <ProfileJobs key={item.id} job={item} displayJob={displayJob}/>
      ))}
    </ul>
  );
}

export default ProfileJobList;