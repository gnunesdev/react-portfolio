type Items = string[];

export const Slider = ({ items }: { items: Items }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <List items={items} />
      <List items={items} />
    </div>
  );
};

const List = ({ items }: { items: Items }) => {
  return (
    <ul className="slide-container flex">
      {items.map((item, index) => (
        <li key={index} className="mx-4">
          <div className="h-36 w-72 rounded-full bg-amber-100"></div>
        </li>
      ))}
    </ul>
  );
};
