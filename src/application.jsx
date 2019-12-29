import React from 'react';
import './style.css';
import Banner from './navigation/banner';
import Section from './navigation/section';
import Navigation from "./navigation/navigation";

class Application extends React.Component {
    render() {
        const headerText = 'Veterans Marathon and Heroes 5k';
        const sectionOneTitle = 'Welcome Veterans and Runners';
        const welcomeMessage = [
            'Running Around screen printing and the Bird Family are proud to continue the tradition of the Veterans Marathon, a superb event honoring our nation’s Veterans.',
            'Located in the heart of northeast Indiana, Columbia City is a small-town community with true Hoosier values.  It’s a community rooted in its agricultural heritage, strengthened by its commercial and residential development, and proud of its hometown heroes.',
            'In honor of those servicemen and servicewomen throughout nation, Running Around screen printing has teamed up with the Columbia City Parks and Recreation Department to present the 12th Annual Veterans Marathon, Half-Marathon and Heroes 5K on November 7, 2020.',
            'Only 20 miles west of Fort Wayne on US Highway 30, Columbia City is easy to find, easy to get to, easy to appreciate, and easy to enjoy. We can’t promise the race is easy to run, but we can promise that you’ll have fun.',
            'Come experience the challenge and excitement of running the Veterans Marathon, Half-Marathon or 5K and do so in honor of America’s veterans. You’ll be glad you did.'
        ];
        const sectionOneMessage = welcomeMessage.map((item, i) => <p key={i}>{item}</p>);
        return (
            <div className='page-layout'>
                <Navigation/>
                <Banner
                    message={headerText}
                />
               
                <Section
                    title={sectionOneTitle}
                    message={sectionOneMessage}
                />
            </div>
        );
    }
}

export default Application;
