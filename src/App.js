import './index.css';
// import './App.css';
import Dashboard from './components/dashboard/dashboard';
import MainContent from './components/main/mainContent';
import Chart from './components/main/chart';
import RecommendedPackages from './components/main/RecommendedPackages/RecommendedPackages';
import RemainingChargeChart from './components/remainingChargeChart/remainingChargeChart';
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <div className='flex'>
      <Dashboard/>
      <MainContent/>
      <Sidebar/>
    </div>
      
  );
}

export default App;
