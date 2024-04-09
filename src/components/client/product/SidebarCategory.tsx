//next
import Link from 'next/link';
import Image from 'next/image';

//chakra
import {
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack
} from '@chakra-ui/react';

//icons
import { IoFilter } from 'react-icons/io5';
import { FcCollapse } from 'react-icons/fc';
import { CardProductSmall } from './CartProduct';
import { MdRateReview, MdStarRate } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const categories = [
  { name: 'Fresh Fruit', quality: 134 },
  { name: 'Vegetables', quality: 150 },
  { name: 'Cooking', quality: 54 },
  { name: 'Snacks', quality: 47 },
  { name: 'Beverages', quality: 43 },
  { name: 'Beauty & Health', quality: 38 },
  { name: 'Bread & Bakery', quality: 15 }
];

const rates = [
  {
    name: '5.0',
    value: [true, true, true, true, true]
  },
  {
    name: '4.0',
    value: [true, true, true, true, false]
  },
  {
    name: '3.0',
    value: [true, true, true, false, false]
  },
  {
    name: '2.0',
    value: [true, true, false, false, false]
  },
  {
    name: '1.0',
    value: [true, false, false, false, false]
  }
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

interface CategoryProps {
  setCondition: (value: string) => void;
}
const Category = (props: CategoryProps) => {
  const { setCondition } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-xl font-semibold">Top categories</h1>
        <FcCollapse size="18px" color="green" />
      </div>
      <RadioGroup
        defaultValue="Fresh Fruit"
        onChange={value => setCondition(value)}
      >
        <Stack direction="column">
          {categories.map((category, index) => (
            <Radio
              key={index}
              value={category.name}
              colorScheme="green"
              size="lg"
            >
              <div className="flex items-center gap-2 text-md">
                {category.name}{' '}
                <p className="text-gray500">({category.quality})</p>
              </div>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </div>
  );
};

interface PriceProps {
  price: number;
  setCondition: (value: number) => void;
}
const Price = (props: PriceProps) => {
  const { price, setCondition } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-xl font-semibold">Price</h1>
        <FcCollapse size="18px" color="green" />
      </div>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        onChange={value => setCondition(value)}
      >
        <SliderMark value={0}>0</SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        <SliderMark value={90}>100$</SliderMark>
      </Slider>
      <p className="text-gray500 mt-4">
        Price:<span className="text-black"> {price}$</span>
      </p>
    </div>
  );
};

const Rate = () => {
  // const [selectRate, setSelectRate] = useState<string>('5.0');

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-xl font-semibold">Rating</h1>
        <FcCollapse size="18px" color="green" />
      </div>
      <div className="flex flex-col gap-2">
        {rates.map((rate, index) => (
          <Checkbox
            key={index}
            colorScheme="green"
            value={rate.name}
            onChange={e => console.log(e.target.value)}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {rate.value.map((value, index) => (
                  <MdStarRate
                    key={index}
                    color={value === true ? 'orange' : 'gray'}
                  />
                ))}
              </div>
              <p>{rate.name === '5.0' ? rate.name : rate.name + ' & up'}</p>
            </div>
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

const PopularTag = () => {
  return (
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
  );
};

export const SidebarCategory = () => {
  const [condition, setCondition] = useState({
    category: 'Fresh Fruit',
    price: 30,
    rate: '5.0',
    tag: 'Health'
  });

  useEffect(() => {
    console.log(condition);
  }, [condition.category]);

  return (
    <div className="w-1/4 flex flex-col gap-6">
      <div className="w-1/3 flex items-center  justify-around py-2 bg-primary rounded-3xl">
        <p className="text-white">Filter</p>
        <IoFilter size="24px" color="white" />
      </div>

      <Divider h="2px" />

      <Category
        setCondition={value => setCondition({ ...condition, category: value })}
      />

      <Divider color="#808080" />

      <Price
        price={condition.price}
        setCondition={value => setCondition({ ...condition, price: value })}
      />

      <Divider color="#808080" />

      <Rate />

      <Divider color="#808080" />

      <PopularTag />

      <Divider color="#808080" />

      <div className="relative">
        <Image
          src="https://res.cloudinary.com/dadvtny30/image/upload/v1708181444/organicfood/voucher/sfblxq3imrpk48vt9o3p.png"
          alt=""
          width={300}
          height={0}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute left-[25%] top-6 flex flex-col items-center gap-4">
          <p className="text-2xl">
            Save 37% on <br />
            Every Order{' '}
          </p>
          <Link
            href=""
            className="w-[160px] bg-white text-primary flex items-center justify-center gap-2 px-4 py-2 rounded-3xl font-medium"
          >
            Shop Now
            <FaArrowRightLong />
          </Link>
        </div>
      </div>

      <Divider color="#808080" />

      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-black text-xl font-semibold pb-2">
            Sale Products
          </h1>
          {[0, 1, 2].map(index => (
            <CardProductSmall key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
