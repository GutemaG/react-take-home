import PropTypes from "prop-types";
import { useState } from "react";

export const Media = ({ media }) => {
  const copyToClipboard = (text) => {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handlePauseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex flex-end">
        {isVideoPlaying ? (
          <video
            src={media.download_url}
            controls
            autoPlay
            className="img-fluid rounded-2 border m-1"
            style={{
              minWidth: "55px",
              maxWidth: "130px",
              height: "auto",
            }}
            onEnded={handlePauseVideo}
          />
        ) : (
          <div style={{ position: "relative" }}>
            <img
              src={media.cover_photo_url}
              alt={`alt`}
              className="img-fluid rounded-2 border m-1"
              style={{
                minWidth: "55px",
                maxWidth: "130px",
                height: "auto",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
              onClick={handlePlayVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="56"
                fill="currentColor"
                className="bi bi-file-play text-light"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            </span>
          </div>
        )}
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn"
          onClick={() => copyToClipboard(media.tracking_link)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-link-45deg"
            viewBox="0 0 16 16"
          >
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
        </button>
        <a href={media.download_url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

Media.propTypes = {
  media: PropTypes.shape({
    cover_photo_url: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    tracking_link: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
  }).isRequired,
};
