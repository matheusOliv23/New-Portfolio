import Button from "../Button"
import {
  ButtonContainerStyls,
  HeadlineContainer,
  SubtitleStyles,
  TextStyles,
  TitleStyles
} from "./styles"

export default function Headline() {
  return (
    <div className={HeadlineContainer}>
      <h1 className={TitleStyles}>MATHEUS HENRIQUE OLIVEIRA</h1>
      <h2 className={SubtitleStyles}>
        Desenvolvedor <strong className="text-primary">Front-End</strong>
      </h2>
      <h3 className={TextStyles}>
        Transformando sonhos em realidade por meio da tecnologia
      </h3>
      <div className={ButtonContainerStyls}>
        <Button type="button" variant="PRIMARY">
          Quem sou eu
        </Button>
      </div>
    </div>
  )
}
