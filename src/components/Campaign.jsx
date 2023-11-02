import PropTypes from "prop-types";
import { Media } from "./Media";

export const Campaign = ({ campaigns }) => {
  return (
    <div>
      <div className="d-flex gap-2">
        <div className="d-flex flex-column gap-1">
          <div className="fs-5 fw-bold">{campaigns.campaign_name}</div>
          <div>{campaigns.pay_per_install} per install</div>
        </div>
      </div>
      <div className="d-flex overflow-auto p-2">
        {campaigns.medias.map((media) => (
          <div className="d-flex gap-5 rounded" key={media.cover_photo_url}>
            <Media media={media} />
          </div>
        ))}
      </div>
    </div>
  );
};

Campaign.propTypes = {
  campaigns: PropTypes.shape({
    id: PropTypes.number.isRequired,
    campaign_name: PropTypes.string.isRequired,
    campaign_icon_url: PropTypes.string.isRequired,
    pay_per_install: PropTypes.string.isRequired,
    medias: PropTypes.arrayOf(
      PropTypes.shape({
        cover_photo_url: PropTypes.string.isRequired,
        download_url: PropTypes.string.isRequired,
        tracking_link: PropTypes.string.isRequired,
        media_type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
