export const TodoItems = (props) => {
  const { name } = props;
  return (
    <>
      {name.map((item, index) => {
        return (
          <div className='todo-items' key={index}>
            <div className='todo-item'>
              <input type='checkbox' name='' id='' />
              <span>{item}</span>
            </div>
            <div className='three-dot'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </div>
        );
      })}
    </>
  );
};
