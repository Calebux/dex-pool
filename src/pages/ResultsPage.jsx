/* eslint-disable react/prop-types */
import backBtn from "../assets/backBtn.svg";
import "@covalenthq/goldrush-kit/styles.css";
import { GoldRushProvider, XYKPoolDetailView } from "@covalenthq/goldrush-kit";
import { useQuery } from "../context/QueryContext";
import { useNavigate } from "react-router-dom";

function ResultsPage() {
  const { dex_name, pool_address, chain_name } = useQuery();

  const navigate = useNavigate();
  function handleGoHome() {
    navigate("/");
  }
  return (
    <div className="relative min-h-screen bg-bgMain bg-cover bg-center bg-no-repeat pb-10">
      <button className="fixed left-[40px] top-[40px]" onClick={handleGoHome}>
        <img src={backBtn} alt="" />
      </button>
      <main className="flex flex-col items-center justify-center gap-y-4 pt-[100px]">
        {!dex_name || !pool_address || !chain_name ? (
          <div className="flex flex-col items-center pt-[100px] text-center">
            <h3 className="text-[32px] font-semibold text-white">
              Hey go back to the home page
              <br /> to query your data.
            </h3>
            <button
              className="mt-6 w-[300px] rounded-lg border-[0.5px] border-solid border-[#c4c4c4] bg-[#121212] py-4 text-xl font-bold text-white"
              onClick={handleGoHome}
            >
              Go to home
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-[14px] text-[30px] font-extrabold text-white">
              Results
            </h2>
            <div className="w-[50%] rounded-lg bg-white p-8">
              <GoldRushProvider
                apikey={"cqt_rQkVVrThdHDvQ4MkG7br9J8BhrW4"}
                mode="light"
                color="cyan"
                border_radius="medium"
              >
                <XYKPoolDetailView
                  chain_name={chain_name}
                  dex_name={dex_name}
                  pool_address={pool_address}
                />
              </GoldRushProvider>
            </div>{" "}
          </>
        )}
      </main>
    </div>
  );
}

export default ResultsPage;
