import { useNavigate } from 'react-router-dom';

import NewJobForm from '../components/Jobs/NewJobForm';

function NewJobPage() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWJiNjVlYTRkNjE0NjFlMDQ3M2ZmM2YiLCJmdWxsbmFtZSI6Ikdvb2dsZSBOaWdlcmlhIiwicm9sZSI6ImVtcGxveWVyIiwiaWF0IjoxNjM5ODE3ODA0LCJleHAiOjE2NDI0MDk4MDR9.su3bmtOlfTAtMLwqq21b3I6lRdSOrCZnIjHEc1s0RT0'
  const navigate = useNavigate();

  function addJobHandler(jobData) {
    console.log(jobData)
    fetch(
      'https://job-finder-api-group4.herokuapp.com/api/v1/jobs',
      {
        method: 'POST',
        body: JSON.stringify(jobData),
        headers: {
          'Content-Type': 'application/json',
          // 'x-auth-token': token,
          'Authorization' : `Bearer ${token}`         
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1 style={{"text-align":"center", fontFamily:"Open Sans, sans serif", color: 'brown', fontSize:'1.6rem', marginBottom: "2rem"}}>ADD NEW JOB</h1>
      <NewJobForm onAddJob={addJobHandler} />
    </section>
  );
}

export default NewJobPage;