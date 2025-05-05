import webDevPng from "../assets/webdev.jpg"
import ewerk from "../assets/ewerk.jpg"
import bundeswehr from "../assets/bundeswehr.jpg"
import texas from "../assets/texas.jpg"
import school from "../assets/school.jpg"

export default [
{
    id: 5,
    cardTitle: "EBCsoft GmbH - Junior Frontend Developer",
    title: "03/2025",
    cardDetailedText: "Junior Frontend Developer",
    timelineContent:
         <div>I am a Junior Frontend Developer with professional experience in Angular and a strong personal focus on React. In various customer projects (e.g., SMARD, EEX), I contributed to requirements engineering, web component development, and framework upgrades. In my free time, I am expanding my backend skills by learning Go.</div>,
    media:{
        name: "Webdev",
        type: "IMAGE",
        source: {
            url: webDevPng.src
        }

    }

},
{
    id: 4,
    cardTitle: "EWERK Digital GmbH - Fachinformatiker für Anwendungsentwicklung - verkürzt",
    title: "09/2022-02/2025",
    timelineContent:
        <div>I further expanded my existing programming and project management skills by actively contributing to customer projects as part of software teams, for example at SMARD and EEX. I participated in requirements meetings and implemented the corresponding solutions. My responsibilities included the implementation of individual web components, as well as the migration and version upgrades of frameworks. Additionally, I developed new graphical interfaces for StackStorm, a workflow automation tool used internally within the company.</div>,
    media:{
        name: "Webdev",
        type: "IMAGE",
        source: {
            url: ewerk.src
        }

    }

},
{
    id: 3,
    cardTitle: "Bundeswehr - Offizierlaufbahn bei in der Panzertruppe",
    title: "07/2015-06/2022",
    timelineContent:
<div>As an officer in the armored corps, I successfully completed several leadership levels, including serving as a platoon leader and deputy company commander, responsible for up to 100 soldiers. I was also in charge of organizing multinational military exercises and participating in them. Additionally, I organized educational trips.</div>,
    media:{
        name: "Webdev",
        type: "IMAGE",
        source: {
            url: bundeswehr.src
        }

    }

},
{
    id: 2,
    cardTitle: "Heinrich-Heine-Gymnasium Wolfen - Fachhochschulreife",
    title: "10/2012-06/2015",
    timelineContent:
        <div>Advanced Secondary Certificate - Abitur</div>,
    media:{
        name: "Webdev",
        type: "IMAGE",
        source: {
            url: school.src
        }

    }

},
{
    id: 1,
    cardTitle: "Deutsche Schule El Paso, TX, USA - Mittlere Reife",
    title: "07/2007-10/2012",
    timelineContent:
        <div>Secondary School Diploma</div>,
    media:{
        name: "Webdev",
        type: "IMAGE",
        source: {
            url: texas.src
        }

    }

},
]