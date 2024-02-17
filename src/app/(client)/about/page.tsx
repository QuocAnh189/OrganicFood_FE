'use client';

//next
import { usePathname } from 'next/navigation';

//components
import BreadCrumb from '@/components/client/layout/Breadcrumb';
import { Feedback } from '@/components/common';
import { FooterAbout, Introduction, OurTeam } from '@/components/client/about';

const About = () => {
  const path = usePathname();

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="w-full mt-8">
        <Introduction />
        <OurTeam />
        <Feedback />
        <FooterAbout />
      </div>
    </div>
  );
};

export default About;
