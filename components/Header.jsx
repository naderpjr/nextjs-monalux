import Shuffle from '@/components/Shuffle';
import GradientText from '@/components/GradientText';

export default function Header() {
    return <div className='w-full h-170 flex items-center justify-center font-extrabold'>
        <GradientText
            colors={["#0e0e0e", "#ffffff", "#0e0e0e"]}
            animationSpeed={5}
            className="text-3xl p-4 md:text-7xl lg:text-8xl mt-60"
        >
            Monalux Studio
        </GradientText>
    </div>
}