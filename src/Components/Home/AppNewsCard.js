import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import OpenNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const subImage = 'https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=400';

const styles = theme => ({
  card: {
    width: "95%",
    margin: "1rem 0",
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, onenews, rgb } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={{backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}}>
              {onenews.source.name.slice(0,1) || 'N'}
            </Avatar>
          }
          title={onenews.title || "news title"}
          subheader={onenews.publishedAt.slice(0, 10) || "today news"}
        />
        <CardMedia
          className={classes.media}
          image={onenews.urlToImage || subImage}
          title={onenews.title || "news title"}
        />
        <CardContent>
          <Typography align={'left'} component="p">
            {onenews.content || onenews.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Open in new">
            <a href = {onenews.url} target= "_blank">
            <OpenNewIcon style={{color: "rgb(218, 68, 83)"}}/>
            </a>
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography align={'left'} variant="body2">
              source:
            </Typography>
            <Typography align={'left'} paragraph>
              {onenews.source.name || "source name not available"}
            </Typography>
            <Typography align={'left'} variant="body2">
              author:
            </Typography>
            <Typography align={'left'} paragraph>
              {onenews.author || "author name not available"}
            </Typography>
            <Typography>
              <a href = "https://newsapi.org/" target= "_blank" rel="noopener noreferrer" style={{color: "blue", textDecoration: "none"}}>Powered by newsapi.org</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);