
import {Link, Outlet} from 'react-router-dom';
import { FooterBlock } from '../Home/footer';
import imgCss from './img/css.png';
import imgTs from './img/typeScript.png'
import imgHtml from './img/html.png'
import imgJs  from './img/javaScript.png'
import imgReact from './img/react.png'


export function MainSkills(){
    return(
        <div className='ContentBLock'>
        <div>
        <div className='MainBlocks'>
            <ul className='MainBlocks1'>
                <li className='AllContent'><Link className='AllContent' to='/Home'>Home</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Projects'>Projects</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/CV'>CV</Link></li>
                <li className='AllContent linkActive'><Link className='AllContent' to='/Skills'>Skills</Link></li>
                <li className='AllContent'><Link className='AllContent' to='/About'>About</Link></li>
                <li className='AllContent '><Link className='AllContent' to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <Outlet />
        </div>
        <div className='SkillsBlockContent'>
            <h3 className='SkillsTitle fontTitle'>Skills</h3>
            <div className='SkillsBlockImg'>
                <div className='SkillsBlockMinImg'>
                    <h3 className='SkillsText fontText'>HTML</h3>
                    <a href=' https://www.w3.org/TR/html5' target='_blank' rel="noreferrer"><img className='imgSkills'  src={imgHtml} alt='img'></img></a>
                </div>
                <div className='SkillsBlockMinImg'>
                    <h3 className='SkillsText fontText'>CSS</h3>
                    <a href='https://www.w3.org/Style/CSS/specs.en.html' target='_blank' rel="noreferrer"><img className='imgSkills' src={imgCss} alt='img'></img></a>
                </div>
                <div className='SkillsBlockMinImg'>
                    <h3 className='SkillsText fontText'>JavaScript</h3>
                    <a href='https://learn.javascript.ru/' target='_blank' rel="noreferrer"><img className='imgSkills' src={imgJs} alt='img'></img> </a>                  
                </div>
            </div>
            <div className='SkillsBlockImg'>
            <div className='SkillsBlockMinImg'>
            <h3 className='SkillsText SkillsTs fontText'>TypeScript</h3>
            <a href='https://www.typescriptlang.org/docs' target='_blank' rel="noreferrer"><img className='imgSkills' src={imgTs} alt='img'></img></a>
            </div>
            <div className='SkillsBlockMinImg'>
            <h3 className='SkillsText SkillsReact fontText'>React</h3>
            <a href='https://ru.react.js.org/docs/getting-started.html' target='_blank' rel="noreferrer"><img className='imgSkills' src={imgReact} alt='img'></img></a>
            </div>
            </div>
        </div>
        <FooterBlock></FooterBlock>
    </div>
    )
}