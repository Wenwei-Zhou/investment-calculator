import './index.css';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Result from './Components/Result';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

  const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput, // 展开运算符（spread operator），它的作用是提取并复制原来的对象属性和值。
                [inputIdentifier]: +newValue  // inputIdentifier: 要更新的字段名称（比如 "duration"） newValue: 用户输入的新值
                // +newValue, 加上这个加号将强制将这个字符串值转换为数字值｡
                // 用 [inputIdentifier]: newValue 来更新对应字段的值
            }
        });
    }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (<p className='center'>Please enter a duration greater than zero</p>)}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
