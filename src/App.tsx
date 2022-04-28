import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React, { ChangeEventHandler, FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";


interface Props {
  control: Control<FieldValues, { [key: string]: any }>;
  name: string;
  defaultValue?: any;
  label?: string;
  error: { [key: string]: any };
  multiline?: boolean;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  icons?: any;
  style?: any;
  dataArray: { label: string; content: string }[];
  changeAC?: (e: any, value: any) => Promise<void>;
  changeInput?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const AutoCompleteInput: FunctionComponent<Props> = ({
  name,
  control,
  defaultValue,
  label,
  error,
  type = "text",
  style,
  dataArray,
  changeAC,
  changeInput,
  className = "",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          onChange={(event, item) => {
            onChange(item);
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#3F51B5",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#3F51B5",
            },
            "& .MuiAutocomplete-groupLabel": {
              fontFamily: "CodeProLC",
            },
          }}
          getOptionLabel={(option) => option.label}
          ListboxProps={{ style: { fontFamily: "CodeProLC" } }}
          style={style}
          options={dataArray}
          defaultValue={defaultValue}
          value={value}
          className={className}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              helperText={error[name] && error[name].message}
              error={error[name] ? true : false}
              type={type}
              InputLabelProps={{ style: { fontFamily: "CodeProLC" } }}
              sx={{
                "& .MuiInput-input": {
                  fontFamily: "CodeProLC",
                },
              }}
              variant="standard"
              onChange={changeInput}
            />
          )}
        />
      )}
    />
  );
};

export default AutoCompleteInput;