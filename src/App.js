import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfigure from './aws-exports'
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfigure)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Hi all new</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
