// import React, {useState, useEffect} from 'react';
// import { HashLoader } from 'react-spinners';
// // from "react-spinners/HashLoader";
// import './App.css';
// import { About } from './components/About/about';
// import { TopHome } from './components/TopHome/TopHome';
// import { SideBar } from './components/SideBar/sideBar';
// import { Journey } from './components/Journey/Journey';
// import { Resume } from './components/Resume/Resume';
// import { Skills } from './components/Skills/Skills';
// import { Project } from './components/Projects/Project';
// import { Contact } from './components/Contact/Contact';

// function App() {
//   const[loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 7000);
//   }, [] )
//   return (
//     <>
//     <div className="App-home-page">
//       {
//         loading ?
//         <HashLoader
//         className='page-loader'
//         color={"#28e98c"}
//         loading={loading}
//         // cssOverride={override}
//         size={50}
//         // aria-label="Loading Spinner"
//         // data-testid="loader"
//       />

//        :
//        <>
//        <div className='res-sidebar'><SideBar /></div>
//        <div><About /></div>
//       <div className="main-content">
//         <div className='cls-tophome'><TopHome /> </div>
//         <div className='cls-'><Journey/></div>
//         <div className='cls-'><Project/></div>
//         <div className='cls-'><Resume/></div>
//         <div className='cls-'><Skills/></div>
//         <div className='cls-'><Contact/></div>
//       </div>
//       <div><SideBar /></div>
//      </>

//       }
//      </div> 
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import './App.css';
import { About } from './components/About/about';
import { TopHome } from './components/TopHome/TopHome';
import { SideBar } from './components/SideBar/sideBar';
import { Journey } from './components/Journey/Journey';
import { Resume } from './components/Resume/Resume';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import ReactGA from 'react-ga4';

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 7000);
  // }, []);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    ReactGA.send('pageview');
  }, []);

  return (
    <div className="App-home-page">
      {loading ? (
        <HashLoader className="page-loader" color={"#28e98c"} loading={loading} size={50} />
      ) : (
        <>
          <div className='res-sidebar'><SideBar /></div>
          <div><About /></div>
          <div className="main-content">
            <div className='cls-tophome'><TopHome /></div>
            {/* <div className='cls-'><Journey /></div> */}
            <div className='cls-'><Resume /></div>
            <div className='cls-'><Project /></div>
            <div className='cls-'><Skills /></div>
            <div className='cls-'><Contact /></div>
          </div>
          <div><SideBar /></div>
        </>
      )}
    </div>
  );
}

export default App;
