import useLocalisation from '../../hooks/use-localisation';
import Stars from '../Stars/Stars';
import styles from './Rating.module.css';

const Rating = (props) => {
  const [strings, setLanguage] = useLocalisation();

  const numberOfRatings = props.ratings ? props.ratings : 0;
  const averageRating = props.averageRating ? props.averageRating : 0;
  // TODO limit length
  const code = props.code; //props.code

  return (
    <div className={styles.rating}>
      <h1>{code}</h1>
      {numberOfRatings > 0 ? (
        <>
          <Stars rating={averageRating} />
          <div class={styles['average-rating']}>{averageRating.toFixed(2)}</div>
          <p>
            {strings.basedOn} {numberOfRatings}{' '}
            {numberOfRatings == 1 ? strings.rating : strings.ratings}
          </p>
        </>
      ) : (
        <p class={styles['average-rating']}>{strings.noRatings}</p>
      )}
    </div>
  );
};

export default Rating;
