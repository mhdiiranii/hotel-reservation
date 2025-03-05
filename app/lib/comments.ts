export async function Comments() {
  const url = "http://localhost:4000/comments";
  let data = await fetch(url);
  let res = await data.json();
  return res;
}
