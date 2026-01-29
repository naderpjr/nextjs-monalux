
export default function Header() {
    return <div className='w-screen h-screen flex flex-col items-center justify-center font-semibold uppercase'>
        <div className='text-5xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'>
            Monalux
        </div>
        <p
            className="text-neutral-500 max-w-lg mx-auto my-2 px-12 text-[15px] lowercase text-center relative z-10">
            Creative Web Development Agency Based in Afghanistan
        </p>
    </div>
}