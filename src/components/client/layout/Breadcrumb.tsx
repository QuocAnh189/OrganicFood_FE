//icons
import Link from 'next/link';
import { MdOutlineHome } from 'react-icons/md';

interface BreadCrumbsProps {
  path: string;
  subpath?: string;
}

export const BreadCrumb = (props: BreadCrumbsProps) => {
  const { path, subpath } = props;

  return (
    <div className="flex items-center bg-my-header w-full h-[80px] bg-cover">
      <div className="flex gap-2 px-[150px] items-center">
        <MdOutlineHome color="white" size={20} />
        <span className="text-white">{' > '}</span>
        <Link
          href="/blog"
          className="text-primary cursor-default hover:underline"
        >
          {path.charAt(1).toUpperCase() + path.replace('/', '').slice(1)}
        </Link>
        {subpath && (
          <div className="flex items-center gap-2">
            <span className="text-white">{' > '}</span>{' '}
            <p className="text-primary">{subpath}</p>
          </div>
        )}
      </div>
    </div>
  );
};
