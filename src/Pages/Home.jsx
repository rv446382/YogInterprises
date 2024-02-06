import React from 'react'
import Slider from '../slider/Slider';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./home.css";
import Footer from '../Footer/Footer';




const Home = () => {

    const slider = [
        'https://www.sawindia.com/wp-content/uploads/2020/11/client8.png',
        'https://www.sawindia.com/wp-content/uploads/2020/12/naturals-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/billdesk-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/dream11-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2022/04/logoz.png',
        'https://www.sawindia.com/wp-content/uploads/2020/11/client10.png',
        'https://www.sawindia.com/wp-content/uploads/2020/11/client1.png',
        'https://www.sawindia.com/wp-content/uploads/2020/11/client8.png',
        'https://www.sawindia.com/wp-content/uploads/2020/12/naturals-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/billdesk-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/dream11-logo.jpg',

    ];

    const sliderOne = [
        'https://www.sawindia.com/wp-content/uploads/2020/11/client8.png',
        'https://www.sawindia.com/wp-content/uploads/2020/12/naturals-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/billdesk-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2020/12/dream11-logo.jpg',
        'https://www.sawindia.com/wp-content/uploads/2022/04/logoz.png',
        'https://www.sawindia.com/wp-content/uploads/2020/11/client10.png',

    ];

    return (
        <div>
            <Slider />

            <div className='mid-part'>
                <h2>Products & Solutions <br />When you want a solution. Not another software</h2>

            </div>
            <div className="erp-sections">

                <div className="erp-section">
                    <img src="https://woodmizer.in/media/.renditions/wysiwyg/WM-USA/Homepage/Features/LT40WideEU_Feature.jpg" alt="Section 1" />
                    <div className="text-content">
                        <h2>Enterprise Resource Planning <br />(ERP) Software</h2>
                        <h3>Run your entire business on one affordable<br /> and integrated software solution. Manage<br /> sales, accounts, CRM, operations, <br />manufacturing & support on one software.</h3>
                        <a href="#">Know More <span><IoArrowForwardCircleOutline /></span></a>
                    </div>
                </div>


                <div className="erp-section">
                    <img src="https://woodmizer.in/media/.renditions/wysiwyg/WM-USA/Homepage/Features/hr700_feature.jpg" alt="Section 2" />
                    <div className="text-content">

                        <h2>Enterprise Resource Planning <br />(ERP) Software</h2>
                        <h3>Run your entire business on one affordable<br /> and integrated software solution. Manage<br /> sales, accounts, CRM, operations, <br />manufacturing & support on one software.</h3>
                        <a href="#">Know More <span><IoArrowForwardCircleOutline /></span></a>
                    </div>
                </div>


                <div className="erp-section">
                    <img src="https://woodmizer.in/media/.renditions/wysiwyg/WM-USA/Homepage/Features/mp360_feature.jpg" alt="Section 3" />
                    <div className="text-content">
                        <h2>Enterprise Resource Planning <br />(ERP) Software</h2>
                        <h3>Run your entire business on one affordable<br /> and integrated software solution. Manage<br /> sales, accounts, CRM, operations, <br />manufacturing & support on one software.</h3>
                        <a href="#">Know More <span><IoArrowForwardCircleOutline /></span></a>
                    </div>
                </div>
            </div>
            <div className='carousel'>
                <div className='sub-carousel'>
                    <div className='children'>
                        <h1>About Us</h1>
                        <br />
                        <br />
                        <p>Established in 1991, Software At Work (India) Pvt. Ltd. has always <br />focussed on providing off-the-shelf software solutions that are designed <br /> specificallyfor Small-to-Mid-Enterprise (SME) and distributed enterprise <br /> markets.Since its inception, Software@Work has focused on solutions <br />tailored specifically to the mid-market, solving the business software needs <br />and challenges of our clients.</p>
                        <br />
                        <span>

                            Know More
                        </span>
                    </div>
                    <hr />
                    <div className='experience-image'>
                        <div>
                            <img style={{ width: "150px", margin: '10px' }} src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACeAK8DASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAUDBAYCAQf/xABHEAABBAEBBAMMBwUFCQAAAAABAAIDBAURBhIhMUFRYRMUIjJCcYGRscHR8BUjNVJyofEzQ3OywhY2VZLhRFRiY3SCotLi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAiEQEBAAICAQUBAQEAAAAAAAAAAQIRITESAyIyQVFxYTP/2gAMAwEAAhEDEQA/AOsREWpEREBEUrI52Co/uNdps2TwDGcQD2/BbJbxGyW9Kq0LObx9UlslhpcPJZ4XsU0Y3K5TR2Qs97xH91Hz9Xx1VGphKFQDcga9w8qTwiq1jO6rWM7af9ozOdKNCxY7dNB+WqHJ5l/7PFbv4nforgAA0A0A6AieWP1Dc/ELv3Pt4ux0JHY7/wCl9+l8nH+1xEhHTuOPwKuInlPw8p+Ise01Pe3bEc1d45hzddPVx/JU6t2tcGteZknWAeI9CySwRTt3ZomSDqc0FSbWzdWR3dKj31ZRyLDw9XwT2X/D23/FlFzpt5bDkd+sFusP3jeY9PxVqler34u6V5A4dI6R5wsuNnLLjY2ERFKRERAREQEREBfHvbGxz5HBrWjUknQBfSQASToBzJXOWHy7RXu94HFmPhPhvHlns93r7FWOO1SbeprtnOWHVsc50VVv7SfkT5vgquPxdXHM0gZq/pkdxcVgnt1cK6pW7mI68m8N4eSRpxPrVMEEAg6g8iFuVuuOm28cdCIihAiIgIuf2itTwZbDshmexj5tHtadA7wmjj18yugRoiIjAgEaEagqLewYDzaxjjXsjjo06Nd2dnsVpFsys6VLZ0k4nMttuNa23uNxnAsPDe83wVZTMxh48hH3SP6u0ziyQcNew/PBeMLk32WuqXBuXIeDgfKHWqslm42yWbisiIoQIiICItbI2xRoy2DoSweCD0noCSb4b2mZqxJctR4mq7R0nGZw8lvV89irVKsVOuyCBu6xo9faVM2dpuZA+9YO9PZ8Ik9Dfn3KyryuvbFZXXEcxtn/ALF/3/0rBs5mnwyMpT7z43HSMgalp6vMtna+N8slGONpc9xeABzJ8Fb2DwrMdGJZgHWXDiehg6h8V13jPTkq9zw5V1gv2DUo2LDW7xijc8Dr0Gq09oJrsGMkdj4g9+hDzrxY3Q6uHHmtDZOe9ax+5cjD6u6QyVztXP4nUHj5153JH3sk7EnOfSzxIH6dy14c9NNOXbppyXY46y65j69hzd10sYcR2rkX4WmNrW0Q13ezm90LN7p0J08y7ZjGxsaxgDWtGgA5AIOa2n+2sJ/G/qaumU7K2MXWlrSZIxiRriYS5pJB4anh6Fmq5Whcdu17cT3nk0O0J9CDzZyterkK9KQSd1nGrSG6t9JW6vha0kEgEjkdOSOc1jS57g1rRqSToAEBzgxpc4hrQNSSeACxVLcF2HutaVssepG8Otczbt2dp7Zo48mOgw/WzaeN89AXSUaUOPqsr127rG+snrKDYUjO490jBeqeDbg8IEeUB0Kui3G6uyXV21MZeZkKTJ26Bx4Pb913SFtrnWg4TPBg4VLh4Doaf1/IroluU1eOm5TXQiIpSLn86438lUxkZO6TvyadA/TX1roFBxA76z+QtniGHubT+X9P5q8ON38XjxyutaGNDWjQAaAdS+oihLy6JjpWSuaC9gIa49GvP2L0i5/O5G6cnWxWOe2GWZu86V3QOPAeooOgIBBBGoPMFYpXxU6r5N0NiiYXENHIAa8AuZrZ6fEXpqOal7sGAFsrBqePHQ+grNkNqsbYx9mGN0u/JE5jdWdJBAQSTnYn7Rtyba85hEe5u6DXkQrH9sa3+5Wv8o+K2NkPsCH8T/5iraCGw0dqqru6V5ozC7RrnjQgkdHWuWy2Dkxs4Dtdw8WSN5H/AFX6KsF6pHeqSQSjg4cD1HoKvHKTi9Kxy1247DbS2KMja+Rc6aueAkPFzPiF19utDkqL4HuJhmaPCY7mOYIK/O7EBZJJDINHMcWnzhdNsXkHSQS0JXaug8Jmv3ekeg+1b6mHj103PHx5joKVOChWbXrMDI2+snrPas60bFu3Hla9eKoX1ntJkm6Gnjw+etby5oEREYlbRU++sY9zB9ZD9Y3Tnw5/ktnE3O/sdDMT4Wmj/OOa3CA4EEag8CoOzOsD71Jx4wy6jzcvcFc5w/i+8V5ERQh8e7cY53UCVG2Ubpi3PPjSSuJPXyVO+7coWXdUTj+RWjsy3TCQnrLj/wCRVz4Vc+NVURFCHl8jIxrI9rQeGrjopmZwkeWMUrZnQWIvElbx4Ln7ccGS2kuQ5e2a8UI0iBcGjThpxPDt7VjwmSy1eCWDH1+/a8chDXuB4ebj6dO1Y10GM2cr0nSS2nd+zyeM+Vuv5HX1rNlaFNmKuObVga4QPIIjAIO6VM+l9ov8IZ6j8VgvZTPSUbDJsW1kTonB7tD4I04nmgpbIfYEP4n/AMxVtRNkPsCH8T/5ira0EREY4TaKMR5qwG8jo71gLFs1IYtpIAOUjXNP+Un3Bfc5OLGXsvadRvbo9A09y97KQmfaASgeDAxxJ7SNPeV6fU/5zb0Z/CO8RScxeylWdjMfQFiMt1c89B15c/nVT/pfaL/CGeo/FeZwdMinYe1ftRSHI1BWc0gN08oeZUUBQ4PqtrbAHASwA6dvD4K4oU/gbX1/+OA/1fBXh9/xWP2uoiKEMVtu/UmZ96Nw/JTdl3b2GjH3XOH5quRqNCoey7u5w2qjvHgmIPm5e4q58aufGriIihDQv4WhkpGyWoA54Gm8HFpI6jotqrVgpwNhrRtjjbyaFlRGvEs8UDQ6aVkYJ0Be4DU9XFa+X+yLv/TyfylQtq8ZftSxS15Hyxb7QIWt13Dx8JWBSs/QclOafviw6F7O6O4akg6e3RBqbIfYEP4n/wAxVtcfj4tpsbUbWr0oTG0kjee0nidfvJDmtop7ktOKtXdPENXs4DT072nSg7BTM7lG46qQwgzyDRg6u1eaVzIQ0LFjMwxxGPi0MI4j0E9K4y9ckuWJLE51J46dQ6guvpYeV3el4Y7u61Zpd0db3cl3Oy+KONx+9M3SxP4T9eYHQPnrUfZDEtsOOTst3t12kLTy1HlfBdip9TPzpnl5UREUOYiIgKG4b+17P+XB8firih44987SX5x4sTRF6eH/AKlXh91eP2uIiKECgQu7y2rmY7gy0zVvaf1BV9RNpqzjWjuw8Jazg7UdX66K8O9fq8e9LaLDTstt1Ip2cpGg+Y9IWZR0lzu2n2dB/G9xVbDfZFP+C32Lxl8WzKwMikkdGGO3tWjXo0962qkAq1YoA4uEbQ0E9OiDKSACSdAOlRKedfkcya1KESVIwe6Tnr6NPSrUjGyxujeN5rgQR1grBSo1sfB3GpEI2a66Djqe0lBsLmcT/fLKfg97VYzV12OxU9qMAvYAG68tSQPeuQ3MjioYc930yR9kjfb94HjofV0ckF7a9lt2OBrytZCD9a0ji7iNNOHWuHkbMGEueCOld5tNZi+g9XPawy7pY1x0J4grhppGGJwDgSu2EnheXXCTxfoOzbQ3A0wOW5r6ySsWbzFjE2a7zXElJ/CSQeMD2fPFZtnfsKn/AA1vzwx2IXwzMD43jRzTyK4uT5XniswsmgeHxvGrXDpWRTMNh/og2Gx2HyQyOBZG4eJ8f9FTQEREYx2Z21q0kzz4MbS4qTstE4UJLEnjTyF2vWP11XjaWZ8or46E/WWHjXza/H2KzXhZXrxwxjRrGhoV9Yf1fWP9ZERFCBeZI2yxujkaHMcNCD0hekRrn8U52JycmMmJ7lId+Bx9nz0hdAp2Zxv0hXBiO7YiO9G7t6ljw2VNxrq9kdztxcHtPDe06V0y908oq+6bVVoZLGNyEtWR00kXe79/Rh8b509q30XNIiIjGKzXit15IJ270cg0cFAg2OrxzMMtqWaBh1bE4aD0rpERrlNsZq8pgrbgdLH4Rd90Ho9PuXKsrd8WGVqsZfM86AArt89s87KWI5oJmwu00k1BO8OhbmIwlXEx/VDfmI8KVw4nsHUFdynjqRflNajcpVxUpwV2nURMDdevQc1mRFDmIiIC8TzMrwPmlOjGDUleyQBqeAC5yzNJtBc70rEtpRHWWT73z0etVjjv+Kxm2XBwPvW5ctabxeSIWnoHLX3etXl5jjZFG2ONoaxo0AHQF6TLLdMruiIilIiIgKPmMTJPK29Qd3O5Hx6t/T3qwi2W43cbLpMxOXbe1hnb3G2zg+M8Ne0fBU1OymIjvFs0bjDaZ4srfetGLMWsdIIMxEdOTZ2DUH5+Qr8ZlzirW+l9F4hmisRiSGRsjDyLTqva5pEREYIiICIiAhIaC5xAA4knoWlkMrVx7NZpNX9EbeLj8FL7lkc7xn1qUT5A8Z4VTHfN6VMfuvly7YzcrqWN8GuOEs55EdXm9vmVqhSioVWwQjgOJPS49ZXutWiqQNhgYGMbyAWVMst8Tot+oIiKUiIiAiIgIiIC8TQxzxmOZjXsPMOGq9ojUGbZ10DzLi7T67/uk6g+n9V5GUy1Hwb1EztH7yP/AE4exdAivz38uVeX6jwbS0JeEjnwO6nt+C2m5nHO5XIvSdFszVoJ/wBtDHJ+NoK1n4XHP51IvQNPYnsPa9nKUANTcg9EgKxPzmNYNTbYfMCfYvgwGMadRVb6XOPvWVmKoM8WnD6WA+1PZ/p7U6TaaJzi2lVmsO7BoPeVjLc5lNQ7SjCfQ74+xdAxjWN3WNDWjoA0C+p5SdQ8pOol0cBUpvEjgZ5ue/Jx4+ZVERTbb2m23sREWMEREBERB//Z' />
                            <h1>30+</h1>
                            <h3>30 Years Of Experience</h3>
                        </div>
                        <div>
                            <img style={{ width: "160px", margin: '10px' }} src='data:image/jpeg;base64,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' />
                            <h1>20,000+</h1>
                            <h3>Satisfied Client</h3>
                        </div>
                        <div>
                            <img style={{ width: "130px", margin: '10px' }} src='data:image/jpeg;base64,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' />
                            <h1>100+</h1>
                            <h3>Apps Available</h3>
                        </div>
                    </div>

                </div>

                <div className='fullImage'>
                    <img style={{width:"100vh",height:'100vh',paddingLeft:'160px'}} src='https://media.istockphoto.com/id/160178956/photo/construction-worker-carrying-wood-beam.jpg?s=612x612&w=0&k=20&c=0npN-QTP_YzQbQWa1AF03aCzq0_v7G153flBdU_jLq4=' />
                </div>


            </div>
            <div className='clients'>
                <h1>Some Of Our Clients</h1>
                <marquee behavior="scroll" direction="left" scrollamount="5">
                    {slider.map((image, index) => (
                        <img key={index} src={image} alt={`Client ${index + 1}`} style={{ marginRight: '20px' }} />
                    ))}
                </marquee>
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <div className='awards'>
                    <h1>Awards & Recognitions</h1>
                    {sliderOne.map((image, index) => (
                        <img key={index} src={image} alt={`Client ${index + 1}`} style={{ marginRight: '20px' }} />
                    ))}

                </div>
            </div>
            <div class='mid-carousel'>
                <div class="image-container">
                    <img src='https://woodmizer.in//media/catalog/category/bandsaw_blades_1280_320.jpg' alt="Carousel Image" />
                    <button>Watch Now</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;
