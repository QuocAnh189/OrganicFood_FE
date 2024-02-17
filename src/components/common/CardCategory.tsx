import Image from 'next/image';

export const CardCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white py-6 px-10 rounded-md">
      <Image
        src="https://res.cloudinary.com/dadvtny30/image/upload/v1708155631/organicfood/category/jsdz14lcswmeiacngcfs.png"
        alt=""
        height={100}
        width={100}
        style={{ objectFit: 'cover' }}
      />
      <p className="text-primary font-medium">Vegetables</p>
      <p className="text-gray500 text-[12px]">165 Products</p>
    </div>
  );
};
