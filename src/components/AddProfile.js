import React, { useContext, useState, useEffect } from "react";
import { dataSharingPoint } from "./store";
import LocationSearchBar from "./LocationSearchBar";

function AddProfile() {
  const [clicked, setClicked] = useState(false);
  const [changeBGcolorPM, setChangeBGcolorPM] = useState(false);
  const [changeBGcolorAM, setChangeBGcolorAM] = useState(false);
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [pm, setPm] = useState();
  const [am, setAm] = useState();
  const [gender, setGender] = useState();
  const [relation, setRelation] = useState();

  const { setAddProfile } = useContext(dataSharingPoint);

  useEffect(() => {
    const PM = document.getElementById("PM");
    if (PM.checked) {
      setChangeBGcolorPM(true);
      setChangeBGcolorAM(false);
    } else {
      setChangeBGcolorAM(true);
      setChangeBGcolorPM(false);
    }
    setClicked(false);
  }, [clicked]);

  const accessToken = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0Nj
E0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidg
L7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ`;

  function handleAddDetails() {
    fetch(`https://staging-api.astrotak.com/api/relative`, {
      method: "POST",
      headers: {
        Authorization: `Bearer` + `${encodeURI(accessToken)}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        birthDetails: {
          dobDay: date,
          dobMonth: month,
          dobYear: year,
          tobHour: hour,
          tobMin: minute,
          meridiem: am,
        },
        birthPlace: {
          placeName: "Kulharia, Bihar, India",
          placeId: "ChIJwTa3v_6nkjkRC_b2yajUF_M",
        },
        firstName: name,
        gender: gender,
      }),
    })
      .then((res) => res.json())
      .then((databack) => console.log(databack));
  }

  function maxLengthInput(e) {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }
  return (
    <div className="flex flex-col  h-screen  p-3 mt-7 ">
      <div className="flex justify-between w-40  ">
        <img
          onClick={() => setAddProfile(false)}
          className="h-6"
          src="backIcon.png"
          alt=""
        />
        <h1 className="text-[#5B5B5B] text-md font-serif ">Add New Profile</h1>
      </div>

      <from className="flex flex-col space-y-2 mt-6 text-sm">
        <div>
          <h1 className="font-light">Name</h1>
          <input
            type="text"
            className="border-2 h-14 p-3 w-[100%] rounded-md focus:border-[#2098F3] outline-none "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h1 className="font-light">Date Of Birth</h1>
          <div className="flex justify-between  ">
            <input
              type="number"
              onInput={(e) => maxLengthInput(e)}
              maxLength="2"
              placeholder="DD"
              className="border-2 focus:border-[#2098F3] outline-none   w-24 rounded-md h-12 p-2"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="number"
              onInput={(e) => maxLengthInput(e)}
              maxLength="2"
              placeholder="MM"
              className="border-2 focus:border-[#2098F3] outline-none  w-24 rounded-md h-12 p-2"
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="number"
              onInput={(e) => maxLengthInput(e)}
              maxLength="4"
              placeholder="YYYY"
              className="border-2 focus:border-[#2098F3] outline-none  w-24 rounded-md h-12 p-2"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h1 className="font-light">Time Of Birth</h1>
          <div className="flex justify-between  ">
            <input
              type="number"
              onInput={(e) => maxLengthInput(e)}
              maxLength="2"
              placeholder="HH"
              className="border-2 focus:border-[#2098F3] outline-none  w-24 rounded-md p-2 h-12"
              onChange={(e) => setHour(e.target.value)}
            />
            <input
              type="number"
              onInput={(e) => maxLengthInput(e)}
              maxLength="2"
              placeholder="MM"
              className="border-2 focus:border-[#2098F3] outline-none   w-24 rounded-md p-2 h-12"
              onChange={(e) => setMinute(e.target.value)}
            />

            <form
              onClick={() => setClicked(true)}
              className="flex items-center justify-center border-b-2 rounded-md w-24 "
            >
              <label
                className={
                  changeBGcolorPM
                    ? "bg-[#4B60BC] p-2 text-white w-[100%] flex justify-center rounded-lg "
                    : "w-[100%] flex justify-center p-2"
                }
              >
                <h1 className="font-light">PM</h1>
                <input
                  id="PM"
                  className="hidden"
                  type="radio"
                  value="PM"
                  name="a"
                  onChange={(e) => setPm(e.target.value)}
                />
              </label>

              <label
                className={
                  changeBGcolorAM
                    ? "bg-[#4B60BC] p-2 text-white w-[100%] flex justify-center rounded-lg "
                    : "w-[100%] p-2 flex justify-center"
                }
              >
                <h1 className="font-light">AM</h1>
                <input
                  id="AM"
                  className="hidden"
                  type="radio"
                  value="AM"
                  name="a"
                  onChange={(e) => setAm(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
        <div className="">
          <h1 className="font-light">Place Of Birth</h1>
          <LocationSearchBar />
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[100%]">
            <h1 className="font-light">Gender</h1>
            <select
              className="bg-white p-5 w-[90%] border-2 outline-none"
              name="gender"
              id=""
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
          <div className="w-[100%] ">
            <h1 className="font-light">Relation</h1>
            <select
              className="bg-white p-5 w-[95%] border-2 outline-none"
              name="relation"
              id=""
              onChange={(e) => setRelation(e.target.value)}
            >
              <option value="Brother">Brother</option>
              <option value="Mother">Mother</option>
              <option value="Sister">Sister</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Spouse">Spouse</option>
              <option value="Father in Law">Father in Law</option>
              <option value="Mother in Law">Mother in Law</option>
              <option value="Uncle">Uncle</option>
              <option value="Aunt">Aunt</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
        </div>
        <br />
        <button
          onClick={handleAddDetails}
          className=" w-40 flex justify-center ml-[25%] p-3 text-white bg-[#FFA664] rounded-lg "
        >
          Save Changes
        </button>
      </from>
    </div>
  );
}

export default AddProfile;
