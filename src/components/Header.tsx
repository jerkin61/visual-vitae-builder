
import { Mail, MapPin, Phone, Linkedin, Facebook } from 'lucide-react';

type HeaderProps = {
  profileImage: string;
  name: string;
  title: string;
  quote: string;
  quoteAuthor: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
  };
};

const Header = ({
  profileImage,
  name,
  title,
  quote,
  quoteAuthor,
  email,
  phone,
  address,
  socialLinks,
}: HeaderProps) => {
  return (
    <div className="bg-resume-dark rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-resume-primary">
            <img 
              src={profileImage} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
            <p className="text-resume-primary">{title}</p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center text-white my-4">
          <p className="italic">❝ {quote} ❞</p>
          <p className="text-sm text-gray-400">- {quoteAuthor}</p>
        </div>

        {/* Contact Info and Social Links */}
        <div className="mt-8 bg-white rounded-lg p-4 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Information */}
            <div>
              <h3 className="font-medium mb-4 text-gray-700">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${email}`} className="text-gray-700 hover:text-resume-primary">
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${phone}`} className="text-gray-700 hover:text-resume-primary">
                      {phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-700">{address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-medium mb-4 text-gray-700">Socials</h3>
              <div className="space-y-3">
                {socialLinks.facebook && (
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Facebook className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Facebook</p>
                      <a 
                        href={socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-resume-primary"
                      >
                        {socialLinks.facebook.split('/').pop()}
                      </a>
                    </div>
                  </div>
                )}
                
                {socialLinks.linkedin && (
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a 
                        href={socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-resume-primary"
                      >
                        {socialLinks.linkedin.split('/').pop()}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
