export default function NavBar() {
  return (
    <div>
      <button>Reset</button>
      <div>
        <select name="order">
          <option>Ordering by Name</option>
          <option value="upward">Upward</option>
          <option value="falling">Falling</option>
        </select>
      </div>
      <div>
        <select name="order">
          <option>Ordering by Year</option>
          <option value="upward">Upward</option>
          <option value="falling">Falling</option>
        </select>
      </div>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </div>
  );
}
