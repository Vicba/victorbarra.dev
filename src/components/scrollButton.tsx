import { useState, useEffect } from 'react';
import cx from 'classnames';
import {AnimatePresence, motion} from "framer-motion"
import { ArrowUp } from '../Icons';

const ScrollToTopButton =() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.75}}
        className={cx('fixed bottom-8 right-8 bg-gray-600 text-white rounded-full p-3 shadow-lg transition-opacity', isVisible ? 'block' : 'hidden')}
        onClick={scrollToTop}>
          <ArrowUp/>
    </motion.button>
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
