export function navigate(path: string): void {
  const cleanPath = path.toLowerCase().trim().replace(/^\/+/, '');
  const validPaths = [
    'services',
    'team',
    'contact',
    'blog',
    'testimonials',
    'gallery',
    'locations',
    'faq'
  ];

  if (validPaths.includes(cleanPath)) {
    window.location.href = `/${cleanPath}`;
  }
}