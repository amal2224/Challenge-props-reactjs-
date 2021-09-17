import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import ListProject from './components/ListProject'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const person = 
            {
              fullName : " John doe",
              img : '/assets/John-Doe.JPG'
            };
  const project = [
                  {
                    img : "/assets/proj.png",
                    title : "PROJECT 1",
                    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
                    gitLink : "Github Link"
                  },
                  {
                    img : "/assets/proj.png",
                    title : "PROJECT 2",
                    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
                    gitLink : "Github Link"
                  },
                  {
                    img : "/assets/proj.png",
                    title : "PROJECT 3",
                    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
                    gitLink : "Github Link"
                  },
                  {
                    img : "/assets/proj.png",
                    title : "PROJECT 4",
                    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
                    gitLink : "Github Link"
                  }
                  ];
  const footerr = {
                    Copyritghts : "Copyritghts",
                    company : "GOMYCODE",
                    year : "2020"
                  };

  return (
    <div className="App">
      <Navbar person={person}/>
      <About person={person}/>
      <ListProject project={project}/>
      <Contact person={person}/>
      <Footer footerr={footerr}/>
    </div>
  );
}

export default App;
