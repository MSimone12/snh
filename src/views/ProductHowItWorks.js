import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

import curvyLines from '../static/productCurvyLines.png'
import { ReactComponent as HowItWorks1 } from '../static/productHowItWorks1.svg'
import { ReactComponent as HowItWorks2 } from '../static/productHowItWorks2.svg'
import { ReactComponent as HowItWorks3 } from '../static/productHowItWorks3.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    overflow: 'hidden',
    color: 'white'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14),
    color: 'white'
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  }
})

const ProductHowItWorks = ({ classes }) => (
  <section className={classes.root}>
    <Container className={classes.container}>
      <img src={curvyLines} className={classes.curvyLines} alt="curvy lines" />
      <Typography variant="h4" marked="center" className={classes.title} component="h2">
        Como funcionamos
      </Typography>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <div className={classes.number}>1. Contato</div>
              <HowItWorks1 fill="white" className={classes.image} />
              <Typography variant="h5">Entre em contato conosco pelo formulário abaixo</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <div className={classes.number}>2. Negócio</div>
              <HowItWorks2 fill="white" className={classes.image} />
              <Typography variant="h5">
                Retornamos com o nosso catálogo de produtos para prosseguir com a compra
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <div className={classes.number}>3. Entrega</div>
              <HowItWorks3 fill="white" className={classes.image} />
              <Typography variant="h5">
                Acertamos entrega e pagamento.
                <br /> E pronto! Só aguardar os nossos produtos em sua casa
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </section>
)

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHowItWorks)
