import Lightning from './Lightning';

export default function LightBg() {
    return (
        <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
            <Lightning
                hue={220}
                xOffset={0}
                speed={1}
                intensity={1}
                size={1}
            />
        </div>
    )
}