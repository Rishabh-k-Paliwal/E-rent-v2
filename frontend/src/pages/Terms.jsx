import React from 'react';
import './Terms.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="legal-content">
                    <div className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using ElectroRent ("the Platform"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                        </p>
                        <div className="legal-highlight">
                            <p>⚠️ These terms constitute a legally binding agreement between you and ElectroRent.</p>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>2. Use License</h2>
                        <p>
                            Permission is granted to use ElectroRent for personal, non-commercial purposes subject to the following restrictions:
                        </p>
                        <ul>
                            <li>You must not modify or copy the materials</li>
                            <li>You must not use the materials for any commercial purpose</li>
                            <li>You must not attempt to decompile or reverse engineer any software</li>
                            <li>You must not remove any copyright or proprietary notations</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>3. User Responsibilities</h2>
                        <h3>Account Security</h3>
                        <p>
                            Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.
                        </p>
                        <h3>Accurate Information</h3>
                        <p>
                            You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>4. Rental Terms</h2>
                        <ul>
                            <li>All rentals are subject to product availability</li>
                            <li>Renters must return items in the same condition as received</li>
                            <li>Any damage beyond normal wear and tear will be charged to the renter</li>
                            <li>Late returns may incur additional daily charges</li>
                            <li>Products must be used only for their intended purpose</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>5. Payment Terms</h2>
                        <p>
                            Payment must be made in full before the rental period begins. We accept various payment methods including credit/debit cards and UPI.
                        </p>
                        <div className="legal-highlight">
                            <p>💳 All payments are processed securely through Razorpay.</p>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>6. Cancellation & Refunds</h2>
                        <p>
                            Cancellations made 24 hours before the rental start date are eligible for a full refund. Cancellations made within 24 hours may incur a cancellation fee.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>7. Limitation of Liability</h2>
                        <p>
                            ElectroRent shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>8. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification.
                        </p>
                    </div>

                    <div className="contact-info">
                        <h3>📧 Contact Information</h3>
                        <p>For questions about these Terms, please contact us:</p>
                        <p>Email: <a href="mailto:support@electrorent.com">support@electrorent.com</a></p>
                        <p>Phone: +91 1234567890</p>
                        <p>Address: VIT Bhopal University, Bhopal, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
