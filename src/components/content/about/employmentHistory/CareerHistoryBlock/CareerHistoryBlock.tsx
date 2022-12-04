import timeSince from '../../../../../helpers/timeSince'
import classes from './CareerHistoryBlock.module.css'

type Props = {
  companyTitle: string
  startDate: Date
  linkToCompany?: string
}

export const CareerHistoryBlock = ({
  companyTitle,
  startDate,
  linkToCompany,
}: Props) => {
  const companyInnerContent = linkToCompany ? (
    <a
      href={linkToCompany}
      className={classes.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {companyTitle}
    </a>
  ) : (
    companyTitle
  )

  return (
    <article className={classes.root}>
      <h4 className={classes.title}>{companyInnerContent}</h4>
      <p>Since: {timeSince(startDate)}</p>
    </article>
  )
}
