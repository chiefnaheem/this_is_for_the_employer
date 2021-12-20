import Jobs from './Jobs';
import classes from './JobList.module.css';

function JobList({ jobs, displayJob }) {
  return (
    <ul className={classes.list}>
      
      {jobs.map((item) => (
        <Jobs key={item.id} job={item} displayJob={displayJob} />
      ))}
    </ul>
  );
}

export default JobList;