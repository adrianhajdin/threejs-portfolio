import { publications } from '../constants/index.js';

const Publications = () => {
  return (
    <section className="c-space my-20" id="publications">
      <h3 className="head-text">Research Publications</h3>
      <p className="text-white-600 mt-3 max-w-3xl">
        My research contributions to the field of AI and machine learning, focusing on innovative approaches to material science and synthesis prediction.
      </p>

      <div className="publications-container">
        {publications.map((publication) => (
          <div key={`publication-${publication.id}`} className="publication-item">
            {/* Publication Image/Visual */}
            {publication.image && (
              <div className="publication-image">
                <img 
                  src={publication.image} 
                  alt={`${publication.title} visual`} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            
            {/* Publication Content */}
            <div className="publication-content">
              <div className="publication-header">
                <h4 className="publication-title">{publication.title}</h4>
                {publication.workshop && (
                  <p className="publication-workshop-subtitle">
                    NeurIPS: {publication.workshop} → {publication.workshopFull}
                  </p>
                )}
                <div className="publication-meta">
                  {publication.conference && (
                    <span className="publication-conference">{publication.conference}</span>
                  )}
                  <span className="publication-year">{publication.year}</span>
                </div>
              </div>

              <div className="publication-authors">
                <p className="text-white-700">{publication.authors}</p>
              </div>

              {publication.abstract && (
                <div className="publication-abstract">
                  <p className="text-white-600">{publication.abstract}</p>
                </div>
              )}

              <div className="publication-actions">
                {publication.pdf && (
                  <a 
                    href={publication.pdf} 
                    target="_blank" 
                    rel="noreferrer"
                    className="publication-link"
                  >
                    <img src="/assets/arrow-up.png" alt="link" className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                )}
                {publication.arxiv && (
                  <a 
                    href={publication.arxiv} 
                    target="_blank" 
                    rel="noreferrer"
                    className="publication-link"
                  >
                    <img src="/assets/arrow-up.png" alt="link" className="w-3 h-3" />
                    <span>arXiv</span>
                  </a>
                )}
                {publication.code && (
                  <a 
                    href={publication.code} 
                    target="_blank" 
                    rel="noreferrer"
                    className="publication-link"
                  >
                    <img src="/assets/github.svg" alt="github" className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>

              {publication.tags && (
                <div className="publication-tags">
                  {publication.tags.map((tag, index) => (
                    <span key={index} className="publication-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications; 