import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";
import { Button } from "./ui/button";

type HeaderProps = {
  profileImage: string;
  name: string;
  title: string;
  quote: string;
  quoteAuthor: string;
  email: string;
  phone: string;
  address: string;
  summary?: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    portfolio?: string;
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
      <div className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-resume-primary shadow-lg relative">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-resume-primary/10 rounded-full"></div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {name}
              </h1>
              <div className="inline-block bg-resume-primary/20 px-4 py-1 rounded-full">
                <p className="text-resume-primary font-medium">{title}</p>
              </div>

              {/* Quote */}
              <div className="text-white mt-6 max-w-md">
                <p className="italic text-gray-300">❝ {quote} ❞</p>
                <p className="text-sm text-resume-primary mt-1">
                  - {quoteAuthor}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <Button
              variant="outline"
              className="bg-transparent border border-resume-primary/40 text-white hover:bg-resume-primary/20 hover:text-white transition-all"
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              <Mail className="w-4 h-4 text-resume-primary" />
              Contact Me
            </Button>

            {/* {socialLinks.portfolio && (
              <Button 
                variant="outline" 
                className="bg-transparent border border-resume-primary/40 text-white hover:bg-resume-primary/20 hover:text-white transition-all"
                onClick={() => window.open(socialLinks.portfolio, '_blank')}
              >
                <Globe className="w-4 h-4 text-resume-primary" />
                Portfolio
              </Button>
            )} */}
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="flex items-center gap-4">
              <div className="bg-resume-primary/20 p-3 rounded-full">
                <Mail className="w-5 h-5 text-resume-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-resume-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-resume-primary/20 p-3 rounded-full">
                <Phone className="w-5 h-5 text-resume-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="text-white hover:text-resume-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-resume-primary/20 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-resume-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">{address}</p>
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.linkedin && (
              <div className="flex items-center gap-4">
                <div className="bg-resume-primary/20 p-3 rounded-full">
                  <Linkedin className="w-5 h-5 text-resume-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-resume-primary transition-colors"
                  >
                    {socialLinks.linkedin.split("/").pop()}
                  </a>
                </div>
              </div>
            )}

            {socialLinks.facebook && (
              <div className="flex items-center gap-4">
                <div className="bg-resume-primary/20 p-3 rounded-full">
                  <Facebook className="w-5 h-5 text-resume-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Facebook</p>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-resume-primary transition-colors"
                  >
                    {socialLinks.facebook.split("/").pop()}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
