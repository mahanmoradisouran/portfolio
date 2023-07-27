export function commandHandler(command, setCommand) {
    const avilableCommand = [
        {
            cmnd: 'help', msg: `* these are avalable <span class="marked">commands</span> 
            <br /> *=> <span class="marked">'help'     </span>
            <br /> *=> <span class="marked">'about'     </span>
            <br /> *=> <span class="marked">'projects'   </span>
            <br /> *=> <span class="marked">'contact'    </span>
            <br /> *=> <span class="marked">'skills'    </span>
            <br /> *=> <span class="marked">'clear'    </span>
        `
        },
        {
            cmnd: 'about', msg: `
        * Hi👋. My name is <span class="clickable">Mahan</span> and I am 16 years old.<br /> I am currently studying at Hasheminejad school in Mashhad in the field of mathematics. 
        ` },
        { cmnd: 'projects', msg: '* coming soon...' },
        {
            cmnd: 'contact', msg: `
            * <a href="https://github.com/mahanmoradisouran" class="clickable">Github</a> <br />
            * <a href="https://www.linkedin.com/in/mahan-mordi/" class="clickable">Linkedin</a><br />
            * <a href="https://t.me/undeefineed" class="clickable">Telegram</a>
        ` },
        {
            cmnd: 'skills', msg: `
            * <a class="clickable" href="https://nextjs.org">Next js</a> 13 (Proficient in server side and client side rendering, incremental static generation (isr) & ...) <br />
            * <a class="clickable" href="https://reactjs.dev">React js </a> 18 (Proficient in react hooks like useState ,useEffect , useMemo and other usefull hooks )<br/>
            * <span class="clickable">Css freamworks</span> usefull css libraries like tailwindcss(this is my favorite 😉) ,chakra ui , Ant design , Material UI , .... 
        ` },
        { cmnd: 'clear', msg: '' }
    ];

    const typedCommand = avilableCommand.find(c => c.cmnd === command);
    if (typedCommand && typedCommand.cmnd !== 'clear') setCommand((prevState) => [...prevState, { __html: typedCommand.msg }]);
    else setCommand([]);
    return
}