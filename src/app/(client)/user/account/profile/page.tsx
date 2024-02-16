//chakra
import {
  Avatar,
  Button,
  Radio,
  RadioGroup,
  Select,
  Stack
} from '@chakra-ui/react';

//const
import { day, month, years, maskEmail, maskPhone } from '@/constants';

const Profile = () => {
  return (
    <div className="flex flex-auto flex-col border border-solid border-gray300 rounded-md">
      <div className="pl-8 py-4">
        <h1 className="text-xm text-black font-semibold">My Profile</h1>
        <p className="text-gray500">
          Manage profile information for account security
        </p>
      </div>
      <div className="h-[1px] bg-gray300 pl-8" />
      <div className="flex flex-col items-start pl-8 gap-4">
        <form className="w-full flex items-center mt-4 gap-12">
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex items-center">
              <label className="w-1/5">Name</label>
              <input
                className="w-4/5  border border-solid border-gray300 rounded-md p-2"
                placeholder="Enter name"
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/5">Email</label>
              <div className="flex w-4/5 items-center justify-start gap-2 ">
                <p>{maskEmail('anhquoc18092003@gmail.com')}</p>
                <button className="text-primary hover:underline">Change</button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="w-1/5">Phone</label>
              <div className="flex w-4/5 items-center justify-start gap-2 ">
                <p>{maskPhone('0702465814')}</p>
                <button className="text-primary hover:underline">Change</button>
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-1/5">Gender</label>
              <div className="flex w-4/5 items-center justify-start gap-4">
                <RadioGroup value={'Male'}>
                  <Stack direction="row">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                    <Radio value="Others">Others</Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="w-1/5">Birth Day</label>
              <div className="w-4/5 flex items-center gap-4">
                <Select placeholder="Day">
                  {day.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Select>
                <Select placeholder="Month">
                  {month.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Select>
                <Select placeholder="Year">
                  {years(1910).map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray300" />
          <div className="flex flex-col items-center justify-center gap-3 pr-12">
            <Avatar size="xl" />
            <Button>Choose Image</Button>
          </div>
        </form>

        <button className="bg-primary py-2 px-4 rounded-md text-white hover:bg-subprimary mb-2">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
