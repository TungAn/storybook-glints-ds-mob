import { Avatar } from '../Avatar/Avatar';
import { NavHeader } from '../Navigation/Navigation';
import { Icon } from '../shared/Icon';
import './Chat.css';

export type ChatUserType = 'sender' | 'receiver' | 'system';
export type ChatBubbleType = 'text' | 'link' | 'file' | 'image';
export type ChatBoxState = 'default' | 'focus' | 'populated' | 'disabled';

export interface ChatBubbleProps {
  userType?: ChatUserType;
  bubbleType?: ChatBubbleType;
  message?: string;
  timestamp?: string;
}

export function ChatBubble({
  userType = 'sender',
  bubbleType = 'text',
  message = 'Hi, I am interested in this role.',
  timestamp = '10:24',
}: ChatBubbleProps) {
  if (userType === 'system') {
    return <div className="aries-chat-system">{message}</div>;
  }

  return (
    <div className="aries-chat-bubble-row" data-user-type={userType}>
      {userType === 'receiver' ? <Avatar name="Recruiter" size={32} /> : null}
      <div className="aries-chat-bubble" data-bubble-type={bubbleType} data-user-type={userType}>
        {bubbleType === 'image' ? <div className="aries-chat-bubble__image" /> : null}
        {bubbleType === 'file' ? (
          <span className="aries-chat-bubble__file">
            <Icon name="paperclip" size={16} />
            <strong>{message}</strong>
            <small>PDF, 1.2 MB</small>
          </span>
        ) : bubbleType === 'link' ? (
          <span className="aries-chat-bubble__link">
            <strong>{message}</strong>
            <small>glints.com</small>
          </span>
        ) : (
          <span>{message}</span>
        )}
        <time>{timestamp}</time>
      </div>
    </div>
  );
}

export interface ChatBoxProps {
  state?: ChatBoxState;
  value?: string;
  placeholder?: string;
}

export function ChatBox({
  state = 'default',
  value = '',
  placeholder = 'Write your message...',
}: ChatBoxProps) {
  const populatedValue = value || 'Hello, I am available for an interview this week.';
  const disabled = state === 'disabled';
  const content = state === 'populated' ? populatedValue : value;

  return (
    <form className="aries-chat-box" data-state={state}>
      <button aria-label="Attach file" disabled={disabled} type="button">
        <Icon name="paperclip" size={22} />
      </button>
      <textarea disabled={disabled} placeholder={placeholder} readOnly value={content} />
      <button aria-label="Send message" disabled={disabled || (!content && state !== 'focus')} type="button">
        <Icon name="send" size={22} />
      </button>
    </form>
  );
}

export function ChatScreenExample() {
  return (
    <section className="aries-chat-screen">
      <NavHeader actionIcon="settings" avatar title="Lina Recruiter" />
      <div className="aries-chat-screen__messages">
        <ChatBubble message="Today" userType="system" />
        <ChatBubble
          message="Hi, thanks for applying. Are you open to chat about the Product Designer role?"
          timestamp="10:21"
          userType="receiver"
        />
        <ChatBubble message="Yes, happy to discuss." timestamp="10:24" />
        <ChatBubble bubbleType="file" message="Portfolio.pdf" timestamp="10:25" />
      </div>
      <ChatBox state="populated" value="I can share more details here." />
    </section>
  );
}
