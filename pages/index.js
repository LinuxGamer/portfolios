import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {FaFillArtstation} from 'react-icons/fa';
import Image from 'next/image';
import cj from '../public/cj.png';
import testimg from '../public/test.png';
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>CJ Portfolio</title>
        <meta name="description" content="CJ's Artist Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-black px-10 md:px-20 lg:px-40 dark:text-white dark:bg-gray-900'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl text-cyan-500 hover:bg-gradient-to-tr from-cyan-500 to-red-500 px-4 py-2 rounded-lg hover:text-white'>CJ</h1>
            <ul className='flex items-center'>
              <li><a href="#" className='text-cyan-500 hover:bg-gradient-to-tr from-cyan-500 to-red-500 hover:text-white px-4 py-2 rounded-lg'>About</a></li>
              <li><a href="#" className='text-cyan-500 hover:bg-gradient-to-tr from-cyan-500 to-red-500 hover:text-white px-4 py-2 rounded-lg'>Services & Pricing</a></li>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-l ml-2'/></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>CJ</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Artist and Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempora itaque natus perferendis, veritatis explicabo cum ab eos earum porro doloremque expedita fuga, et voluptate voluptatum obcaecati aliquid laborum modi?</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-300'>
            {/* <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube /> */}
            {/* <FaFillArtstation /> */}
          </div>
          {/* <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden'>
            <Image src={cj} />
          </div> */}
        </section>

        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>
              Services I Offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300 bg-gradient-to-l from-cyan-500 to-red-500 rounded-full'>
              I currently <span className='text-teal-500'>do not</span> offer commissions <span className='text-red-500'>so any requests will be ignored!</span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              Prices and options for commissions
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center text-black shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700 dark:text-white'>
              <Image src={testimg} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Small Art Pieces</h3>
              <p className='py-2'>Small Art Pieces (180x180px)</p>
              <h4 className='py-4 text-red-600'>Software I Use</h4>
              <p className='py-1 text-black dark:text-gray-300'>Krita</p>
              <p className='py-1 text-black dark:text-gray-300'>LibreSprite</p>
            </div>
            <div className='text-center text-black dark:text-white shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700'>
              <Image src={testimg} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Medium Art Pieces</h3>
              <p className='py-2'>Art pieces with a size of 900x900 to 1920x1080 in pixels.</p>
              <h4 className='py-4 text-red-600'>Software I Use</h4>
              <p className='py-1 text-black dark:text-gray-300'>Krita</p>
              <p className='py-1 text-black dark:text-gray-300'>Sketchbook</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700'>
              <Image src={testimg} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Large Art Pieces</h3>
              <p className='py-2'>Small Art Pieces (180x180px)</p>
              <h4 className='py-4 text-red-600'>Software I Use</h4>
              <p className='text-black py-1 dark:text-gray-300'>Krita</p>
              <p className='text-black py-1 dark:text-gray-300'>Sketchbook</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>My Previous Works</p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={testimg} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" /></div>
            <div className='basis-1/3 flex-1'><Image src={testimg} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" /></div>
            <div className='basis-1/3 flex-1'><Image src={testimg} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" /></div>
            <div className='basis-1/3 flex-1'><Image src={testimg} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" /></div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>Contact</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>How to get in touch</p>
          </div>
        </section>
      </main>
    </div>
  )
}
