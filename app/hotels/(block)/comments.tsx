import MyApi from "@/app/api/myApi";
import { Person } from "@mui/icons-material";

export type commentsType = {
  comments: string;
};

export default async function Comments(comments: commentsType) {
  const res = await MyApi().getCommentsHotel(comments);
  const data = await res.data.items;
  
  return (
    <div className="flex flex-col w-full gap-4">
      {data[0]?.comments?.map((item: any, index: number) => {
        const name = item.email.split("@");
        return (
          <div key={index} className="border rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full border p-1 text-xs">
                <Person />
              </div>
              <h2 className="text-lg font-semibold uppercase">{name[0]}</h2>
            </div>
            <p className="px-6 py-4">{item.about}</p>
          </div>
        );
      })}
    </div>
  );
}
