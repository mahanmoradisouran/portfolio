import { useEffect, useState } from "react"
import Command from "../command/Command";
import Input from "../Input/Input";
import { commandHandler } from "../../actions/TerminalCommandHandler";

const Terminal = () => {
    const [command, setCommand] = useState([
        {
            __html: `* these are avalable <span class="marked">commands</span>
        <br /> *=> <span class="marked">'help'     </span>
        <br /> *=> <span class="marked">'about'     </span>
        <br /> *=> <span class="marked">'projects'   </span>
        <br /> *=> <span class="marked">'contact'    </span>
        <br /> *=> <span class="marked">'skills'    </span>
        <br /> *=> <span class="marked">'clear'    </span>
    ` },
    ]);

    const typeCommand = (command) => {
        commandHandler(command, setCommand);
    };

    return (
        <div className="terminal">
            {command.map((c, index) => <Command key={index} command={c} />)}
            <Input typeCommand={typeCommand} />
        </div>
    )
}

export default Terminal