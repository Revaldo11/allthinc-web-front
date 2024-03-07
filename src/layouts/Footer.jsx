import { Component } from 'react';

// Import Components
import FooterTop from './../components/FooterTop';
import FooterBottom from './../components/FooterBottom';


// Import Images
import iconFacebook from "./../assets/images/icon/i-facebook.svg";
import iconInstragram from "./../assets/images/icon/i-insta.svg";
import iconYoutube from "./../assets/images/icon/i-youtube.svg";
import iconTwitter from "./../assets/images/icon/i-twitter.svg";
import iconLinkedIn from "./../assets/images/icon/i-linkedin.svg";



class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          links: [
            {
              id: 1,
              title: "Shop",
              child: [
                { title: "Pilihan Author", link: "/" },
                { title: "Wanita", link: "/" },
                { title: "Pria", link: "/" },
                { title: "Anak-Anak", link: "/" },
              ],
            },
            {
              id: 2,
              title: "Bantuan",
              child: [
                { title: "Customer Service", link: "/" },
                { title: "Keebijakan Privasi", link: "/" },
                { title: "Kontak Kami", link: "/" },
              ],
            },
            {
              id: 3,
              title: "About",
              child: [
                { title: "About Us", link: "/" },
                { title: "Collaboration", link: "/" },
                { title: "Customer Service", link: "/" },
                { title: "Career", link: "/" },
              ],
            },
          ],
        };
      }

      render(){
      const currentYear = new Date().getFullYear();
      const socialLinks = [
        { icon: iconFacebook, title: "Facebook", link: "/" },
        { icon: iconInstragram, title: "Instagram", link: "/" },
        { icon: iconYoutube, title: "Youtube", link: "/" },
        { icon: iconTwitter, title: "Twitter", link: "/" },
        { icon: iconLinkedIn, title: "LinkedIn", link: "/" }
    ];
        return(
            <footer className="footer position-relative">
              <FooterTop links={this.state.links} socialLinks={socialLinks} />
              <FooterBottom currentYear={currentYear} />
            </footer>
        );
        }
}

export default Footer;