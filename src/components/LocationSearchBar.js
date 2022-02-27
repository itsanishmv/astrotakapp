import React, { useContext } from 'react'
import { dataSharingPoint } from './store'

function LocationSearchBar() {
    const { locationList, setPlaceOfBirth, setLocationList, PlaceOfBirth ,  } = useContext(dataSharingPoint)

    function fetchLocationApi(e) {
        fetch(
          `https://staging-api.astrotak.com/api/location/place?inputPlace=${e.target.value}`
        )
          .then((res) => res.json())
          .then((data) => setLocationList(data.data));
      }
      function optimizeApiCall(fn, delay) {
        let timer;
        return function (e) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn(e);
          }, delay);
        };
      }
    const Debounce = optimizeApiCall(fetchLocationApi, 500);
    
  return (
      <div>
        <input
            onChange={Debounce}
            type="text"
              className="border-2 p-3 w-[100%] h-14  rounded-md focus:border-[#2098F3] outline-none "
            contentEditable={true}
            value={PlaceOfBirth}
          />
        {!locationList?.length == 0 && !PlaceOfBirth && (
            <div className="absolute bg-white h-40 w-[93%] p-2 overflow-x-scroll mt-2">
              {locationList?.map((location) => (
                <p
                  onClick={() => setPlaceOfBirth(location.placeName)}
                  className="w-[100%]  mt-5  "
                >
                  {location.placeName}
                </p>
              ))}
            </div>
        )}
    </div>
  )
}

export default LocationSearchBar