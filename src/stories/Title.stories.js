import { Title } from '../components/Title/Title';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    title: {
      type: 'string',
      description: 'Heading name',
      defaultValue: 'title',
      options: ['Contacts', 'Contacts 📞'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = arg => <Title {...arg} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Contacts 📞',
};
