import SpiralWords from "@/components/SpiralWords";
import initTranslations from "../i18n";
import Link from "next/link";
import { useState } from "react";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className=" items-center flex flex-col text-dark-green container mx-auto py-5 gap-4 flex-1">
      <text className="text-6xl text-green">{t("welcome")}</text>
      <SpiralWords />
    </div>
  );
}
