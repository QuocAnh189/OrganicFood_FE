//next
import Image from 'next/image';

//icons
import { FaCheck } from 'react-icons/fa6';

//image
import iconLeaf from '@/assets/images/iconLeaf.png';
import iconDiscount from '@/assets/images/iconDiscount.png';

export const Description = () => {
  return (
    <div className="flex items-center gap-12 px-[150px] ">
      <div className="w-3/5 space-y-4 text-gray500 text-justify">
        <p className="text-gray">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
          <br />
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-[5px] bg-primary rounded-full">
              <FaCheck color="white" />
            </div>
            <p className="text-black font-medium">
              100 g of fresh leaves provides.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[5px] bg-primary rounded-full">
              <FaCheck color="white" />
            </div>
            <p className="text-black font-medium">
              Aliquam ac est at augue volutpat elementum.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[5px] bg-primary rounded-full">
              <FaCheck color="white" />
            </div>
            <p className="text-black font-medium">
              Quisque nec enim eget sapien molestie.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[5px] bg-primary rounded-full">
              <FaCheck color="white" />
            </div>
            <p className="text-black font-medium">
              Proin convallis odio volutpat finibus posuere.
            </p>
          </div>
        </div>

        <p className="">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.
        </p>
      </div>

      <div className="w-2/5">
        <Image
          src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061750/organicfood/product/ss9g3o3fhjmsw0uht3kv.png"
          alt=""
          width={100}
          height={100}
          className="w-full object-cover"
        />

        <div className="p-4 flex items-center w-full border border-solid border-gray300 rounded-xl gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={iconDiscount}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <div className="text-xs">
              <p className="text-black font-semibold">64% Discount</p>
              <p className="text-hray500">Save your 64% money with us</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={iconLeaf}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <div className="text-xs">
              <p className="text-black font-semibold">100% Organic</p>
              <p className="text-hray500">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
