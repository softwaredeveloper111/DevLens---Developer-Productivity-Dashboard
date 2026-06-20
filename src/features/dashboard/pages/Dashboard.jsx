import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GitHubSearch from "../components/GitHubSearch";
import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import TopLanguages from "../components/TopLanguages";
import RepoList from "../components/RepoList";
import styles from "../styles/Dashboard.module.css";
import {
  DEMO_PROFILE,
  DEMO_STATS,
  DEMO_LANGUAGES,
  DEMO_REPOS,
} from "../demoData";

const INITIAL_VISIBLE = 6;

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // showData controls whether profile/stats are visible.
  // Set to true by default so demo data is shown on load.
  const [showData, setShowData] = useState(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleFetch = () => {
    // UI-only: just show the demo data section
    setShowData(true);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, DEMO_REPOS.length));
  };

  return (
    <div className={styles.layout}>
      <Navbar onMenuToggle={() => setIsSidebarOpen((o) => !o)} />

      <div className={styles.main}>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className={styles.content}>
          {/* Page header */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>GitHub Analytics</h1>
            <p className={styles.pageSubtitle}>
              Search any GitHub user to explore their profile and repository insights.
            </p>
          </div>

          {/* Search */}
          <GitHubSearch
            username={username}
            onChange={setUsername}
            onFetch={handleFetch}
          />

          {showData ? (
            <div className={styles.sections}>
              {/* Profile + Languages side-by-side on wide screens */}
              <div className={styles.topGrid}>
                <ProfileCard profile={DEMO_PROFILE} />
                <TopLanguages languages={DEMO_LANGUAGES} />
              </div>

              {/* Stats row */}
              <StatsCards stats={DEMO_STATS} />

              {/* Repo list */}
              <RepoList
                repos={DEMO_REPOS}
                visibleCount={visibleCount}
                onLoadMore={handleLoadMore}
              />
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <p className={styles.emptyTitle}>Search for a GitHub profile</p>
              <p className={styles.emptyDesc}>
                Enter a username above to see analytics, repositories, and language breakdown.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;