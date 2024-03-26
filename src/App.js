import React, { useState } from 'react';
import './InternGradingDashboard.css';

const internsData = [
  {
    id: 1,
    name: 'Fine Tappi',
    picture: 'https://th.bing.com/th/id/OIP.wqlODACOWAusYw3FnmhftgHaKf?pid=ImgDet&w=192&h=272&c=7&dpr=2',
    program: 'Software Engineering',
    email: 'fine.tappi@example.com',
    grade: 92,
  },
  {
    id: 2,
    name: 'Samuel Chukwuma',
    picture: 'https://th.bing.com/th/id/R.e7d9494846b79cab71e92d4834da4c64?rik=DKCvQVJaw1evnA&pid=ImgRaw&r=0',
    program: 'Data Science',
    email: 'samuel.chukwuma@example.com',
    grade: 88,
  },
  {
    id: 3,
    name: 'Asogwa ChiGod',
    picture: 'https://i.mdel.net/i/db/2021/3/1481855/1481855-500w.jpg',
    program: 'Web Development',
    email: 'asogwa.chigod@example.com',
    grade: 95,
  },
  {
    id: 4,
    name: 'Onyenaucheya Chioma',
    picture: 'https://media.licdn.com/dms/image/D4E03AQF4jtU-zU31Xg/profile-displayphoto-shrink_800_800/0/1690476762447?e=2147483647&v=beta&t=aEc7uIpA8siH0ebdhiHqsIeKVEmCGJMlPJbj13TrezI',
    program: 'UX/UI Design',
    email: 'onyenaucheya.chioma@example.com',
    grade: 100,
  },
];

const InternGradingDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBy, setSortedBy] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByGrade = () => {
    setSortedBy('grade');
  };

  const handleSortByName = () => {
    setSortedBy('name');
  };

  const filteredInterns = internsData.filter(intern => 
    intern.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInterns = sortedBy ? [...filteredInterns].sort((a, b) => {
    if (sortedBy === 'grade') {
      return b.grade - a.grade;
    } else if (sortedBy === 'name') {
      return a.name.localeCompare(b.name);
    }
  }) : filteredInterns;

  return (
    <div className="intern-dashboard">
      <div className="header">
        <h2>Interns Overview</h2>
        <div className="actions">
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <button onClick={handleSortByGrade}>Sort by Grade</button>
          <button onClick={handleSortByName}>Sort by Name</button>
        </div>
      </div>
      {sortedInterns.map(intern => (
        <div className="intern-card" key={intern.id}>
          <img src={intern.picture} alt={intern.name} />
          <div className="intern-info">
            <h3>{intern.name}</h3>
            <p><strong>Program:</strong> {intern.program}</p>
            <p><strong>Email:</strong> {intern.email}</p>
            <p><strong>Overall Grade:</strong> {intern.grade}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternGradingDashboard;