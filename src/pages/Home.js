import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.module.css'
import Contact from './Contact'
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <>
      {/* Hero */}
      <div className="container-fluid" style={{backgroundImage: "url('https://iages.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')", backgroundSize:"cover"}}>
        <div className="row">
            <div className={classes.welcome}>
                <h1 className={classes.guest}>Welcome, <span>Our Guest!</span></h1>
                <p><em>Please <Link to = '/sign-in' style={{textDecoration:'none'}}>Log In</Link> To Access Your Jobs</em></p>
            </div>
          <div className="col-md-6" id="hero-bg" style={{background: 'no-repeat center', 'backgroundSize':'cover'}}/>
          <div className="col-md-6 bg-white" id="hero-content" style={{"paddingTop": "160px", "paddingBottom": "160px"}}>
            
            <h1 className="text-uppercase font-weight-bold" style={{"paddingLeft": "40px", width: "400px", fontFamily:'Open sans, sans serif', lineHeight:1.8 }}>
              Find Your Dream <span className="text-primary">Job</span> With
              Comfort
            </h1>
          </div>
        </div>
      </div>
      {/* Hero */}
      {/* category */}
      <div className="bg-light py-5 border-top">
        <div className="container py-4">
          <h3 className="font-weight-bold text-capitalize text-center">
            Find Jobs By Category
          </h3>
          <p className="text-secondary text-center">
            <i>By clicking on any of these, you see the logs of vacant opportunities available for you</i>
          </p>
          <div className="row pt-3">
            {/* col start */}
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                {/* <Link to = '/sign-in' style={{textDecoration:'none'}}></Link> */}
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-pie-chart fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Javascript Developer
                  </p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-tasks fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Java Developer
                  </p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-dashcube fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">React Developer</p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-shirtsinbulk fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Python Developer
                  </p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-newspaper-o fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Software Tester</p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-steam fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    iOS Developer
                  </p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-deviantart fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Android Developer</p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-slideshare fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">.Net Developer</p>
                  <p className="small text-secondary">25 Openings</p>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
        </div>
      </div>
      {/* category */}
      {/* Mobile App */}
      <div className="py-5 bg-white border-top">
        {/* <div className="container"> */}
          {/* <h3 className="font-weight-bold text-capitalize text-center mb-4">
            Get Job Finder App For Your Mobile
          </h3>
          <p className="text-secondary text-center w-75 m-auto">
            Searching for jobs have never been that easy. Now you can find job
            matched your career expectation, apply for jobs &amp; receive
            feedbacks right on your mobile. Start your job search now!
          </p>
          <br />
          <p className="text-center">
            <button className="btn btn-primary btn-lg rounded-0">
              <i className="fa fa-android" /> Google Play
            </button>
            <button className="btn btn-primary btn-lg rounded-0 mx-2">
              <i className="fa fa-apple" /> App Store
            </button>
            <button className="btn btn-primary btn-lg rounded-0">
              <i className="fa fa-windows" /> Microsoft Store
            </button>
          </p> */}
          <Contact/>
        {/* </div> */}
      </div>
      {/* Mobile App */}
    </>
  );
};
export default Home;