import React, {useState} from 'react'
import './Home.css'
import { IoSearch } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaStar, FaStarHalf, FaStarHalfAlt, FaRegStar, FaArrowRight } from "react-icons/fa";
import explore from '../../assets/explore.png'
import tomHolland from '../../assets/tomHolland.jpg'
import hirecraftBanner from '../../assets/hirecraft-banner2.png'
import girl from '../../assets/girl.jpeg'
import OIF from '../../assets/OIF.jpeg'
import { Link } from 'react-router-dom'
import airbnb from '../../assets/airbnb.svg'
import taskrabbit from '../../assets/taskrabbit.svg'
import fiverr from '../../assets/fiverr.svg'
import upwork from '../../assets/upwork.svg'
import whyUs from '../../assets/whyUs.png'
import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";

import ServicesScroll from '../../components/ServicesScroll/ServicesScroll';
import workerIcon from '../../assets/icons-worker.png'
import popularServices from '../../json/popularServices.json'
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const images = import.meta.glob('../../assets/*', { eager: true });

  const getImage = (filename) => {
    const entry = Object.entries(images).find(([key]) => key.includes(filename));
    return entry ? entry[1].default : '';
  };

  
    const data = [
        {
            icon: [<FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStarHalfAlt className="starIcon" />, <FaRegStar className='starIcon'/>],
            body: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
            img: OIF,
            name: `John James`,
            role: `Assistant Teacher`,
        },
        {
            icon: [<FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaRegStar className='starIcon'/>],
            body: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
            img:  girl,
            name: `Emma Wilson`,
            role: `Auxiliary Teacher`,
        },
        {
            icon: [<FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStar className="starIcon" />, <FaStarHalfAlt className='starIcon'/>],
            body: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
            img: OIF,
            name: `John James`,
            role: `Assistant Teacher`,
        }
    ]

    const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      id: 'Questions-collapseOne',
      headingId: 'Questions-headingOne',
      question: 'Lorem ipsum dolor sit amet adipisicing ?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!'
    },
    {
      id: 'Questions-collapseTwo',
      headingId: 'Questions-headingTwo',
      question: 'Lorem ipsum dolor sit amet adipisicing ?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!'
    },
    {
      id: 'Questions-collapseThree',
      headingId: 'Questions-headingThree',
      question: 'Lorem ipsum dolor sit amet adipisicing ?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!'
    },
    {
      id: 'Questions-collapseFour',
      headingId: 'Questions-headingFour',
      question: 'Lorem ipsum dolor sit amet adipisicing ?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!'
    }
  ];

  return (
    <div className='home'>
        <div className="heroSection">
            <div className="homeTxt">
                <p>Hire <span className='homeTxtSpan'>skilled workers</span> you can rely on, <span className='homeTxtSpan'>Grow your service</span> and find jobs easily - All in One</p>

                <div className="ctaBtns">
                    <Link to="/ClientDashboard" style={{textDecoration: "none"}}>
                        <button className='animated-hover-button'>
                            <div className="btn-content">
                                Hire a Pro <i className='hireProIcon'><IoSearch /></i>
                            </div>  
                        </button>
                    </Link>
                    
                </div>

                <div className="companies">
                    <img src={airbnb} alt="" />
                    <img src={taskrabbit} alt="" />
                    <img src={fiverr} alt="" />
                    <img src={upwork} alt="" />
                </div>
            </div>

            <div className="heroSecImgs">
                <img src={hirecraftBanner} alt="" />
                
            </div>
            
            {/* <img src={jobSearchGlobe} alt=""  className='jobSearch'/> */}
        </div>

        <ServicesScroll/>
        
        <div className="whyUs">
            <h2 className="services-title">
                WHY <span className="services-title-stroke">US</span>
            </h2>
            <img src={whyUs} alt="" />
            <div className="whyUsTxt">
                <div className="whyUsTxt1">
                    <p><i><TiTick /></i>Client satisfaction guaranteed</p>
                    <p><i><TiTick /></i>Identity verification process</p>
                    <p><i><TiTick /></i>In-depth performance analytics</p>
                    <p><i><TiTick /></i>Secure payment protection</p>
                    <p><i><TiTick /></i>24/7 customer support</p>
                </div>
                
                <div className="whyUsTxt2">
                    <div className="topImg">
                        <div className="positiveReview">
                            <h1>100+</h1>
                            <p><b>Positive Reviews</b></p>
                        </div>
                        <img decoding="async" width="49" height="45" src="https://studyhub.themewant.com/wp-content/uploads/2024/03/icon.svg" alt="" />
                    </div>

                    <div className="topImg">
                        <div className="positiveReview">
                            <h1>7+</h1>
                            <p><b>Service Providers</b></p>
                        </div>
                        <img src={workerIcon} alt="" className='topImgimg'/>
                    </div>
                </div>
                
            </div>
        </div>

        {/* <section className="py-5">
            <div className="faqcontainer">
                <div className="row justify-content-center text-center mb-3">
                <div className="col-lg-8 col-xl-7">
                    <span className="text-muted">F.A.Q</span>
                    <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-md-5">
                    <span className="text-muted">Lorem ipsum dolor</span>
                    <h2 className="pb-4 fw-bold">Have Any Questions?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quidem eius cum voluptatum quasi delectus assumenda culpa.</p>
                    <a className="btn btn-primary btn-lg mt-3" href="#">Contact us</a>
                </div>
                <div className="col-md-7">
                    <div className="accordion" id="Questions-accordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={item.headingId}>
                            <button
                            aria-controls={item.id}
                            aria-expanded={activeAccordion === index}
                            className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'} bg-light`}
                            onClick={() => toggleAccordion(index)}
                            type="button"
                            >
                            <div className="text-muted me-3">
                                <svg className="bi bi-question-circle-fill" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                                </svg>
                            </div>
                            {item.question}
                            </button>
                        </h2>
                        <div
                            aria-labelledby={item.headingId}
                            className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                            id={item.id}
                        >
                            <div className="accordion-body">
                            {item.answer}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section> */}

        <Footer/>
        {/* <div className="howItWorks">
            <h2>How It Works</h2>
            <p style={{color: "#54595F"}}>Source the best providers at your pace</p>
            <p style={{color: "#54595F"}}>Work with creative experts you can trust 🙂</p>

            <div className="howItWorksBoxes">

            </div>
        </div> */}

        {/* <div className="best">
            <h2>The best Service Marketplace Site</h2>
            <div className="heroSecStats">
                <div className='flexUserStats'>
                    <div className="userStats">
                        
                        <div className="userStatsBox">
                            <p>Over <span className='homeTxtSpan'><b>100</b></span> service providers</p>
                            <div className="userStatsImgs">
                                <img src={tomHolland} alt="" className='tomHolland'/>
                                <img src={girl} alt="" className='girl'/>
                                <img src={OIF} alt="" className='OIF'/>
                            </div>

                            <div className="heroSecRating">
                                <p>4.5</p>
                                <div className="heroSecRatingIcons">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="availableServices">
                        <i><MdHomeRepairService /></i>
                        <p className='tenk'>10<span className="homeTxtSpan">K+</span></p>
                        <p className='availServicesTxt'>Available Services</p>
                    </div>
                </div>
                
                <div className="exploreServices">
                    <div className="exploreServicesTxt">
                        <p>Choose from a variety of diverse services and hire a pro</p>
                        <Link to="/Services">Explore featured services</Link>
                    </div>
                    
                    <img src={explore} alt="" className='exploreImg'/>
                </div>
            </div>
        </div>

        <div className="feedback">
            <div className="feedbackHead">
                <h2>What our users say 💕</h2>
                <p>You'll find something to spark your curiosity and enhance</p>
            </div>
            <div className="feedbackCarousel">
                
                
                    {data.map((d, key) => (
                        <div className='feedbackCard' key={key}>
                            <div className='feedbackIcons'>
                                <i>{d.icon}</i>
                            </div>
                            <div className="feedbackTxt">
                                <p>{d.body}</p>
                            </div>
                            <div className="feedbackProfile">
                                <div className="feedbackImg">
                                    <img src={d.img} alt="" />
                                </div>
                                <div className='feedbackNameRole'>
                                    <div className="feedbackName">
                                        <p><b>{d.name}</b></p>
                                    </div>
                                    <div className="feedbackRole">
                                        <p>{d.role}</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="56" viewBox="0 0 71 56" fill="none"><mask id="path-1-inside-1_745_16642" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M64.3981 29.419H47.0704C45.5099 29.419 44.0134 28.7992 42.91 27.6957C41.8065 26.5923 41.1866 25.0958 41.1866 23.5353V5.88398C41.1866 4.32351 41.8065 2.82695 42.91 1.72353C44.0134 0.620113 45.5099 0.000217438 47.0704 0.000217438H64.7217C66.2822 0.000217438 67.7787 0.620113 68.8822 1.72353C69.9856 2.82695 70.6055 4.32351 70.6055 5.88398V25.4475C70.6037 30.7742 69.287 36.018 66.7724 40.7138C64.2577 45.4095 60.6228 49.4119 56.1902 52.3657L50.9243 55.896L47.6882 51.0125L52.9542 47.4822C56.0128 45.4326 58.6103 42.7675 60.5807 39.6573C62.5512 36.5471 63.8513 33.0601 64.3981 29.419ZM23.2125 29.419H5.88486C4.32438 29.419 2.82782 28.7992 1.7244 27.6957C0.620979 26.5923 0.00108337 25.0958 0.00108337 23.5353V5.88398C0.00108337 4.32351 0.620979 2.82695 1.7244 1.72353C2.82782 0.620113 4.32438 0.000217438 5.88486 0.000217438H23.5362C25.0966 0.000217438 26.5932 0.620113 27.6966 1.72353C28.8 2.82695 29.4199 4.32351 29.4199 5.88398V25.4475C29.4181 30.7742 28.1015 36.018 25.5868 40.7138C23.0722 45.4095 19.4373 49.4119 15.0047 52.3657L9.7093 55.896L6.50265 51.0125L11.7686 47.4822C14.8272 45.4326 17.4247 42.7675 19.3952 39.6573C21.3657 36.5471 22.6658 33.0601 23.2125 29.419Z"></path></mask><path d="M64.3981 29.419L65.387 29.5675L65.5595 28.419H64.3981V29.419ZM68.8822 1.72353L68.175 2.43064L68.8822 1.72353ZM70.6055 25.4475L71.6055 25.4478V25.4475H70.6055ZM66.7724 40.7138L65.8908 40.2417L66.7724 40.7138ZM56.1902 52.3657L55.6357 51.5336L55.6334 51.5351L56.1902 52.3657ZM50.9243 55.896L50.0907 56.4484L50.646 57.2864L51.4811 56.7266L50.9243 55.896ZM47.6882 51.0125L47.1314 50.1819L46.3052 50.7357L46.8546 51.5649L47.6882 51.0125ZM52.9542 47.4822L52.3975 46.6515L52.3973 46.6516L52.9542 47.4822ZM60.5807 39.6573L59.736 39.1221L60.5807 39.6573ZM23.2125 29.419L24.2015 29.5675L24.3739 28.419H23.2125V29.419ZM1.7244 27.6957L2.43151 26.9886V26.9886L1.7244 27.6957ZM1.7244 1.72353L2.43151 2.43064V2.43064L1.7244 1.72353ZM29.4199 25.4475L30.4199 25.4478V25.4475H29.4199ZM25.5868 40.7138L24.7053 40.2417L25.5868 40.7138ZM15.0047 52.3657L14.4501 51.5336L14.45 51.5337L15.0047 52.3657ZM9.7093 55.896L8.8734 56.4449L9.42612 57.2866L10.264 56.728L9.7093 55.896ZM6.50265 51.0125L5.94581 50.1819L5.12309 50.7334L5.66674 51.5613L6.50265 51.0125ZM11.7686 47.4822L11.2119 46.6515L11.2118 46.6516L11.7686 47.4822ZM19.3952 39.6573L18.5505 39.1221L19.3952 39.6573ZM47.0704 30.419H64.3981V28.419H47.0704V30.419ZM42.2028 28.4028C43.4938 29.6938 45.2447 30.419 47.0704 30.419V28.419C45.7751 28.419 44.5329 27.9045 43.6171 26.9886L42.2028 28.4028ZM40.1866 23.5353C40.1866 25.361 40.9119 27.1119 42.2028 28.4028L43.6171 26.9886C42.7012 26.0727 42.1866 24.8305 42.1866 23.5353H40.1866ZM40.1866 5.88398V23.5353H42.1866V5.88398H40.1866ZM42.2028 1.01643C40.9119 2.30738 40.1866 4.0583 40.1866 5.88398H42.1866C42.1866 4.58873 42.7012 3.34652 43.6171 2.43064L42.2028 1.01643ZM47.0704 -0.999783C45.2447 -0.999783 43.4938 -0.274529 42.2028 1.01643L43.6171 2.43064C44.5329 1.51476 45.7751 1.00022 47.0704 1.00022V-0.999783ZM64.7217 -0.999783H47.0704V1.00022H64.7217V-0.999783ZM69.5893 1.01643C68.2983 -0.274529 66.5474 -0.999783 64.7217 -0.999783V1.00022C66.017 1.00022 67.2592 1.51476 68.175 2.43064L69.5893 1.01643ZM71.6055 5.88398C71.6055 4.0583 70.8802 2.30738 69.5893 1.01643L68.175 2.43064C69.0909 3.34652 69.6055 4.58873 69.6055 5.88398H71.6055ZM71.6055 25.4475V5.88398H69.6055V25.4475H71.6055ZM67.6539 41.1858C70.2463 36.345 71.6036 30.9391 71.6055 25.4478L69.6055 25.4472C69.6037 30.6092 68.3278 35.691 65.8908 40.2417L67.6539 41.1858ZM56.7448 53.1979C61.3144 50.1527 65.0616 46.0267 67.6539 41.1858L65.8908 40.2417C63.4539 44.7923 59.9313 48.671 55.6357 51.5336L56.7448 53.1979ZM51.4811 56.7266L56.7471 53.1964L55.6334 51.5351L50.3674 55.0654L51.4811 56.7266ZM46.8546 51.5649L50.0907 56.4484L51.7579 55.3436L48.5218 50.4601L46.8546 51.5649ZM52.3973 46.6516L47.1314 50.1819L48.245 51.8431L53.511 48.3128L52.3973 46.6516ZM59.736 39.1221C57.8399 42.1148 55.3406 44.6792 52.3975 46.6515L53.5109 48.3129C56.685 46.1859 59.3806 43.4202 61.4255 40.1925L59.736 39.1221ZM63.4092 29.2705C62.8831 32.7741 61.6321 36.1294 59.736 39.1221L61.4255 40.1925C63.4704 36.9648 64.8196 33.3461 65.387 29.5675L63.4092 29.2705ZM5.88486 30.419H23.2125V28.419H5.88486V30.419ZM1.0173 28.4028C2.30825 29.6938 4.05917 30.419 5.88486 30.419V28.419C4.58959 28.419 3.34739 27.9045 2.43151 26.9886L1.0173 28.4028ZM-0.998917 23.5353C-0.998917 25.361 -0.273666 27.1119 1.0173 28.4028L2.43151 26.9886C1.51562 26.0727 1.00108 24.8305 1.00108 23.5353H-0.998917ZM-0.998917 5.88398V23.5353H1.00108V5.88398H-0.998917ZM1.0173 1.01643C-0.273666 2.30738 -0.998917 4.0583 -0.998917 5.88398H1.00108C1.00108 4.58873 1.51562 3.34653 2.43151 2.43064L1.0173 1.01643ZM5.88486 -0.999783C4.05917 -0.999783 2.30825 -0.274529 1.0173 1.01643L2.43151 2.43064C3.34739 1.51476 4.58959 1.00022 5.88486 1.00022V-0.999783ZM23.5362 -0.999783H5.88486V1.00022H23.5362V-0.999783ZM28.4037 1.01643C27.1128 -0.274529 25.3618 -0.999783 23.5362 -0.999783V1.00022C24.8314 1.00022 26.0736 1.51476 26.9895 2.43064L28.4037 1.01643ZM30.4199 5.88398C30.4199 4.0583 29.6947 2.30738 28.4037 1.01643L26.9895 2.43064C27.9054 3.34652 28.4199 4.58873 28.4199 5.88398H30.4199ZM30.4199 25.4475V5.88398H28.4199V25.4475H30.4199ZM26.4684 41.1858C29.0608 36.345 30.4181 30.9391 30.4199 25.4478L28.4199 25.4472C28.4182 30.6092 27.1422 35.691 24.7053 40.2417L26.4684 41.1858ZM15.5592 53.1979C20.1288 50.1527 23.876 46.0267 26.4684 41.1858L24.7053 40.2417C22.2683 44.7923 18.7458 48.671 14.4501 51.5336L15.5592 53.1979ZM10.264 56.728L15.5594 53.1978L14.45 51.5337L9.1546 55.0639L10.264 56.728ZM5.66674 51.5613L8.8734 56.4449L10.5452 55.3471L7.33855 50.4636L5.66674 51.5613ZM11.2118 46.6516L5.94581 50.1819L7.05949 51.8431L12.3255 48.3128L11.2118 46.6516ZM18.5505 39.1221C16.6544 42.1148 14.155 44.6792 11.2119 46.6515L12.3253 48.3129C15.4994 46.1859 18.195 43.4202 20.2399 40.1925L18.5505 39.1221ZM22.2236 29.2705C21.6975 32.7741 20.4465 36.1294 18.5505 39.1221L20.2399 40.1925C22.2848 36.9648 23.6341 33.3461 24.2015 29.5675L22.2236 29.2705Z" fill=" #009749" mask="url(#path-1-inside-1_745_16642)"></path></svg>    
                            </div>
                            
                        </div>
                    ))}
                
            </div>
        </div>

        <div className="instantResults">
            <div className="instantResultsTxt">
                <h2>Instant results, Top Talents</h2>

                <p>At HireCraft, we connect you with top-tier professionals—fast. Whether you need a skilled developer, a reliable designer, or a seasoned project manager, our platform delivers instant access to a curated network of verified experts.  Hire with confidence, knowing every candidate is pre-vetted for quality, experience, and performance. With HireCraft, top talent isn’t hard to find—it’s just a click away.</p>
                <button className='getStarted'>
                    <Link to=''>Get Started</Link>  
                </button>
            </div>
            <div className="instantResultsImg">
                
            </div>
        </div> */}
    </div>
  )
}

export default Home