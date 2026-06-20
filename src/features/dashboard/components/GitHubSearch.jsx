import styles from "../styles/GitHubSearch.module.css";

const GitHubSearch = ({ username, onChange, onFetch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onFetch();
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>GitHub Username</p>
      <div className={styles.inputRow}>
        <div className={styles.inputBox}>
          <span className={styles.prefix}>github.com /</span>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <button className={styles.fetchBtn} onClick={onFetch}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Fetch Profile
        </button>
      </div>
    </div>
  );
};

export default GitHubSearch;
