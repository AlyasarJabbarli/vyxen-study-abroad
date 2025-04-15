import { usePathname } from 'next/navigation';

export const useActiveLink = () => {
  const pathname = usePathname();
  
  const isActive = (href: string) => 
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return { isActive };
};