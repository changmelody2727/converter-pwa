"use client";
import { TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerController } from "@/components/DatePickerController";
import { useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { CheckboxController } from "@/components/CheckboxController";
import { useTranslation } from "react-i18next";
// import { DatePicker as DatePickerType } from '@mui/x-date-pickers/DatePicker/shared';

export type CountDateForm = {
  fromDate: Dayjs | null;
  endDate: Dayjs | null;
  includeEndDate: boolean;
};

export default function CountDays() {
  const [totalDays, setTotalDays] = useState<number>(0);
  const { t } = useTranslation();

  const handleChange = (newValue: CountDateForm) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    const { fromDate, endDate, includeEndDate } = newValue;
    if (fromDate && endDate) {
      const diff = includeEndDate
        ? endDate.diff(fromDate, "day") + 1
        : endDate.diff(fromDate, "day");
      setTotalDays(diff);
    }
  };

  const methods = useForm<CountDateForm>({
    defaultValues: {
      fromDate: dayjs(),
      endDate: dayjs(),
      includeEndDate: false,
    },
  });

  const { handleSubmit, control, reset, setValue, watch } = methods;
  console.log("🚀 ~ file: page.tsx ~ line 71 ~ CountDays ~ watch", watch());

  return (
    <div className="justify-center items-center flex flex-col text-dark-green container mx-auto py-5 gap-4">
      <text className="text-5xl">{t("countDays")}</text>
      <text>{t("selectDates")}:</text>
      <div className="gap-4 flex flex-row text-red-500">
        <DatePickerController
          label={t("from")}
          control={control}
          views={["month", "day"]}
          name={"fromDate"}
          required={true}
        />
        <DatePickerController
          label={t("to")}
          control={control}
          views={["month", "day"]}
          name={"endDate"}
          required={true}
        />
      </div>
      <CheckboxController
        name="includeEndDate"
        control={control}
        label="Include End Date"
      />
      <button
        onClick={handleSubmit(handleChange)}
        className="bg-green hover:bg-light-green text-light-teal font-bold py-2 px-4 rounded"
      >
        {t("calculate")}
      </button>
      <text className="text-xl">{t("result")}:</text>
      <text className="text-xl">
        {totalDays} {t("day")}
      </text>
    </div>
  );
}
