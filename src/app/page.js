import React from 'react';
import { Brain, Shield, FileText, ChevronRight, Github, Twitter, Linkedin, ArrowRight, Activity, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">HealthSense AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/carenavigator" className="text-gray-600 hover:text-blue-600 transition-colors">Care Navigator</a>
              <a href="/lifelens" className="text-gray-600 hover:text-blue-600 transition-colors">Life Lens</a>
              <a href="/reportease" className="text-gray-600 hover:text-blue-600 transition-colors">Report Ease</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform skew-y-3 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center lg:pt-40">
          <div className="animate-fade-in">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">Your Personal</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Healthcare AI Assistant</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-8 md:max-w-3xl">
              Experience the future of healthcare with personalized AI support and predictive analysis that puts your well-being first.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105">
                <a href='/carenavigator'>Care Navigator</a>
              </button>
              <button className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105">
                <a href='/lifelens'>Life Lens</a>
              </button>
              <button className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105">
                <a href='/reportease'>Report Ease</a>
              </button>
            </div>
          </div>
          <div className="mt-20">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <img
                className="relative rounded-2xl shadow-2xl w-full"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
                alt="HealthSense AI Dashboard"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Activity className="h-8 w-8 text-blue-600" />
              <div className="mt-4 text-3xl font-bold text-gray-900">Good</div>
              <div className="text-gray-500">Accuracy Rate</div>
            </div>
            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="mt-4 text-3xl font-bold text-gray-900">Increasing</div>
              <div className="text-gray-500">Active Users</div>
            </div>
            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Shield className="h-8 w-8 text-blue-600" />
              <div className="mt-4 text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-500">Health Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600">Advanced healthcare support powered by Azure AI</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">AI Healthcare Chatbot</h3>
                <p className="mt-4 text-gray-500 text-center">24/7 personalized health advice and medication reminders powered by Azure OpenAI.</p>
                <a href="/carenavigator" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Predictive Analysis</h3>
                <p className="mt-4 text-gray-500 text-center">Early disease detection using advanced image analysis and Azure Custom Vision.</p>
                <a href="/lifelens" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Smart Health Reports</h3>
                <p className="mt-4 text-gray-500 text-center">Convert complex medical reports into easy-to-understand insights.</p>
                <a href="/reportease" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Healthcare Journey?</h2>
          <p className="mt-4 text-xl text-blue-100">Join thousands of users who are already experiencing the future of healthcare.</p>
          <button className="mt-8 inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
            <a href='carenavigator'>Get Started Now</a>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">HealthSense AI</span>
            </div>
            <div className="mt-4 md:mt-0">
              
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              HealthSense AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;