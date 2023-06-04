import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col bg-black items-center p-4 justify-center">
      <h1 className="text-lg">
        {t("footer.dev")}{" "}
        <strong className="text-secondary">Matheus H Oliveira</strong>
      </h1>
      <p>{t("footer.all")}</p>
      <span>Copyright @{new Date().getFullYear()}</span>
    </div>
  )
}
