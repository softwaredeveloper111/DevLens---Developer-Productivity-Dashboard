import { useState } from "react";
import styles from "../styles/ArticleCard.module.css";

const TAG_COLORS = {
  React: "#3B82F6",
  JavaScript: "#F59E0B",
  TypeScript: "#6366F1",
  "Node.js": "#22C55E",
  AI: "#EC4899",
  "Web Development": "#14B8A6",
};

const ArticleCard = ({ article }) => {
  const [bookmarked, setBookmarked] = useState(article.bookmarked);

  return (
    <article className={styles.card}>
      {/* Cover image */}
      <div className={styles.cover}>
        <img src={article.cover} alt={article.title} loading="lazy" />
      </div>

      {/* Content */}
      <div className={styles.body}>
        {/* Tags */}
        <div className={styles.tags}>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className={styles.tag}
              style={{ "--tag-color": TAG_COLORS[tag] || "#A1A1AA" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className={styles.title}>{article.title}</h2>

        {/* Excerpt */}
        <p className={styles.excerpt}>{article.excerpt}</p>

        {/* Meta */}
        <div className={styles.meta}>
          <img
            src={article.authorAvatar}
            alt={article.author}
            className={styles.avatar}
          />
          <div className={styles.metaInfo}>
            <span className={styles.author}>{article.author}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{article.date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{article.readTime}</span>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.readBtn}
            aria-label={`Read ${article.title}`}
          >
            Read Article
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            className={`${styles.bookmarkBtn} ${bookmarked ? styles.bookmarked : ""}`}
            onClick={() => setBookmarked((b) => !b)}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
          >
            <svg
              viewBox="0 0 24 24"
              fill={bookmarked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
