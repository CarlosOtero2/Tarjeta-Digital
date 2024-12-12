import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface Skill {
  name: string;
}

interface DigitalCardProps {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  skills: Skill[];
  socialLinks: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  avatar: string;
}

const DigitalCard: React.FC<DigitalCardProps> = ({
  name,
  title,
  subtitle,
  description,
  skills,
  socialLinks,
  avatar,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="p-8 text-center text-white">
          {/* Avatar */}
          <div className="mb-6">
            <img
              src={avatar}
              alt={name}
              className="w-40 h-40 rounded-full mx-auto border-4 border-white"
            />
          </div>

          {/* Información Personal */}
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h2 className="text-xl mb-1">{title}</h2>
          <h3 className="text-lg opacity-90 mb-4">{subtitle}</h3>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-1 rounded-full bg-white/20 text-sm backdrop-blur-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Descripción */}
          <p className="mb-8 text-sm leading-relaxed opacity-90">
            {description}
          </p>

          {/* Enlaces Sociales */}
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${socialLinks.email}`}
              className="hover:text-white/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={`tel:${socialLinks.phone}`}
              className="hover:text-white/80 transition-colors"
              aria-label="Teléfono"
            >
              <Phone size={24} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;