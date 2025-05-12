import AboutLanguageModel from "@/models/AboutLanguageModel";

export default function AboutLanguageSection(props: AboutLanguageModel){

    return(
        <>
        <div>{props.text}</div>
        </>
    )
}