
// import classes from './Jobs.module.css';

function Jobs({job, displayJob}) {
  
  return (

    <li >
      <div className="card" style={{width: '20rem', height:'15rem', display:'inline-block', position:'relative', marginRight:''}}>
        <div className="card-body col-md-12 text-center">
              <div className="d-flex justify-content-between align-items-center">
                <p className="small text-secondary"><i className="fa fa-clock-o"></i> Posted On: <b> {job.createdAt.substring(0, 10).split('-').reverse().join('/')} </b></p>
                <p className={`badge badge-${job.type === "Full Time" ? "success" : job.type === "Contract" ? "info" : "warning"}`}>{job.type}</p>
              </div>
              <h5 className="font-weight-bold">{job.position}</h5>
              <p className="text-dark font-weight-bold small">
              <span><i className="fa fa-building-o"></i> {job.company}</span>{" "}
              | <span><i className="fa fa-map-marker"></i> {job.location}</span>
              </p>
              <div onClick={() => displayJob(job.id)} style={{position:'absolute', right:'12px', bottom: '10px'}}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#jobsModal">
                See Details
                </button>
            </div>
        </div>
      </div>
    </li>
  );
}

export default Jobs;