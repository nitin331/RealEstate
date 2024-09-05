import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg text-center max-w-3xl mb-8 leading-relaxed">
        Launched in 2005, <span className="font-semibold">RealEstate.com</span>, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At <span className="font-semibold">RealEstate.com</span>, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.
      </p>
      
      <h2 className="text-3xl font-bold mb-4 text-center">✨ Why RealEstate.com?</h2>
      <p className="text-lg text-center max-w-3xl mb-8 leading-relaxed">
        At present, <span className="font-semibold">RealEstate.com</span> prides itself for having around nine lakh property listings spanning across 600+ cities in India. Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, <span className="font-semibold">RealEstate.com</span> offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.
      </p>
      <p className="text-lg text-center max-w-3xl mb-8 leading-relaxed">
        With the ever-evolving online search behaviour, <span className="font-semibold">RealEstate.com</span> shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decisions. We make online property search easier, quicker and smarter!
      </p>

      <h2 className="text-3xl font-bold mb-4 text-center">Awards & Recognitions</h2>
      <ul className="list-disc list-inside text-lg text-center max-w-3xl mb-8">
        <li>PropTech Mobile App of the Year Award 2019</li>
        <li>RealEstate.com won the award for ‘Personalized User Journey’</li>
        <li>Best Mobile Appies Award 2015</li>
        <li>RealEstate.com won the award for having the ‘Most Innovative Mobile App’ in the real estate category</li>
        <li>CMO ASIA Awards 2012</li>
        <li>RealEstate.com was awarded the ‘Most Admired Real Estate Website of the Year’ at the 3rd CMO Asia Awards for excellence in the real estate segment.</li>
        <li>BCI Awards 2012</li>
        <li>RealEstate.com was recognised as the ‘Best Real Estate Portal’ in 2012.</li>
        <li>Accommodation Times Awards 2012</li>
        <li>RealEstate.com was announced the ‘Best Online Realty Portal’ by the Accommodation Times in 2012.</li>
      </ul>

      <div className="mt-8">
        <p className="text-lg font-semibold text-center mb-4">Connect with us:</p>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
