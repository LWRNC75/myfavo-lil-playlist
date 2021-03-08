import Beats from './Beats';

const BeatsOutput = (props) => {
  const BeatsListItems = props.beats.map((beat) => {
    return <Beats beatData={beat} key={beat.id} removeBeat={props.removeBeat} id={beat.id} />;
  });

  return <tbody>{BeatsListItems}</tbody>;
};

export default BeatsOutput;
