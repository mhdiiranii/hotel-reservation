"use client";

import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fragment, SetStateAction, useState } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { cityType } from "./homeMine";


interface componentType {
  data: cityType;
  title: string;
  setCity: (value: SetStateAction<null | string>) => void ;
}



export default function FilterBtn({ data , title,setCity }: componentType) {

  const selectCity = (popupState:any,name:string)=>{
    popupState.close();
    setCity(name)
  }

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <Fragment>
            <Button className="hover:bg-slate-100 hover:text-black" sx={{ color: "rgba(0,0,0,0.5)", border: "1px solid rgba(0,0,0,0.5)", fontSize: "14px" }} {...bindTrigger(popupState)}>
              {title}
            </Button>
            <Menu
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ marginTop: "5px" }}
              {...bindMenu(popupState)}
            >
              {data?.map((item, index) => (
                <MenuItem  key={index} sx={{ fontSize: "14px" }} onClick={()=>{selectCity(popupState,item.city_name)}}>
                  {item.persian_name}
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
        )}
      </PopupState>
    </div>
  );
}