import styles from "../styles/TopLanguages.module.css";

const TopLanguages = ({ languages }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        <span className={styles.cardTitle}>Top Languages</span>
      </div>

      <div className={styles.list}>
        {languages.map((lang) => (
          <div key={lang.name} className={styles.langItem}>
            <div className={styles.langMeta}>
              <span className={styles.langName}>
                <span className={styles.dot} style={{ background: lang.color }} />
                {lang.name}
              </span>
              <span className={styles.percent}>{lang.percent}%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{ width: `${lang.percent}%`, background: lang.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLanguages;
