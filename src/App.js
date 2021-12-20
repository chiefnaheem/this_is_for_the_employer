import { Route, Routes } from 'react-router-dom';

import AllJobs from './pages/AllJobs';
import Profiles from './pages/Profiles';
import Layout from './components/Layout/Layout';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import NewJob from './pages/NewJob'

// import UpdateJobForm from './profile/UpdateJobForm';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<AllJobs /> } />
          <Route path='/add-job' element={<NewJob />} />
          <Route path='/profile' element={<Profiles />} />
          {/* <Route path='/update' element={<UpdateJobForm/>} /> */}
          
        </Routes>
      </Layout>

  );
}

export default App;