import MyApi from "@/app/api/myApi";
import { Star } from "@mui/icons-material";
import Image from "next/image";
import Gallery from "../(block)/gallery";
import Comments from "../(block)/comments";

import IsLike from "../(block)/islike";
import ImageModal from "../(block)/imageModal";
import Loading from "@/app/(home)/loading";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await MyApi().getSlugHotel(slug);
  const data = res.data.items;

  if(res.status !== 200){
    
    return <Loading/>
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full flex justify-center relative items-center">
        <div className="w-[95%]  h-full top-0 absolute effect-image"></div>
        <Image src={data.poster} width={400} height={400} alt="poster" className="w-3/4 h-[50vh] shadow-[2px_2px_15px_1px_rgba(0,0,0,0.2)]" />
      </div>
      <div className="flex w-4/6 justify-between items-center px-4">
        <div className="flex flex-col">
          <p className="text-xl font-semibold uppercase">{data.location}</p>
          <div className="flex items-center">
            <Star className="text-yellow-400" />
            <p className="text-xl font-semibold">{data.rating}</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold font-serif">{data.name}</h1>
      </div>
      <div className="w-4/6 px-4 flex justify-between items-start">
        <div className="flex justify-end w-1/3 text-lg font-serif opacity-70 flex-row-reverse gap-2">
          <p>شروع قیمت</p>
          <p className="w-1/3">{data.price}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-serif opacity-70">{data.addres}</p>
          <div className="flex flex-row-reverse items-center gap-1">
            <p className="text-sm font-serif opacity-70 pt-1">نظر کاربران</p>
            <p className="text-sm font-serif opacity-70 text-red-500">{data.rating_user}</p>
          </div>
        </div>
      </div>
      <div className="flex w-4/6 px-4 justify-between border-b pb-1 items-center">
        <IsLike />
        <h2 className="text-2xl font-bold font-serif">Gallery</h2>
      </div>
      <Gallery itemData={data.images} />
      <div className="w-4/6 flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-serif">Comments</h2>
        <Comments comments={data.slug} />
      </div>
      <ImageModal/>
    </div>
  );
}
