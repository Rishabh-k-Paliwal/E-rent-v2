import React from 'react';
import './Team.css';

const teamMembers = [
    {
        name: 'Anam',
        role: 'Database Architect & Backend Lead',
        avatar: 'https://ui-avatars.com/api/?name=Anam&background=ffb6c1&color=fff&size=200',
        contributions: [
            'Designed full MongoDB schema (User, Product, Booking)',
            'Implemented GeoJSON + 2dsphere indexing',
            'Built booking engine (validation, availability, lifecycle)',
            'Developed geospatial search APIs',
            'Implemented JWT & role-based access middleware'
        ]
    },
    {
        name: 'Rishabh',
        role: 'Frontend Lead & Integration Specialist',
        avatar: 'https://ui-avatars.com/api/?name=Rishabh&background=0d6efd&color=fff&size=200',
        contributions: [
            'Built Location Picker & integrated Google Maps',
            'Connected geospatial APIs with backend',
            'Created Product Form UI + Axios integration',
            'Implemented Razorpay payment flow',
            'Developed dashboard & product display components'
        ]
    },
    {
        name: 'Devanshi',
        role: 'UI/UX Designer & Notification System',
        avatar: 'https://ui-avatars.com/api/?name=Devanshi&background=6f42c1&color=fff&size=200',
        contributions: [
            'Created booking pages (date selections, price calculation)',
            'Developed user dashboard (my bookings, statuses)',
            'Implemented Nodemailer templates',
            'Added optional Twilio SMS logic',
            'Performed manual UI testing'
        ]
    },
    {
        name: 'Yana',
        role: 'Auth Specialist & Deployment Manager',
        avatar: 'https://ui-avatars.com/api/?name=Yana&background=20c997&color=fff&size=200',
        contributions: [
            'Designed Login/Signup pages',
            'Implemented AuthContext + ProtectedRoute logic',
            'Built product listing & search filter UI',
            'Managed Vercel & Render deployment',
            'Configured environment variables & hosting'
        ]
    },
    {
        name: 'Kaushal',
        role: 'Backend Security & API Developer',
        avatar: 'https://ui-avatars.com/api/?name=Kaushal&background=fd7e14&color=fff&size=200',
        contributions: [
            'Implemented registration/login logic with bcrypt + JWT',
            'Added role-based access control',
            'Created product CRUD APIs with ownership checks',
            'Added security middlewares (Helmet, rate-limiter)',
            'Handled backend email/SMS notification triggers'
        ]
    }
];

const Team = () => {
    return (
        <div className="team-page">
            <div className="team-container">
                <div className="team-header">
                    <h1>Meet Our Team</h1>
                    <p>The talented individuals behind ElectroRent's success</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-member-card"
                            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                        >
                            <div className="member-header">
                                <div className="member-avatar">
                                    <img src={member.avatar} alt={member.name} />
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <span className="member-role">{member.role}</span>
                                </div>
                            </div>

                            <div className="member-contributions">
                                <h4>Key Contributions</h4>
                                <ul>
                                    {member.contributions.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
