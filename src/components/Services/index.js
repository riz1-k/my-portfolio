import React from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesH1,
  ServiceIcons,
} from './ServicesElements';

const icons = {
  icon1: require('../images/ColorGame (1).png').default,
  icon2: require('../images/Todo App1.png').default,
  icon3: require('../images/Animated Shape (1).svg').default,
};
function Services() {
  return (
    <>
      <ServicesContainer id='projects'>
        <ServicesH1>My Projects So far...</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <a
              href='https://mcolorgame.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <ServiceIcons src={icons.icon1} />
            </a>
            <ServicesH2>Color Guessing Game</ServicesH2>
            <ServicesP>
              Guess the right color from RGB color code with the option to
              choose between the Easy and Hard mode. The site is made using
              HTML,CSS and Javascript.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <a
              href='https://mtodo-app.herokuapp.com/todo'
              target='_blank'
              rel='noreferrer'
            >
              <ServiceIcons src={icons.icon2} />
            </a>
            <ServicesH2>To Do List</ServicesH2>
            <ServicesP>
              A personal To-do List to list out your daily todos. The site is
              made using ReactJS ,NodeJS and MongoDB database for storing the
              user's account and their todos.
            </ServicesP>
          </ServicesCard>
          {/* <ServicesCard>
            <ServiceIcons src={icons.icon3} />
            <ServicesH2>Premium Benifits</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aut
              facilis a provident pariatur est sapiente placeat corporis
              possimus omnis itaque dolores.
            </ServicesP>
          </ServicesCard> */}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
