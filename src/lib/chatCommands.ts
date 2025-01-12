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
    command: '/help',
    description: 'Show available commands',
    action: () => {
      return `Available commands:
/about - Learn about Dental World
/team - Meet our dental specialists
/contact - Get clinic contact information
/locations - Show clinic locations
/hours - Show clinic working hours
/services - List available dental services`;
    }
  },
  {
    command: '/about',
    description: 'Learn about Dental World',
    action: () => clinicInfo.getAboutInfo()
  },
  {
    command: '/team',
    description: 'Meet our dental specialists',
    action: () => teamInfo.getTeamList()
  },
  {
    command: '/doctor',
    description: 'Get information about a specific doctor',
    action: (name?: string) => {
      if (!name) return 'Please provide a doctor name. Use /team to see the list of doctors.';
      return teamInfo.getDoctorInfo(name);
    }
  },
  {
    command: '/contact',
    description: 'Get clinic contact information',
    action: () => clinicInfo.getContactInfo()
  },
  {
    command: '/locations',
    description: 'Show clinic locations',
    action: () => clinicInfo.getLocations()
  },
  {
    command: '/hours',
    description: 'Show clinic working hours',
    action: () => clinicInfo.getWorkingHours()
  },
  {
    command: '/services',
    description: 'List available dental services',
    action: () => clinicInfo.getServices()
  }
];