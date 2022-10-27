import Picture from './Assets_Images/Picture.png'
import Picture2 from './Assets_Images/Picture2.png'
import Picture3 from './Assets_Images/Picture3.png'

const images = [{
    id: 1,
    src: `${Picture}`,
    text:"Badminton",
    alt: 'Badminton Image'
    },
    {
        id: 2,
        text:"Chess",
        src: `${Picture2}`,
        alt: 'Chess Image'        
    },
    {
        id: 3,
        text:"Table tennis",
        src: `${Picture3}`,
        alt: 'Table Tennis Image'
    }    
];

export default images;