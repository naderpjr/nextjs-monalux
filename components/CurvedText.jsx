import CurvedLoop from './CurvedLoop';


export default function CurvedText() {
    return (
        <CurvedLoop
            marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
            speed={3}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="absolute bg-black"
        />
    )
}