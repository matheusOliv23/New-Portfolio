import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import Select from "react-select"
import BrazilFlag from "src/assets/flags/brazil.svg"
import USFlag from "src/assets/flags/unitedstates.svg"

export type LanguageSelectorProps = {
  classNames?: string
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ classNames }) => {
  const { i18n } = useTranslation()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLanguageChange = (selectedOption: any) => {
    const selectedLanguage = selectedOption.value
    i18n.changeLanguage(selectedLanguage)
  }

  const currentLanguage = i18n.language

  const options = [
    {
      value: "en",
      label: (
        <div>
          <Image src={USFlag} alt="United States" width={30} height={30} />
        </div>
      )
    },
    {
      value: "pt-br",
      label: (
        <div>
          <Image src={BrazilFlag} alt="Brazil" width={30} height={30} />
        </div>
      )
    }
  ]

  return (
    <div className={`inline-block cursor-pointer bg-transparent ${classNames}`}>
      <Select
        className="!bg-black cursor-pointer"
        options={options}
        defaultValue={options.find((item) => item.value === "pt-br")}
        value={options.find((option) => option.value === currentLanguage)}
        onChange={handleLanguageChange}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            background: "black",
            border: "none",
            cursor: "pointer"
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "black",
            cursor: "pointer",
            ":hover": {
              background: "#0d1117"
            }
          }),
          container: () => ({
            background: "transparent"
          })
        }}
      />
    </div>
  )
}

export default LanguageSelector
