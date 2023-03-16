import { useRef, useState } from 'react';
import Scanner from '../../components/Scanner/Scanner';

import styles from './Scan.module.css';
import useLocalisation from '../../hooks/use-localisation';
import { useNavigate } from 'react-router-dom';

function ScanPage() {
  const [strings, setLanguage] = useLocalisation();
  const [manualInput, setManualInput] = useState(false);
  const navigate = useNavigate();
  const code = useRef(null);

  const codeScannedHandler = (code) => {
    navigate('/ratings/' + encodeURIComponent(code));
  };
  return (
    <div className={styles.scan}>
      {manualInput ? (
        <div>
          <form>
            <input
              ref={code}
              id="code"
              name="code"
              type="text"
              placeholder={strings.enterCode}
            ></input>
            {/* add validation */}
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                navigate('/ratings/' + code.current.value);
              }}
            >
              ok
            </button>
          </form>
        </div>
      ) : (
        <Scanner onCodeScanned={codeScannedHandler} />
      )}
      <button type="button" onClick={() => setManualInput((prev) => !prev)}>
        {manualInput ? strings.orScan : strings.orEnterManually}
      </button>
    </div>
  );
}

export default ScanPage;
