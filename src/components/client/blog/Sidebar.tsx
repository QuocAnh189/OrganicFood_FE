//next
import Image from 'next/image';

//chakra
import { Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

//icons
import { Search2Icon } from '@chakra-ui/icons';
import { CiCalendar } from 'react-icons/ci';

const categories = [
  { name: 'Fresh Fruit', quality: 134 },
  { name: 'Vegetables', quality: 150 },
  { name: 'Cooking', quality: 54 },
  { name: 'Snacks', quality: 47 },
  { name: 'Beverages', quality: 43 },
  { name: 'Beauty & Health', quality: 38 },
  { name: 'Bread & Bakery', quality: 15 }
];

const tags = [
  'Health',
  'Low fat',
  'Vegetarian',
  'Bread',
  'Kid foods',
  'Vitamins',
  'Snacks',
  'Tiffin',
  'Meat',
  'Launch',
  'Dinner'
];

export const Sidebar = () => {
  return (
    <div className="w-1/3 flex flex-col gap-6">
      <div className="self-center w-full">
        <InputGroup borderRadius={5} size="md">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid #949494"
          />
        </InputGroup>
      </div>
      <Divider />
      <div className="flex flex-col gap-2">
        <h1 className="text-black text-xl font-semibold">Top categories</h1>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="text-black font-semibold">{category.name}</p>
            <p className="text-gray500">({category.quality})</p>
          </div>
        ))}
      </div>

      <Divider color="#808080" />

      <div className="">
        <h1 className="text-black text-xl font-semibold pb-2">Popular Tag</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="px-3 py-1 bg-gray300 rounded-3xl">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <Divider color="#808080" />

      <div className="">
        <h1 className="text-black text-xl font-semibold pb-2">Our Gallery</h1>
        <div className="flex flex-wrap gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
            <Image
              key={index}
              height={80}
              width={80}
              src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/cqodgw5bfg90smswkate.png"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          ))}
        </div>
      </div>

      <Divider color="#808080" />

      <div className="">
        <div className="flex flex-wrap">
          <h1 className="text-black text-xl font-semibold pb-2">
            Recently Added
          </h1>
          {[0, 1, 2].map(index => (
            <div key={index} className="flex items-center gap-2">
              <Image
                height={100}
                width={100}
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/cqodgw5bfg90smswkate.png"
                alt=""
                style={{ objectFit: 'cover' }}
              />
              <div className="">
                <p className="text-black">
                  Curabitur porttitor orci eget nequ accumsan.
                </p>
                <div className="flex items-center gap-2">
                  <CiCalendar color="#00B207" />
                  <p className="text-gray500">Apr 25, 2021 </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
