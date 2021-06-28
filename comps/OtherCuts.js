import Cut from './Cut';
import Heading from './Heading';
import styles from './OtherCuts.module.scss';

const OtherCuts = ({ cut }) => (
  <div className={styles.container}>
    <Heading
      title="Other Cuts"
      subtitle="Similar cuts you are currently looking at"
    />
    <div className={styles.card_container}>
      {/* TODO add a method to build the four cuts that are similar */}
      <Cut cut={cut} />
      <Cut cut={cut} />
      <Cut cut={cut} />
      <Cut cut={cut} />
    </div>
  </div>
);

export default OtherCuts;
