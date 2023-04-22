import facebook from "../../images/profileFacebook.svg";
import twitter from "../../images/profileTwitter.svg";
import linkedin from "../../images/profileLinkedin.svg";
import followerIcon from "../../images/followerIcon.png";
import classesIcon from "../../images/classesIcon.png";
import studentsIcon from "../../images/studentsIcon.png";

const ProfileData = [
  {
    id: 1,
    name: "Douglas Lyphe",
    jobTitle: "Principal",
    phone: "+(088) 223 478 365",
    email: "douglas@echooling.com",
    socials: [facebook, twitter, linkedin],
  },
];

const BiographyData = [
  {
    id: 1,
    title: "Biography",
    text1: "Why I say old chap that is spiffing he legged easy peasy.",
    text2:
      "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate.",
  },
];
const smallCardsData = [
  {
    id: 1,
    icon: followerIcon,
    counter: 28,
    text: "foreign followers",
  },
  {
    id: 2,
    icon: classesIcon,
    counter: 10,
    text: "Classes complete",
  },
  {
    id: 3,
    icon: studentsIcon,
    counter: 208,
    text: "Students enrolled",
  },
];
export { ProfileData, BiographyData, smallCardsData };
