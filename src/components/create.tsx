import React from  "react" 
import {Typography} from '@material-ui/core'

export const Create:React.FC<{}>=()=>{
    return(
        <Typography>
            <h2>制作物</h2>
            Unity<br/>
            <ul>
                <li>
                KunrenUnityProject1
                    <a href="https://youtu.be/Aa73s3fizF8">動画</a>
                    <a href="https://github.com/youmukai/Kunren-Unity-Project1">github</a>
                </li>
                <li>
                射撃学園(teamUi)
                    <a href="https://youtu.be/oxmlpVo4Ers">動画</a>
                    <a href="https://github.com/youmukai/SyagekiGakuen">github</a>
                </li>
            </ul>
        </Typography>
    )
}