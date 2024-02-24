'use client';

//next
import { usePathname } from 'next/navigation';

//components
import { BreadCrumb } from '@/components/client/layout';
import { Feedback, Branch } from '@/components/common';
import { Introduction, OurTeam } from '@/components/client/about';

const About = () => {
  const path = usePathname();

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="w-full mt-8">
        <Introduction />
        <OurTeam />
        <div className="flex flex-col justify-center gap-6 px-[150px] py-12 bg-gray200">
          <h1 className="font-semibold text-3xl">Client Testimonail</h1>
          <div className="grid grid-flow-col">
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
        </div>
        <Branch />
      </div>
    </div>
  );
};

export default About;
