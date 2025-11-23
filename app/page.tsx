'use client'

import { FileText, Image, FileType, Files, Minimize2, Lock, Unlock, Download, Upload, Merge, Split, Eraser, Edit3, RotateCw, Layers } from 'lucide-react'

export default function Home() {
  const tools = [
    { icon: FileText, name: 'PDF to Word', desc: 'Convert PDF to editable Word', color: 'from-blue-500 to-blue-600' },
    { icon: Image, name: 'PDF to JPG', desc: 'Extract images from PDF', color: 'from-purple-500 to-purple-600' },
    { icon: FileType, name: 'Word to PDF', desc: 'Convert Word documents to PDF', color: 'from-green-500 to-green-600' },
    { icon: Files, name: 'JPG to PDF', desc: 'Convert images to PDF', color: 'from-pink-500 to-pink-600' },
    { icon: Minimize2, name: 'Compress PDF', desc: 'Reduce PDF file size', color: 'from-orange-500 to-orange-600' },
    { icon: Lock, name: 'Protect PDF', desc: 'Add password to PDF', color: 'from-red-500 to-red-600' },
    { icon: Unlock, name: 'Unlock PDF', desc: 'Remove PDF password', color: 'from-indigo-500 to-indigo-600' },
    { icon: Merge, name: 'Merge PDF', desc: 'Combine multiple PDFs', color: 'from-teal-500 to-teal-600' },
    { icon: Split, name: 'Split PDF', desc: 'Extract pages from PDF', color: 'from-cyan-500 to-cyan-600' },
    { icon: RotateCw, name: 'Rotate PDF', desc: 'Rotate PDF pages', color: 'from-yellow-500 to-yellow-600' },
    { icon: Edit3, name: 'Edit PDF', desc: 'Add text and images', color: 'from-lime-500 to-lime-600' },
    { icon: Eraser, name: 'Delete Pages', desc: 'Remove pages from PDF', color: 'from-rose-500 to-rose-600' },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="glass-card px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold gradient-text">PDF Tools</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition font-medium">Tools</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition font-medium">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="glass-card px-8 py-16 mb-12">
          <div className="flex justify-center mb-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl opacity-30 rounded-full"></div>
              <div className="relative bg-white p-8 rounded-full shadow-2xl">
                <FileText className="w-24 h-24 text-purple-600" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Free PDF Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convert, merge, compress, and edit your PDF files online.
            <br />100% free, secure, and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Choose Files</span>
            </button>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            All PDF Tools
          </h2>
          <p className="text-xl text-white/90">
            Everything you need to work with PDFs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card p-6 relative z-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 relative z-10 illustration-3d`}>
                <tool.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 relative z-10">{tool.name}</h3>
              <p className="text-gray-600 relative z-10">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-card px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 illustration-3d">
                <Lock className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">100% Secure</h3>
              <p className="text-gray-600">Your files are encrypted and automatically deleted after processing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 illustration-3d">
                <Download className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Fast & Free</h3>
              <p className="text-gray-600">Process files instantly without any registration or payment</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 illustration-3d">
                <Layers className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">All Platforms</h3>
              <p className="text-gray-600">Works on Windows, Mac, Linux, iOS, and Android devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-16">
        <div className="glass-card px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
                <span className="text-xl font-bold gradient-text">PDF Tools</span>
              </div>
              <p className="text-gray-600">The best free online PDF tools for all your document needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">PDF Converter</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">PDF Editor</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">PDF Merger</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">PDF Compressor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 PDF Tools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
