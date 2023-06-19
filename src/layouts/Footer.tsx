import { Link } from "react-router-dom";
import { whiteLogo } from "../data/images";
import { path } from "../constants/path";
import { footerLinks, socials } from "../data";

const Footer = () => {
    return (
        <footer data-aos="slide-up" className="bg-primary text-white relative z-10 mt-20">
            <div className="max-w-full mx-auto w-full px-10 md:p-20">
                <div className="block md:grid lg:grid-cols-6 md:grid-cols-2 gap-10">
                    <div className="col-span-2">
                        <Link to={path.HOME}><img src={whiteLogo} alt="mcLearnms" /></Link>
                        <p className="md:text-lg mt-5">Transform your Institution into a Digital Powerhouse with Mclearnms</p>

                        <div className="mt-10">
                            <p>Connect with us on social media</p>

                            <div className="flex gap-5 mt-5">
                                {socials.map(({icon, label}) => (
                                    <div>
                                        <img className="cursor-pointer transition-all duration-300 hover:scale-110" src={icon} alt={label} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-[#F5F7FC] mb-10">Features</h3>
                        <ul>
                            {footerLinks.features.map(({label, path}) => (
                                <li className="mb-5 cursor-pointer"><Link to={path}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-[#F5F7FC] mb-10">Pricing</h3>
                        <ul>
                            {footerLinks.pricing.map(({label, path}) => (
                                <li className="mb-5 cursor-pointer"><Link to={path}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-[#F5F7FC] mb-10">Support</h3>
                        <ul>
                            {footerLinks.support.map(({label, path}) => (
                                <li className="mb-5 cursor-pointer"><Link to={path}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="my-10 border-b border-[#D4DFF1]" />
                <p className="text-center mt-2 text-[#D4DFF1]">© 2023 Mclearnms. All Right Reserved</p>
            </div>
        </footer>
    );
}
 
export default Footer;