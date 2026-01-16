export const navItems: NavItem[] = [
  {
    type: 'link',
    href: '/#home',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'About',
    href: '/#about',
  },
  {
    type: 'link',
    label: 'Skills',
    href: '/#skills',
  },
  {
    type: 'link',
    label: 'Projects',
    href: '/#projects',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/#contact',
  },
];

type NavItem =
  | {
    type: 'link';
    href: string;
    label: string;
  }
  | {
    type: 'dropdown';
    label: string;
    items: { label: string; href: string; icon?: React.ReactNode }[];
  };
