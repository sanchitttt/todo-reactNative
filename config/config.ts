import { IntroProps } from "../components/Intro";

interface Config { 
    introScreens : IntroProps[]
}

const config = {
    introScreens: [
        {
            image : '../assets/images/intro1.png',
            title: 'Manage your tasks',
            description: 'You can easily manage all of your daily tasks in DoMe for free'
        },
        {
            image : '/assets/images/intro2.png',
            title: 'Create daily routine',
            description: 'In Uptodo you can create your personalized routine to stay productive'
        },
        {
            image : '/assets/images/intro3.png',
            title: 'Organize your tasks',
            description: 'You can organize your daily tasks by adding your tasks into separate categories'
        }
    ]
}


export default config;