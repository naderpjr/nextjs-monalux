import Orb from './Orb';

export default function OrbBg() {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={true}
            />
        </div>
    )
}