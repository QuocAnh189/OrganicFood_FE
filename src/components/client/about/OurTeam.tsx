//next
import Image from 'next/image';

export const OurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-between px-[150px] py-10 bg-gray300 gap-4">
      <h1 className="text-4xl text-black font-semibold">Our Awesome Team</h1>
      <p className="text-center text-gray500">
        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla
        et rhoncus <br /> neque. Duis non diam eget est luctus tincidunt a a mi.
      </p>
      <div className="flex items-center gap-4">
        <div className="bg-white shadow-md rounded-md">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
            alt=""
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            className="rounded-t-md"
          />
          <div className="p-2">
            <p>Jenny Wilson</p>
            <p className="text-gray500 text-[12px]">Ceo & Found</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050850/organicfood/user/qxsiaat1w3alfx9ztwem.png"
            alt=""
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            className="rounded-t-md"
          />
          <div className="p-2">
            <p>Jane Cooper</p>
            <p className="text-gray500 text-[12px]">Worker</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
            alt=""
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            className="rounded-t-md"
          />
          <div className="p-2">
            <p>Cody Fisher</p>
            <p className="text-gray500 text-[12px]">Security Guard</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050850/organicfood/user/dxeswbijjbolyqmedegm.png"
            alt=""
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            className="rounded-t-md"
          />
          <div className="p-2">
            <p>Robert Fox</p>
            <p className="text-gray500 text-[12px]">Senior Farmer Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
