import FlowingMenu from './FlowingMenu'

export default function FlowMenuSection() {

    const demoItems = [
        { link: 'https://kabul-blog.vercel.app', text: 'Kabul Blog', image: '/kabulblog.png' },
        { link: 'https://naderspec.github.io/raqim', text: 'Raqim Agency', image: '/raqim.png' },
        { link: 'https://md-notes-three.vercel.app', text: 'Markdown Note App', image: '/mdnotes.png' },
        { link: 'https://naderpjr.github.io/SkyCast-weatherapp', text: 'SkyCast App', image: '/skycast.png' },
        { link: 'https://positivus-kappa-plum.vercel.app', text: 'Positivus', image: '/positivus.png' },
    ];

    return (
        <>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div>
        </>
    )
}