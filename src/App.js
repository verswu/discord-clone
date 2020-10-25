import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout} from './features/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        // user logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    }); 
  }, [dispatch]);

  return (
    <div className="app">
      { user ? (
        <>
          {/* Sidebar */}
          <Sidebar />
          {/* Chat */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
