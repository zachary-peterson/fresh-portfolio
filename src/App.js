import { Route, Switch } from 'react-router-dom'
import { Landing } from './components/Landing';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </>
  );
}

export default App;
