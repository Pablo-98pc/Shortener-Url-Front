import React from 'react'
import { Controller } from "react-hook-form";
import {
    TextField
  } from "@mui/material";
export const InputCustom = ({name,control,label,id,errors,type})=>  {
  return (
    <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id={id}
            label={label}
            variant="standard"
            error={!!errors}
            type={type?type:"text"}
            helperText={errors ? errors.message : ""}
          />
        )} 
      />
  )
}