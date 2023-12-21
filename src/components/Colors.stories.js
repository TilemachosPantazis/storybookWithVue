

  import ColorDiv from './ColorDiv.vue';


export default {
  component: ColorDiv,
  title: 'Colors',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI

  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
    args: {
        color: 'var(--b100)'
    }
};
export const Secondary = {
    args: {
        color: 'var(--b200)'
    }};
