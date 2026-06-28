import styles from "../styles/ArticleSearch.module.css";

const ArticleSearch = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </span>
      <input
        type="text"
        className={styles.input}
        placeholder="Search articles by title or topic…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search articles"
      />
      {value && (
        <button
          className={styles.clear}
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ArticleSearch;
