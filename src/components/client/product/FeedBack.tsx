//chakra
import { Avatar, Divider } from '@chakra-ui/react';

//icons
import { MdStarRate } from 'react-icons/md';

const Item = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Avatar />
          <div className="">
            <p className="font-semibold">Kristin Wastson</p>
            <div className="flex items-center">
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray500">2 min ago</p>
      </div>
      <p className="text-gray500">Duis at ullamcorper nulla, eu dictum eros.</p>
    </div>
  );
};

export const Feedback = () => {
  return (
    <div className="w-1/2 space-y-4 pl-[150px]">
      <Item />
      <Divider />
      <Item />
      <Divider />
      <Item />
      <Divider />
      <Item />
      <button className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-3xl">
        Load More
      </button>
    </div>
  );
};
