import Beams from "@/components/Beams";
import Navbar from "@/components/Navbar";

export default function Home() {
  return <div>
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Beams
        beamWidth={2}
        beamHeight={25}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
    </div>
    <Navbar />
  </div>
}
