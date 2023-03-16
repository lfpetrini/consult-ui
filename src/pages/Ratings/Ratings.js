import { useRef, useState } from 'react';
import Scanner from '../../components/Scanner/Scanner';

import styles from './Ratings.module.css';
import Rating from '../../components/Rating/Rating';
import { json, useLoaderData, Link } from 'react-router-dom';
import useLocalisation from '../../hooks/use-localisation';

function RatingsPage() {
  const [strings, setLanguage] = useLocalisation();
  const loaderData = useLoaderData();
  return (
    <div class={styles.ratings}>
      <Rating
        code={loaderData.code}
        averageRating={loaderData.aggregated / loaderData.quantity}
        ratings={loaderData.quantity}
      />
      <ul>
        {loaderData.quantity > 0 ? (
          <li>
            <Link to="rate">{strings.rateIt}</Link>
          </li>
        ) : (
          <li>
            <Link>{strings.beTheFirst}</Link>
          </li>
        )}
        {loaderData.numberOfReviews > 0 && (
          <Link>{strings.readTheReviews}</Link>
        )}
        <li>
          <Link to="/">{strings.goBack}</Link>
        </li>
      </ul>
    </div>
  );
}

export default RatingsPage;

export const loader = (data) => {
  const tempData = {
    code: 'abcde',
    date: 4554646,
    quantity: 12, // quantity of ratings
    aggregated: 20,
    numberOfReviews: 3, // quantity of written reviews
    version: 1,
  };
  return json(tempData, { status: 200 });
};
