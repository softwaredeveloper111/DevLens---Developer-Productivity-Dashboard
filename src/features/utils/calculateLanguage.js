


 const LANGUAGE_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  CSS: "#563D7C",
  HTML: "#E34F26",
  Java: "#B07219",
  "C++": "#F34B7D",
  C: "#555555",
  "C#": "#239120",
  PHP: "#777BB4",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Kotlin: "#A97BFF",
  Swift: "#FA7343",
  Dart: "#0175C2",
  Ruby: "#CC342D",
  Shell: "#89E051",
  SCSS: "#CF649A",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Dockerfile: "#2496ED",
  Markdown: "#083FA1",
  JSON: "#CBCB41",
  YAML: "#CB171E",
  Jupyter: "#DA5B0B",
};


const DEFAULT_LANGUAGE_COLOR = "#6B7280";




function  CALCULATE_LANGUAGES (repos){



  const languageCount = {};


   repos.forEach((repo) => {
    if(!repo.language) return;

     languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;


  });


  const total = Object.values(languageCount).reduce(
  (sum, count) => sum + count,
  0
  );


  const languageStats = Object.entries(languageCount)
  .map(([language, count]) => ({
    language,
    count,
    percentage: Math.round((count / total) * 100),
    color: LANGUAGE_COLORS[language] || DEFAULT_LANGUAGE_COLOR,
  }))
  .sort((a, b) => b.count - a.count);

  // console.log(languageStats) 
  return languageStats
  

   
}

export default  CALCULATE_LANGUAGES