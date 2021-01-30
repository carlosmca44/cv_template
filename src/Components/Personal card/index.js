import React, {Component} from 'react'
import { Card, CardMedia, List, ListItem, Typography, Divider, LinearProgress, withStyles, Box } from '@material-ui/core'
import { BusinessCenter, Email, HomeWork } from '@material-ui/icons'

const styles = theme=>({
    root:{
                
    },
    titles:{
        padding:'15px 0px',
        marginLeft:'5%',
        color:theme.palette.secondary.main
    },
    subtitles:{
        color:theme.palette.secondary.main
    },
    bars:{
        height:15,
        borderRadius:10
    },
    media:{
        width:300,
        height:300
    },
    icons:{
        paddingRight:'15px'
    },
    presonalTitles:{
        
    }
})

class PersonalContainer extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card>
                <CardMedia
                    className={classes.media}
                />
                <div style={{padding:'15px'}}>
                <List>
                    <ListItem>
                        <Typography className={classes.subtitles}><BusinessCenter className={classes.icons} color='primary' fontSize='small'/>{this.props.profesion}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography className={classes.subtitles}><HomeWork className={classes.icons} color='primary' fontSize='small'/>{this.props.region}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography className={classes.subtitles}><Email className={classes.icons} color='primary' fontSize='small'/>{this.props.email}</Typography>
                    </ListItem>
                </List>

                <Divider/>

                <Typography className={classes.titles} variant='h5'>Skills</Typography>

                <List>
                    {
                        this.props.progress.map((key, value) =>(
                            <ListItem>
                                <Typography className={classes.subtitles}>{key.technology}</Typography>
                                <LinearProgress
                                    className={classes.bars}
                                    variant='determinate'
                                    value={key.progress}
                                />
                            </ListItem>
                        ))
                    }
                    
                </List>

                <Divider/>

                <Box justifyContent='center' className={classes.presonalTitles}>
                    <Typography className={classes.titles} variant='h5'>Language</Typography>
                </Box>

                <List>
                    {
                        this.props.language.map((key, value) =>(
                            <ListItem>
                                <Typography className={classes.subtitles}>{key.language}</Typography>
                                <LinearProgress
                                    className={classes.bars}
                                    variant='determinate'
                                    value={key.domain}
                                />
                            </ListItem>
                        ))
                    }
                </List>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(PersonalContainer)