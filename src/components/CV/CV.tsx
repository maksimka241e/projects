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
                <p className='fontText CVText'>I started learning frontend development when I was 14 years old and after two years of study, I realized that this is the field I want to pursue. In the future, I plan to continue expanding my knowledge in server-side development.
                I am committed to professional growth and I strive to become a skilled developer. At the moment, I have a solid foundation in HTML, CSS, JavaScript, TypeScript, and React. However, there is always more to learn and I am eager to continue learning and growing as a developer.</p>
            </div>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}
