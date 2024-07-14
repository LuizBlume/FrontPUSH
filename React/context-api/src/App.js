import User from './components/User';
import { useState } from 'react';
import UserProvider from './contexts/user';
function App() {
  return (
    <UserProvider>
      <div className="App">
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
