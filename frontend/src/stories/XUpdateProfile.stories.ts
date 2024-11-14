import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import XUpdateProfile from "@/components/XUpdateProfile";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "XUpdateProfile",
  component: XUpdateProfile,
  parameters: {
    layout: "fullscreen",
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof XUpdateProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
