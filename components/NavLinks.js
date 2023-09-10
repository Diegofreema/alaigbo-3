'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
const NavLinks = ({ item }) => {
  const router = useRouter();
  const { link, title } = item;
  const MotionLink = motion(Link);
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06,
      },
    },
  };
  const singleWord = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <MotionLink
      variants={quote}
      initial="initial"
      animate="animate"
      className="text-white w-fit py-2 px-4 mb-4"
      href={link}
    >
      {title.split(' ').map((word, index) => (
        <motion.span
          variants={singleWord}
          key={index}
          className="inline-block i"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </MotionLink>
  );
};

export default NavLinks;
