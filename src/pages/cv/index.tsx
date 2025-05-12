// import {Chrono} from "react-chrono";
import timelineContent from "@/ressources/timelineContent";
import dynamic from "next/dynamic";
import Header from "@/components/Header";


export default function Curriculum() {

    const Chrono = dynamic(() => import('react-chrono').then((mod) => mod.Chrono), {
        ssr: false,
    })


    const theme={
        primary: 'green',
            secondary: 'none',
            cardBgColor: 'white',
            titleColor: 'black',
            titleColorActive: 'none',
    }

    return (
        <>
            <main className="flex flex-col min-h-screen mt-auto">
                <Header/>

                <div>
                    <Chrono style={{ width: "100vw", height: "100vh" }}
                            items={timelineContent}
                            mode="VERTICAL_ALTERNATING"
                            enableBreakPoint="true"
                            responsiveBreakPoint="true"
                            verticalBreakPoint={400}
                            enableDarkToggle="true"
                            theme={theme}
                            timelinePointShape="circle"
                            cardWidth={700}
                            cardHeight={400}
                            mediaHeight={250}
                            textOverlay

                    />
                </div>
            </main>

        </>
    )
}