import './contact.css';
import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from '../Home/footer';

export function MainContact(){
    return(
        <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent linkActive'><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='ContactBlockContent'>
            <h3 className='ContactTitle fontTitle'>Let's get in touch</h3>
            <h3 className='ContactText fontText'>Do you have some project you want to realize? Let's get in touch! Contact me on my email:<span className='ContactSpan'>maksimoksx@gmail.com</span></h3>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}
