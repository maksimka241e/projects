
import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from '../Home/footer';

export function MainAbout(){
    return(
        <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent linkActive'><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='AboutBlockContent'>
            <h3 className='AboutTitle fontTitle'>About</h3>
            <h3 className='AboutText fontText'>I am a developer of websites, things from Russia</h3>
            <br></br>
            <h3 className='AboutText fontText'>I am passionate about programming, technology and more.</h3>
            <h3 className='AboutText fontText'>My goal is to use technology to create things that solve problems and make people's lives better.</h3>
            <br></br>
            <h3 className='AboutText fontText'>I am quite active on telegram and github, where I share ideas and materials about programming, technology and other things.</h3>
            <br></br>
            <h3 className='AboutText fontText'>and I also like to read. mostly these books are about some kind of programs or syntax</h3>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}
