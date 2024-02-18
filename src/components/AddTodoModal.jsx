export const AddTodoModal = (props) => {
  const { setClicked } = props;
  return (
    <div
      id='overlay'
      onClick={(e) => {
        if (!e.target.closest("#todo-form")) {
          return setClicked(false);
        }
      }}>
      <div id='todo-form'>
        <form>
          <label>Title</label>
          <input type='text' />
          <button>Add Todo</button>
        </form>
      </div>
    </div>
  );
};
