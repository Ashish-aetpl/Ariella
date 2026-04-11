import React, { useState } from 'react'
import { FaDownload, FaCheckCircle, FaStar, FaShieldAlt, FaBolt, FaBox } from 'react-icons/fa'

const TenzoProduct = () => {
  const [email, setEmail] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  const handleDownload = async (e) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setIsDownloading(true)
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)
      setDownloadComplete(true)
      
      // Create download link
      const link = document.createElement('a')
      link.href = '/tenzo-software.zip' // Replace with actual software file
      link.download = 'tenzo-software.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 2000)
  }

  const features = [
    { icon: <FaBolt className="text-yellow-500" />, title: "Lightning Fast", description: "Optimized performance for maximum efficiency" },
    { icon: <FaShieldAlt className="text-green-500" />, title: "Secure & Reliable", description: "Enterprise-grade security you can trust" },
    { icon: <FaBox className="text-blue-500" />, title: "All-in-One Solution", description: "Complete toolkit for your needs" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Tenzo <span className="text-blue-600">Professional</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The ultimate software solution for professionals. Download your free trial today and experience the difference.
        </p>
        <div className="flex justify-center items-center mt-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <FaStar key={i} className="fill-current" />)}
          </div>
          <span className="ml-2 text-gray-600">4.9/5 (2,847 reviews)</span>
        </div>
      </header>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Download Section */}
      <section className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Download Tenzo Professional</h2>
        
        {!downloadComplete ? (
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                We'll send your download link and product updates to this email
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isDownloading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Preparing Download...
                </>
              ) : (
                <>
                  <FaDownload className="mr-2" />
                  Download Free Trial
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Download Started!</h3>
            <p className="text-gray-600 mb-4">
              Your download of Tenzo Professional has begun. Check your downloads folder.
            </p>
            <p className="text-sm text-gray-500">
              We've also sent a confirmation email to {email}
            </p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold mb-3">System Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Windows 10/11, macOS 10.14+, or Linux (Ubuntu 18.04+)</li>
            <li>4GB RAM minimum (8GB recommended)</li>
            <li>2GB available disk space</li>
            <li>Active internet connection for activation</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; 2024 Ariella Technologies. All rights reserved.</p>
        <p className="mt-2">
          Need help? Contact us at <a href="mailto:support@ariella.in" className="text-blue-600 hover:underline">support@ariella.in</a>
        </p>
      </footer>
    </div>
  )
}

export default TenzoProduct
