import image1 from '/public/assets/img/articles/mobiloapp/1.png'
import image2 from '/public/assets/img/articles/mobiloapp/2.png'
import image3 from '/public/assets/img/articles/mobiloapp/3.png'
import { ArticleTemplate } from './ArticleTools/ArticleTemplate/ArticleTemplate'

import { ExternalLink } from '../../../ExternalLink/ExternalLink'
import { SimpleList } from './ArticleTools/SimpleList/SimpleList'

const images = [
  {
    src: image1,
    alt: '',
  },
  {
    src: image2,
    alt: '',
  },
  {
    src: image3,
    alt: '',
  },
]

const WhatDidILearn = () => (
  <>
    <h4>Introduction</h4>
    <p>
      {`Many interactive web applications focus on the technical aspects of the
      programming they need: choosing a language, how to retrieve and save data.
      However, often among those responsible for implementing user interfaces,
      the user's experience is overlooked. There is a lack of analysis on how to
      make the interface more user-friendly, and the focus is solely on ensuring
      that the currently implemented functionality works as described in the
      client's requirements or in the supervisor's specifications.`}
    </p>
    <h4>Why the app was created</h4>
    <p>
      The insurance company offers a transportation service for customers who
      have purchased the appropriate car insurance coverage. This service has
      various complex dependencies and exclusions, making its calculation
      difficult. The service is established through a contract between the
      insurance company and the customer, but the service is actually performed
      by an auto repair shop that has a contract with the insurance company,
      allowing them to provide the service. The auto repair shop then bills the
      insurance company for the services rendered to the customer. The customer
      incurs no costs, and the service should be performed free of charge
      upfront. The auto repair shop is responsible for providing the services
      and offering them correctly to the customer.
    </p>
    <h4>Main goals</h4>
    <SimpleList>
      <li>Accessibility for both beginner and advanced users</li>
      <li>
        Each button displays information about its function when hovered over,
        which is useful for users who are just starting to use the application.{' '}
      </li>
      <li>
        The entire application can be navigated using the keyboard, which is
        helpful for users who have difficulty using a mouse, as well as for
        advanced users who want to operate the application more efficiently.
      </li>
    </SimpleList>
  </>
)

const Features = () => (
  <>
    <p>
      {`The main view of the user interface is characterized by a minimalist design, with visual elements properly grouped. I decided to place the application's controls at the top of the screen, which is a common practice in programs from various manufacturers. By doing so, I aim to leverage users' familiarity with other solutions and provide them with a layout that they are already accustomed to, making it the most suitable choice.`}
    </p>
    <p>
      {`Indicating incompatible services is not the only data validation feature in the application. Another validation method in the application is to highlight missing user input. A good example of this approach is the loaner car service for customers. When the fields for this service are not filled out, such as not selecting a loaner car model or not specifying the number of days for car rental in the text field, an appropriate error message is displayed, and the frame around the field changes color to red to draw the user's attention. This helps to ensure that all required information is provided by the user.`}
    </p>
    <p>{`I have decided to hide the sidebar menu in the application behind a button located in the top left corner. This approach avoids wasting screen space with a sidebar menu that is not actively used by the user. In the sidebar menu, I have also grouped services into those that can be performed before the repair and those that can be performed after the repair. This provides an additional useful indicator for the user and creates a clear visual differentiation of services based on business requirements.`}</p>
    <p>{`All buttons in the application are represented by icons, allowing us to achieve a more condensed user interface. However, this approach has certain drawbacks, as users who are unable to remember the function of each button may not know their purpose. To address this issue, I have implemented a feature that displays a tooltip with information about the button's function immediately upon hovering over it with the mouse. This provides users with instant contextual information and helps them understand the purpose of each button.`}</p>
    <p>{`Another useful feature for advanced users and those who have difficulty using the computer mouse is the keyboard shortcuts functionality. When the SHIFT key is held down on the keyboard, letters are displayed below the application controls. Pressing the corresponding letter performs the action associated with the buttons beneath them. For example, the shortcut SHIFT + R can reset all selected services. This feature allows users to navigate and interact with the application more efficiently, without relying solely on mouse interactions.`}</p>
  </>
)

export const MobiloApp = () => {
  return (
    <ArticleTemplate
      images={images}
      technologies={['React', 'TypeScript', 'Zustand', 'Chakra UI', 'Vite']}
      features={<Features />}
      whatDidILearn={<WhatDidILearn />}
      demoLink='https://goodideagiver.github.io/mobilo-app/'
      repoLink='https://github.com/goodideagiver/mobilo-app'
    />
  )
}
