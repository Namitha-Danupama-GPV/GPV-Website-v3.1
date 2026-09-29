import {termsOfServiceMetadata} from './../../metadata/termsOfServiceMetadata.js';

export const metadata = termsOfServiceMetadata;

export default function TermsOfService() {
    return (
      <section className="bg-gradient-to-r from-white to-[#CEEFFF] px-6 py-16 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 text-left">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg mb-10 text-justify">
            Welcome to Global Pearl Ventures (Pvt) Ltd. By accessing or using our website, services, or
            any content provided by us, you agree to comply with these Terms of Service. Please read the
            following terms carefully.
          </p>

          <div className="space-y-10 text-base leading-relaxed text-justify">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please refrain from using our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">2. Use of Services</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>You agree to use our services only for lawful purposes and in accordance with these terms.</li>
                <li>Any unauthorized use of the website or services may result in suspension or termination of access.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">3. User Content</h2>
              <p>
                You retain ownership of any content you upload or submit to our platform. By submitting content, 
                you grant us a non-exclusive, royalty-free, and transferable license to use, modify, and distribute it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">4. Prohibited Activities</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Engaging in any illegal activities, including fraud or intellectual property infringement.</li>
                <li>Distributing harmful or offensive content through our platform.</li>
                <li>Interfering with or disrupting the integrity of the website or services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">5. Limitation of Liability</h2>
              <p>
                We are not liable for any indirect, incidental, or consequential damages resulting from your use
                of our services. We do not guarantee the availability or uptime of the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">6. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our services if you violate these terms.
                Termination may happen without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">7. Changes to Terms</h2>
              <p>
                We may update these Terms of Service periodically. Any changes will be posted on this page. Please
                review these terms regularly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">8. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of [Your Jurisdiction]. Any disputes arising out of
                or in connection with these terms will be subject to the exclusive jurisdiction of the courts in
                [Your Jurisdiction].
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">9. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding these Terms of Service, please contact us at:
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
