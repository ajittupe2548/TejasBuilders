import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Bodycontent from './components/BodyContent'
import About from './components/About'
import Projects from './components/AllProjects'
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
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
        <Route path='/contactus' component={ContactUs} />
        <Route path='/completed' component={() => <ProjectList type="completed" />} />
        <Route path='/ongoing' component={() => <ProjectList type="ongoing" />} />
        <Route path='/future' component={() => <ProjectList type="future" />} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
