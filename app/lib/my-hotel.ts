export async function myHotel() {
  const url = "http://localhost:4000/my-hotel";
  let data = await fetch(url);
  let res = await data.json();
  return res;
}
