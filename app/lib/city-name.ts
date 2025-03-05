export async function cityName() {
  const url = "http://localhost:4000/filter";
  let data = await fetch(url);
  let res = await data.json();
  return res;
}
