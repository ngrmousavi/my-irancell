import './index.css';
// import './App.css';
import Dashboard from './components/dashboard/dashboard';
import MainContent from './components/main/mainContent';
import Chart from './components/main/chart';
import RecommendedPackages from './components/main/RecommendedPackages/RecommendedPackages';
import RemainingChargeChart from './components/remainingChargeChart/remainingChargeChart';

function App() {
  return (
    <div className='flex'>
      <Dashboard/>
      <MainContent/>
    </div>
      
  );
}

export default App;
