import { Typography, withStyles } from '@material-ui/core'
import React, {Component} from 'react'

const styles = theme=>({
    root:{
        backgroundColor:theme.palette.primary.main,
        width:'100%',
        color:'#fff'
    },
    text:{
        fontSize:'15px',
        padding:'15px 0px',
        marginLeft:'1%'
    }
})

class Footer extends Component{
    render(){
        const {classes} = this.props
        return(
            <footer className={classes.root}>
                <Typography className={classes.text}>
                    Carlos Manuel Crespo Astorac. Copyright © 2021
                </Typography>
            </footer>
        )
    }
}

export default withStyles(styles) (Footer)