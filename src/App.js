// import logo from './logo.svg';
// import Demo from './demo';
// import BaiTap1 from './BaiTap1';
// import BaiTap2 from './BaiTap2';
// import RenderingElements from './Rendering-Elements';
// import HandlingEvents from './handleing-event';
// import State from './State';
// import Car from './car';
// import RenderArray from './render-array';
// import Wellcome from './props/Wellcome';
// import WellcomeFunc from './props/WellcomeFunc';
// import Button from './props/Button';
// import User from './UserManagement';
// import LifeCircle from './UserManagement/lifeCircle';
// import UserManagementRedux from './UserManagementRedux';
import ToDoList from './ToDoList';
import Movie from './Movie';
import Elearning from './Elearning';
import Home from './Home';
import News from './News';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";


function App() {
  return (

    // BrowserRouter: component giúp ứng dụng routing được
    <BrowserRouter>
       {/* Switch : so sánh path của root và url của trình duyệt để quyết định sẽ render ra component nào
           khi không dùng switch thì sẽ render ra tất cả component khớp vs path 
           dùng switch thì sẽ render ra component khớp vs path*/}
       <Link to="/" >Home</Link>
       <Link to="/Movie" >Movie</Link>
       <Link to="/ToDoList" >ToDoList</Link>
       <Link to="/Elearning" >Elearning</Link>
       <Link to="/News">News</Link>
       <Switch>
           {/* Route có 2 props quan trọng là path và component */}
           <Route exact path="/" component={Home}/>
          <Route exact path="/Elearning" component={Elearning}/>
          <Route path="/Movie" component={Movie} /> 
          <Route path="/ToDoList" component={ToDoList} /> 
          <Route path="/News" component={News} /> 
       </Switch>
    </BrowserRouter>



    // <div>
    //   {/* <BaiTap2/> */}
    //   {/* <RenderingElements/>
    //   <hr/>
    //   <HandlingEvents/>
    //   <hr/>
    //   <State/>
    //   <hr/>
    //   <Car/>
    //   <hr/>
    //   <RenderArray/>
    //   <hr/> */}

    //   {/*  ngoại trừ là string thì truyền trong  dấu ""  còn lại đều truyền trong dấu {} */}
    //   {/* <Wellcome name1="jack" />
    //   <Wellcome name1="dan" />
    //   <Wellcome name1="khai"  age={12} /> */}

    //   {/* <WellcomeFunc name1="jack" />
    //   <WellcomeFunc name1="dan" />
    //   <WellcomeFunc name1="khai"  age={12} /> */}

    //   {/* <Button variant="primary" size="lg" > <h3>Hello</h3> </Button>
    //   <Button variant="secondary" size="sm" />
    //   <Button variant="primary" size="lg" disabled="true" /> */}
      
    //   {/* <User/>
    //   <LifeCircle/> */}
    //   {/* <UserManagementRedux/> */}
    //   {/* <ToDoList/> */}
    //   {/* <Movie/> */}
    //   <Elearning/>
    // </div>
  );
}

export default App;
