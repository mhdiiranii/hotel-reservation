import { searchDataType } from "../(home)/homeMine";
import MyApi from "../api/myApi";

export async function searchHotel(dataSend?: searchDataType | undefined) {
  try {
    console.log(dataSend)
    if (!dataSend) {
      const res = await MyApi().getHotel(null);
      const hotels = res.data;
      return hotels;
    }
    const res = await MyApi().getHotel(dataSend);
    const hotels = res.data;
    return hotels;
  } catch (error) {
    return null;
  }
}
