import Follower from "./components/Follower";
import UseFetch from "./components/UseFetch";

function App() {
  const { loading, data } = UseFetch();
  console.log(data);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading...." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
