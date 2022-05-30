import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content'>
                <div className="links">
                    <a className='footer-link' target='_blank' rel='noreferrer' href="https://github.com/jbramirez03"><RiGithubFill /></a>
                    <a className='footer-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/"><RiLinkedinBoxFill /></a>
                    <a className='footer-link' target='_blank' rel='noreferrer' href="https://jbramirez03.github.io/React-Portfolio/"><BsFillPersonFill /></a>
                </div>
                <div className="copyright">
                    <a className='repo-link' href="https://github.com/jbramirez03/Weather-Arc" target="_blank" rel='noreferrer'>&#169; jbramirez03. All rights reserved</a>
                </div>
            </div>
        </div>
    )
}

export default Footer