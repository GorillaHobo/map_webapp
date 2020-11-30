import React, { useContext, useState } from "react";
import PopupMenu from "./PopupMenu";
import MapIcons from "./MapIcons";
import { LocationContext } from "../contexts/LocationContext";
import "../scss/mainmap.scss";

const MainMap = (props) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const {
    currentLocation,
    currentAttraction,
    availableAttractions,
    currentLanguage,
  } = locationState;
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="mainmap">
      <img
        className="mainmap-image"
        alt=""
        src={currentLocation.mapImage}
        onClick={() => setPopupOpen(false)}
      />
      <MapIcons
        currentLocation={currentLocation}
        availableAttractions={availableAttractions}
        locationDispatch={locationDispatch}
        currentAttraction={currentAttraction}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
      <PopupMenu
        currentAttraction={currentAttraction}
        currentLanguage={currentLanguage}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        setOpenDetails={props.setOpenDetails}
      />
    </div>
  );
};

export default MainMap;
