'use client';

//next
import { usePathname } from 'next/navigation';

//chakra-ui
import { Divider, FormControl, Input } from '@chakra-ui/react';

//maps
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete
} from '@react-google-maps/api';
import Geocode from 'react-geocode';

//icons
import { PiMapPinLineLight, PiPhoneCallThin } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';

//component
import { BreadCrumb } from '@/components/client/layout';
import { useEffect, useState } from 'react';
import { log } from 'console';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 10.8713134,
  lng: 106.8025164,
  text: 'University of Information Technology'
};

const Contact = () => {
  const path = usePathname();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
    libraries: ['places']
  });

  // const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //   'Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh'
  // )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       const location = data.results[0].geometry.location;
  //       console.log('Latitude:', location.lat);
  //       console.log('Longitude:', location.lng);
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with your fetch operation:', error);
  //     });
  // }, []);

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="flex px-[150px] py-8 min-h-[500px] gap-8">
        <div className="flex flex-col justify-between bg-white shadow-xl rounded-md px-6">
          <div className="flex flex-1 flex-col justify-center items-center px-4 py-6">
            <PiMapPinLineLight color="#00B207" size={50} />
            <p>2715 Ash Dr.San Jose, South</p>
            <div className="p">Dakota83475</div>
          </div>
          <Divider />
          <div className="flex flex-1 flex-col justify-center items-center px-4 py-6">
            <CiMail color="#00B207" size={50} />
            <p>Proxy@gmail.com</p>
            <div className="p">Help.proxy@gmail.com</div>
          </div>
          <Divider />
          <div className="flex flex-1 flex-col justify-center items-center px-4 py-6">
            <PiPhoneCallThin color="#00B207" size={50} />
            <p>(219) 555-0114</p>
            <div className="p">(164) 333-0487</div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col flex-auto justify-between p-8 bg-white shadow-xl rounded-md">
          <h1 className="text-black font-bold text-2xl">Just Say Hello!</h1>
          <p>
            Do you fancy saying hi to me or you want to get started with your
            <br />
            project and you need my help?Feel free to contact me.
          </p>
          <FormControl>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <Input value="Template Cookie" />
                <Input value="anhquoc18092003@gmal.com" />
              </div>
              <Input placeholder="Say something" defaultValue="" />
              <Input h={100} placeholder="Subject" defaultValue="" />
            </div>
          </FormControl>
          <button className="px-4 py-3 rounded-3xl bg-primary font-semibold text-white w-[200px]">
            Send Message
          </button>
        </div>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={{
            // zoomControlL: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} title="UIT" />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Contact;
