import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';
import { useForm } from 'react-hook-form';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: StoryFn<any> = (args: any) => {
  const { control } = useForm();
  return (
    <div className="p-4 bg-gray-100">
      <Select control={control} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'pokemonTeam',
  rules: {
    required: 'You must select 4 Pokémon',
  },
  options: [
    { value: 'pikachu', label: 'Pikachu' },
    { value: 'charmander', label: 'Charmander' },
    { value: 'bulbasaur', label: 'Bulbasaur' },
    { value: 'squirtle', label: 'Squirtle' },
  ],
};