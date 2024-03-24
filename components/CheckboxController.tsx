import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import React from "react";
import { Controller } from "react-hook-form";

interface CheckboxControllerProps {
  name: string;
  control: any;
  label?: string;
  errorText?: string;
  disabled?: boolean;
  rules?: any;
  onChange?: (e: boolean) => void;
}

export const CheckboxController = (props: CheckboxControllerProps) => {
  const {
    label,
    name,
    control,
    disabled,
    errorText,
    // defaultValue = false,
    onChange: customOnChange,
    rules = {},
  } = props;

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          rules={rules}
          // defaultValue={defaultValue}
          render={({
            field: { onChange, onBlur, value = false, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => {
            return (
              <>
                <Checkbox
                  checked={value}
                  onChange={(e) => {
                    onChange(e.target.checked);
                    if (customOnChange) customOnChange(e.target.checked);
                  }}
                  disabled={disabled}
                />
                {(errorText || error) && (
                  <FormHelperText
                    id="component-error-text"
                    style={{ color: "#f44336" }}
                  >
                    {errorText || error?.message}
                  </FormHelperText>
                )}
              </>
            );
          }}
        />
      }
      label={label}
    />
  );
};
