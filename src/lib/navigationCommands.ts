import { navigate } from './navigation';

export const navigationCommands = [
  {
    command: '/goto',
    description: 'Navigate to a specific page (e.g., /goto services)',
    action: (page?: string) => {
      if (!page) return 'Please specify a page to navigate to';
      navigate(page);
      return `Navigating to ${page} page...`;
    }
  }
];