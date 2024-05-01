import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from '../Home/footer';
import './CV.css';

export function MainCV(){
    return(
        <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent linkActive'><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='CVBlockContent'>
            <div className='CVContent'>
                <h3 className='CVTitle fontTitle'>My CV</h3>
                <div className='CVBlockTitles'>
                    <h3 className='CVBlockTitle fontTitleCv'>Name:</h3>
                    <p className='CVBlockText fontText CVText'>Maksim Maksimov</p>
                </div>
                <div className='CVBlockTitles'>
                    <h3 className='CVBlockTitle fontTitleCv'>Location:</h3>
                    <p className='CVBlockText fontText CVText'>Republic of Adygea</p>
                </div>
                <div className='CVBlockTitles'>
                    <h3 className='CVBlockTitle fontTitleCv'>E-mail:</h3>
                    <p className='CVBlockText fontText CVText'>maksimoksx@gmail.com</p>
                </div>
                <div className='CVBlockTitles'>
                    <h3 className='CVBlockTitle fontTitleCv'>Telegram:</h3>
                    <p className='CVBlockText fontText CVText'><a href='https://t.me/MaksimKaize' className='fontText' target='_blank' rel="noreferrer">https://t.me/MaksimKaize</a></p>
                </div>
                <div className='CVBlockTitles'>
                    <h3 className='CVBlockTitle fontTitleCv'>Github:</h3>
                    <p className='CVBlockText fontText CVText'><a href='https://github.com/maksimka241e' className='fontText' target='_blank' rel="noreferrer">https://github.com/maksimka241e</a></p>
                </div>
            </div>
            <div className='CVBlockTitlesAbout'>
                <h3 className='CVAboutTitle fontTitleCv'>Little bit about me:</h3>
                <p className='fontText CVText'>I started learning frontend when I was 14 years old. Two years later, I realized that I wanted to connect my life with this profession. In the future, I plan to expand my knowledge in the field of backend development.
                   I strive for professional growth and development. At the moment, I already have knowledge in the field of HTML, CSS, JavaScript, TypeScript and React. I still have to study a little more information in order to complete the development of all necessary technologies.</p>
            </div>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}
