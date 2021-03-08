import Section from '../components/Section';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ParticlesBG from '../components/ParticlesBG';

export default function Home() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push('/' + document.getElementById('query').value);
  }

  const variants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <Section>
      <div className='flex flex-col items-center justify-between font-bold relaitve md:flex-row dark:text-primary text-primary-dark'>
        <ParticlesBG className='absolute top-0 left-0 h-full' />
        <motion.p
          initial={'hidden'}
          animate={'visible'}
          variants={variants}
          transition={{ ease: 'linear', duration: 0.2 }}
          className='w-full mb-16 text-6xl leading-tight text-center md:w-1/2 md:text-8xl md:text-left md:mb-0'
        >
          Get daily weather forecasts
        </motion.p>
        <div className='relative'>
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            variants={variants}
            transition={{ ease: 'linear', duration: 0.2, delay: 0.1 }}
            className='flex flex-col items-center justify-center'
          >
            <span className='text-4xl text-center md:text-6xl'>
              Search for your location
            </span>
            <div className='flex flex-col items-center justify-center my-4 rounded md:flex-row md:my-8 dark:bg-primary bg-primary-dark text-primary-dark '>
              <form onSubmit={handleClick}>
                <input
                  type='text'
                  className='w-full p-2 rounded md:p-4 focus:outline-none md:w-auto'
                  id='query'
                  placeholder='e.g. London or London,UK'
                  autoComplete='off'
                  required
                />
                <button
                  type='submit'
                  className='w-full h-full p-2 font-semibold bg-pink-700 rounded-r md:p-4 text-primary md:w-auto'
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
