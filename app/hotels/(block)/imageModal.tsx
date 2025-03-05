"use client";

import { CloseFullscreen, CloseRounded } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import Image from "next/image";
import { setImageModal, setLoading, setSrcImageModal } from "@/app/store/feature/searchSlice";
import Loading from "@/app/(home)/loading";
import { useEffect } from "react";

const ImageModal = () => {
  const image = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(setSrcImageModal(""));
    dispatch(setImageModal(false));
  };

  return (
    image.imageModal && (
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="shadow-[0_0_20px_10px_rgba(0,0,0,0.5)] relative w-4/6 border flex justify-center items-center bg-white p-6 rounded-lg">
          <button onClick={closeModal} className="absolute top-0 right-1 p-1 rounded-full">
            <CloseRounded />
          </button>
          <Image width={700} height={400} alt="image" className="h-[70vh] rounded-lg" src={image.srcImageModal} />
        </div>
      </div>
    )
  );
};

export default ImageModal;
