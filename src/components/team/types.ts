export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  qualificationFull: string;
  about: string;
  cardImage: string; // Image for card view
  modalImage: string; // Image/video for modal view
  isVideo?: boolean; // Flag to indicate if modalImage is a video
}