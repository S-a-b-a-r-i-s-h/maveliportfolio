import athapookalamimg from './athapookalam.jpg'
import onasadhyaimg from './onasadhya.jpg'
import uriyadiimg from './uriyadi.jpg'
import vadamvaliimg from './vadamvali.jpg'
import {BsFlower1} from 'react-icons/bs'
import {GiHorizontalFlip} from 'react-icons/gi'
import {SiHubspot} from 'react-icons/si'
import {SiLeaflet} from 'react-icons/si'
let TimeLineElements = [
    {
        id:1,
        title:'ATHAPOOKALAM',
        description:"Pookalam word is a group of two words 'Poov' and 'kalam', Where 'Poov' means flowers and 'Kalam' means colour sketch. So, basically it's a flower rangoli or flower carpet made on the floor in front of the house to celebrate Onam. It is also known as Athapookalam or Onapookalam. It's considered auspicious to prepare Pookalam during Onam festival.",
        img:`${athapookalamimg}`,
        icon:<BsFlower1 />,
        alt:'Athapookalam'
    },
    {
        id:2,
        title:'ONAM SADHYA',
        description:"Onam Sadhya is a grand and elaborate vegetarian feast served on banana leaves. Comprising a myriad of dishes, it typically includes rice, various curries, pickles, and sweets, with each item meticulously crafted to create a harmonious blend of flavors and textures. Onam Sadhya exemplifies the culinary richness of Kerala and is known for its diversity, reflecting the state's agricultural abundance.",
        img:`${onasadhyaimg}`,
        icon:<SiLeaflet />,
        alt:'onamsadhya'
    },
    {
        id:3,
        title:'URIYADI',
        description:`Uriyadi," a popular game during Onam celebrations in Kerala, involves the art of breaking a suspended clay pot filled with prizes while blindfolded. Participants take turns attempting to shatter the pot using a wooden stick, relying solely on their sense of hearing and spatial awareness to gauge the pot's location.`,
        img:`${uriyadiimg}`,
        icon:<SiHubspot />,
        alt:'uriyadi'
    },
    {
        id:4,
        title:'VADAMVALI',
        description:`Onam games often include the traditional sport of "Vadamvali," also known as "Tug of War." This exciting team-based competition, integral to Onam celebrations, involves two groups pulling a heavy rope in opposite directions, with the goal of trying to overpower and pull the opposing team across a designated marker.`,
        img:`${vadamvaliimg}`,
        icon:<GiHorizontalFlip />,
        alt:'vadamvali'
    }
]

export default TimeLineElements