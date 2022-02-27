import React, { useContext } from "react";
import Info from "./Info";
import { dataSharingPoint } from "./store";
import AddProfile from "./AddProfile";

function FriendsNFamily() {
  const { addProfile, setAddProfile } = useContext(dataSharingPoint);

  function handleAddProfile() {
    setAddProfile(true);
  }
  return (
    <div className="mt-[20%] flex flex-col bg-[#FAFAFA] h-screen">
      <div className=" flex justify-evenly px-2 bg-white">
        <button className="border-b-2 border-[#FFA664] w-1/2 text-[#FFA664] ">
          My profile
        </button>
        <button className=" w-1/2 text-[#979797] ">Order history</button>
      </div>
      <div className="flex justify-between px-2 mt-2">
        <button className="p-3 text-xs  w-1/2 rounded bg-white">
          Basic Profile
        </button>
        <button className="p-3 text-white bg-[#FFA664] text-xs  w-1/2 rounded">
          Friends and Family Profile
        </button>
      </div>
      {!addProfile ? (
        <>
          <div className=" top-20 p-2 px-2 bg-[#E0E3F1] sticky mt-[5%] flex justify-between ml-2 w-[95%] items-center rounded-md ">
            <h1 className="text-[#8592CF] font-semibold px-1">
              Wallet balance: ₹0
            </h1>
            <button className=" border-2 border-[black] bg-white h-7 text-[#4B60BC] rounded-md px-5 text-sm mr-16">
              Add money
            </button>
          </div>

          <div className="flex justify-between mt-[5%] text-[#B8BDDF] w-8/12 text-sm p-2 px-3 ml-5">
            <span>Name</span>
            <span>DOB</span>
            <span>TOB</span>
            <span>Relation</span>
          </div>

          <Info />

          <button
            onClick={handleAddProfile}
            className="border-2 w-44 p-2 text-xs bg-[#FF944D] text-white rounded-lg ml-[25%] mt-5"
          >
            +Add New Profile
          </button>
        </>
      ) : (
        <AddProfile />
      )}
    </div>
  );
}

export default FriendsNFamily;
