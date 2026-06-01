import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Music, Users, Mic2, Headphones, Radio, TrendingUp } from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Mic2 className="h-8 w-8" />,
      title: "Recording Studios",
      description: "Professional recording facilities equipped with industry-standard gear"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Session Musicians",
      description: "Access to talented session musicians for your projects"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Sound Engineers",
      description: "Expert sound engineers and producers to bring your vision to life"
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Distribution",
      description: "Get your music on all major streaming platforms with your personal account"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "A&R Services",
      description: "Professional A&R and music management support"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Artist Development",
      description: "Learn and grow with mentorship from industry professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8" />
            <span className="font-bold text-2xl">JPRecords</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559732277-7453b141e3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3ODAzMjgyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080')"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Music Label & Studio</Badge>
          <h1 className="text-5xl md:text-6xl mb-4">JPRecords</h1>
          <p className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto">
            Connecting Everyone in the Music Industry
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Based in Burgess Hill, United Kingdom
          </p>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">Learn More</Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At JPRecords, we believe everyone deserves a shot at something great. We're breaking down barriers
            in the music industry by connecting artists, songwriters, producers, sound engineers, session musicians,
            and industry professionals. Our platform makes it easier for young talent to learn, grow, and express
            themselves through the art of music.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, produce, and share your music with the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Showcase */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Our Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1618609377864-68609b857e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3ODAzMjgyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Recording studio equipment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621976975813-10e88ae6e450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3ODAzMjgyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Music production setup"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artist Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">For Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1593167751520-95a058b903c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbnMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc4MDMyODI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Musicians collaborating"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl mb-4">Your Personal Artist Account</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <div>
                    <strong>Distribution to All Platforms:</strong> Share your music on Spotify, Apple Music, YouTube Music, and more
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <div>
                    <strong>Professional Guidance:</strong> Work with experienced A&R and music managers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <div>
                    <strong>Network & Collaborate:</strong> Connect with other artists, producers, and musicians
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <div>
                    <strong>Career Development:</strong> Learn from professionals and grow your skills
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Meet the Founder</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Joel Cragg</CardTitle>
              <CardDescription className="text-lg">Founder & CEO</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-left">
                Joel Cragg founded JPRecords with a vision to democratize the music industry. As CEO,
                he leads our mission to connect talented individuals across all aspects of music creation
                and production, ensuring that everyone has access to the resources and opportunities they
                need to succeed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Get In Touch</h2>
          <p className="text-lg mb-8">
            Ready to take your music career to the next level? Contact us today.
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>JPRecords</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-2">
              <p><strong>Location:</strong> Burgess Hill, United Kingdom</p>
              <p><strong>Email:</strong> info@jprecords.com</p>
              <p><strong>Phone:</strong> +44 (0) 123 456 7890</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="h-6 w-6" />
            <span className="font-bold text-xl">JPRecords</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 JPRecords. Connecting everyone in the music industry.
          </p>
        </div>
      </footer>
    </div>
  );
}