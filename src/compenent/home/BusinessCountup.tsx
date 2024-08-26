"use client";
import CountUp from 'react-countup';
import style from './businesscountup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faUsers, faBullhorn, faGlobe } from '@fortawesome/free-solid-svg-icons';

const BusinessCountup= () => {
  return (
    <div className={style.main}>
      <div className={style.itemContainer}>
        <div>
          <span style={{ fontSize: '30px' }}>+</span>
          <CountUp className={style.paragraph} start={0} end={140} duration={4} />
        </div>
        <FontAwesomeIcon icon={faProjectDiagram} height={20}/>
        <div>
          <div className={style.title}>Projects</div>
        </div>
      </div>

      <div className={style.itemContainer}>
        <div>
          <span style={{ fontSize: '30px' }}>+</span>
          <CountUp className={style.paragraph} start={0} end={200} duration={4} />
        </div>
        <FontAwesomeIcon icon={faUsers} height={20}/>
        <div>
          <span className={style.title}>Customers</span>
        </div>
      </div>

      <div className={style.itemContainer}>
        <div>
          <span style={{ fontSize: '30px' }}>+</span>
          <CountUp className={style.paragraph} start={0} end={100} duration={4} />
        </div>
        <FontAwesomeIcon icon={faBullhorn} height={20} />
        <div>
          <span className={style.title}>Advertisements</span>
        </div>
      </div>

      <div className={style.itemContainer}>
        <div>
          <span style={{ fontSize: '30px' }}>+</span>
          <CountUp className={style.paragraph} start={0} end={120} duration={4} />
        </div>
        <FontAwesomeIcon icon={faGlobe} height={20} />
        <div>
          <span className={style.title}>Websites</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCountup;
