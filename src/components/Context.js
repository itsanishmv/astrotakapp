import React, { useState } from "react";
import { dataSharingPoint } from "./store";

function Context({ children }) {
  const [Selectedcategory, setSelectedCategory] = useState();
  const [openProfile, setOpenProfile] = useState(false)
  const [addProfile, setAddProfile] = useState(false)
  const [locationList, setLocationList] = useState([]);
  const [PlaceOfBirth, setPlaceOfBirth] = useState();
  return (
    <dataSharingPoint.Provider
      value={{PlaceOfBirth, setPlaceOfBirth,locationList, setLocationList,addProfile , setAddProfile,openProfile,setOpenProfile, Selectedcategory, setSelectedCategory }}
    >
      {children}
    </dataSharingPoint.Provider>
  );
}

export default Context;
