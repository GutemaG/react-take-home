import axios from "axios";
import { useEffect, useState } from "react";
import { Campaign } from "./components/Campaign";
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
          {campaigns.map((c) => (
            <Campaign campaigns={c} key={c.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
