import Header from "@/components/Header";
import languageContent from "@/ressources/languageContent";
import AboutLanguageSection from "@/components/AboutLanguageSection";
import programmingLanguageContent from "@/ressources/programmingLanguageContent";
import AboutProgrammingLanguageSection from "@/components/AboutProgrammingLanguageSection";

export default function About() {

    const language = languageContent.map((singleLanguage) => {
            return( <AboutLanguageSection key={singleLanguage.id} text={singleLanguage.text} level={singleLanguage.level}/> )
    });

    const programmingLanguage = programmingLanguageContent.map((singleProgrammingLanguage) => {
        return(
            <AboutProgrammingLanguageSection key={singleProgrammingLanguage.id} text={singleProgrammingLanguage.text}/>
        )
    });

    return <>
        <Header/>
        <div>
            <div>{language}</div>
            <div>{programmingLanguage}</div>
        </div>
    </>
}