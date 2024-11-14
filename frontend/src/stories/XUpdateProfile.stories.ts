import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import XUpdateProfile from "@/components/XUpdateProfile";
import { ProfileType } from "@/types/types";

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
  args: {
    profileType: ProfileType.applicant,
    onUpdateProfile: () => {},
  },
};

export const Secondary: Story = {
  args: {
    profileType: ProfileType.company,
    onUpdateProfile: () => {},
  },
};
