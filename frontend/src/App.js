import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import { AuthProvider } from "../src/components/pages/Authcontext";
// import Footer from "./components/Footer";
import AcceptedCVs from "./components/SidePages/AcceptedCVs";
import JobCreate from "./components/SidePages/JobCreate";
import JobModify from "./components/SidePages/JobModify";
import ReceivedCVs from "./components/SidePages/ReceivedCVs";
import SignUp from "./components/pages/SignUp";
import UserJobStatus from "./components/usersidepages/UserJobStatus";
import UserJopApply from "./components/usersidepages/UserJopApply";
import UserVacancy from "./components/usersidepages/UserVacancy";
import JobUpdate from "./components/SidePages/JobUpdate";
import View from "./components/SidePages/View";
import UserJobView from "./components/usersidepages/UserJobView";
import ViewApplication from "./components/SidePages/ViewApplication";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div>
          <div className=" ">
            {/*to add same blue color when scrolling----- */}

            {/* <div className='content-containerr'><Navbar/></div> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
          
              <Route path="/signup" element={<SignUp />} />

              {/*ROUTE FOR ADMIN PAGES*/}
              <Route path="/create" element={<JobCreate />} />
              <Route path="/modification" element={<JobModify />} />
              <Route path="/accept" element={<AcceptedCVs />} />
              <Route path="/received" element={<ReceivedCVs />} />
              <Route
                path="/modification/jobupdate/:id"
                element={<JobUpdate />}
              />
              <Route
                path="/modification/view-job/:id"
                element={<View />}
              />
              <Route
                path="/received/view-application/:id"
                element={<ViewApplication/>}
              />

              {/*ROUTE FOR USER PAGES*/}
              <Route path="/uservacancy" element={<UserVacancy />} />
              <Route path="/apply" element={<UserJopApply />} />
              <Route path="/status" element={<UserJobStatus />} />
              <Route path="/user-job-view/:id" element={<UserJobView/>}/>
              
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

//----------------

// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/pages/About';
// import Home from './components/pages/Home';
// import Login from './components/pages/Login';
// import Vacancies from './components/pages/Vacancies';

// import Footer from './components/Footer';
// import AcceptedCVs from './components/SidePages/AcceptedCVs';
// import JobCreate from './components/SidePages/JobCreate';
// import JobModify from './components/SidePages/JobModify';
// import ReceivedCVs from './components/SidePages/ReceivedCVs';
// import SignUp from './components/pages/SignUp';
// import UserJobStatus from './components/usersidepages/UserJobStatus';
// import UserJopApply from './components/usersidepages/UserJopApply';
// import UserVacancy from './components/usersidepages/UserVacancy';
// function App() {
//   return (
//     <div className="App">
//       <div>
//       <div className=" ">
//          {/*to add same blue color when scrolling----- */}

//         {/* <div className='content-containerr'><Navbar/></div> */}
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path='/vacancies' element={<Vacancies/>} />
//           <Route path='/signup' element={<SignUp/>}/>

//           {/*ROUTE FOR ADMIN PAGES*/}
//           <Route path='/create' element={<JobCreate/>}/>
//           <Route path='/modi' element={<JobModify/>}/>
//           <Route path='/accept' element={<AcceptedCVs/>}/>
//           <Route path='/received' element={<ReceivedCVs/>}/>

//            {/*ROUTE FOR USER PAGES*/}
//            <Route path='/uservacancy' element={<UserVacancy/>}/>
//            <Route path='/apply' element={<UserJopApply/>}/>
//            <Route path='/status' element={<UserJobStatus/>}/>
//         </Routes>
//         <Footer/>
//       </div>
//       </div>

//     </div>
//   );
// }

// export default App;
