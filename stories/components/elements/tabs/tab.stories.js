import Tab from '../../../../components/elements/tabs/tab'

export default {
  title: 'Elements/Tabs/Tab',
  component: Tab
}

export const Template = (args) => (<Tab {...args} />)

export const Active = Template.bind({})
Active.args = {
  label: 'Active',
  activeTab: 'Active'
}

export const Inactive = Template.bind({})
Inactive.args = {
  label: 'Inactive',
  activeTab: ''
}
