
import GradientText from '@/components/GradientText';

export default function Header() {
    return <div className='w-screen h-screen flex flex-col items-center justify-center font-extrabold'>
        <GradientText
            colors={["#0e0e0e", "#ffffff", "#0e0e0e"]}
            animationSpeed={5}
            className="text-3xl p-4 md:text-7xl lg:text-8xl "
        >
            Monalux Studio
        </GradientText>

        <p className='font-normal'>Creative web development agency based in Afghanistan</p>
    </div>
}