import styles from "../styles/StatsCards.module.css";

const STAT_CONFIG = [
  {
    key: "public_repos",
    label: "Public Repos",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
    sub: "repositories",
  },
  {
    key: "githubSince",
    label: "GitHub Since",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    sub: "Member Since in github",
  },
  {
    key: "following",
    label: "Following",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="16" y1="11" x2="22" y2="11" />
      </svg>
    ),
    sub: "Github following",
  },
  {
    key: "followers",
    label: "Followers",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.1)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
  const githubSince = stats?.created_at
    ? new Date(stats.created_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <div className={styles.grid}>
      {STAT_CONFIG.map((cfg) => (
        <div key={cfg.key} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.label}>{cfg.label}</span>
            <div
              className={styles.iconBox}
              style={{ background: cfg.bg, color: cfg.color }}
            >
              {cfg.icon}
            </div>
          </div>
          <div className={styles.value}>
            {cfg.key === "githubSince"
              ? githubSince
              : (stats[cfg.key]?.toLocaleString() ?? "—")}
          </div>
          <div className={styles.sub}>{cfg.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
