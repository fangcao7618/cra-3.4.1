import "./index.scss";
function App() {
  return (
    <form>
      <fieldset className="todo-list">
        <legend className="todo-list__title">My Special Todo List</legend>
        <label className="todo-list__label">
          <input type="checkbox" name="" id="" />
          <i className="check"></i>
          <span>Make awesome CSS animation</span>
        </label>
        <label className="todo-list__label">
          <input type="checkbox" name="" id="" />
          <i className="check"></i>
          <span>Watch awesome bangumi</span>
        </label>
        <label className="todo-list__label">
          <input type="checkbox" name="" id="" />
          <i className="check"></i>
          <span>Encounter awesome people</span>
        </label>
        <label className="todo-list__label">
          <input type="checkbox" name="" id="" />
          <i className="check"></i>
          <span>Be an awesome man</span>
        </label>
      </fieldset>
    </form>
  );
}
export default App;
