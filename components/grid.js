const Grid = ({
  data = [],
  minPlaceholders,
  renderItem,
  renderPlaceholder,
}) => {
  let placeholdersToAdd = 0;
  if (data.length < minPlaceholders) {
    placeholdersToAdd = minPlaceholders - data.length;
  }

  const placeholders = Array.from(Array(placeholdersToAdd).keys());

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {data.map(renderItem)}
        {placeholders.map(renderPlaceholder)}
      </div>
    </div>
  );
};
export default Grid;
