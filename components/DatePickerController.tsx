import { Typography } from "@mui/material";
import { DatePicker, DateValidationError, DateView } from "@mui/x-date-pickers";
import React from "react";
import { Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import weekday from "dayjs/plugin/weekday";

interface DatePickerControllerProps {
  name: string;
  control: any;
  errorText?: string;
  onChange?: (e: any) => void;
  required?: boolean;
  sx?: any;
  slotProps?: any;
  slots?: any;
  rules?: any;
  value?: string;
  format?: string;
  openTo?: string;
  disablePast?: boolean;
  views: DateView[];
  onMonthChange?: (date: any) => void;
  onYearChange?: (date: any) => void;
  minDate?: Dayjs;
  dateRange?: number;
  weekendAllow?: boolean;
  label: string;
}

dayjs.extend(weekday);
export const DatePickerController = (props: DatePickerControllerProps) => {
  const {
    name,
    control,
    errorText,
    value,
    sx,
    required,
    rules = {},
    format,
    slots,
    disablePast,
    views,
    slotProps,
    minDate,
    dateRange,
    weekendAllow = false,
    label,
  } = props;

  const disableWeekends = (date: dayjs.Dayjs) => {
    const day = date.weekday();
    return day === 0 || day === 6; // 0 是周日，6 是周六
  };
  const [error, setError] = React.useState<DateValidationError | null>(null);

  const errorMessage = React.useMemo(() => {
    switch (error) {
      case "minDate": {
        return errorText;
      }
      case "maxDate": {
        return errorText;
      }

      default: {
        return "";
      }
    }
  }, [error]);

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "Required" }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div className="flex flex-col w-full ">
          <DatePicker
            label={label}
            views={views}
            disablePast={disablePast}
            value={value ? dayjs(value) : null}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            format={format}
            slots={slots}
            onError={(newError) => setError(newError)}
            slotProps={{
              textField: {
                helperText: errorMessage,
              },
            }}
            minDate={minDate ? minDate : undefined}
            maxDate={dateRange ? dayjs().add(dateRange, "day") : undefined}
            // sx={
            //   error
            //     ? {
            //         ...sx,
            //         "& fieldset": {
            //           borderColor: "#ba0d0d",
            //           borderWidth: 1,
            //           borderRadius: 0,
            //         },
            //       }
            //     : {
            //         ...sx,
            //         "& fieldset": {
            //           borderColor: "#40514e",
            //           borderWidth: 1,
            //           borderRadius: 0,
            //         },
            //       }
            // }
          />
          {error && (
            <Typography
              sx={{ color: "#ba0d0d", fontSize: "12px", paddingLeft: 2 }}
            >
              {error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
};
