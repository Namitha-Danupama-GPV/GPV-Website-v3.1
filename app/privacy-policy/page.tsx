import {privacyPolicyMetadata} from './../../metadata/privacyPolicyMetadata.js';

export const metadata = privacyPolicyMetadata;

export default function PrivacyPolicy() {
    return (
      <section className="bg-gradient-to-r from-white to-[#CEEFFF] px-6 py-16 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 text-left">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg mb-10 text-justify">
            At Global Pearl Ventures (Pvt) Ltd, we value your privacy and are committed to protecting
            your personal data. This Privacy Policy outlines how we collect, use, and safeguard your
            information when you interact with us, whether through our website, services, or
            communications.
          </p>
  
          <div className="space-y-10 text-base leading-relaxed text-justify">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">1. Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Personal identification information (Name, Email, Phone number, etc.)</li>
                <li>Technical data such as IP address, browser type, and usage patterns</li>
                <li>Communication data and feedback from forms or emails</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>To provide and improve our services</li>
                <li>To communicate with you regarding inquiries or support</li>
                <li>To personalize user experience and analyze usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to ensure a high level
                of security and confidentiality for your data. However, no method of transmission over
                the Internet is 100% secure.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">4. Sharing of Data</h2>
              <p>
                We do not sell or rent your personal information. We may share it with trusted
                partners or service providers strictly for business operations or legal compliance.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">5. Your Rights</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>You can request access, correction, or deletion of your data</li>
                <li>You have the right to withdraw consent at any time</li>
                <li>You can opt out of marketing communications</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">6. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can set your browser to
                refuse cookies or alert you when cookies are being sent.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We encourage users to frequently
                check this page for any changes.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="block mt-2 font-medium">
                  Email: info@globalpearlventures.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  