import Image from 'next/image'
import mockpicture from "../assets/MockPicture.jpg"
import WelcomeSectionContentModel from "@/models/WelcomeSectionContentModel";

export default function WelcomeSection(props: WelcomeSectionContentModel) {

    return (
        <section className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
                <Image
                    src={mockpicture}
                    alt="Mockpicture"
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-center sm:text-left max-w-md">
                <h1 className="text-3xl font-bold mb-4">{props.name}</h1>
                <p className="text-lg text-gray-700">
                    {props.textContent}
                </p>
            </div>
        </section>
    )
}

