import BarChart from './component/BarChart';
import Title from './component/Title';

function App()
{
  return (
    <div>
      <Title />
      <BarChart data={[12, 5, 6, 6, 9, 10]}
    width={1200}
    height={300}/>
    </div>
    );
}

export default App;





