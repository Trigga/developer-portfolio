import HomeNavigationModel from "@/models/HomeNavigationModel";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function HomeNavigation(props: HomeNavigationModel) {

    const router = useRouter()

    return (
        <>

        <Button onClick={() => router.push(props.route)} variant="default" className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]
                         h-[10vh] sm:h-[12vh] md:h-[15vh]
                         text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
            {props.content}</Button>
        </>
    )
}