export default function ExperienceComponent(){
    return (
        <div id="experience">
            <div className="w-full row-auto cursor-default">
                    <h1 className="text-6xl text-center font-extrabold text-secondary select-none">Experiences</h1>
                </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-row w-2/5 h-full">
                    <div className="flex-1 flex flex-col justify-end text-xl text-right border-r border-secondary p-10 gap-2">
                        <div className="h-full flex flex-col justify-start gap-2">
                            <h1 className="font-extrabold">2022 - 2024</h1>
                            <p className="text-lg">Full stack developer</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col p-10 gap-2 border-secondary relative">
                        <div className="w-5 h-5 bg-quarternary rounded-2xl absolute left-0 -translate-x-1/2"></div>
                        <div className="flex  flex-col gap-2">
                            <h1 className="text-xl">Algonis</h1>
                            <p>Ivry-Sur-Seine, France</p>
                            <p>I developed applications as a full-stack developer for our clients in the nonprofit sector.</p>
                            <p>Acquired skills : Front-end Development, Back-end Development, Version Control and Collaboration Tools, Deployment and Hosting, Security, Project Management and Development Methodologies.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}