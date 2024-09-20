interface IDisplayData {
  data: Record<string, any>;
}

const DisplayData: React.FC<IDisplayData> = ({ data }) => {
  return (
    <div className="w-96 my-8 p-8 border border-stone-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">User data:</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="mb-2 pt-2">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
