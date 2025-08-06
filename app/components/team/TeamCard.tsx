'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

type Props = {
  name: string
  role: string
  image: string
  bg: string
}

export default function TeamCard({ name, role, image, bg }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
      className="rounded-lg overflow-hidden shadow bg-white"
    >
      <div className={`w-full h-60 relative ${bg}`}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500 mt-2">
          There are many variations of passages of Lorem Ipsum available
        </p>
        <div className="flex space-x-4 mt-4 text-gray-600">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </motion.div>
  )
}
