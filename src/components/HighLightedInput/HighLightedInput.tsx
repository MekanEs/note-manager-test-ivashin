import { useRef, FC, ChangeEventHandler } from 'react';
import './HighLightedInput.css';

const REGEX = new RegExp(/#[a-zA-Z]+/gi);
export interface HighLightedInputProps {
  text: string;
  cb: ChangeEventHandler<HTMLInputElement>;
}
export const HighLightedInput: FC<HighLightedInputProps> = ({ text, cb }) => {
  const ref = useRef<HTMLDivElement>(null);

  const syncScroll: React.UIEventHandler<HTMLInputElement> = (e) => {
    if (ref.current) {
      ref.current.scrollTop = (e.target as HTMLElement).scrollTop;
      ref.current.scrollLeft = (e.target as HTMLElement).scrollLeft;
    }
  };

  return (
    <div className='input-container'>
      <input
        value={text}
        onChange={cb}
        onScroll={syncScroll}
        placeholder='This is a placeholder!'
      />
      <div ref={ref} className='input-renderer'>
        {text.split(' ').map((word, i) => {
          if (word.match(REGEX) !== null) {
            return (
              <span>
                <span key={i} className='tag'>
                  {word}
                </span>
                &nbsp;
              </span>
            );
          } else {
            return <span key={i}>{word + ' '}</span>;
          }
        })}
      </div>
    </div>
  );
};
