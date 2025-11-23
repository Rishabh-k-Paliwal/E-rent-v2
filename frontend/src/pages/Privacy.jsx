import React from 'react';
import './Terms.css'; // Reusing the same styles

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="legal-content">
                    <div className="legal-section">
                        <h2>1. Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>
                            We collect information you provide directly to us when you:
                        </p>
                        <ul>
                            <li>Create an account (name, email, phone number)</li>
                            <li>List a product for rent (product details, location)</li>
                            <li>Make a booking (payment information, rental dates)</li>
                            <li>Contact us for support (correspondence, feedback)</li>
                        </ul>
                        <h3>Automatically Collected Information</h3>
                        <ul>
                            <li>Device information (IP address, browser type)</li>
                            <li>Usage data (pages visited, time spent)</li>
                            <li>Location data (with your permission)</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We use the collected information for the following purposes:
                        </p>
                        <ul>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Monitor and analyze trends and usage</li>
                            <li>Detect, prevent, and address fraud and security issues</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell your personal information. We may share your information in the following situations:
                        </p>
                        <div className="legal-highlight">
                            <p>🔒 Your privacy is our priority. We only share data when necessary for service delivery.</p>
                        </div>
                        <ul>
                            <li>With other users (to facilitate rentals)</li>
                            <li>With service providers (payment processors, hosting)</li>
                            <li>For legal compliance (when required by law)</li>
                            <li>With your consent (when you explicitly agree)</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information:
                        </p>
                        <ul>
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication</li>
                            <li>Secure payment processing through Razorpay</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>5. Your Rights</h2>
                        <p>
                            You have the following rights regarding your personal data:
                        </p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Export your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>6. Cookies & Tracking</h2>
                        <p>
                            We use cookies and similar tracking technologies to:
                        </p>
                        <ul>
                            <li>Remember your preferences and settings</li>
                            <li>Understand how you use our platform</li>
                            <li>Improve user experience</li>
                            <li>Provide personalized content</li>
                        </ul>
                        <p>
                            You can control cookies through your browser settings.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>7. Data Retention</h2>
                        <p>
                            We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account at any time.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>8. Children's Privacy</h2>
                        <p>
                            Our services are not intended for users under 18 years of age. We do not knowingly collect information from children.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>9. Changes to Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                        </p>
                    </div>

                    <div className="contact-info">
                        <h3>📧 Contact Us About Privacy</h3>
                        <p>If you have questions about this Privacy Policy, please contact us:</p>
                        <p>Email: <a href="mailto:privacy@electrorent.com">privacy@electrorent.com</a></p>
                        <p>Phone: +91 1234567890</p>
                        <p>Address: VIT Bhopal University, Bhopal, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
