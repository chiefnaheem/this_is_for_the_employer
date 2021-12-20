import { useRef } from 'react';

// import Card from '../Interface/Card';
// import classes from './NewJob.module.css';

function NewJobForm(props) {
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

    const jobData = {
      type: enteredType,
      howToApply: enteredUrl,
      company: enteredCompany,
      companyUrl : enteredCompanyUrl,
      location : enteredLocation,
      position: enteredPosition,
      description: enteredDescription,
      languageCategory : enteredLanguage
    };

    props.onAddJob(jobData);
  }

  return (
  //   <div className={classes.dec}>
  //     <form className={classes.form} onSubmit={submitHandler}>
  //       <div className={classes.control}>
  //         <label htmlFor='title'>Job Type</label>
  //         <input type='text' required id='type' ref={typeInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='image'>Job Url</label>
  //         <input type='url' required id='url' ref={urlInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='address'>Company</label>
  //         <input type='text' required id='company' ref={companyInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='address'>Company Url</label>
  //         <input type='url' required id='company' ref={companyUrlInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='address'>Location</label>
  //         <input type='text' required id='location' ref={locationInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='address'>Job Position</label>
  //         <input type='text' required id='position' ref={positionInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='address'>Language Category</label>
  //         <input type='text' required id='position' ref={languageInputRef} />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='description'>Description</label>
  //         <textarea
  //           id='description'
  //           required
  //           rows='5'
  //           ref={descriptionInputRef}
  //         ></textarea>
  //       </div>
  //       <div className={classes.actions}>
  //       <input type="submit" value="ADD JOB" />
  //       </div>
  //     </form>
  //   </div>
  // );
  <form class="row g-3" onSubmit={submitHandler}>
    <div class="col-md-6">
      <label htmlFor='position' class="form-label">Job Position</label>
      <input type='text' required id='position' class="form-control" ref={positionInputRef} />
    </div>
    <div class="col-md-6">
      <label htmlFor='type' class="form-label">Job Type</label>
      <select id="type" required class="form-select"  ref={typeInputRef}>
        <option value='0' selected>Choose...</option>
        <option value = 'full-time'>full-Time</option>
        <option value ='part-time'>part-Time</option>
        <option value='contract'>contract</option>
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
      <label htmlFor='company'>Company</label>
      <input type='text' required id='company' ref={companyInputRef} />
    </div>
    <div class="col-md-6">
      <label htmlFor="language" class="form-label">Language Category</label>
      <input type='text' required id='language' class="form-control" ref={languageInputRef} />
    </div>
    <div class="col-md-4">
      <label htmlFor="location" class="form-label">Location</label>
      <select id="location" class="form-select" ref={locationInputRef}>
        <option value='0' selected>Choose...</option>
        <option value = 'Lagos'>Lagos</option>
        <option value ='Abuja'>Abuja</option>
        <option value='Jos'>Jos</option>
        <option value='Remote'>Remote</option>
      </select>
    </div>
    <div class="col-12">
      <label htmlFor='description'>Description</label>
        <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-success">ADD JOB</button>
    </div>
  </form>
  )
}

export default NewJobForm;