import axios from "axios";
import { searchDataType } from "../(home)/homeMine";
import { commentsType } from "../hotels/(block)/comments";


const MyApi = () => {
  const AxiosReqest = axios.create({
    baseURL: process.env.Back_end || "",
    headers: {
      "Content-Type": "application/json",
    },
  });


  const getCityName = () => AxiosReqest.get("/api/city-name");
  const getHotel = (data: string|searchDataType | null) => AxiosReqest.post("/api/hotel", data);
  const getSlugHotel = (id: string) => AxiosReqest.get(`/api/hotel/${id}`);
  const getCommentsHotel = ( comments : commentsType ) => AxiosReqest.post(`/api/hotel/comments`, comments);
  return {
    getCityName,
    getHotel,
    getSlugHotel,
    getCommentsHotel
  };
};

export default MyApi;
