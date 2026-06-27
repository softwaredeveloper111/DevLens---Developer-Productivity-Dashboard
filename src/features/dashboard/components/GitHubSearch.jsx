import styles from "../styles/GitHubSearch.module.css";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const GitHubSearch = ({setUsername,onFetch}) => {

  const { register, handleSubmit , reset } = useForm();

  function submitEventHandlerFunc(data) {
    // console.log(data);
    setUsername(data.username);
    // reset();
    onFetch();
  }

  function onFormError(errors) {
    Object.values(errors).forEach((error) => {
      toast.error(error.message, {
        duration: 4000,
        position: "top-right",
      });
    });
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>GitHub Username</p>
      <form
        onSubmit={handleSubmit(submitEventHandlerFunc, onFormError)}
        className={styles.inputRow}
      >
        <div className={styles.inputBox}>
          <span className={styles.prefix}>github.com /</span>
          <input
            type="text"
            {...register("username", {
              required: { value: true, message: "Username is required" },
              pattern: {
                value: /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/,
                message: "Please enter a valid GitHub username",
              },
            })}
            className={styles.input}
            placeholder="Enter GitHub username"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <button type="submit" className={styles.fetchBtn}>
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
          Fetch Profile
        </button>
      </form>
    </div>
  );
};

export default GitHubSearch;

