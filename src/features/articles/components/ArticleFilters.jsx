import styles from "../styles/ArticleFilters.module.css";

const ArticleFilters = ({ tags, activeTag, onChange }) => {
  return (
    <div className={styles.filters} role="group" aria-label="Filter by tag">
      <button
        className={`${styles.filterBtn} ${activeTag === null ? styles.active : ""}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ""}`}
          onClick={() => onChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ArticleFilters;
