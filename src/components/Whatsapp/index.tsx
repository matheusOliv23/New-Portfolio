import { RiWhatsappFill } from "react-icons/ri"

export default function Whatsapp() {
  return (
    <div className="fixed bottom-2 right-2 p-2 w-12 cursor-pointer hover:opacity-50 h-12 rounded-full bg-green-500">
      <a
        target="_blank"
        href="https://wa.me/31971472138?text=Olá Matheus, gostaria de conversar com você sobre uma proposta." rel="noreferrer"
      >
        {" "}
        <RiWhatsappFill size={32} />
      </a>
    </div>
  )
}
