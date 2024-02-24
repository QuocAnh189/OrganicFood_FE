'use client';

//next
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

//chakra
import { Avatar, Divider } from '@chakra-ui/react';

//icons
import {
  FaRegUser,
  FaRegCommentAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';

//component
import { CommentBlog } from '@/components/client/blog';
import { Sidebar } from '@/components/client/blog';
import { BreadCrumb } from '@/components/client/layout';

const BlogDetails = () => {
  const path = usePathname();

  return (
    <div className="">
      <BreadCrumb path={path.slice(0, 5)} subpath="SingleBlog" />
      <div className="flex px-[150px] bg-white gap-8 pt-8">
        <div className="w-2/3 flex flex-col gap-4">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708164998/organicfood/blog/dagngeybjorgnvug3prr.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[480px] rounded-lg object-cover"
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BiFoodMenu color="#00B207" />
              <p className="text-gray500">Food</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegUser color="#00B207" />
              <p className="text-gray500">By Admin</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCommentAlt color="#00B207" />
              <p className="text-gray500">Comments</p>
            </div>
          </div>
          <h1 className="text-black text-2xl font-semibold">
            Maecenas tempor urna sed quam mollis, a placerat dui fringill
            Suspendisse.
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar />
              <div className="flex flex-col">
                <p className="text-black font-semibold">Cameron Wiliamson</p>
                <p className="text-gray500 text-[12px]">
                  4 April2021 6 mỉn read
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/">
                <FaFacebookF />
              </Link>
              <Link href="/">
                <FaTwitter />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col text-justify gap-6">
            <h1 className="text-black text-xl font-semibold">
              Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
              dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
            </h1>
            <p className="text-gray500">
              Maecenas elementum in risus sed condimentum. Duis convallis ante
              ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi
              faucibus vitae orci at euismod. Integer auctor augue in erat
              vehicula, quis fermentum ex finibus.
            </p>

            <p className="text-gray500">
              Mauris pretium elit a dui pulvinar, in ornare sapien euismod.
              Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed
              ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at
              fermentum turpis. Sed molestie, ligula ut molestie ultrices,
              tellus ligula viverra neque, malesuada consectetur diam sapien
              volutpat risus. Quisque eget tortor lobortis, facilisis metus eu,
              elementum est. Nunc sit amet erat quis ex convallis suscipit. ur
              ridiculus mus.
            </p>

            <div className="w-full flex gap-4">
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708164999/organicfood/blog/gdojbidqpoy9yvpdl11b.png"
                alt=""
                width={300}
                height={0}
                className="flex-1 rounded-lg object-cover"
              />
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708164999/organicfood/blog/irnihzp4vgkdrqmuqsjj.png"
                alt=""
                width={300}
                height={0}
                className="flex-1 rounded-lg object-cover"
              />
            </div>

            <p className="text-gray500">
              Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate
              quis vehicula ut, vestibulum ut mauris. Nullam non felis varius
              dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem
              sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel
              luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper
              nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu
              nec faucibus ultricies.
            </p>

            <Image
              src="https://res.cloudinary.com/dadvtny30/image/upload/v1708181446/organicfood/voucher/wl296lpijssgdmtvsr9c.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto rounded-lg object-cover"
            />

            <div className="flex flex-col gap-2">
              <h1 className="text-black text-xl font-semibold py-2">
                Comments
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex flex-col flex-1 gap-1">
                  <label>Full name</label>
                  <input
                    placeholder="Full name"
                    className="flex-1 p-2 border border-solid border-textgray500 rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    className="flex-1 p-2 border border-solid border-textgray500 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label>Message</label>
                <input
                  placeholder="Write your comment here"
                  className="h-[100px] p-2 border border-solid border-textgray500 rounded-md"
                />
              </div>

              <button className="w-[200px] py-3 text-white bg-primary rounded-3xl font-semibold">
                Post Comments
              </button>

              <div className="py-8 space-y-2">
                <h1 className="text-3xl font-semibold">Comments</h1>
                <div className="space-y-4">
                  {[0, 1, 2, 3, 4].map(index => (
                    <CommentBlog />
                  ))}
                </div>
                <button className="w-[160px] py-2 text-primary bg-white border-[3px] border-solid border-primary rounded-3xl font-semibold">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogDetails;
