import React from 'react';
import ReadMessage from './readMessage';
import UnreadMessage from './unreadMessage';

const messages = [
  {
    sender: "Arushan",
    time: "4:14 PM",
    caption: "Hey! Just wanted to check in and see if you are available for a quick call.",
    isRead: true,
  },
  {
    sender: "Dharshan",
    time: "5:20 PM",
    caption: "I'm working on the project you mentioned. Do you have any additional requirements?",
    isRead: false,
  },
  {
    sender: "Sanjana",
    time: "6:45 PM",
    caption: "The meeting is scheduled for tomorrow at 10 AM. Don't forget to bring the reports.",
    isRead: true,
  },
  {
    sender: "Kavindu",
    time: "8:00 PM",
    caption: "Let's catch up this weekend! It's been so long since we met.",
    isRead: false,
  },
  {
    sender: "Aravind",
    time: "9:15 AM",
    caption: "Reminder: Your flight to Colombo is scheduled for 3 PM. Please arrive early.",
    isRead: true,
  },
  {
    sender: "Roshini",
    time: "11:30 AM",
    caption: "Thank you for your help earlier! The presentation went really well.",
    isRead: true,
  },
  {
    sender: "Tharushi",
    time: "2:25 PM",
    caption: "Are we still on for the game night? Everyone's excited to see you there!",
    isRead: false,
  },
  {
    sender: "Nimal",
    time: "7:10 PM",
    caption: "Could you review the document I sent and provide feedback by tomorrow?",
    isRead: true,
  },
  {
    sender: "Yasodha",
    time: "8:45 AM",
    caption: "Just wanted to wish you a happy birthday! Have a fantastic day!",
    isRead: false,
  },
  {
    sender: "Amaya",
    time: "3:50 PM",
    caption: "Don't forget to bring the USB drive with the presentation files.",
    isRead: true,
  },
  {
    sender: "Keshan",
    time: "12:30 PM",
    caption: "The client requested a few changes. Can we discuss them tomorrow morning?",
    isRead: false,
  },
  {
    sender: "Lakmal",
    time: "6:00 PM",
    caption: "I’ve attached the updated report with all the new data points included.",
    isRead: true,
  },
  {
    sender: "Manuja",
    time: "5:05 PM",
    caption: "Quick question: Do you know where I can find the previous meeting notes?",
    isRead: true,
  },
  {
    sender: "Navod",
    time: "2:10 PM",
    caption: "Please call me when you’re free. I have an update about the project.",
    isRead: false,
  },
  {
    sender: "Ishara",
    time: "7:35 AM",
    caption: "Good morning! Just a reminder about the webinar happening at 11 AM.",
    isRead: false,
  },
  {
    sender: "Shanuka",
    time: "3:45 PM",
    caption: "The invoices have been sent to the client. Let me know if there are any issues.",
    isRead: true,
  },
  {
    sender: "Kasun",
    time: "1:25 PM",
    caption: "Looking forward to seeing you at the team lunch tomorrow.",
    isRead: true,
  },
  {
    sender: "Mahesh",
    time: "10:15 AM",
    caption: "Can you please share the project timeline with the stakeholders?",
    isRead: false,
  },
  {
    sender: "Thilini",
    time: "9:55 AM",
    caption: "Great job on the presentation! Everyone was impressed with your work.",
    isRead: true,
  },
  {
    sender: "Sudeera",
    time: "11:45 PM",
    caption: "Let me know if you need any help with the deployment. I'm available.",
    isRead: false,
  },
];

const styles = {
  container: {
    height: '500px',
    width:'1000px',
    overflowY: 'scroll', 
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    '&::-webkit-scrollbar': {
          width: '20px',
        },
  },
};

export default function MailList() {
  return (
    <div style={styles.container}>
      {messages.map((message, index) => 
        message.isRead ? (
          <ReadMessage
            key={index}
            sender={message.sender}
            time={message.time}
            caption={message.caption}
          />
        ) : (
          <UnreadMessage
            key={index}
            sender={message.sender}
            time={message.time}
            caption={message.caption}
          />
        )
      )}
    </div>
  );
}
