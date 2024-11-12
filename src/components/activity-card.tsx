interface Iprops {
    color: string;
    title: string;
    textColor: string;
    buttonColor: string;
}
const ActivityCard = ({ color,title,buttonColor,textColor }: Iprops) => {
  return (
    <div
      className={`text-white p-6 rounded-lg w-72`}
      style={{ backgroundColor: color }}
    >
      <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>
        {title}
      </h2>
      <p className="text-sm mb-4" style={{ color: textColor }}>
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full font-semibold mt-4"
        style={{
          backgroundColor: buttonColor,
          color: buttonColor === "#FFFFFF" ? "#0D6EFD" : "#FFFFFF",
        }}
      >
        Add {title}
      </button>
    </div>
  );
};

export default ActivityCard;
