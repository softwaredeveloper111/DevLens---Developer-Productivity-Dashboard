import { useState  } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GitHubSearch from "../components/GitHubSearch";
import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import TopLanguages from "../components/TopLanguages";
import RepoList from "../components/RepoList";
import styles from "../styles/Dashboard.module.css";
import useDashboard from "../hooks/useDashboard"
import Loader from "../../shared/Loader";
import  CALCULATE_LANGUAGES from "../../utils/calculateLanguage"
// import Errorboundary from "../../shared/ErrorBoundary"



const INITIAL_VISIBLE = 6;

const Dashboard = () => {

  const { profile, repos, loading,  fetchDashboardData } = useDashboard()

 


  const [showData, setShowData] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);



  const handleFetch = async(username) => {

    console.log(username)
    let success = await fetchDashboardData(username.trim());

    console.log(success)
    if(success){
      setShowData(true);
      setVisibleCount(INITIAL_VISIBLE);
      
    }
  };




  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, repos.length));
  };

   

  return (
    <div className={styles.layout}>
      <Navbar/>

      <div className={styles.main}>
        <Sidebar/>

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
            onFetch={handleFetch}
          />


          {loading ? (
            <Loader/>
          ) :
          showData ? (
            <div className={styles.sections}>
              {/* Profile + Languages side-by-side on wide screens */}
              <div className={styles.topGrid}>
                <ProfileCard profile={profile} />
                <TopLanguages languages={CALCULATE_LANGUAGES(repos)} />
              </div>

              {/* Stats row */}
              <StatsCards stats={profile} latestRepoUpdateAt={repos[0]?.updated_at} latestRepo={repos[0]} />

              {/* Repo list */}
              <RepoList
                repos={repos}
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