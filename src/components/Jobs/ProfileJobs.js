
import { useContext } from 'react';
import Card from '../Interface/Card';
import classes from './Jobs.module.css';
import JobContext from '../../profile/profile-context';

function ProfileJobs({ job, displayJob }) {
  
  const jobsCtx = useContext(JobContext);
  
  const deleteHandler = jobsCtx.removeJobs
  

     function deleteJobHandler (job) {
       let id = deleteHandler(job._id)
       return id
    }

  return (
    <li className={classes.item}>
      <Card>
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <p className="small text-secondary"><i className="fa fa-clock-o"></i> Posted On: <b> {job.createdAt.substring(0, 10).split('-').reverse().join('/')}</b></p>
              <p className={`badge badge-${job.type === "Full Time" ? "success" : job.type === "Contract" ? "info" : "warning"}`}>{job.type}</p>
            </div>
            <h5 className="font-weight-bold">{job.title}</h5>
            <p className="text-dark font-weight-bold small">
            <span><i className="fa fa-building-o"></i> {job.company}</span>{" "}
            | <span><i className="fa fa-map-marker"></i> {job.location}</span>
            </p>
            <div onClick={() => deleteJobHandler(job)} >
              <button className='btn btn-success' style={{float:'left'}} type="submit">DELETE</button>
            </div>
            {/* <div onClick={() => displayJob(job._id)} > */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">UPDATE</button>
            {/* </div> */}


        </div>
      </Card>
    </li>
  );
}

export default ProfileJobs;