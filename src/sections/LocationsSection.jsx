import React from "react";
import img from "../assets/location-section.png";
import ShopLocation from "../components/ShopLocation";
function LocationsSection(props) {
  const locationsData = [
    {
      id: 0,
      location: "Nyhavn",
      description: "Gelato & Churros",
      address1: "Nyhavn 19",
      address2: "1051 København, Denmark",
    },
    {
      id: 1,
      location: "Kongens Nytorv",
      description: "Waffle Sticks & Churros",
      address1: "Ostergade 4",
      address2: "1100 København, Denmark",
    },
    {
      id: 2,
      location: "Stroget",
      description: "Waffle Sticks & Churros",
      address1: "Nygade 6",
      address2: "1164 København, Denmark",
    },
    {
      id: 3,
      location: "Norreport",
      description: "Waffle Sticks & Churros",
      address1: "Frederiksborggade 3",
      address2: "1360 København, Denmark",
    },
    {
      id: 4,
      location: "RADHUSPLADSEN",
      description: "Cafe",
      address1: "Frederiksborggade 32",
      address2: "1459 København, Denmark",
    },
    {
      id: 5,
      location: "Rodovre",
      description: "Gelato & Churros",
      address1: "Rodovre Centrum 146",
      address2: "2610 Rodovre, Denmark",
    },
    {
      id: 6,
      location: "Dragor",
      description: "Cafe & Bakery",
      address1: "Kongevejen 13b",
      address2: "2791 Dragor, Denmark",
    },
    {
      id: 7,
      location: "Odense",
      description: "Gelato & Churros",
      address1: "Orbaekvej 75",
      address2: "5220 Odense, Denmark",
    },
  ];
  return (
    <section className={props.class}>
      <h3 className={props.titleClass}>{props.title}</h3>
      <div className="relative border border-2 border-[#fee3bb] pt-[10px] pl-[10px] rounded-[24px] h-[200px] w-[220px] sm:h-[370px] sm:w-[570px] lg:h-[413px] lg:w-[912px]">
        <img
          src={img}
          alt=""
          className="rounded-[20px] w-full h-full object-cover absolute"
        ></img>
        <div className="border boder-2 border-[#08b7b3] rounded-[24px] h-full w-full absolute top-[20px] -right-[20px] -z-10"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 gap-y-8 sm:gap-x-24 lg:gap-x-64 mt-[40px]">
        {locationsData.map((item) => (
          <ShopLocation
            key={item.id}
            location={item.location}
            description={item.description}
            address1={item.address1}
            address2={item.address2}
          />
        ))}
      </div>
    </section>
  );
}

export default LocationsSection;
