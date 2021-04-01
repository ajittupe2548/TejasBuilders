import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/header'
import Bodycontent from './components/bodycontent'
import About from './components/about'
import Projects from './components/allprojects'
import Careers from './components/careers'
import Contactus from './components/contactus'
import Footer from './components/footer'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Completedprojects from './components/completedprojects';
import Ongoingprojects from './components/ongoingprojects';
import Futureprojects from './components/futureprojects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact component={Bodycontent} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/careers' component={Careers} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/completedprojects' component={Completedprojects}/>
        <Route path='/ongoingprojects' component={Ongoingprojects}/>
        <Route path='/futureprojects' component={Futureprojects}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
