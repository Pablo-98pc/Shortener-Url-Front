import { DisplayInfo } from "./DisplayInfo"
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'

const socialMedia = [
    {
        name : 'Instagram',
        urlImage :Instagram
    },
    {
        name: 'Twitter',
        urlImage:Twitter
    },
    {
        name : 'Facebook',
        urlImage:Facebook
    }
]

const faq = [
    {
        name:'librarie',
        title:'Which front librarie / framework is this website using?',
        answer:'This website is built under React. '
    },
    {
        name:'privacy',
        title:'Is this personal information being used for any porpouse?',
        answer:'This website is not using any kind of information from users.'
    },
    {
        name:'Space',
        title:'Is the storage limited per user?',
        answer:'No, you can have as many links saved as you want for your own use'
    }
]


export const Footer = () => {

    return <footer>
        <div className="social-media">
            {socialMedia.map((e,i)=> <div className={e.name} key={i}> <img href={e.urlImage} alt={e.name} /></div>)}
        </div>
       
        <div className="frequently-ask-questions">
           {faq.map((e,i)=> <DisplayInfo name={e.name} answer={e.answer} title={e.title} key={i}/> )}
        </div>
        <div className="git-link">
            <h2 className="github-repository">If you wanna know see the code of the website visit our <a href='https://github.com/Pablo-98pc/Shortener-Url-Front.git'> Github </a> </h2>
        </div>
    </footer>
}