import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from '../Home/footer';
import { projects } from './data/data';

export function MainProjects(){
    return(
        <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent linkActive'><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='ProjectsBlockContent'>
            <div className='ProjectsBlockTitles'>
                <h3 className='projectsBlockTitlesTitle fontTitle'>Projects</h3>
                <p className='projectsBlockTitlesText fontText'>Here are the projects I've been doing, they're also on github</p>
            </div>
            <div className='ProjectsBlockContentCards'>
                <div className='ProjectsBlockCards'>
                    {projects.map((item, index) => (
                        <div key={index} className='ProjectsCards'>
                         <a href={item.url} target='_blank' rel="noreferrer"><img src={item.img} alt='img' className='ProjectsImg'></img></a>
                        <a href={item.url} target='_blank' rel="noreferrer" className='ProjectsTitle fontTitle'>{item.title}</a>
                        <p className='ProjectsText fontText' key={index}>{item.skills}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}