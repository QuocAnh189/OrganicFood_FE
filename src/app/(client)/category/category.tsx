'use client';
import { useState } from 'react';
//next
import { usePathname } from 'next/navigation';

//chakra
import { Select } from '@chakra-ui/react';

//pagination
import ReactPaginate from 'react-paginate';

//components
import { BreadCrumb } from '@/components/client/layout';
import { CardProduct, SidebarCategory } from '@/components/client/product';

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
];

const Category = () => {
  const path = usePathname();

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 1;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 1);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 1) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="flex px-[150px] bg-white gap-8 py-8">
        <SidebarCategory />
        <div className="flex flex-1 flex-col items-center">
          <div className="w-full flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <p className="text-gray500 inline-block">Sort: </p>
              <Select placeholder="Select option" size="md">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-black font-semibold">52</p>
              <p className="text-gray500">Result Found</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-4 grid-rows-5">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={() => {}}
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
      </div>
    </div>
  );
};

export default Category;
