function ProfileIntro(props) {
  return (
    <div className="profile-content-intro">
      <ul className="profile-intro">
        <li>
          <div className="label">Name:</div>
          <div className="intro-text">{props.name}</div>
        </li>
        <li>
          <div className="label">Job Title:</div>
          <div className="intro-text">{props.jobTitle}</div>
        </li>
        <li>
          <div className="label">Phone:</div>
          <div className="intro-text">{props.phone}</div>
        </li>
        <li>
          <div className="label">Email:</div>
          <div className="intro-text">{props.email}</div>
        </li>
        <li>
          <div className="label">Follow:</div>
          <div className="intro-icons">
            {props.socials.map((item, index) => (
              <img src={item} key={index} alt="social-icon" />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProfileIntro;
