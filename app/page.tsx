import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, FileText, ExternalLink, Brain, BookOpen, Code, ChevronRight, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50">
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-violet-400" />
              <span className="inline-block font-bold">Mehdi Moosavi</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-violet-400">
              About
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-violet-400">
              Education
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-violet-400">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-violet-400">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-violet-400">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-50"
          >
            Menu
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-white">
                    Hi, I'm Mehdi Moosavi
                  </h1>
                  <p className="text-xl text-violet-300">Machine Learning Student & Researcher</p>
                </div>
                <p className="text-lg text-slate-300">
                  I'm pursuing my Master's degree in Machine Learning, passionate about developing AI solutions that
                  make a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#contact">
                    <Button className="h-11 px-6 rounded-md bg-violet-600 hover:bg-violet-700 text-white">
                      Get in Touch
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="h-11 px-6 rounded-md border-violet-500 text-violet-300 hover:bg-violet-900/30 hover:text-violet-200"
                    >
                      View My Projects
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/smehdim" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md text-slate-300 hover:text-violet-300 hover:bg-slate-800"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/m-moosavi/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md text-slate-300 hover:text-violet-300 hover:bg-slate-800"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:mahmoos2078@gmail.com">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md text-slate-300 hover:text-violet-300 hover:bg-slate-800"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="/Mehdi Moosavi.pdf" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md text-slate-300 hover:text-violet-300 hover:bg-slate-800"
                    >
                      <FileText className="h-5 w-5" />
                      <span className="sr-only">Resume</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 blur-2xl opacity-20"></div>
                  <Image
                    src="/profile-picture.jpg"
                    alt="Mehdi Moosavi"
                    fill
                    className="rounded-xl object-cover border-2 border-slate-800 relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50 border-y border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">About Me</h2>
                <p className="text-violet-300 text-lg">A brief introduction to who I am and what I do.</p>
              </div>
              <div className="space-y-4 text-left">
                <p className="text-base sm:text-lg text-slate-300">
                  I am a passionate Machine Learning student currently pursuing my Master's degree. My research
                  interests include deep learning, computer vision, and natural language processing. I'm particularly
                  interested in developing AI solutions that can be applied to real-world problems.
                </p>
                <p className="text-base sm:text-lg text-slate-300">
                  Prior to my Master's program, I completed my Bachelor's degree in Computer Science, where I first
                  discovered my passion for AI and machine learning. This background has provided me with a strong
                  foundation in algorithms, data structures, and software development principles.
                </p>
                <p className="text-base sm:text-lg text-slate-300">
                  When I'm not coding or researching, you can find me participating in hackathons, contributing to
                  open-source projects, or exploring the latest advancements in AI technology. I believe in the power of
                  collaboration and continuous learning in the rapidly evolving field of machine learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">Education</h2>
                <p className="text-violet-300 text-lg">My academic journey and qualifications.</p>
              </div>
              <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-10">
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Master of Science in Machine Learning and Robotics</CardTitle>
                    <CardDescription className="text-slate-300">University of Tehran, 2023 - Present</CardDescription>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p>
                      Currently pursuing my Master's degree with a focus on trustworthy AI and generative AI. Relevant
                      coursework includes:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Deep Generative Models</li>
                      <li>Trustworthy AI</li>
                      <li>Machine Learning</li>
                      <li>Deep Learning</li>
                      <li>Statistical Inference</li>
                    </ul>
                  </CardContent>
                  {/* <CardFooter>
                    <p className="text-sm text-violet-300">GPA: 3.9/4.0</p>
                  </CardFooter> */}
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Bachelor of Science in Electrical Engineering</CardTitle>
                    <CardDescription className="text-slate-300">University of Tehran, 2018 - 2023</CardDescription>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p>Completed my undergraduate studies with honors. Relevant coursework includes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Intelligent Systems</li>
                      <li>Advanced Programming</li>
                      <li>Datastructures and Algorithms</li>
                      <li>Linear Algebra</li>
                      <li>Operational Research</li>
                    </ul>
                  </CardContent>
                  {/* <CardFooter>
                    <p className="text-sm text-violet-300">GPA: 3.8/4.0</p>
                  </CardFooter> */}
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50 border-y border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">Skills</h2>
                <p className="text-violet-300 text-lg">Technical skills and tools I've mastered.</p>
              </div>
              <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-white">
                      <Code className="mr-2 h-5 w-5 text-violet-400" />
                      Programming Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-md bg-violet-600 hover:bg-violet-700">Python</Badge>
                      <Badge className="rounded-md bg-violet-600 hover:bg-violet-700">MATLAB</Badge>
                      <Badge className="rounded-md bg-violet-600 hover:bg-violet-700">C++</Badge>
                      <Badge className="rounded-md bg-violet-600 hover:bg-violet-700">JavaScript</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-white">
                      <Brain className="mr-2 h-5 w-5 text-cyan-400" />
                      Frameworks & Libraries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">PyTorch</Badge>
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">TensorFlow</Badge>
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">Scikit-learn</Badge>
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">Keras</Badge>
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">OpenCV</Badge>
                      <Badge className="rounded-md bg-cyan-600 hover:bg-cyan-700">Hugging Face</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-white">
                      <BookOpen className="mr-2 h-5 w-5 text-teal-400" />
                      Tools & Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">Docker</Badge>
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">Git</Badge>
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">Linux</Badge>
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">AWS</Badge>
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">Jupyter</Badge>
                      <Badge className="rounded-md bg-teal-600 hover:bg-teal-700">LaTeX</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">Projects</h2>
                <p className="text-violet-300 text-lg">Showcasing my work and research in machine learning.</p>
              </div>
              <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/projects/project1.jpg"
                      alt="DDPM and DDIM Diffusion Models"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">DDPM and DDIM Diffusion Models</CardTitle>
                    <CardDescription className="text-slate-300">Generative Models</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">
                      Implemented DDPM and DDIM diffusion models for image generation of spring dataset.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-md text-violet-300 border-violet-500">
                        PyTorch
                      </Badge>
                      <Badge variant="outline" className="rounded-md text-violet-300 border-violet-500">
                        Diffusion 
                      </Badge>
                    </div>
                    <Link
                      href="https://github.com/your-username/project1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-md text-violet-300 hover:text-violet-200 hover:bg-slate-700"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/projects/project 2.png"
                      alt="Project 2"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">Retrieval Augmented Generation</CardTitle>
                    <CardDescription className="text-slate-300">LLM & NLP</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">
                      Implemented a retrieval augmented generation model for to write an assistant. the model routes the query to different sources based on the query.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-md text-cyan-300 border-cyan-500">
                        RAG
                      </Badge>
                      <Badge variant="outline" className="rounded-md text-cyan-300 border-cyan-500">
                        NLP
                      </Badge>
                    </div>
                    <Link
                      href="https://github.com/smehdim/NLP-homeworks/tree/main/HW%236"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-md text-cyan-300 hover:text-cyan-200 hover:bg-slate-700"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/projects/project 3.jfif"
                      alt="Project 3"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">VLM Fine-Tuning</CardTitle>
                    <CardDescription className="text-slate-300">Vision-Language Models</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">
                      Fine-tuned a Paligemma model for VQA task.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-md text-teal-300 border-teal-500">
                        VLM
                      </Badge>
                      <Badge variant="outline" className="rounded-md text-teal-300 border-teal-500">
                        VQA
                      </Badge>
                    </div>
                    <Link href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-md text-teal-300 hover:text-teal-200 hover:bg-slate-700"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="w-full flex justify-center mt-8">
                <Link href="https://github.com/smehdim" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-md border-violet-500 text-violet-300 hover:bg-violet-900/30 hover:text-violet-200"
                  >
                    View All Projects
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50 border-y border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">
                  Get in Touch
                </h2>
                <p className="text-violet-300 text-lg">Feel free to reach out for collaborations or just a chat.</p>
              </div>
              <div className="grid w-full gap-6 md:grid-cols-2">
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-slate-300">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-violet-400" />
                      <Link href="mailto:mahmoos2078@gmail.com" className="hover:text-violet-300 transition-colors">
                      mahmoos2078@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="mr-2 h-5 w-5 text-violet-400" />
                      <Link
                        href="https://www.linkedin.com/in/m-moosavi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-300 transition-colors"
                      >
                        linkedin.com/in/m-moosavi/
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Github className="mr-2 h-5 w-5 text-violet-400" />
                      <Link
                        href="https://github.com/smehdim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-300 transition-colors"
                      >
                        github.com/smehdim
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-violet-400" />
                      <span className="hover:text-violet-300 transition-colors">
                        Telegram: mmoosavi00
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Research Interests</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <p>
                      I'm always open to discussing new research opportunities, collaborations, or projects in the
                      following areas:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Deep Learning for Computer Vision</li>
                      <li>Natural Language Processing</li>
                      <li>Reinforcement Learning</li>
                      <li>AI Ethics and Fairness</li>
                      <li>Applied Machine Learning</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-slate-800 py-8 bg-slate-950">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-sm text-slate-400">
            © {new Date().getFullYear()} Mehdi Moosavi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/smehdim" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md text-slate-400 hover:text-violet-400 hover:bg-slate-800"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/m-moosavi/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md text-slate-400 hover:text-violet-400 hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:mahmoos2078@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md text-slate-400 hover:text-violet-400 hover:bg-slate-800"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
