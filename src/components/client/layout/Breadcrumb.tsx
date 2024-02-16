//icons
import { MdOutlineHome } from 'react-icons/md';

interface BreadCrumbsProps {
  path: string;
}

const BreadCrumb = (props: BreadCrumbsProps) => {
  const { path } = props;

  return (
    <div className="flex items-center bg-my-header w-full h-[80px] bg-cover">
      <div className="flex gap-2 px-[150px] items-center">
        <MdOutlineHome color="white" size={20} />
        <span className="text-white">{' > '}</span>
        <p className="text-primary">
          {path.charAt(1).toUpperCase() + path.replace('/', '').slice(1)}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumb;
