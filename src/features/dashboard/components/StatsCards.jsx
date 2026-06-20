import styles from "../styles/StatsCards.module.css";

const STAT_CONFIG = [
  {
    key: "publicRepos",
    label: "Public Repos",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
    sub: "repositories",
  },
  {
    key: "totalStars",
    label: "Total Stars",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    sub: "across all repos",
  },
  {
    key: "totalForks",
    label: "Total Forks",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9" />
        <line x1="12" y1="12" x2="12" y2="15" />
      </svg>
    ),
    sub: "across all repos",
  },
  {
    key: "followers",
    label: "Followers",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    sub: "GitHub followers",
  },
];

const StatsCards = ({ stats }) => {
  return (
    <div className={styles.grid}>
      {STAT_CONFIG.map((cfg) => (
        <div key={cfg.key} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.label}>{cfg.label}</span>
            <div className={styles.iconBox} style={{ background: cfg.bg, color: cfg.color }}>
              {cfg.icon}
            </div>
          </div>
          <div className={styles.value}>{stats[cfg.key]?.toLocaleString() ?? "—"}</div>
          <div className={styles.sub}>{cfg.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
