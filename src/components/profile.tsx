import React from  "react" 
import {Typography,makeStyles} from '@material-ui/core'
import Image from "../components/image"

const useStyle=makeStyles({
    root:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

export const Profile:React.FC<{}>=()=>{
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <Typography>
                <h2>{``}<a id="profile">プロフィール</a></h2>
                <div style={{ maxWidth: `160px`, marginBottom: `1.45rem` }}>
                <Image/>
                </div>
                <p>
                    向井と申します。Unityでゲーム開発をしたりイラストを描いたりしています。<br />
                   プログラミングは数年前から独学で学んできており現在も勉強中です。
                </p>
            </Typography>
        </div>
    )
}