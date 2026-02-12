import { useEffect, useRef, useState } from 'react'
import { Code2, Palette, Lightbulb, Rocket } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Membangun aplikasi web dan mobile dengan teknologi terkini.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Menciptakan desain yang estetis dan user-friendly.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Selalu mencari solusi kreatif untuk setiap tantangan.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Fokus pada kecepatan dan optimasi aplikasi.',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Tentang Saya
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Developer yang{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Passionate
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Saya adalah seorang developer dengan pengalaman dalam membangun aplikasi 
                web dan mobile yang modern. Saya percaya bahwa teknologi yang baik 
                haruslah tidak hanya fungsional, tetapi juga memberikan pengalaman 
                pengguna yang menyenangkan.
              </p>
              <p className="text-lg leading-relaxed">
                Dengan kombinasi keahlian teknis dan sense of design, saya berkomitmen 
                untuk menghadirkan solusi digital yang berkualitas tinggi dan sesuai 
                dengan kebutuhan klien.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Proyek Selesai</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Klien Puas</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
