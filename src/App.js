import BarChart from './component/BarChart';
import Title from './component/Title';

function App()
{
  return (
    <div>
      <Title />
      <BarChart data={[25, 5, 30, 65, 15, 35]}
    width={700}
    height={300}/>
    </div>
    );
}

export default App;





