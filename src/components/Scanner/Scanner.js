import styles from './Scanner.module.css';
import { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import useLocalisation from '../../hooks/use-localisation';

const qrcodeRegionId = 'html5qr-code-full-region';

const Scanner = (props) => {
  const [strings, setLanguage] = useLocalisation();
  const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1 };

  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    props.onCodeScanned(decodedText);
  };

  /**
   * Initialise camera.
   */
  useEffect(() => {
    const html5QrCode = new Html5Qrcode('code-reader');
    html5QrCode.start(
      { facingMode: 'environment' },
      config,
      qrCodeSuccessCallback
    );
    return () => {
      console.log('Cleanup');
      try {
      html5QrCode
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
        })
        .catch((err) => {
          console.log('Error stopping scanner: ' + err); // currently not working in some scenarios
        });
      }
      catch(error) {
        console.log('Error stopping scanner: ' + error);
      }
    };
  }, []);

  return (
    <div className={styles.scanner}>
      <div className={styles['scanner-wrapper']}>
        <div id="code-reader" />
      </div>
    </div>
  );
};

export default Scanner;
