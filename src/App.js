
import './App.css';
import TopNavbar from './components/TopNavbar';
import BottomNavBar from './components/BottomNavBar';
import AskQuestion from './components/AskQuestion';
import FriendsNFamily from './components/FriendsNFamily';
import { useContext } from 'react';
import { dataSharingPoint } from './components/store';

function App() {
  const {openProfile} = useContext(dataSharingPoint)
 
  return (
    <div className=''>
      <TopNavbar />
      
      {openProfile ? <FriendsNFamily/> : <AskQuestion />}
     
       {!openProfile && <BottomNavBar/>} 
    </div>
  );
}

export default App;
