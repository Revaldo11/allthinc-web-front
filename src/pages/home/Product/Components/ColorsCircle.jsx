import PropTypes from 'prop-types';

const ColorsCircle = ({ colors }) => {
  return (
    <div className="circle__color">
      {colors.map((color, index) => (
        <div key={index} className="circle__color__inner" style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

ColorsCircle.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorsCircle;
