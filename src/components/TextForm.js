import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase.', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase.', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied text to clipboard.', 'success');
  };

  const handleClear = () => {
    setText('');
  };

  const wordCount = () => {
    if (text) {
      if (text.charAt(text.length - 1) === ' ') {
        return text.split(' ').length - 1;
      }
      return text.split(' ').length;
    }
    return 0;
  };

  const styleObj = (bgColor) => {
    if (bgColor) {
      return {
        backgroundColor: props.mode === 'light' ? 'white' : '#8abab9',
        color: props.mode === 'light' ? 'black' : 'white',
      };
    } else {
      return { color: props.mode === 'light' ? 'black' : 'white' };
    }
  };

  const [text, setText] = useState('');

  return (
    <div className="container">
      <div className="row">
        {/* Right side with your existing code */}
        <div className="col-md-8">
          <div style={styleObj(false)}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={text}
                style={styleObj(true)}
                onChange={handleOnChange}
                id="myBox"
                rows="8"
              ></textarea>
            </div>
            <button
              type="button"
              disabled={text.length === 0}
              className="btn btn-warning mx-2 my-2"
              onClick={handleUpClick}
            >
              Convert to uppercase
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="btn btn-success mx-2 my-2"
              onClick={handleLowClick}
            >
              Convert to lowercase
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="btn btn-primary mx-2 my-2"
              onClick={handleCopy}
            >
              Copy to clipboard
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className="btn btn-secondary mx-2 my-2"
              onClick={handleClear}
            >
              Clear text
            </button>
          </div>
          <div className="container my-3" style={styleObj(false)}>
            <h2>Your text summary</h2>
            <p>
              {wordCount()} words and {text.length} characters
            </p>
            <p>
              This can be read in{' '}
              {0.008 *
                text.split(' ').filter((element) => {
                  return element.length !== 0;
                })}
              minutes.
            </p>
            <h2>Preview</h2>
            <p id="preview">{text}</p>
          </div>
        </div>

        {/* Left side with Bootstrap card and link */}
        <div className="col-md-4 my-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center"><b>ಶ್ರೀ ಹರಿ 🙏</b></h5>
              <p className="card-text">
                {/* Discussion Between Arjun and Shree Krishna...
                <br/>ಅರ್ಜುನ : ಈ ಸಾವೂ ನೋವೆತಕೋ...
                <br/>ಕೃಷ್ಣ : ಸಾವಂತೆ ನೋವಂತೆ, ಆತ್ಮಕ್ಕೆ ಏನಂತೆ <br/>&emsp;&emsp;&emsp;&emsp;ಪ್ರತಿ ಮರಣ ಹೊಸ ಜನನಕೋ...
                <br/>ಅರ್ಜುನ : ಕೊಲ್ಲುವುದು ಬೇಡಯ್ಯಾ ನನಗಿರಲಿ ಅಪಜಯ...
                <br />ಕೃಷ್ಣ : ಸೈನಿಕನು ನೀನಯ್ಯಾ ಕರ್ತವ್ಯ ಮರೆತೆಯಾ...
                <br />ಅರ್ಜುನ : ನರಕದಂತೆ ಕಾಣತೈತೆ ನಾ ನಿಂತ ಜಗವೆಲ್ಲಾ...
                <br />ಕೃಷ್ಣ : ಜಗವೆಲ್ಲ ನನ್ನಲ್ಲೇ ಆ ಭಯವು ಬೇಕಿಲ್ಲ... */}
                <div id="preview" style={{ whiteSpace: 'pre-line' }}>
                    ಅರ್ಜುನ : ಈ ಸಾವೂ ನೋವೆತಕೋ...
                    <br />
                    ಕೃಷ್ಣ &emsp;&ensp;&nbsp;: ಸಾವಂತೆ ನೋವಂತೆ, ಆತ್ಮಕ್ಕೆ ಏನಂತೆ <br />&emsp;&emsp;&emsp;&emsp;<b>ಪ್ರತಿ ಮರಣ ಹೊಸ ಜನನಕೋ...</b>
                    <br />
                    ಅರ್ಜುನ : ಕೊಲ್ಲುವುದು ಬೇಡಯ್ಯಾ,<br/>&emsp;&emsp;&emsp;&emsp;ನನಗಿರಲಿ ಅಪಜಯ...
                    <br />
                    ಕೃಷ್ಣ &emsp;&ensp;&nbsp;: ಸೈನಿಕನು ನೀನಯ್ಯಾ,<br/>&emsp;&emsp;&emsp;&emsp;<b>ಕರ್ತವ್ಯ</b> ಮರೆತೆಯಾ...
                    <br />
                    ಅರ್ಜುನ : ನರಕದಂತೆ ಕಾಣತೈತೆ<br/>&emsp;&emsp;&emsp;&ensp;&nbsp; ನಾ ನಿಂತ ಜಗವೆಲ್ಲಾ...
                    <br />
                    ಕೃಷ್ಣ &emsp;&ensp;&nbsp;: <b>ಜಗವೆಲ್ಲ ನನ್ನಲ್ಲೇ</b> <br />&emsp;&emsp;&emsp;&emsp;ಆ ಭಯವು ಬೇಕಿಲ್ಲ...
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
