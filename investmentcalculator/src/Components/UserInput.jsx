
export default function UserInput({ onChange, userInput }) {

    // const [userInput, setUserInput] = useState({
    //         initialInvestment: 10000,
    //         annualInvestment: 1200,
    //         expectedReturn: 6,
    //         duration: 10,
    //     });
    
    // function handleChange(inputIdentifier, newValue) {
    //     setUserInput(prevUserInput => {
    //         return{
    //             ...prevUserInput, // 展开运算符（spread operator），它的作用是提取并复制原来的对象属性和值。
    //             [inputIdentifier]: newValue  // inputIdentifier: 要更新的字段名称（比如 "duration"） newValue: 用户输入的新值
    //             // 用 [inputIdentifier]: newValue 来更新对应字段的值
    //         }
    //     });
    // }

    // 把useState和function handleChange转移到App.js，然后function UserInput创建parameters，（onChange, userInput）
    // 这两个parameters对应的是<input value onChange />，当在app.js施行UserInput.jsx时，可以让转移过去的useState, function handleChange执行并通过连接到UserInput.jsx

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} 
                    // 对于第一个输入, 也就是initialInvestment,
                    // 它就是这个属性｡
                    // 所以这将是我的标识符, 作为字符串传递给处理更改｡
                    // 第二个值当然应该是用户输入的值｡
                    // 现在我们可以在事件对象的帮助下得到它,
                    // 我们现在确实在这个匿名函数中得到了这个事件对象｡
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} 
                />
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} 
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} 
                />
            </p>
        </div>
    </section>
}