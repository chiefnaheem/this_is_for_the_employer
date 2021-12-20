import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import JobContext from '../../profile/profile-context';

function MainNavigation() {
  const jobsCtx = useContext(JobContext);

  return (
    <header className={classes.header} >
      <div className={classes.logo}><Link to='/'>Job<span>Finder</span></Link></div>
      <nav>
        <ul className={classes.nav}>
          <li >
              <Link to='/'></Link>
          </li>
          <li >
            <Link to='/jobs'><button className="btn btn-success" style={{fontSize:"0.8rem"}}>JOBS</button></Link>
          </li>
          <li>
            <Link to='/add-job'><button className="btn btn-success" style={{fontSize:"0.8rem"}}>ADD NEW JOB</button></Link>
          </li>
          <li>
            <Link to='/profile'>
              <button className="btn btn-success" style={{fontSize:"0.8rem"}}>MY PROFILE</button>
              <span className={classes.badge}>
                {jobsCtx.totalJobs}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;