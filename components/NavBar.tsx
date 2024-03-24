"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import { useCallback } from "react";
import TranslationProvider from "@/components/TranslationProvider";
import LanguageChanger from "@/components/LanguageChanger";
import initTranslations from "@/app/i18n";
import mathLogo from "@/public/math-logo.svg";

export default function NavBar() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className=" bg-green px-8 py-4">
      <div className="flex justify-between flex-row ">
        <div></div>
        <div>
          <Image
            src={mathLogo}
            alt="logo"
            width={300}
            height={300}
            className="rounded-full cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <LanguageChanger />
      </div>
    </div>
  );
}
