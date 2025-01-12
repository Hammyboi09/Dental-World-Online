import React from 'react';
import { TeamCard } from './TeamCard';
import type { TeamMember } from './types';

interface TeamTrackProps {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
}

export function TeamTrack({ members, onMemberClick }: TeamTrackProps) {
  return (
    <div className="team-track">
      {members.map((member) => (
        <div key={member.id} className="team-track-item">
          <TeamCard member={member} onClick={() => onMemberClick(member)} />
        </div>
      ))}
    </div>
  );
}