import styles from './RateIt.module.css';
import {
  json,
  useLoaderData,
  Link,
  useRouteLoaderData,
  useParams,
} from 'react-router-dom';
import useLocalisation from '../../hooks/use-localisation';
import Stars from '../../components/Stars/Stars';
import { useState } from 'react';

function RateItPage() {
  const [strings, setLanguage] = useLocalisation();
  const [currentRating, setCurrentRating] = useState(0);

  const params = useParams();

  //const loaderData = useRouteLoaderData('ratings');
  return (
    <div class={styles.rate}>
      <h1>{params.code}</h1>
      <h2>{strings.yourRating}</h2>
      <Stars rating={currentRating} onRated={(r) => setCurrentRating(r * 2)} />
      <ul>
        <li>
          <Link to="..">{strings.goBack}</Link>
        </li>
      </ul>
    </div>
  );
}

export default RateItPage;

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
