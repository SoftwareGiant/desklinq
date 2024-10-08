'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { variants } from '@/utils/animationVariants'
import Link from 'next/link'
import { UrlObject } from 'url'
import DesklinqLight from '@/images/logos/nomal/6.png'
export interface GallerySliderProps {
  className?: string
  galleryClass?: string
  galleryImgs: any
  href?: string
  imageClass?: string
  navigation?: boolean
  ratioClass?: string
  uniqueID: string
  propertyName?: string
  vendorID?: string
}

export default function GallerySlider(props: GallerySliderProps) {
  const {
    className = '',
    galleryImgs,
    ratioClass = 'aspect-w-4 aspect-h-3',
    imageClass = '',
    galleryClass = 'rounded-xl',
    href = '/listing-stay-detail',
    navigation = true,
    uniqueID = 'uniqueID',
    propertyName,
    vendorID,
  } = props

  const [loaded, setLoaded] = useState(false)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const images = galleryImgs || [
    'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
  ]

  const urlObject: UrlObject = {
    pathname: href,
    query: propertyName
      ? { name: propertyName, property: uniqueID, vendor: vendorID }
      : {},
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setIndex(newVal)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1)
      }
    },
    trackMouse: true,
  })

  let currentImage = images ? images[index] : null

  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className={`relative group group/cardGallerySlider ${className}`}
        {...handlers}
      >
        {/* Main image */}
        <div className={`w-full overflow-hidden ${galleryClass}`}>
          <Link
            href={urlObject}
            className={`relative flex items-center justify-center ${ratioClass}`}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants(340, 1)}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  loader={() => currentImage?.uri || currentImage || ''}
                  src={currentImage?.uri || currentImage || ''}
                  fill
                  alt="listing card gallery"
                  className={`object-cover ${imageClass}`}
                  onLoadingComplete={() => setLoaded(true)}
                  sizes="(max-width: 1025px) 100vw, 300px"
                />
              </motion.div>
            </AnimatePresence>
          </Link>
        </div>

        {/* Buttons + bottom nav bar */}
        <>
          {/* Buttons */}
          {loaded && navigation && (
            <div className="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity ">
              {index > 0 && (
                <button
                  className="absolute w-8 h-8 left-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  onClick={() => changePhotoId(index - 1)}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
              )}
              {index + 1 < images?.length && (
                <button
                  className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  onClick={() => changePhotoId(index + 1)}
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {/* Bottom Nav bar */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
          <div className="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
            {images?.map((_: null, i: number) => (
              <button
                className={`w-1.5 h-1.5 rounded-full ${
                  i === index ? 'bg-white' : 'bg-white/60 '
                }`}
                onClick={() => changePhotoId(i)}
                key={i}
              />
            ))}
          </div>
        </>
      </div>
    </MotionConfig>
  )
}
