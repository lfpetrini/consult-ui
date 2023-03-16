import React from 'react';
import styles from './Stars.module.css';

const Stars = (props) => {
  const rating = parseFloat(
    props.rating > 10 ? 10 : props.rating < 0 ? 0 : props.rating
  );
  // round down to closest 0.25 (assuming 5 stars for a 0-10 rating)
  const zeroToFiveRating = parseInt(rating / 0.5) * 0.25;
  const fullStars = parseInt(zeroToFiveRating);
  // convert decimal part to an integer, so it can be used as a style (part-star-25, part-star-50, part-star-75)
  const partStar = (zeroToFiveRating % 1) * 100;
  const emptyStars = parseInt(5 - fullStars - (partStar > 0 ? 1 : 0));

  // Enclose stars with a link in case an onRated function is provided, otherwise just print them
  let currentStar = 1;
  const fullStarElements = [...new Array(fullStars)].map((e) =>
    !props.onRated ? (
      <span key={e}>&#9733;</span>
    ) : (
      <a
        key={e}
        href="#"
        onClick={((s)=> () => {
          props.onRated(s);
          return false;
        })(currentStar++)}
      >
        <span>&#9733;</span>
      </a>
    )
  );

  const partStarElement =
    partStar > 0 ? (
      !props.onRated ? (
        <span className={styles[`part-star-${partStar}`]}>&#9733;</span>
      ) : (
        <a
          href="#"
          onClick={((s)=> () => {
            props.onRated(s);
            return false;
          })(currentStar++)}
        >
          <span className={styles[`part-star-${partStar}`]}>&#9733;</span>
        </a>
      )
    ) : (
      <></>
    );

  const emptyStarElements = [...new Array(emptyStars)].map((e) =>
    !props.onRated ? (
      <span key={e} className={styles['empty-star']}>
        &#9733;
      </span>
    ) : (
      <a
        key={e}
        href="#"
        onClick={((s)=> () => {
          props.onRated(s);
          return false;
        })(currentStar++)}
      >
        <span className={styles['empty-star']}>&#9733;</span>
      </a>
    )
  );

  return (
    <React.Fragment>
      <div className={styles['stars-wrapper']}>
        {fullStarElements}
        {partStarElement}
        {emptyStarElements}
      </div>
    </React.Fragment>
  );
};

export default Stars;
