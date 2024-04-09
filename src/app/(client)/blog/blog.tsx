'use client';
import { useState, useEffect } from 'react';

//pagination
import ReactPaginate from 'react-paginate';

//next
import { usePathname } from 'next/navigation';

//components
import { BreadCrumb } from '@/components/client/layout';
import { CardBlog, Sidebar } from '@/components/client/blog';

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
];

const Blog = ({ itemsPerPage }: any) => {
  const path = usePathname();

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 1);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="flex px-[150px] bg-white gap-8 py-8">
        <div className="flex flex-1 flex-col items-center">
          <div className="w-full grid grid-cols-2 gap-4 grid-rows-5">
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="flex items-center gap-4 pt-8"
            activeClassName="h-[30px] w-[30px] flex items-center justify-center bg-primary text-white font-semibold rounded-full"
            previousClassName="h-[30px] w-[30px] flex items-center justify-center bg-gray300 text-black font-semibold rounded-full"
            nextClassName="h-[30px] w-[30px] flex items-center justify-center bg-gray300 text-black font-semibold rounded-full"
          />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Blog;
