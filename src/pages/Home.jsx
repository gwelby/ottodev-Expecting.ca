import React from 'react';
    import './Home.css';

    function Home() {
      return (
        <div className="home">
          <section className="hero">
            <h1>Welcome to Expecting.ca</h1>
            <p>Your trusted resource for pregnancy and parenting.</p>
            <button>Get Started</button>
          </section>
          <section className="timeline">
            <h2>Pregnancy Timeline Tool</h2>
            <div className="timeline-tool">
              {/* Placeholder for timeline tool */}
              <p>Track your pregnancy milestones with our timeline tool.</p>
            </div>
          </section>
          <section className="providers">
            <h2>Featured Healthcare Providers</h2>
            <div className="provider-list">
              <div className="provider-card">
                <h3>Dr. Jane Doe</h3>
                <p>Obstetrician & Gynecologist</p>
                <p>Location: Toronto, ON</p>
              </div>
              <div className="provider-card">
                <h3>Dr. John Smith</h3>
                <p>Pediatrician</p>
                <p>Location: Montreal, QC</p>
              </div>
            </div>
          </section>
          <section className="resources">
            <h2>Latest Articles/Resources</h2>
            <div className="resource-list">
              <div className="resource-card">
                <h3>Preparing for Labor</h3>
                <p>Learn tips and strategies for a smooth labor experience.</p>
              </div>
              <div className="resource-card">
                <h3>Postpartum Care</h3>
                <p>Discover essential care tips for new mothers.</p>
              </div>
            </div>
          </section>
          <section className="experts">
            <h2>Expert Profiles</h2>
            <div className="expert-list">
              <div className="expert-card">
                <h3>Dr. Emily Johnson</h3>
                <p>Maternal-Fetal Medicine Specialist</p>
                <p>Location: Vancouver, BC</p>
              </div>
              <div className="expert-card">
                <h3>Dr. Michael Brown</h3>
                <p>Perinatologist</p>
                <p>Location: Calgary, AB</p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    export default Home;
