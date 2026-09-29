import {cookieMetadata} from './../../metadata/cookieMetadata.js'

export const metadata = cookieMetadata;

export default function CookiePolicy() {
    return (
      <section className="bg-gradient-to-r from-white to-[#CEEFFF] px-6 py-16 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 text-left">
            Cookie Policy
          </h1>
          <p className="text-gray-600 text-lg mb-10 text-justify">
            This Cookie Policy explains how Global Pearl Ventures (Pvt) Ltd uses cookies and similar technologies
            to enhance your experience on our website. By accessing or using our website, you consent to the use of cookies as described in this policy.
          </p>

          <div className="space-y-10 text-base leading-relaxed text-justify">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help
                the website remember your preferences, actions, and other settings over a period of time, so you
                don’t have to keep re-entering them each time you visit the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">2. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly.</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand how users interact with our website, so we can improve its performance.</li>
                <li><strong>Functional Cookies:</strong> These cookies enable the website to remember choices you make (such as language preferences) and provide enhanced features.</li>
                <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver ads that are relevant to you and track the effectiveness of advertising campaigns.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">3. How We Use Cookies</h2>
              <p>
                We use cookies to enhance user experience, analyze website traffic, remember user preferences,
                and display personalized content or ads. Cookies also help us improve the functionality of the website
                and ensure that we deliver the best service to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">4. Your Cookie Choices</h2>
              <p>
                You can control the use of cookies through your browser settings. Most browsers allow you to accept or
                reject cookies, and to delete cookies that are already stored on your device. However, please note that
                disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">5. Third-Party Cookies</h2>
              <p>
                We may allow third-party service providers, such as analytics and advertising companies, to place cookies
                on your device. These third parties may collect information about your online activities across different
                websites over time, and we do not control how these third parties use the data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the
                “Last Updated” date at the top of the page will reflect the most recent update. We encourage you to
                review this policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">7. Contact Us</h2>
              <p>
                If you have any questions or concerns about our use of cookies, please contact us at:
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
