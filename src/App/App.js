import React from 'react';
import './App.scss';
import GroupHeader from '../components/GroupHeader/GroupHeader';
import Group from '../components/Group/Group';
import StudentsList from '../components/StudentsList/StudentsList';

function App() {
  return (
    <div data-testid="app" className="App">
      <GroupHeader />
      <Group />
      <StudentsList />
    </div>
  );
}

export default App;
