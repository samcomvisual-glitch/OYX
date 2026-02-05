import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { 
  AnimatedSection, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedGradientBackground 
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Nosotros</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  OyX Consultores y su equipo de profesionales con experiencia laboral en Dirección Corporativa dentro y fuera del país. Y a partir de nuestra experiencia como Docentes Universitarios hemos desarrollado una serie de conferencias y talleres con la metodología de momentos de verdad y juego de roles, para hacer de cada tema visto una experiencia vivencial que permita mejorar los entornos laborales y fortalecer sus procesos redundando en cada cultura organizacional y lo que la misma requiere para mejorar su clima laboral, sus procesos y su imagen ante el mercado que enfrenta tanto de forma online como presencial.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Nuestra experticia</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Intervención de coaching estratégico</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Capacitación especializada</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Mentoría focalizada</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Otra habilidad</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Desarrollo de proyectos</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          </AnimatedSection>

          {/* Profile Module */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Image 
                      src="/images/gemini-generated-image-xw82ccxw82ccxw82-20-281-29.png" 
                      alt="Consultor Principal" 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-blue-600/10" />
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Olga Lucía Gómez </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-lg">Consultor Principal</p>
                  </div>
                  
                  {/* Experience Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiencia</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">200+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Empresas Asesoradas</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">500+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Talleres Impartidos</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Certificaciones</p>
                    </div>
                  </div>

                  {/* Professional Background */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Experiencia Profesional</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      MBA (Master in Business Administration) de EADA Barcelona, Magíster en Negocios Globales de la Pontificia Universidad Católica del Perú, Especialista en Gerencia de Talento Humano de la Pontificia Universidad Javeriana y Administradora de Empresas de la Universidad Externado de Colombia. Coach certificada internacionalmente en Alta Dirección y Deportiva.
                    </p>
                  </div>

                  {/* Approaches & Strengths */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Enfoques</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Coaching ejecutivo</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Aprendizaje vivencial</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Transformacion cultural</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Fortalezas</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Liderazgo estrategico</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Comunicacion efectiva</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700 dark:text-gray-300">Gestion del cambio</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 id="que-hacemos" className="text-3xl font-bold mb-8 text-center">Qué hacemos</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{"Desarrollo de competencias de Inteligencia Emocional en entornos laborales\n"}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Crecimiento Profesional</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Programas de formación enfocados en fortalecer la autoconciencia, la gestión emocional y las relaciones interpersonales, potenciando el bienestar y el desempeño de los equipos a través de experiencias prácticas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{"Comunicación y escucha activa\n"}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Talleres y Seminarios</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Talleres vivenciales diseñados para mejorar la comunicación efectiva y la escucha consciente, promoviendo conversaciones más claras, empáticas y alineadas a los objetivos del equipo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{"Gestión de Conflicto\n"}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Liderazgo corporativo</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Seminarios prácticos orientados a transformar el conflicto en oportunidades de crecimiento, desarrollando habilidades para abordar desacuerdos de forma constructiva y colaborativa.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Liderazgo</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Liderazgo corporativo</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Programas de formación que impulsan el liderazgo consciente, fortaleciendo la toma de decisiones, la influencia positiva y la motivación de equipos mediante metodologías experienciales.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{"Clínicas de Ventas I, II y III"}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Proyección Comercial</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Espacios de aprendizaje aplicados al contexto comercial, enfocados en perfeccionar técnicas de venta, conexión con el cliente y cierre efectivo, con ejercicios prácticos y casos reales.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{"Negociación"}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Proyección Comercial</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  Talleres diseñados para desarrollar estrategias de negociación win–win, fortaleciendo la preparación, la comunicación y la generación de acuerdos sostenibles.
                </p>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 id="Nuestras-charlas" className="text-3xl font-bold mb-8 text-center">Nuestras charlas</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>El mal entendido bienestar</CardTitle>
                  <CardDescription>Repensando la cultura del “estar bien” en las organizaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Bienestar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Un análisis crítico sobre cómo el concepto de bienestar se ha simplificado en exceso dentro del entorno laboral. Exploramos la diferencia entre beneficios superficiales y bienestar real, y cómo las empresas pueden pasar del discurso a acciones que impacten genuinamente la salud emocional, mental y profesional de sus equipos..
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Bienestar
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Cultura
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Talento
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Salud mental
                    </Badge>
                  </div>
                </CardContent>
              
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Responsabilidad Social Empresarial</CardTitle>
                  <CardDescription>Más allá del marketing: impacto, coherencia y propósito</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/placeholder.svg?height=240&width=400" alt="Authentrix" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Una mirada estratégica a la RSE como motor de transformación social y empresarial. Evaluamos prácticas actuales, métricas de impacto y el rol de las organizaciones en la construcción de comunidades sostenibles, alineando propósito, reputación y resultados.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Sostenibilidad
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      RSE
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Estrategia
                    </Badge>
                  </div>
                </CardContent>
                
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Qué implica la alta rotación de personal</CardTitle>
                  <CardDescription>Cuando el talento se va, algo está hablando</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Churn Prediction"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Exploramos las causas profundas de la alta rotación y sus efectos invisibles: clima laboral, productividad, costos ocultos y marca empleadora. Un enfoque práctico para entender por qué ocurre, qué señales alertan y cómo convertir este reto en una oportunidad de mejora organizacional.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Talento
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Retención
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Gestión humana
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Cultura
                    </Badge>
                  </div>
                </CardContent>
                
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Los retos de la Universidad Corporativa</CardTitle>
                  <CardDescription>Aprender, desaprender y evolucionar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Fastly Chatbot"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Un recorrido por los desafíos actuales de las universidades corporativas: adopción tecnológica, engagement, medición del aprendizaje y alineación con los objetivos del negocio. Analizamos cómo convertir la formación interna en una verdadera ventaja competitiva.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Formación
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Innovación
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Desarrollo
                    </Badge>
                  </div>
                </CardContent>
               
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:samcomvisual@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      contacto@oyxconsultores.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  
                  
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Siempre estamos abiertos a conversar sobre nuevos proyectos, oportunidades o alianzas. Escríbenos y construyamos juntos experiencias de aprendizaje con impacto.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">OYX</h2>
              <p className="text-gray-400">Soluciones</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://kaggle.com/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:samcomvisual@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} OYX soluciones . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
