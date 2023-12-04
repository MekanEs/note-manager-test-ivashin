export const textHighlighter = (text: string) => {
  return text.split(' ').map((el, i) => {
    if (el.startsWith('#')) {
      return (
        <span key={el + i}>
          <span className='tag'>{el}</span>{' '}
        </span>
      );
    } else {
      return <span key={el + i}>{el + ' '}</span>;
    }
  });
};
