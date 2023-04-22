import profileImage from "../../images/profile.jpg";
import {
  BiographyData,
  ProfileData,
  smallCardsData,
} from "../../data/profileData/ProfileData";
import Biography from "./Biography";
import ProfileIntro from "./ProfileIntro";
import "./profile.css";
import { useState } from "react";
import Course from "../courses/Course";
import SmallCards from "./SmallCards";

function Profile() {
  const [follow, setFollow] = useState(true);

  function handleFollow() {
    setFollow(!follow);
  }

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-inner">
          <div className="profile-image-sec">
            <img src={profileImage} alt="profile-icon" />
            <div className="follow">
              <button className="follow-btn" onClick={handleFollow}>
                {follow ? "Follow +" : "Unfollow -"}
              </button>
            </div>
          </div>
          <div className="profile-content">
            {ProfileData.map((item) => (
              <ProfileIntro
                key={item.id}
                name={item.name}
                jobTitle={item.jobTitle}
                phone={item.phone}
                email={item.email}
                socials={item.socials}
              />
            ))}
            {BiographyData.map((item) => (
              <Biography
                key={item.id}
                title={item.title}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
            <div className="smallCards">
              {smallCardsData.map((item) => (
                <SmallCards
                  key={item.id}
                  icon={item.icon}
                  counter={item.counter}
                  text={item.text}
                />
              ))}
            </div>
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
