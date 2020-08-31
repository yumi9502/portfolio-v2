import React from  "react" 
import {Typography,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
    root:{
        paddingLeft:'10px'
    }
});

export const Skill:React.FC<{}>=()=>{
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <Typography>
                <h2>スキル</h2>
                <p>本格的にプログラミングを始めたのは、オンラインでのプログラミングスクールがきっかけです。<br/>
                そこでUnityを学び始めそれから職業訓練でJava,JavaScriptなどさらに多くのプログラミングを学びました。<br />
                得意な言語はC#です。</p>
            </Typography>
        </div>
    )
}