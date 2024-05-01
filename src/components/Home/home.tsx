import './home.css';
import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from './footer';

export function MainHome(){
    return(
    <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent linkActive'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='HomeBlockContent'>
            <h3 className='HomeTitles'>Maxim Maksimov</h3>
            <p className='HomeText'>TypeScript React developer from Russia</p>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}
