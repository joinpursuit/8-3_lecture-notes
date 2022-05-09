// Create a functional DISPLAY COMPONENT
const PersonCardFunctional = (props) => {
  // destructure (or unpack) props into variables
  const { name, img, date } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Up to date as of: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}
      </p>
      <img src={img} />
    </div>
  );
};

export default PersonCardFunctional;
