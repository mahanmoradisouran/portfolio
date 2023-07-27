import CommandLable from "../CommandLabel/CommandLable"

const Command = (props) => {
    return (
        <div className="command">
            <CommandLable />
            <p dangerouslySetInnerHTML={props.command}>
                </p>
                {/* {props.command} */}
        </div>
    )
}

export default Command