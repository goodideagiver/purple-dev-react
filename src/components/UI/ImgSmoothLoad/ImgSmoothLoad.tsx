import styles from './ImgSmoothLoad.module.css'
import { useState } from 'react'

import Image, { ImageProps } from 'next/future/image'
import { StaticImageData } from 'next/image'

type ImgSmoothLoadProps = {
  src: string | StaticImageData
  alt: string
  className?: string
  animate?: boolean
  priority?: boolean
} & ImageProps

export const ImgSmoothLoad = ({
  animate,
  src,
  className,
  alt,
  priority,
  style,
  ...props
}: ImgSmoothLoadProps) => {
  const [isLoaded, setIsLoaded] = useState(animate === false)

  const animationStyles = animate
    ? !isLoaded
      ? styles.loading
      : styles.loaded
    : ''

  return (
    <Image
      style={style}
      src={src}
      onLoad={() => {
        setIsLoaded(true)
      }}
      className={`${animationStyles} ${className ? className : ''}`}
      alt={alt}
      priority={priority}
      {...props}
    />
  )
}

export default ImgSmoothLoad
