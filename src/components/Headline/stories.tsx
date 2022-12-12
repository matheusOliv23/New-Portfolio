import { ComponentStory, ComponentMeta } from "@storybook/react"

import Headline from "./index"

export default {
  title: "Headline",
  component: Headline
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = () => <Headline />

export const Default = Template.bind({})
Default.args = {
  title: "Headline"
}
