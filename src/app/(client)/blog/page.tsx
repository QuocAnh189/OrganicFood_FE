'use client';

//next
import { usePathname } from 'next/navigation';

//components
import BreadCrumb from '@/components/client/layout/Breadcrumb';

const Blog = () => {
  const path = usePathname();

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
    </div>
  );
};

export default Blog;
