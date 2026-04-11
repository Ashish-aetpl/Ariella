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
    <div className="container py-8">
      {/* Header */}
      <header className="product-header">
        <h1 className="product-title">
          Tenzo <span className="highlight">Professional</span>
        </h1>
        <p className="product-description">
          The ultimate software solution for professionals. Download your free trial today and experience the difference.
        </p>
        <div className="rating-container">
          <div className="stars">
            {[...Array(5)].map((_, i) => <FaStar key={i} className="fill-current" />)}
          </div>
          <span className="rating-text">4.9/5 (2,847 reviews)</span>
        </div>
      </header>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Download Section */}
      <section className="download-section">
        <h2 className="text-3xl font-bold text-center mb-6">Download Tenzo Professional</h2>
        
        {!downloadComplete ? (
          <form onSubmit={handleDownload}>
            <div className="form-group">
              <label className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input"
                required
              />
              <p className="form-help">
                We'll send your download link and product updates to this email
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isDownloading}
              className="download-button"
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
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <h3 className="text-2xl font-semibold mb-2">Download Started!</h3>
            <p className="text-gray-600 mb-4">
              Your download of Tenzo Professional has begun. Check your downloads folder.
            </p>
            <p className="text-sm text-gray-500">
              We've also sent a confirmation email to {email}
            </p>
          </div>
        )}

        <div className="system-requirements">
          <h4 className="font-semibold mb-3">System Requirements:</h4>
          <ul className="requirements-list">
            <li>Windows 10/11, macOS 10.14+, or Linux (Ubuntu 18.04+)</li>
            <li>4GB RAM minimum (8GB recommended)</li>
            <li>2GB available disk space</li>
            <li>Active internet connection for activation</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Ariella Technologies. All rights reserved.</p>
        <p className="mt-2">
          Need help? Contact us at <a href="mailto:support@ariella.in">support@ariella.in</a>
        </p>
      </footer>
    </div>
  )
}

export default TenzoProduct
