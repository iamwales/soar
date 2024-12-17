"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Avatar } from "@ark-ui/react";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { ProfileType } from "@/types/setting/ProfileType";
import { getUserDetails, updateUserProfile } from "@/redux/actions/settings";
import { updateUser } from "@/redux/slices/settingSlice";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  postalCode: string;
  city: string;
  country: string;
};

const Profile = () => {
  const dispatch = useDispatch();

  const user: ProfileType = useSelector(
    (state: RootState) => state.setting.user
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: user,
  });

  const [loading, setLoading] = useState<boolean>(true);

  const handleGetUserProfile = async () => {
    setLoading(true);
    const response = await getUserDetails();

    if (response && response.data) {
      setLoading(false);
      dispatch(updateUser(response.data));
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUserProfile();
  }, []);

  const [imageSrc, setImageSrc] = useState<string>(
    "https://i.pravatar.cc/300" // Default avatar URL
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const response = await updateUserProfile(data);

    if (response && response.data) {
      setLoading(false);
      dispatch(updateUser(response.data));
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string); // Update the image source
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const openImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={"my-16"}>
      <div className="h-4">
        {loading && <p className={"text-center text-base italic"}>Loading...</p>}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-wrap gap-12 space-y-6 mt-4'
      >
        {/* User Info */}
        <div className='relative space-x-6'>
          <Avatar.Root className='relative rounded-full w-40 h-40 bg-black text-center text-white flex justify-center items-center'>
            <Avatar.Fallback
              className={"rounded-full font-bold text-5xl text-center "}
            >
              PA
            </Avatar.Fallback>
            <Avatar.Image
              className={"rounded-full w-40 h-40"}
              src={imageSrc}
              alt='avatar'
            />

            <div
              className='absolute bottom-1 right-4 bg-[#232323] p-2 rounded-full cursor-pointer'
              aria-label='Change Profile Picture'
              onClick={openImage}
            >
              <Icon name={"pen"} size={4} type={"white"} />
            </div>
          </Avatar.Root>

          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImageChange}
            className='hidden'
          />
        </div>

        <div className='flex-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name */}
            <Input
              label={"Your Name"}
              placeholder={"Charlene Reed"}
              register={register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />

            {/* Username */}
            <Input
              label={"User Name"}
              placeholder={"Charlene Reed"}
              register={register("username", {
                required: "Username is required",
              })}
              error={errors.username?.message}
            />

            {/* Email */}
            <Input
              label={"Email"}
              placeholder={"charlenereed@gmail.com"}
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />

            {/* Password */}
            <Input
              label={"Password"}
              placeholder={"*******"}
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password?.message}
            />

            {/* Date of Birth */}
            <Input
              label={"Date of Birth"}
              placeholder={"25 January 1990"}
              register={register("dob")}
            />

            {/* Address */}
            <Input
              label={"Present Address"}
              placeholder={"San Jose, California, USA"}
              register={register("presentAddress")}
            />

            <Input
              label={"Permanent Address"}
              placeholder={"San Jose, California, USA"}
              register={register("permanentAddress")}
            />

            {/* Postal Code */}
            <Input
              label={"Postal Code"}
              placeholder={"45962"}
              register={register("postalCode")}
            />

            {/* City */}
            <Input
              label={"City"}
              placeholder={"San Jose"}
              register={register("city")}
            />

            {/* Country */}
            <Input
              label={"Country"}
              placeholder={"USA"}
              register={register("country")}
            />
          </div>

          {/* Save Button */}
          <div className='flex flex-row-reverse mt-6'>
            <button
              type='submit'
              className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
