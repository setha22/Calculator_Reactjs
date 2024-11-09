const History = ({ title, onDelete }) => {
    return (
      <li>
        <p>{title}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  };
export default History