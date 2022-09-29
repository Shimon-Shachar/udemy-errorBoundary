import UserFinder from './components/UserFinder';
import classes from './components/UserFinder.module.css';
 
function App() {
  return (
    <div>
      <UserFinder className={classes.finder}/>
    </div>
  );
}

export default App;
