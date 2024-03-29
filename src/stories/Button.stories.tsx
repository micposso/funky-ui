// File: src/stories/Button.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../buttons/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} >My Button Component</Button>;

export const Default = Template.bind({});
