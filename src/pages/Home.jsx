import Banner from '../components/Banner';
import Article from '../components/home/Article'

function Home() {
  const page="home"
  return (
    <div className="app">
      <Banner page={page}/>
      <Article/>
    </div>
  );
}

export default Home;
