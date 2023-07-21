import React from 'react';
import NavBar from './NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';

const App = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  return (
    <>
      <NavBar />

      {isAuthenticated && (
        <div>
          <h1 style={{ color: '#777', textAlign: 'center', marginTop: '10rem' }}>Hello, {user.name}</h1>
        </div>
      )}
    </>
  );
};

export default App;
