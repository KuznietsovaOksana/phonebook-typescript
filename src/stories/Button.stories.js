import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      type: 'button',
      description: 'Button type',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
    radius: {
      type: 'string',
      description: 'Border radius',
      defaultValue: '5px',
      options: ['5px', '10px'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Background color',
      defaultValue: 'lightgrey',
      options: ['lightgrey', 'pink', 'lightgreen', 'lightblue', 'tomato'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = arg => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  radius: '5px',
  type: 'button',
  border: 'none',
  color: 'lightgrey',
  height: '30px',
  width: '200px',
  children: 'Button',
  cursor: 'pointer',
};

export const Pink = Template.bind({});
Pink.args = {
  radius: '10px',
  type: 'submit',
  border: '3px transparent solid',
  color: 'pink',
  height: '40px',
  width: '200px',
  children: 'Create',
  cursor: 'pointer',
};
