"use client";

import Image from "next/image";
import { AF, AR, BR, CN, FR, GE, GR, IQ, IR, KR, RU, SA, TR, US } from "country-flag-icons/react/3x2";
import { EventHandler, useEffect, useState } from "react";
import MyApi from "../api/myApi";
import RatingHotel from "./rating";
import FilterBtn from "./cityName";
import { Search } from "@mui/icons-material";
import { useAppDispatch } from "../hook/hooks";
import { setHotelsData, setLoading } from "../store/feature/searchSlice";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

const countryLeft = [<US />, <FR />, <AF />, <BR />, <AR />, <GR />, <GE />];
const countryRight = [<IR />, <CN />, <RU />, <KR />, <SA />, <IQ />, <TR />];

interface dataType {
  _id: number;
  city_name: string;
  persian_name: string;
}
export type cityType = dataType[] | undefined;

export type searchDataType = {
  rating?: string | null;
  city?: string | null;
};

export function HomeMine() {
  const [ratingStar, setRatingStar] = useState<null | number>(null);
  const [city, setCity] = useState<null | string>(null);
  const [cityName, setCityName] = useState<cityType | undefined>();
  const [searchHotel, setSearchHotel] = useState<searchDataType | null>({});
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    MyApi()
      .getCityName()
      .then((res) => setCityName(res.data.items));
  }, []);
  useEffect(() => {
    setSearchHotel({
      rating: ratingStar?.toString(),
      city: city,
    });
  }, [ratingStar, cityName, city]);

  const sendData = (e:React.MouseEvent<HTMLButtonElement>) => {
    let hotel = JSON.stringify(searchHotel)
    localStorage.setItem('hotel',hotel)
    dispatch(setLoading(true))
    e.preventDefault()
    dispatch(setHotelsData(searchHotel));
    router.push("/hotels");
  };

  return (
    <div className="flex flex-col items-center w-full  h-screen">
      <div className="w-full flex justify-center ">
        <div className=" flex justify-center w-full relative">
          <div className="w-full h-full top-0 absolute effect-image"></div>
          <Image className="w-2/3 h-[44vh]" src={"/hotel-image.jpg"} width={1000} height={200} alt="image" />
          <Image className="absolute z-10 left-0 bottom-0" src={"/man-travel.jpg"} width={250} height={200} alt="image" />
          <Image className="absolute z-10 right-0 bottom-0 " src={"/women-travel.jpg"} width={200} height={200} alt="image" />
        </div>
      </div>
      <div className="flex justify-center py-2 px-4 w-full">
        <div className="w-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] rounded-lg flex justify-between p-1 border ">
          <div className="w-full gap-2 flex items-center justify-center">
            {countryLeft.map((item, index) => (
              <div key={index} className="w-10">
                {item}
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            {/* <SearchHome dataSend={searchHotel} /> */}
            <button onClick={sendData} className="text-[rgba(0,0,0,0.5)] border py-1 px-2 rounded-full hover:text-black hover:bg-gray-100">
              <Search />
            </button>
            <FilterBtn data={cityName} title={"city"} setCity={setCity} />
            <RatingHotel setRating={setRatingStar} />
          </div>
          <div className="w-full gap-2 flex items-center justify-center">
            {countryRight.map((item, index) => (
              <div key={index} className="w-10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden flex justify-center relative">
        <Image src={"/travel-world.jpg"} width={2000} height={2000} alt="world" className="w-full -translate-y-1/3 h-[100vh] rounded-xl opacity-90" />
      </div>
    </div>
  );
}
