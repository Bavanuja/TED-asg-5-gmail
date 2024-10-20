// Gmail.jsx
import React, { useState } from 'react';
import GmailTabs from './tab';
import MailList from './mailList';

const Gmail = () => {
  const messages = [
    { id: 1, sender: 'Alice', caption: 'Meeting at 5 PM', time: '10:30 AM', read: false },
    { id: 2, sender: 'Bob', caption: 'Report Submitted', time: '9:15 AM', read: true },
    { id: 3, sender: 'Charlie', caption: 'Lunch?', time: '12:00 PM', read: false },
    { id: 4, sender: 'David', caption: 'Reminder: Invoice', time: '8:45 AM', read: true },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const filteredMessages = messages.filter((msg) => {
    if (activeTab === 0) return true;
    if (activeTab === 1) return !msg.read;
    if (activeTab === 2) return msg.read;
  });
  console.log('Filtered Messages:', filteredMessages);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <GmailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MailList messages={filteredMessages} />
    </div>
  );
};

export default Gmail;
