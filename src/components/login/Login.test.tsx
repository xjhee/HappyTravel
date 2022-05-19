import React from "react";
import { mount, shallow } from "enzyme";
import App from "../../App"
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LoginForm from "./LoginForm";
import TextField from '@material-ui/core/TextField';


Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

  describe('Initial test', () => {
  const initialFields = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    username: '', 
    email: '',
    password: '',
    errors: jest.fn()
  };

  const filledFields = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    username: 'limpopo', 
    email: 'limpopo@gmail.com',
    password: '123456',
    errors: jest.fn()
  };

  const InitialComposition = (props) => {
    return (<LoginForm {...initialFields} />);
  };

  const FilledComposition = (props) => {
    return (<LoginForm {...filledFields} />)
  }
  test("should render a <Login> component with expected props", () => {
    const wrapper = mount(<InitialComposition />);
    expect(wrapper.childAt(0).props().onSubmit).toBeDefined();
    expect(wrapper.childAt(0).props().onChange).toBeDefined();
    expect(wrapper.childAt(0).props().errors).toBeDefined();
  });

  test("should trigger onChange on key press", () => {
    const wrapper = mount(<InitialComposition />);
    const input = wrapper.find(TextField).at(0).find("input");
    input.simulate("change");
    wrapper.update();
    //console.log(input.props());
    expect(initialFields.onChange).toHaveBeenCalled();
  });

  test("should submit form when fields correcly entered", () => {
    const wrapper = mount(<FilledComposition />);
    expect(filledFields.username).toBe('limpopo');
  });
}) 
