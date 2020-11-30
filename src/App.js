import logo from './logo.svg';
import Demo from './demo';
import BaiTap1 from './BaiTap1';
import BaiTap2 from './BaiTap2';
import RenderingElements from './Rendering-Elements';
import HandlingEvents from './handleing-event';
import State from './State';
import Car from './car';
import RenderArray from './render-array';
import Wellcome from './props/Wellcome';
import WellcomeFunc from './props/WellcomeFunc';
import Button from './props/Button';


function App() {
  return (
    <div>
      <BaiTap2/>
      {/* <RenderingElements/>
      <hr/>
      <HandlingEvents/>
      <hr/>
      <State/>
      <hr/>
      <Car/>
      <hr/>
      <RenderArray/>
      <hr/> */}

      {/*  ngoại trừ là string thì truyền trong  dấu ""  còn lại đều truyền trong dấu {} */}
      {/* <Wellcome name1="jack" />
      <Wellcome name1="dan" />
      <Wellcome name1="khai"  age={12} /> */}

      {/* <WellcomeFunc name1="jack" />
      <WellcomeFunc name1="dan" />
      <WellcomeFunc name1="khai"  age={12} /> */}

      <Button variant="primary" size="lg" > <h3>Hello</h3> </Button>
      <Button variant="secondary" size="sm" />
      <Button variant="primary" size="lg" disabled="true" />
    </div>
  );
}

export default App;
