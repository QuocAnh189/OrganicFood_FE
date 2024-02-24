import { Avatar, Divider } from '@chakra-ui/react';

export const CommentBlog = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Avatar />
        <div className="flex flex-col">
          <div className="flex gap-1">
            <p className="text-black font-bold">Annette Black .</p>
            <p className="text-gray500">26 Apr,2021</p>
          </div>
          <p className="text-justify">
            In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla
            volutpat, metus eu aliquam malesuada, elit libero venenatis urna,
            consequat maximus arcu diam non diam.
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CommentBlog;
