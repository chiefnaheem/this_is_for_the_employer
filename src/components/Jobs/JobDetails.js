/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
// import DOMPurify from "dompurify";

const JobDetails = ({ job }) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!(typeof job === "undefined" || Object.keys(job).length === 0)) {
      setFirstRender(false);
    }
  }, [job]);

  if (typeof job === "undefined" || Object.keys(job).length === 0) {
    return (
      <div className="col-lg-8 bg-light border" id="job-details">
        <div className="p-4">
          <p className="text-secondary text-center pt-5 font-weight-bold">
            {firstRender ? (
              <i class="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            ) : (
              "Sorry, There is no such job that you are looking for!"
            )}
          </p>
        </div>
      </div>
    );
  }

  // return (
  //   <div className="col-lg-8 bg-light border" id="job-details">
  //     <div className="p-4">
  //       <div className="row">
  //         <div className="col-lg-7">
  //           <p className="text-secondary small">
  //             <i className="fa fa-clock-o" /> Job Posted On: <b>{job.createdAt.substring(0, 10).split('-').reverse().join('/')}</b>
  //           </p>
  //         </div>
  //         <div className="col-lg-5">
  //           <p className="text-right">
  //             <span
  //               className={`badge badge-${
  //                 job.type === "Full Time"
  //                   ? "success"
  //                   : job.type === "Contract"
  //                   ? "info"
  //                   : "warning"
  //               }`}
  //             >
  //               {job.type}
  //             </span>
  //           </p>
  //         </div>
  //       </div>
  //       <h1 className="font-weight-bold mb-3">{job.position}</h1>
  //       <p className="text-primary font-weight-bold">
  //         <span>
  //           <i className="fa fa-building-o" /> {job.company}
  //         </span>{" "}
  //         |{" "}
  //         <span>
  //           <i className="fa fa-map-marker" /> {job.location}
  //         </span>
  //       </p>
  //       <p>
  //         <a href={job.companyUrl} className="btn btn-outline-dark btn-sm">
  //           Visit Company's Website <i className="fa fa-link" />
  //         </a>
  //       </p>
  //       <hr />
  //       <div
  //         className="job-content"
  //         dangerouslySetInnerHTML={{
  //           __html: DOMPurify.sanitize(job.description)
  //         }}
  //       />
  //       {/* <div className="py-3">
  //         <div className="card">
  //           <div className="card-header font-weight-bold">How To Apply ?</div>
  //           <div
  //             className="card-body"
  //             dangerouslySetInnerHTML={{
  //               __html: DOMPurify.sanitize(job.how_to_apply)
  //             }}
  //           />
  //         </div>
  //       </div> */}
  //     </div>
  //   </div>
  // );
  return (
    <div className="modal fade" id="jobsModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{job.company}</h5>
            <b>{job.location}</b>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Job Posted On: <b>{job.createdAt.substring(0, 10).split('-').reverse().join('/')}</b></p>
            <h5>{job.position}</h5>
            <div className="col-lg-5">
             <p className="text-right">
              <span className={`badge badge-${job.type === "Full Time" ? "success" : job.type === "Contract" ? "info" : "warning"}`}> {job.type} </span>
             </p>
          </div>
            <p>Click <button className='btn btn-outline-
            dark btn-sm'><a href= {job.companyUrl} ></a></button> to visit the company's Website</p>
            <h5>Job's Description</h5>
            <p>{job.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

//     <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
  )
};

export default JobDetails;