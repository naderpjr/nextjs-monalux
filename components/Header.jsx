
import GradientText from '@/components/GradientText';

export default function Header() {
    return <div className='w-screen h-screen flex flex-col items-center justify-center font-semibold uppercase'>
        <GradientText
            colors={["#0e0e0e", "#ffffff", "#0e0e0e"]}
            animationSpeed={5}
            className="text-3xl p-4 md:text-7xl lg:text-8xl "
        >
            Monalux
        </GradientText>
    </div>
}