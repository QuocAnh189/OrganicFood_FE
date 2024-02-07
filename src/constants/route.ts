interface Route {
  name: string;
  path: string;
  icon?: any;
}

export const routes: Route[] = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Category', path: '/category' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];
