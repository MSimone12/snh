import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'
import TextField from '../components/TextField'
import Snackbar from '../components/Snackbar'
import Button from '../components/Button'

import sitio from '../static/sitio2.jpg'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex'
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 3)
  },
  cardContent: {
    maxWidth: 400,
    color: 'white'
  },
  cardTitle: {
    color: 'white'
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  button: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.main
    }
  },
  imagesWrapper: {
    position: 'relative'
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(~/static/onepirate/productCTAImageDots.png)'
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600
  }
})

const ProductCTA = ({ classes }) => {
  const [open, setOpen] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom className={classes.cardTitle}>
                Entre em contato
              </Typography>
              <TextField noBorder className={classes.textField} placeholder="Seu melhor email" />
              <Button type="submit" color="primary" variant="contained" className={classes.button}>
                Enviar
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img src={sitio} className={classes.image} alt="" />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Nós entraremos em contato, não se preocupe!"
      />
    </Container>
  )
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCTA)
