export default function EducationComponent(){
    return (
        <div id="education" className="pt-10">
            <div className="w-full row-auto cursor-default">
                    <h1 className="text-6xl text-center font-extrabold text-secondary select-none">Education</h1>
                </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-row w-1/2 h-full">
                    <div className="flex-1 flex flex-col justify-end text-xl text-right border-r border-secondary p-10 gap-2">
                        <div className="h-full flex flex-col justify-start gap-2">
                            <h1 className="font-extrabold">2021 - 2024</h1>
                            <p className="text-lg">BUT Informatique</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col p-10 gap-2 border-secondary relative">
                        <div className="w-5 h-5 bg-quarternary rounded-2xl absolute left-0 -translate-x-1/2"></div>
                        <div className="flex  flex-col gap-2">
                            <h1 className="text-xl">IUT de Montreuil</h1>
                            <p>Montreuil, France</p>
                            <p>Background: Application Development</p>
                            <p>2 years of apprenticeship</p>
                            <p>Acquired skills : Software Development, User Interface (UI) Design, Database Management, Application Deployment and Management, Testing and Debugging, Project Management and Teamwork</p>
                        </div>  
                    </div>
                </div>

                <div className="flex flex-row w-1/2 h-full">
                    <div className="flex-1 flex flex-col justify-end  text-right border-r border-secondary p-10 gap-2">
                    <div className="flex  flex-col gap-2">
                            <h1 className="text-xl">Lycée Georges Clemenceau</h1>
                            <p>Villemomble  , France</p>
                            <p>Specialization in Mathematics and Physics-Chemistry</p>
                        </div>  
                    </div>
                    <div className="flex-1 flex flex-col p-10 gap-2 border-secondary relative">
                        <div className="w-5 h-5 bg-quarternary rounded-2xl absolute left-0 -translate-x-1/2"></div>
                        <div className="h-full flex flex-col justify-start gap-2">
                            <h1 className="font-extrabold text-xl">2018 - 2021</h1>
                            <p className="font-extralight">General Baccalaureate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}