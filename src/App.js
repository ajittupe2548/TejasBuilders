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
import ProjectList from './components/ProjectList';

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
        <Route path='/completed' component={() => <ProjectList type="completed" />} />
        <Route path='/ongoing' component={() => <ProjectList type="ongoing" />} />
        <Route path='/future' component={() => <ProjectList type="future" />} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
