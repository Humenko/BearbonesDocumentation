import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
const code = ({ language, children }) => {
    return <pre>{React.createElement((p) => <code className={`language-${language}`} {...p}></code>, {
        dangerouslySetInnerHTML: {
            __html: Prism.highlight(children, Prism.languages[language], language)
        }
    })}
    </pre>;
};

code.propTypes = {
    language: PropTypes.oneOf(['javascript', 'markup', 'css']),
    children: PropTypes.string
  };

export default code;