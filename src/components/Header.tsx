import navigationButtonContent from "@/ressources/navigationButtonContent";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Home} from "lucide-react";
import {useRouter} from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const currentPage = navigationButtonContent.find(
        (element) => element.route === pathname
    );

    return (
        <div className="w-full pb-4 mb-6">
            <div className="flex items-center w-full px-6 py-12 relative min-h-[20px]">
                <div className="absolute left-1/2 -translate-x-1/2 text-2xl font-medium">
                    {currentPage ? <div>{currentPage.content}</div> : <div>Home</div>}
                </div>
                
                <div className="ml-auto">
                    {currentPage && (
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => router.push("/")}
                            className="hover:scale-105 transition-transform"
                        >
                            <Home className="h-5 w-5" />
                        </Button>
                    )}
                </div>
            </div>
            <div className="w-full border-b border-border" />
        </div>
    );
}