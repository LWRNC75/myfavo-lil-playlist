import 'bootstrap/dist/css/bootstrap.min.css';

const Beats = ({ beatData, removeBeat, id }) => {
  return (
    <tr className='beatslist__row'>
      <td className='beatslist__item'>{beatData.title}</td>
      <td className='beatslist__item'>{beatData.artist}</td>
      <td className='beatslist__item'>{beatData.genre}</td>
      <td className='beatslist__item'>{beatData.rating}</td>
      <td>
        <button onClick={() => removeBeat(id)}>DELETE</button>
      </td>
    </tr>
  );
};

export default Beats;
