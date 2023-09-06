import type { Meta, StoryObj } from "@storybook/react";

import { BrzButton } from "../components/BrzButton";
import { ButtonVariant } from "@brz/brz-button";

const meta = {
  title: "BrzComponents/BrzButton",
  component: BrzButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof BrzButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
    buttonText: "Click Me",
  },
};
