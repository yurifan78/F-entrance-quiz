import React, { useState } from 'react';
import './App.css';
import GroupHeader from '../Components/GroupHeader/GroupHeader';
import Groups from '../Components/Groups/Groups';
import StudentsList from '../Components/StudentsList/StudentsList';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: '成吉思汗' },
    { id: 2, name: '鲁班七号' },
    { id: 3, name: '太乙真人' },
    { id: 4, name: '钟无艳' },
    { id: 5, name: '花木兰' },
    { id: 6, name: '雅典娜' },
    { id: 7, name: '芈月' },
    { id: 8, name: '白起' },
    { id: 9, name: '刘禅' },
    { id: 10, name: '庄周' },
    { id: 11, name: '马超' },
    { id: 12, name: '刘备' },
    { id: 13, name: '哪吒' },
    { id: 14, name: '大乔' },
    { id: 15, name: '蔡文姬' },
  ]);

  return (
    <div data-testid="app" className="app">
      <GroupHeader />
      <Groups students={students} />
      <StudentsList students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;
