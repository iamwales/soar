"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { UserType } from "@/types/dashboard";
import { getUsers, sendMoney } from "@/redux/actions/dashboard";
import { updateUsers } from "@/redux/slices/dashboardSlice";
import Icon from "@/components/Icon";
import Image from "next/image";

const QuickTransfer = () => {
  const dispatch = useDispatch();

  const users: UserType[] = useSelector(
    (state: RootState) => state.dashboard.users
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [currentSelectedUser, setCurrentSelectedUser] = useState<number>(1);
  const [amount, setAmount] = useState<number>(0);

  const handleGetUsers = async () => {
    setLoading(true);
    const response = await getUsers();

    if (response && response.data && Array.isArray(response.data)) {
      setLoading(false);
      dispatch(updateUsers(response.data));
    } else {
      dispatch(updateUsers([]));
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleProfileClick = (id: number) => {
    setCurrentSelectedUser(id);
  };

  const handleSend = async () => {
    const data = {
      amount: amount,
      userId: currentSelectedUser,
    };
    const response = await sendMoney(data);

    if (response && response.data) {
      //  toast money send successfully
    }
  };

  return (
    <div>
      <p className={"text-2xl text-primary font-semibold"}>Weekly Activity</p>

      <div className={"bg-white rounded-3xl p-6 py-16 mt-4"}>
        {loading && (
          <p className={"text-center text-base italic"}>Loading...</p>
        )}
        <div className='flex flex-nowrap gap-6 overflow-scroll'>
          {users.map(({ name = "", image, id, position }: UserType) => (
            <div
              key={name}
              onClick={() => handleProfileClick(id)}
              className='flex flex-col gap-4 items-center cursor-pointer hover:opacity-80'
            >
              <div className='w-20 h-20 rounded-full overflow-hidden mb-2'>
                {/* <img src={image.src} alt={name} />
                 */}
                <Image
                  src={image.src}
                  alt={name}
                  width={80} // specify width
                  height={80} // specify height
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='grid gap-2 text-center'>
                <p
                  className={`text-base ${
                    currentSelectedUser == id ? "font-black" : "font-semibold"
                  } text-[#232323] text-nowrap`}
                >
                  {name}
                </p>
                <p
                  className={`text-sm text-[#718EBF] ${
                    currentSelectedUser == id ? "font-black" : "font-medium"
                  }`}
                >
                  {position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center gap-4 mt-8 w-fit mb-6'>
          <label className='text-[#718EBF] text-base font-medium self-center'>
            Write Amount
          </label>
          <div className='flex-1 flex bg-[#EDF1F7] border-0 text-xl text-gray-800 rounded-full font-medium placeholder-gray-300'>
            <input
              type='number'
              placeholder='525.50'
              onChange={(e) => {
                const amount = Number(e.target.value);
                setAmount(amount);
              }}
              className='border-0 bg-[#EDF1F7] max-w-36 py-3 px-4 focus:border-0 rounded-full focus-visible:outline-0 [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none'
            />

            <button
              onClick={handleSend}
              className='flex items-center text-base justify-center bg-[#232323] text-white px-5 rounded-full hover:bg-gray-800 focus:outline-none'
            >
              Send
              <span className='ml-2'>
                <Icon name={"send"} size={4} type='white' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
