import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

const footerLinks = [
  {
    title: 'Navigasi',
    links: [
      { label: 'Beranda', href: '#hero' },
      { label: 'Tentang', href: '#about' },
      { label: 'Proyek', href: '#projects' },
      { label: 'Keahlian', href: '#skills' },
      { label: 'Kontak', href: '#contact' },
    ],
  },
  {
    title: 'Layanan',
    links: [
      { label: 'Web Development', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'Mobile App', href: '#' },
      { label: 'Consulting', href: '#' },
    ],
  },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hero')
              }}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Portofolio
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Developer & Designer kreatif yang berfokus pada pembuatan 
              pengalaman digital yang menarik dan fungsional.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Nama Anda. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Dibuat dengan <Heart className="h-4 w-4 text-red-500 fill-red-500" /> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
