import {Comment, Button, Input} from 'antd';
import {useState} from 'react';

export default function() {
    let [msgs, setMsgs] = useState<Array<string>>([]);
    let [msg, setMsg] = useState("");
    return <div className="Index">
        <div className="Message-Board">
            { msgs.map((m) => { return <Comment content={m}></Comment> }) }
        </div>
        <div className="Message-Input">
            <Input 
                type="text" 
                onChange={(event) => {
                    setMsg(event.target.value);}}
                value={msg}
            ></Input>
        </div>
        <Button onClick={()=> {
            let new_msgs: Array<string> = msgs.slice(-2);
            new_msgs.push(msg);
            setMsgs(new_msgs);
            setMsg("");
            console.log(new_msgs);
        }}>发送</Button>
    </div>
}