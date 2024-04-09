//icons
import Link from 'next/link';
import { MdOutlineHome } from 'react-icons/md';

interface BreadCrumbsProps {
  path: string;
  subpath?: string;
}

export const BreadCrumb = (props: BreadCrumbsProps) => {
  const { path } = props;

  const paths = path.split('/').filter(x => x);
  let breadCrumbPath = '';

  return (
    <div className="flex items-center bg-my-header w-full h-[80px] bg-cover">
      <div className="flex gap-2 px-[150px] items-center">
        <Link href="/">
          <MdOutlineHome color="white" size={20} />
        </Link>
        {paths.map((name, index) => {
          breadCrumbPath += `/${name}`;
          const isLast = index === paths.length - 1;

          return isLast ? (
            <div className="flex items-center gap-2">
              <span className="text-white">{'>'}</span>
              <p className="text-primary">{name}</p>
            </div>
          ) : (
            <Link href={breadCrumbPath} className="flex items-center gap-2">
              <span className="text-white">{'>'}</span>
              <p className="text-primary cursor-default hover:underline hover:cursor-pointer">
                {name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
