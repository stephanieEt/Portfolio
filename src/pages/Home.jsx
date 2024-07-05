/*const Home = () => {
  return (
    <div className="home-container container-page">
      <div className="animated-text">
        <h1>Je suis Stéphanie Etourneau.</h1>
        <h2>Bienvenue sur mon portfolio.</h2>
      </div>
    </div>
  );
};

export default Home;*/
const Home = () => {
  return (
    <div className="home-container container-fluid">
      <img src="./assets/images/profile1.webp" alt="" />
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col text-center animated-text">
          <h1>Je suis Stéphanie Etourneau.</h1>
          <h2>Bienvenue sur mon portfolio.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
