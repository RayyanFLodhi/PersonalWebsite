import React from 'react';
import styles from './Ticker.module.css';

export default function Ticker({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <ul className={styles.row} aria-hidden={ariaHidden || undefined}>
      {items.map((t, i) => (
        <li key={i}>
          <span className={styles.sep} aria-hidden="true">
            ✦
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={styles.ticker} aria-label="Highlights">
      <div className={styles.track}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
