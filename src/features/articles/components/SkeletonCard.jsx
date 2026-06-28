import styles from "../styles/SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.cover} />
      <div className={styles.body}>
        <div className={styles.tags}>
          <div className={`${styles.shimmer} ${styles.tag}`} />
          <div className={`${styles.shimmer} ${styles.tagSm}`} />
        </div>
        <div className={`${styles.shimmer} ${styles.titleLg}`} />
        <div className={`${styles.shimmer} ${styles.titleSm}`} />
        <div className={`${styles.shimmer} ${styles.text}`} />
        <div className={`${styles.shimmer} ${styles.textShort}`} />
        <div className={styles.meta}>
          <div className={`${styles.shimmer} ${styles.avatar}`} />
          <div className={`${styles.shimmer} ${styles.metaText}`} />
        </div>
        <div className={styles.actions}>
          <div className={`${styles.shimmer} ${styles.btn}`} />
          <div className={`${styles.shimmer} ${styles.iconBtn}`} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
