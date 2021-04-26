import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from './App.module.css';

import Home from "./Home/Home.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Login from "./Login/Login.jsx";
import Error from "./Error/Error.jsx";
import FindCoach from "./FindCoach/FindCoach";
import CoachPage from "./CoachPage/CoachPage";
import Profile from './Profile/Profile';

function App() {
  const [user, setUser] = useState();
  const [coachList, setCoachList] = useState([]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.topnav}>
          <div className={styles.topnavLeft}>
          </div>
          <div className={styles.topnavRight}>
            <Link to="/">Home</Link>
            <Link to="/findcoach">Find a Coach</Link>
            {user ? <Link to="/profile">{user}</Link> :
              <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
              </>
            }
          </div>
        </nav>
      </header>
      <div className={styles.contentContainer}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/findcoach" exact component={FindCoach} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact render={() => <Login setUser={setUser} />} />
          <Route path="/profile" exact render={() => <Profile user={user} coachList={coachList} />} />
          <Route path="/coaches/:coachId" exact render={(props) => <CoachPage {...props} coachList={coachList} setCoachList={setCoachList} user={user}/>} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
}

export default App;
