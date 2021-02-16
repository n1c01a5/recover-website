import { Page } from './page'
import * as HeaderStories from './header.stories'

export default {
  title: 'Example/Page',
  component: Page
}

const Template = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
}
