import { useState } from 'react'
import Modal from '../../../modal/Modal'
import classes from './EmploymentHistory.module.css'

import ReactConfetti from 'react-confetti'
import { Button } from '../../../UI/button/Button'
import { CareerHistoryBlock } from './CareerHistoryBlock/CareerHistoryBlock'

type EmploymentHistoryProps = {
  className: string
}

const EmploymentHistory = ({ className }: EmploymentHistoryProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  const showModalHandler = () => setModalVisible(true)
  const hideModalHandler = () => setModalVisible(false)

  return (
    <div className={`${classes.history} ${className}`}>
      <h3>Past career</h3>
      <Button purpose='button' onClick={showModalHandler}>
        See employment history
      </Button>
      <Modal
        visible={modalVisible}
        modalCloseHandler={hideModalHandler}
        title='Career history'
        className={classes.modalContent}
      >
        <ReactConfetti
          width={800}
          height={1000}
          gravity={0.01}
          recycle={false}
          numberOfPieces={600}
        />
        <CareerHistoryBlock
          companyTitle='AppUnite'
          linkToCompany='https://appunite.com/'
          startDate={new Date(2022, 11, 1)}
        />
      </Modal>
    </div>
  )
}

export default EmploymentHistory
