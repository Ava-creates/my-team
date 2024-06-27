import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ date, content }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{date}</time>
        <p>{content}</p>
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
