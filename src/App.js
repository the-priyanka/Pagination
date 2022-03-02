import { useEffect, useState } from "react";
import Follower from "./components/Follower";
import UseFetch from "./components/UseFetch";

function App() {
  const { loading, data } = UseFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data(page));
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading...." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
