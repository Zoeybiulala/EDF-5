import ProgressBar from "./ProgressBar";
import LandingTabs from "./LandingTabs";
import NameCard from "./NameCard";
import {useState} from "react";

export default function UserPortal() {
    const [showInfo, setShowInfo] = useState(true);
    const handleToggleInfo = () => {
        setShowInfo(!showInfo);
    };
    const availability = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];
    const managerInfo = {
        photo: 'img_1.png',
        name: 'Alice',
        title: 'Engagement Management',
        contactInfo: {email: 'fakeemail@gmail.com', phone: '123123'},
        availability
    };
    const value = 25;
    const maxValue = 100;
    return (
        <div className="landing-page">
            <div className="left-section">
                <ProgressBar value={value} maxValue={maxValue}/>
                {/*<img className="roadmap" src="img.png" alt="roadmap"/>*/}
                <LandingTabs/>
                <div className="info-toggle">
                    <label htmlFor="info-switch">Show International Student Related Information:</label>
                    <input
                        type="checkbox"
                        id="info-switch"
                        checked={showInfo}
                        onChange={handleToggleInfo}
                    />
                </div>
                {showInfo && (
                    <div className="information-board">
                        {/* Content of the information board */}
                        <h2>Important Information</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Ut efficitur risus a mi consectetur ullamcorper.</p>
                    </div>
                )}
            </div>
            <div className="right-section">
                <NameCard manager={managerInfo}/>
            </div>
        </div>);


}

