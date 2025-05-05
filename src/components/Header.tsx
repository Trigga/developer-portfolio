import navigationButtonContent from "@/ressources/navigationButtonContent";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {router} from "next/client";

export default function Header() {
    const pathname = usePathname();

    // Find the matching navigation item based on the current path
    const currentPage = navigationButtonContent.find(
        (element) => element.route === pathname
    );

    return (
        <>
            <div className="flex justify-center">
                {currentPage ? <div>{currentPage.content}</div> : <div>Home</div>}
            <div>{currentPage ? <Button onClick={() => router.push("/")}>Back</Button> : null }</div>
            </div>
        </>
    );
}
