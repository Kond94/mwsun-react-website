import React, { useEffect, useRef } from "react";

const TripAdvisorWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only proceed if we have a container reference
    if (!containerRef.current) return;

    // Create an iframe to isolate the TripAdvisor widget
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "180px"; // Increased height by 1.5x (from 150px)
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "#fff";

    // Append the iframe to our container
    containerRef.current.appendChild(iframe);

    // Write the TripAdvisor HTML to the iframe
    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .ta-container { 
            // initial: 10px;
            text-align: center;
            transform: scale(1.3); 
            transform-origin: center center;
          }
        </style>
      </head>
      <body>
        <div class="ta-container">
          <div id="TA_excellent899" class="TA_excellent">
            <ul id="6FWY1Q" class="TA_links oZvkkrt4AaHb">
              <li id="5OmFkI" class="epv7Z3bOc">
                <a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g298274-d1876140-Reviews-Malawi_Sun_Hotel-Blantyre_Southern_Region.html">
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" class="widEXCIMG" id="CDSWIDEXCLOGO"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <script async src="https://www.jscache.com/wejs?wtype=excellent&uniq=899&locationId=1876140&lang=en_US&display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
      </body>
      </html>
    `;

    iframe.srcdoc = iframeContent;

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "450px", // Increased width by 1.5x (from 300px)
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "12px", // Increased border radius by 1.5x (from 8px)
      }}
    />
  );
};

export default TripAdvisorWidget;
