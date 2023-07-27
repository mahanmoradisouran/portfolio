import CommandLable from "../CommandLabel/CommandLable";

const Input = ({ typeCommand }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        const command = e.target[0].value;
        typeCommand(command);
        e.target[0].value = "";
    }

    return (
        <form onSubmit={submitHandler} className="Input">
            <CommandLable />
            <input type="text" maxLength='10' id="input" autoComplete="off" />
        </form>
    )
}

export default Input