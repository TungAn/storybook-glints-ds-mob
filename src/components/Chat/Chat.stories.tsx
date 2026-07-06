import type { Meta, StoryObj } from '@storybook/react';
import { ChatBox, ChatBubble, ChatScreenExample } from './Chat';

const meta: Meta<typeof ChatBubble> = {
  title: 'Components/Chat/Chat',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const SenderText: Story = {};

export const ReceiverText: Story = {
  args: {
    userType: 'receiver',
    message: 'Thanks for applying. Could you share your portfolio?',
  },
};

export const ContentTypes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <ChatBubble message="Plain message from the candidate." />
      <ChatBubble bubbleType="link" message="Portfolio website" />
      <ChatBubble bubbleType="file" message="Resume.pdf" />
      <ChatBubble bubbleType="image" message="Image attachment" />
      <ChatBubble message="Interview scheduled" userType="system" />
    </div>
  ),
};

export const ChatBoxStates: StoryObj<typeof ChatBox> = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <ChatBox />
      <ChatBox state="focus" />
      <ChatBox state="populated" />
      <ChatBox state="disabled" />
    </div>
  ),
};

export const ScreenComposition: StoryObj<typeof ChatScreenExample> = {
  render: () => <ChatScreenExample />,
};
