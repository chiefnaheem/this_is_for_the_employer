import { useRef, useContext } from 'react';
import JobContext from './profile-context'
// import Card from '../Interface/Card';
// import classes from './UpdateJobForm.module.css';
// import ManipulateJob from './ManipulateJob'

function UpdateJobForm(props) {
  const typeInputRef = useRef();
  const urlInputRef = useRef();
  const companyInputRef = useRef();
  const companyUrlInputRef = useRef()
  const locationInputRef = useRef()
  const positionInputRef = useRef()
  const descriptionInputRef = useRef();
  const languageInputRef = useRef()
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredType = typeInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredCompanyUrl = companyUrlInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredPosition = positionInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLanguage = languageInputRef.current.value;
    

    const updatedJob = {
      type: enteredType,
      howToApply: enteredUrl,
      company: enteredCompany,
      companyUrl : enteredCompanyUrl,
      location : enteredLocation,
      position: enteredPosition,
      description: enteredDescription,
      languageCategory : enteredLanguage
    };

    props.onUpdateJob(updatedJob);

  }
  const jobsCtx = useContext(JobContext);
  const updates = jobsCtx.updateJobs
    function updateHandler (job) {
      let id = updates(job._id)
       return id;
    }

  return (
    <div className="modal fade" id="updateModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">UPDATE YOUR JOB</div>
          <div className="modal-body">
            <form class="row g-3" onSubmit={submitHandler}>
              <div class="col-md-6">
              <label htmlFor='type' class="form-label">Job Type</label>
              <input type='text' required id='type' class="form-control" ref={typeInputRef} />
              </div>
              <div class="col-md-6">
              <label htmlFor='position' class="form-label">Job Position</label>
              <select id="position" required class="form-select" ref={positionInputRef}>
                  <option value='0' selected>Choose...</option>
                  <option value = '1'>Full-Time</option>
                  <option value ='2'>Part-Time</option>
                  <option value='3'>Contract</option>
              </select>
              </div>
              <div class="col-12">
              <label htmlFor="url" class= "form-label">Company Url</label>
              <input type='url' required id='url' class="form-control" placeholder="https://decagon.info" ref={companyUrlInputRef}/>
              </div>
              <div class="col-12">
              <label htmlFor="jobUrl" class="form-label">Job Url</label>
              <input type='url' required id='jobUrl' class="form-control" placeholder="https://decagon.com" ref={urlInputRef}/>
              </div>
              <div class="col-md-6">
              <label htmlFor="language" class="form-label">Language Category</label>
              <input type='text' required id='language' class="form-control" ref={languageInputRef} />
              </div>
              <div class="col-md-4">
              <label htmlFor="location" class="form-label">Location</label>
              <select id="location" class="form-select" ref={locationInputRef}>
                  <option value='0' selected>Choose...</option>
                  <option value = '1'>Lagos</option>
                  <option value ='2'>Abuja</option>
                  <option value='3'>Jos</option>
                  <option value='3'>Remote</option>
              </select>
              </div>
              <div class="col-12">
              <label htmlFor='description'>Description</label>
                  <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
              </div>
              <div onClick={() => updateHandler(props.job)} style={{marginLeft:'4rem'}}>
                <button className='btn btn-success'type="submit" > UPDATE</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default UpdateJobForm;