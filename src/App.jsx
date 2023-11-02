import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const result = await axios.get(
        "https://www.plugco.in/public/take_home_sample_feed"
      );
      setCampaigns(result.data.campaigns);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      {campaigns.length && (
        <div className="d-flex flex-column gap-3 p-3">
          <div className="d-flex gap-2">
            <div>
              <img
                src={campaigns[0].campaign_icon_url}
                alt="icon"
                className="rounded"
                width={56}
                height={56}
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <div className="fs-5 fw-bold">{campaigns[0].campaign_name}</div>
              <div>{campaigns[0].pay_per_install} per install</div>
            </div>
          </div>
          <div className="d-flex overflow-auto p-2">
            {campaigns[0].medias.map((media) => (
              <div className="d-flex gap-5 rounded" key={media.cover_photo_url}>
                <div className="d-flex flex-column gap-1">
                  <div className="image">
                    <img
                      src={media.cover_photo_url}
                      alt={`Cover for ${campaigns[0].campaign_name}`}
                      className="img-fluid rounded"
                      style={{
                        minWidth: "80px",
                        maxWidth: "200px",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="icons d-flex gap-2">
                    <span>copy link</span>
                    <span>download</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
