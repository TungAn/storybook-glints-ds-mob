import './Keyboard.css';

export interface KeyboardProps {
  platform?: 'ios' | 'android';
  type?: 'numeric' | 'qwerty' | 'hashtag';
  darkMode?: boolean;
  predictive?: boolean;
}

const numericKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];
const qwertyRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export function Keyboard({
  platform = 'ios',
  type = 'numeric',
  darkMode = false,
  predictive = false,
}: KeyboardProps) {
  return (
    <div className="aries-keyboard" data-dark={darkMode} data-platform={platform} data-type={type}>
      {predictive ? (
        <div className="aries-keyboard__predictive">
          <span>candidate</span>
          <span>jobs</span>
          <span>remote</span>
        </div>
      ) : null}
      {type === 'numeric' ? (
        <div className="aries-keyboard__numeric">
          {numericKeys.map((key) => (
            <button key={key} type="button">{key}</button>
          ))}
        </div>
      ) : (
        <div className="aries-keyboard__qwerty">
          {qwertyRows.map((row) => (
            <div key={row}>
              {row.split('').map((key) => (
                <button key={key} type="button">
                  {type === 'hashtag' && key === 'Q' ? '#' : key}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
