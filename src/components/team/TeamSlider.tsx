import React, { useRef, useEffect, useState } from 'react';
import { TeamTrack } from './TeamTrack';
import { TeamCard } from './TeamCard';
import { teamMembers } from './teamData';
import { useAutoSlider } from './hooks/useAutoSlider';
import './styles/slider.css';

interface TeamSliderProps {
  onMemberClick: (member: typeof teamMembers[0]) => void;
}

export function TeamSlider({ onMemberClick }: TeamSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const { position, setIsPaused } = useAutoSlider(trackWidth, 1);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, []);

  return (
    <div 
      className="team-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={trackRef}
        className="team-track"
        style={{ 
          transform: `translateX(${position}px)`,
          transition: 'transform 16ms linear'
        }}
      >
        {/* Original set of members */}
        {teamMembers.map((member) => (
          <div key={member.id} className="team-track-item">
            <TeamCard member={member} onClick={() => onMemberClick(member)} />
          </div>
        ))}
        
        {/* Duplicated set for seamless loop */}
        {teamMembers.map((member) => (
          <div key={`${member.id}-clone`} className="team-track-item">
            <TeamCard member={member} onClick={() => onMemberClick(member)} />
          </div>
        ))}
      </div>
    </div>
  );
}