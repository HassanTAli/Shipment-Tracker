import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Stepper = () => {
  const { allData } = useSelector((state) => state.shipment);
  const { t } = useTranslation();

  const status = allData?.CurrentStatus?.state;
  const deliveredStatus = status === "DELIVERED";
  const notDeliveredStatus = status === "DELIVERED_TO_SENDER";

  return (
    <div className="mt-4 mx-4 mb-24">
      <ol className="flex items-center w-full">
        <li
          className={`${
            deliveredStatus
              ? "after:border-[#35B600]"
              : notDeliveredStatus
              ? "after:border-[#f9ba02]"
              : "after:border-[#f4050d]"
          } relative flex w-full items-center text-white  after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block`}
        >
          <span
            className={`${
              deliveredStatus
                ? "bg-[#35B600]"
                : notDeliveredStatus
                ? "bg-[#f9ba02]"
                : "bg-[#f4050d]"
            } flex items-center justify-center w-5 h-5 rounded-full shrink-0`}
          >
            <svg
              className="w-1.5 h-1.5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <p className="absolute top-full text-black">
            {t("shipmentDetailsTimeline.ShipmentCreated")}
          </p>
        </li>
        <li
          className={`${
            deliveredStatus
              ? "after:border-[#35B600]"
              : notDeliveredStatus
              ? "after:border-[#f9ba02]"
              : "after:border-[#f4050d]"
          } relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block`}
        >
          <span
            className={`${
              deliveredStatus
                ? "bg-[#35B600]"
                : notDeliveredStatus
                ? "bg-[#f9ba02]"
                : "bg-[#f4050d]"
            } flex items-center justify-center w-5 h-5 bg-[#EEEEEE] rounded-full shrink-0`}
          >
            <svg
              className="w-1.5 h-1.5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <p className="absolute top-full text-black">
            {t("shipmentDetailsTimeline.shipmentMerchant")}
          </p>
        </li>
        <li
          className={`${
            deliveredStatus && "after:border-[#35b600]"
          } relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block`}
        >
          <span
            className={`${
              deliveredStatus
                ? "w-5 h-5 bg-[#35b600]"
                : notDeliveredStatus
                ? "bg-[#f9ba02]"
                : "bg-[#f4050d]"
            } flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shrink-0`}
          >
            {deliveredStatus ? (
              <svg
                className="w-1.5 h-1.5 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 406.783 406.783"
                className="w-4 h-4 text-white lg:w-5 lg:h-5"
              >
                <g>
                  <g>
                    <path d="M127.12,256.572c-19.742,0-35.741,15.993-35.741,35.737c0,19.745,15.999,35.738,35.741,35.738    c19.749,0,35.744-15.993,35.744-35.738C162.864,272.565,146.869,256.572,127.12,256.572z M127.12,307.846    c-8.582,0-15.536-6.955-15.536-15.537c0-8.586,6.954-15.537,15.536-15.537c8.583,0,15.542,6.951,15.542,15.537    C142.662,300.891,135.703,307.846,127.12,307.846z" />
                    <path d="M315.588,256.572c-19.742,0-35.74,15.993-35.74,35.737c0,19.745,15.998,35.738,35.74,35.738    c19.75,0,35.744-15.993,35.744-35.738C351.332,272.565,335.338,256.572,315.588,256.572z M315.588,307.846    c-8.582,0-15.535-6.955-15.535-15.537c0-8.586,6.953-15.537,15.535-15.537c8.584,0,15.543,6.951,15.543,15.537    C331.131,300.891,324.172,307.846,315.588,307.846z" />
                    <path d="M167.329,146.759c0,5.008-4.098,9.105-9.105,9.105H32.579c-5.008,0-9.104-4.097-9.104-9.105v-5.463    c0-5.007,4.097-9.104,9.104-9.104h125.645c5.008,0,9.105,4.097,9.105,9.104V146.759z" />
                    <path d="M385.623,200.066c-13.105-3.407-20.604-5.549-25.75-15.487l-17.207-34.839c-5.148-9.938-18.518-18.07-29.707-18.07    h-23.535c0,0-3.166,0.066-3.166-3.12c0-7.305,0-29.219,0-29.219c0-11.327-6.41-20.595-20.045-20.595H74.405    c-19.521,0-28.789,9.269-28.789,20.595v18.311c0,0,0,5.446,5.271,5.446c26.834,0,107.337,0,107.337,0    c10.041,0,18.21,8.168,18.21,18.209v5.463c0,10.041-8.169,18.209-18.21,18.209H50.887c0,0-5.271-0.438-5.271,5.252    c0,2.826,0,4.723,0,6.297c0,5.008,6.864,5.005,6.864,5.005h72.254c10.041,0,18.21,8.169,18.21,18.209v5.463    c0,10.041-8.169,18.209-18.21,18.209H53.62c0,0-8.004-0.148-8.004,6.225c0,11.062,0,44.246,0,44.246    c0,11.326,9.268,20.595,20.595,20.595c0,0,8.532,0,11.376,0c2.58,0,2.96-1.437,2.96-2.159c0-25.679,20.894-46.568,46.574-46.568    c25.682,0,46.575,20.891,46.575,46.568c0,0.725-0.206,2.159,1.767,2.159c22.55,0,91.806,0,91.806,0    c1.82,0,1.746-1.534,1.746-2.159c0-25.679,20.893-46.568,46.574-46.568s46.574,20.891,46.574,46.568    c0,0.725-0.018,2.159,1.121,2.159c10.34,0,23.146,0,23.146,0c11.195,0,20.352-9.157,20.352-20.351v-38.664    C406.783,202.894,396.502,202.894,385.623,200.066z M346.896,198.255c0,0-43.219,0-57.928,0c-2.393,0-2.711-2.33-2.711-2.33    V147.67c0,0-0.135-1.853,2.938-1.853c4.133,0,16.529,0,16.529,0c9.959,0,21.855,7.236,26.434,16.079l15.312,31    c0.645,1.248,1.334,2.356,2.072,3.349C350.086,196.973,349.174,198.255,346.896,198.255z" />
                    <path d="M133.838,205.195c0,5.008-4.097,9.105-9.104,9.105H9.104C4.096,214.3,0,210.203,0,205.195v-5.463    c0-5.007,4.097-9.104,9.104-9.104h115.63c5.008,0,9.104,4.097,9.104,9.104V205.195z" />
                  </g>
                </g>
              </svg>
            )}
          </span>
          <p className="absolute top-full text-black">
            {t("shipmentDetailsTimeline.shipmentDelivery")}
          </p>
        </li>
        <li
          className={`${
            deliveredStatus && "after:border-[#35b600]"
          } relative flex items-center w-full justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block`}
        >
          <span
            className={`${
              deliveredStatus && "w-5 h-5 bg-[#35b600]"
            } flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            {deliveredStatus ? (
              <svg
                className="w-1.5 h-1.5 text-white lg:w-4 lg:h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            ) : (
              <svg
                className={`w-4 h-4 text-white lg:w-5 lg:h-5`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            )}
          </span>
          <p className="absolute top-full text-black text-ellipsis">
            {t("shipmentDetailsTimeline.Delivered")}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Stepper;
