// import {Chrono} from "react-chrono";
import timelineContent from "@/ressources/timelineContent";
import {Button} from "@/components/ui/button";
import {router} from "next/client";
import dynamic from "next/dynamic";


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
            <Button onClick={() => router.push("/")}>Back</Button>
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

            />
        </div>
        </>
    )
}