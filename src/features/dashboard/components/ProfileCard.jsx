import styles from "../styles/ProfileCard.module.css";

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.card}>
      <img
        src={profile.avatarUrl}
        alt={profile.name}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <p className={styles.name}>{profile.name}</p>
        <p className={styles.username}>@{profile.username}</p>
        {profile.bio && <p className={styles.bio}>{profile.bio}</p>}

        <div className={styles.meta}>
          {profile.location && (
            <span className={styles.metaItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </span>
          )}
          {profile.blog && (
            <span className={styles.metaItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
              {profile.blog}
            </span>
          )}
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{profile.followers.toLocaleString()}</span>
            <span className={styles.statLabel}>Followers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{profile.following.toLocaleString()}</span>
            <span className={styles.statLabel}>Following</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{profile.publicRepos.toLocaleString()}</span>
            <span className={styles.statLabel}>Repositories</span>
          </div>
        </div>

        <a
          href={`https://github.com/${profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewBtn}
        >
          View GitHub Profile
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
