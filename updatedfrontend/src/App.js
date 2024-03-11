import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route  } from 'react-router-dom';
import HomePage from './page/HomePage';
import BlogPage from './page/BlogPage';
import About from './page/About';
import Contact from './page/Contact';
import { lookInSession } from './components/common/session';
import PrivacyPage from "./page/PrivacyPage"
import TermofServicePage from "./page/TermofServicePage"
import RefundPage from './page/RefundPage';
import Main from './components/Main';
import Login from './page/login';
import Signup from './page/signup';
import ForgotPage from './page/ForgotPage';
import TestPage from './components/LandingPage/textpage';

import FaqPage from './page/FaqPage';
import Result from './components/TetsResult/Result';
import ChnagePassword from './page/UpdatePassword';
import NotfoundPage from './page/NotfoundPage';
import Midleware from './components/common/middleware';
import UserDashboard from './page/UserDashboard';
import AllTestPage from './components/TestPage/AllTestPage';
import CompanyResult from './components/TetsResult/CompanyResult';
import ResetPasswordPage from './page/ResetPassword';
import Intruction from './page/Intruction';
import PaymentPage from './page/PaymentPage';
export const UserContext = createContext({});

function App() {
const [userAuth, setUserAuth] = useState({ });
useEffect(() => {
  let userInSession = lookInSession("user");
  userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({ access_token: null });
}, []);


  return (
    <UserContext.Provider value={{userAuth , setUserAuth}}>
      <div className="App">
        <Routes>
          <Route path="/reset-password" render={(props) => <ResetPasswordPage token={props.location.search.split('=')[1]} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/price" element={<PaymentPage/>} />
          <Route path="/test" element={ <Midleware><AllTestPage/></Midleware>  } />
          <Route path="/intruction" element={<Midleware><Intruction/></Midleware>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/term" element={<TermofServicePage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/textpage" element={<Midleware><TestPage /></Midleware>} />
          <Route path="/result" element={<Midleware><Result /></Midleware>} />
          <Route path="/companyresult" element={<Midleware><CompanyResult/></Midleware>} />
          <Route path="/update" element={ <Midleware><ChnagePassword /></Midleware> } />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/dashboard" element={<Midleware><UserDashboard/></Midleware>} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/signuppage" element={<Signup />} />
              <Route path="/main" element={ <Midleware><Main /></Midleware>  } />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
