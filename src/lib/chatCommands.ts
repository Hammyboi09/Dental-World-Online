import { navigationCommands } from './navigationCommands';
import { clinicInfo } from './clinicInfo';
import { teamInfo } from './teamInfo';

export type CommandType = {
  command: string;
  description: string;
  action: (arg?: string) => string | Promise<string>;
};

export const chatCommands: CommandType[] = [
  {
    command: 'Help',
    description: '',
    action: () => {
      return `Available commands:
/about - Learn about Dental World
/team - Meet our dental specialists
/contact - Get clinic contact information
/locations - Show clinic locations
/hours - Show clinic working hours`;
    }
  },
  {
    command: 'About Us',
    description: '',
    action: () => clinicInfo.getAboutInfo()
  },
  {
    command: 'Our Team',
    description: '',
    action: () => teamInfo.getTeamList()
  },
  {
    command: 'Contact Us',
    description: '',
    action: () => clinicInfo.getContactInfo()
  },
  {
    command: 'Locations',
    description: '',
    action: () => clinicInfo.getLocations()
  },
  {
    command: 'Working Hours',
    description: '',
    action: () => clinicInfo.getWorkingHours()
  },
];