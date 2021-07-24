import PropTypes from 'prop-types';
import CompanyItem from './CompanyItem';
import styles from './Company.module.scss';
console.log('styles',styles);

 export function CompanyList() {
  return (
      <section>
           <h2 className={styles.heading}>The world's leading brands choose ROOM.</h2>
       <p className={styles.text}>Over 3, 000 and counting.</p>       <ul>
             {CompanyItem.map((company) => (
                 <li className={styles.item} key={company.id}>
                 <a href="#" className={styles.link}>
                         <svg className={styles.logo} width="45" height="50" >
                             <use href={company.img}></use>
                   </svg>
                    </a>
             </li>
             ))}
      </ul>
    </section>
  );
 }

CompanyList.propTypes = {
  id: PropTypes,
};
