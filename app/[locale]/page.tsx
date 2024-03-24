import initTranslations from "../i18n";
import Link from "next/link";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="justify-center items-center flex flex-col text-dark-green container mx-auto py-5 gap-4">
      <text className="text-8xl">{t("welcome")}</text>
      <div className="flex flex-col w-8/12 gap-4">
        <text className="text-2xl">{t("whatToMath")}?</text>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/count-days">
              <text>{t("countDays")} </text>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
