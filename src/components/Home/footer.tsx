import imgGit from './img/github.png'
import imgTg from './img/tg.png'
import imgVk from './img/vk.png'

export function FooterBlock(){
    return(
        <div className='BlockFooterContent'>
            <div className='BlockFooterImg'>
                <a href='https://github.com/maksimka241e'><img className='imgGit' src={imgGit} alt='img'></img></a>
                <a href='https://t.me/MaksimKaize'><img className='imgTg' src={imgTg} alt='img'></img></a>
                <a href='https://vk.com/maksim796'><img className='imgVk' src={imgVk} alt='img'></img></a>
            </div>
            <div className='BlockFooterTitle'>
               <h3 className='Copyinght'>Copyringht © 2024 Maksim Maksimov</h3>
            </div>
        </div>
    )
}