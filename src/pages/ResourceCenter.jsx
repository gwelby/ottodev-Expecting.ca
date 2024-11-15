import React from 'react';
    import './ResourceCenter.css';

    function ResourceCenter() {
      return (
        <div className="resource-center">
          <h1>Resource Center</h1>
          <section className="articles">
            <h2>Articles</h2>
            <div className="article-list">
              {/* Placeholder for articles */}
            </div>
          </section>
          <section className="guides">
            <h2>Provincial Healthcare Guides</h2>
            <div className="guide-list">
              {/* Placeholder for guides */}
            </div>
          </section>
          <section className="videos">
            <h2>Video Content</h2>
            <div className="video-list">
              {/* Placeholder for videos */}
            </div>
          </section>
          <section className="downloads">
            <h2>Downloadable Resources</h2>
            <div className="download-list">
              {/* Placeholder for downloadable resources */}
            </div>
          </section>
        </div>
      );
    }

    export default ResourceCenter;
