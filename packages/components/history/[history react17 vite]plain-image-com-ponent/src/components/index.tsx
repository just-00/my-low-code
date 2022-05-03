import './index.module.css'
const PlainImageComponent = ({
        link = 'https://www.baidu.com',
        src = `https://picsum.photos/${Math.floor(Math.random() * 1000)}`,
    } : {link?: string, src?: string} ) => {
    return (
        <a href={link} target="__blank">
            <img src={src} className="my-low-code-plain-components-image" />
        </a>
    )
}

export default PlainImageComponent