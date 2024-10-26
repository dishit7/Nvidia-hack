import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Bell, Mail, Phone, Image, Code, Check } from "lucide-react"
import Link from "next/link"
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="#">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-26%20at%2012.01.14%E2%80%AFPM-xzP7JmRMyzV8y21djXTJqIMNudJPaw.png"
            alt="IntelliFlow Logo"
            className="h-8 w-auto"
          />
          <span className="sr-only">IntelliFlow</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to IntelliFlow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  The all-in-one CRM solution that revolutionizes your customer interactions
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-700 hover:bg-gray-100  "><Link  href={"/dashboard"}>Get Started</Link></Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cyan-50 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800">Our Features</h2>
            <Tabs defaultValue="conversation" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="conversation">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">Conversation</span>
                </TabsTrigger>
                <TabsTrigger value="notification">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notification</span>
                </TabsTrigger>
                <TabsTrigger value="chatbot">
                  <Code className="h-5 w-5" />
                  <span className="sr-only">Chatbot</span>
                </TabsTrigger>
                <TabsTrigger value="mail">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Mail Marketing</span>
                </TabsTrigger>
                <TabsTrigger value="voice">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Voice Assistant</span>
                </TabsTrigger>
                <TabsTrigger value="ads">
                  <Image className="h-5 w-5" />
                  <span className="sr-only">Ad Maker</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="conversation">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Intelligent Conversations</h3>
                  <p className="mt-2 text-gray-600">Engage with your customers through smart, context-aware conversations.</p>
                </div>
              </TabsContent>
              <TabsContent value="notification">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Smart Notifications</h3>
                  <p className="mt-2 text-gray-600">Stay on top of important events with our intelligent notification system.</p>
                </div>
              </TabsContent>
              <TabsContent value="chatbot">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Easy Chatbot Integration</h3>
                  <p className="mt-2 text-gray-600">Integrate a powerful chatbot into any website with our simple iframe solution.</p>
                </div>
              </TabsContent>
              <TabsContent value="mail">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Effective Mail Marketing</h3>
                  <p className="mt-2 text-gray-600">Reach your audience with targeted and personalized email campaigns.</p>
                </div>
              </TabsContent>
              <TabsContent value="voice">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">AI Voice Call Assistant</h3>
                  <p className="mt-2 text-gray-600">Enhance your call center with our AI-powered voice assistant.</p>
                </div>
              </TabsContent>
              <TabsContent value="ads">
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Advertisement Maker</h3>
                  <p className="mt-2 text-gray-600">Create compelling ads with our easy-to-use advertisement maker.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 z-0"></div>
                <CardHeader className="relative z-10">
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-4xl font-bold mb-2 text-blue-600">$29</div>
                  <div className="text-sm text-gray-500 mb-4">per month</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic CRM features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Up to 1,000 contacts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 z-0"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white">Professional</CardTitle>
                  <CardDescription className="text-purple-100">Ideal for growing companies</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-4xl font-bold mb-2 text-white">$99</div>
                  <div className="text-sm text-purple-200 mb-4">per month</div>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Advanced CRM features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Up to 10,000 contacts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Priority email & phone support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>AI-powered insights</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-50">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 z-0"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white">Enterprise</CardTitle>
                  <CardDescription className="text-blue-100">For large-scale operations</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-4xl font-bold mb-2 text-white">Custom</div>
                  <div className="text-sm text-blue-200 mb-4">Contact us for pricing</div>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Full suite of CRM tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Unlimited contacts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>24/7 premium support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-300" />
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">About IntelliFlow</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Born in a hackathon, IntelliFlow is the result of innovative thinking and cutting-edge technology. We've created a
                  comprehensive CRM solution that streamlines customer interactions and boosts your business efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in revolutionizing your customer relationships? Contact us today!
                </p>
              </div>
              <div className="w-full max-w-sm  space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your email" type="email" />
                  <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">Contact Us</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 IntelliFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}