import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React from 'react';

const code = ({ language, children }) => {
  return (
    <pre>
      {React.createElement(
        p => (
          <code className={`language-${language}`} {...p} />
        ),
        {
          dangerouslySetInnerHTML: {
            __html: Prism.highlight(
              children,
              Prism.languages[language],
              language
            )
          }
        }
      )}
    </pre>
  );
};

code.propTypes = {
  language: PropTypes.oneOf(['js', 'markup', 'css']),
  children: PropTypes.string
};

export default code;
