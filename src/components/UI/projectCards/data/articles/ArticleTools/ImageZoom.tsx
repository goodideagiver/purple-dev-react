import { StaticImageData } from 'next/image'
import Portal from '../../../../../../../HOC/Portal'
import ImgSmoothLoad from '../../../../ImgSmoothLoad/ImgSmoothLoad'

import classes from './ImageZoom.module.css'
import { HTMLProps, UIEventHandler, WheelEventHandler, useState } from 'react'

type BackdropProps = {
  onClick: () => void
} & HTMLProps<HTMLDivElement>

const Backdrop = ({ onClick, ...props }: BackdropProps) => {
  return <div onClick={onClick} {...props} className={classes.backdrop}></div>
}

type ImageZoomProps = {
  image: string | StaticImageData
  onClick: () => void
}

export const ImageZoom = ({ image, onClick }: ImageZoomProps) => {
  const [scale, setScale] = useState(1)

  const mouseWheelHandler: WheelEventHandler<HTMLDivElement> = (event) => {
    setScale((prev) => {
      let newScale = prev + event.deltaY * -0.01
      newScale = Math.min(Math.max(1, newScale), 3)
      return newScale
    })
  }

  const isZoomedIn = scale > 1

  return (
    <Portal>
      <Backdrop onWheel={mouseWheelHandler} onClick={onClick} />
      <div className={classes.imgContainer}>
        <ImgSmoothLoad
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.15s ease-in-out',
          }}
          src={image}
          alt=''
        />
        {!isZoomedIn && (
          <p className={classes.tooltip}>Use mouse wheel to zoom in</p>
        )}
      </div>
    </Portal>
  )
}
