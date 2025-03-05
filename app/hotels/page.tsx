"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import MyApi from "../api/myApi";
import Image from "next/image";
import { Star } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { setLoading } from "../store/feature/searchSlice";
import Loading from "../(home)/loading";

export default function Hotels() {
  const hotels = useAppSelector((state) => state.search.myHotels);
  const data = localStorage.getItem("hotel");
  const [hotelItem, setHotelItem] = useState([]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.search);

  useEffect(() => {
    MyApi()
      .getHotel(data)
      .then((res) => {
        setHotelItem(res.data.data);
        dispatch(setLoading(false));
      });
  }, [hotels]);

  const clickHotel = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
    e.preventDefault();
    router.push(`/hotels/${item}`);
    dispatch(setLoading(true));
  };
  return loading ? (
    <div className="mt-10">
      <Loading size="2xl"/>
    </div>
  ) : (
    <div className="grid grid-cols-3 gap-4 py-4 container mx-auto px-4">
      {hotelItem?.map((item: any, index: number) => (
        <div
          onClick={(e) => {
            clickHotel(e, item.slug);
          }}
          className="flex flex-col gap-4 py-3 px-6 border hover:bg-[rgba(119,118,118,0.3)] duration-200 ease-linear rounded-lg"
          key={index}
        >
          <div className="h-[35vh] w-full flex justify-center ">
            <Image src={item.poster} alt="poster" width={300} height={300} className="h-full w-3/4 rounded-lg" />
          </div>
          <div className="flex w-full border-t pt-2 justify-between items-center">
            <div className="flex flex-row-reverse">
              <Star className="text-yellow-200" />
              <p className="">{item.rating}</p>
            </div>
            <div className="text-xl font-semibold">{item.name}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row-reverse gap-1 text-xs text-gray-500">
              <p>رضایت</p>
              {item.rating_user}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <p>شروع قیمت</p>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
