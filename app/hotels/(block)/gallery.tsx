"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/app/hook/hooks";
import { setImageModal, setLoading, setSrcImageModal } from "@/app/store/feature/searchSlice";

export default function Gallery({ itemData }: any) {

  const dispatch = useAppDispatch();

  const imageModal = (src:string)=>{
    dispatch(setSrcImageModal(src))
    dispatch(setImageModal(true))
    dispatch(setLoading(true))
  }

  return (
    <Masonry className="w-4/6" columns={3} spacing={2} defaultColumns={1} defaultSpacing={1} sequential>
      {itemData?.map((item: string, index: number) => (
        <div onClick={()=>imageModal(item)} key={index}>
          <Image
            src={item}
            width={200}
            height={200}
            alt="image"
            loading="lazy"
            style={{
              borderRadius: "10px",
              display: "block",
              width: "100%",
              height: "auto",
            }}
            className="shadow-[5px_5px_10px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      ))}
    </Masonry>
  );
}
