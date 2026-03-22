import "../TagCss/topTag.css";
import "./Resume.css";
import { AiOutlineFileText } from "react-icons/ai";
import { RsmBox } from "./RsmBox";
import rrlogo from "./images/rrLogo.png";
import souledStore from "./images/souled store.png";
import trustyMoney from "./images/trusty money.png";
import wavez from "./images/wavez.png";

export const Resume = () => {
    return (
        <div id="re" className="resume-body">
            <div className="top-tag">
                <button className="tag-btn">
                    <AiOutlineFileText className="tag-logo" />
                    <span className="tag-text">EXPERIENCE</span>
                </button>
            </div>
            <div className="rsm-heading">
                <span className="heading-text1">My <span className="heading-text2">Experience</span></span>
            </div>
            <div className="rsmBox-content">
                <RsmBox
                    myRole="Associate Software Developer Engineer"
                    roleAt="The Souled Store"
                    duration="July 2025 - Present"
                    location="Pune"
                    weblink="https://www.thesouledstore.com/"
                    websiteName="thesouledstore.com"
                    description="Optimized infinite scroll with asynchronous IndexedDB, reducing DB calls by 99% and resolving critical memory leaks. Fixed dual order issues in the POS service."
                    skills={['React', 'IndexedDB', 'Performance Optimization', 'JavaScript']}
                    clogo={souledStore}
                    projectName="The Souled Store"
                    projectLink="https://www.thesouledstore.com/"
                />
            </div>
            <div className="rsmBox-content">
                <RsmBox
                    myRole="Software Developer Intern"
                    roleAt="Trusty Money"
                    duration="Sept 2024 - Feb 2025"
                    location="Remote"
                    websiteName="trustymoney.in"
                    weblink="https://www.trustymoney.in/"
                    description="Developed secure transaction pipelines and dynamic dashboards. Implemented a tokenized payment gateway with PCI DSS-level security, boosting performance by 70%."
                    skills={['React', 'Security', 'API Integration', 'Dashboards']}
                    clogo={trustyMoney}
                    projectName="Trusty Money"
                    projectLink="https://www.trustymoney.in/"
                />
            </div>
            <div className="rsmBox-content">
                <RsmBox
                    myRole="Fullstack Developer Freelancer"
                    roleAt="WavezGoa"
                    duration="Jan 2025 - Feb 2025"
                    location="Remote"
                    websiteName="gowaterz.com"
                    weblink="https://www.gowaterz.com/"
                    description="Built a multi-role web platform with real-time booking, earnings tracking, and OTA/GDS API integration. Developed a comprehensive Node.js and PostgreSQL backend supporting dynamic pricing."
                    skills={['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux']}
                    clogo={wavez}
                    projectName="WavezGoa"
                    projectLink="https://www.gowaterz.com/"
                />
            </div>
            <div className="rsmBox-content">
                <RsmBox
                    myRole="Software Engineer Intern"
                    roleAt="RareReach"
                    duration="May 2024 - July 2024"
                    location="Remote"
                    weblink="https://rarereach.com/"
                    websiteName="rarereach.com"
                    description="Led B2C platform web development, achieving 30% faster build times using Vite. Built a robust Django backend and integrated Google Analytics."
                    skills={['React', 'Vite', 'Django', 'SQLite', 'Google Analytics']}
                    clogo={rrlogo}
                    projectName="RareReach Waitlist"
                    projectLink="https://rarereach.com/"
                />
            </div>
            <a href="https://drive.google.com/file/d/1Kwv8QWGkvKL0AAHC5wWOT36RfD3bGn-v/view?usp=sharing" target="blank">
                <button className="rs-view">View Resume</button>
            </a>
        </div>
    )
}