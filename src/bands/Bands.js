import { useSelector } from 'react-redux';

function Bands() {
  const bands = useSelector(state => state.bands);
  return (
    <div className="w-1/3 px-2">
      <ul className="pl-2 pr-8">
        {bands.map(band => (
          <li className="mb-2">
            {band.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bands;
