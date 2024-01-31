"use client";

import HomeComponent from './components/_section/home/home.component';
import ProjectsComponent from './components/_section/projects/projects.component';
import SkillsComponent from './skills/skills.component';
import ContactComponent from './components/_section/contact/contact.component';
import FooterComponent from './components/_section/footer/footer.component';
import ExperienceComponent from './components/_section/experience/experience.component';
import EducationComponent from './components/_section/education/education.component';



export default function App() {



  return (
    <main className=''>
      <HomeComponent />
      <ExperienceComponent />
      <EducationComponent />
      {/* <SkillsComponent /> */}
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent />
    </main>
  )
}
