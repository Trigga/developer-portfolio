import navigationButtonContent from "@/ressources/navigationButtonContent";
import welcomeSectionContent from "@/ressources/welcomeSectionContent";
import HomeNavigation from "@/components/HomeNavigation";
import WelcomeSection from "@/components/WelcomeSection";
import Header from "@/components/Header";

export default function Home () {

  const buttonElement = navigationButtonContent.map((button) => {
    return <HomeNavigation key={button.id} content={button.content} route={button.route}/>
      }
  )


    return (
        <>
            <main className="min-h-screen">
                <Header/>
                    <div className="container mx-auto px-4 pt-20 flex flex-col items-center">
                        <WelcomeSection name={welcomeSectionContent.name} textContent={welcomeSectionContent.textContent}/>
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                            {buttonElement}
                        </div>
                    </div>
            </main>

        </>
    )

}