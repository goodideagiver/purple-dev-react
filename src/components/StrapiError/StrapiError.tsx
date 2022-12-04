import classes from './StrapiError.module.css'

export const StrapiError = () => {
  return (
    <div className={classes.root}>
      <main className={classes.info}>
        <h2>Something went wrong...</h2>
        <p>I probably didn{`'`}t have time to migrate strapi from heroku</p>
      </main>
    </div>
  )
}
