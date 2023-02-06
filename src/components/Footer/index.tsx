export default function Footer() {
  return (
    <div className="flex flex-col bg-black items-center p-4 justify-center">
      <h1 className="text-lg">
        Desenvolvido por{" "}
        <strong className="text-secondary">Matheus H Oliveira</strong>
      </h1>
      <p>Todos os direitos reservados</p>
      <span>Copyright @{new Date().getFullYear()}</span>
    </div>
  )
}
