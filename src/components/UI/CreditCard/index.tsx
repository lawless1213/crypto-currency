import React, { useState, useEffect } from "react";
import s from "./index.module.scss";

interface CreditCardSVGProps {
  name: string;
  number: string;
  expiration: string;
  securityCode: string;
}

const CreditCardSVG: React.FC<CreditCardSVGProps> = ({
  name,
  number,
  expiration,
  securityCode,
}) => {
  const [cardClass, setCardClass] = useState(s.creditcard);
  const [baseColor, setBaseColor] = useState("grey");
  const [cardType, setCardType] = useState("unknown");

  // Regular expressions for card type detection
  const cardTypeRegex: { [key: string]: { regex: RegExp; color: string } } = {
    visa: { regex: /^4\d{0,15}$/, color: "lime" },
    mastercard: {
      regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}$/,
      color: "lightblue",
    },
    "american express": { regex: /^3[47]\d{0,13}$/, color: "green" },
    discover: { regex: /^(6011|65\d{0,2}|64[4-9]\d?)\d{0,12}$/, color: "purple" },
    diners: { regex: /^3(?:0[0-5]|9|[689])\d{0,11}$/, color: "orange" },
    jcb: { regex: /^(?:35\d{0,2})\d{0,12}$/, color: "red" },
    maestro: { regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}$/, color: "yellow" },
    unionpay: { regex: /^62\d{0,14}$/, color: "cyan" },
    unknown: { regex: /.*/, color: "grey" },
  };

  // Detect card type based on number
  useEffect(() => {
    let detectedType = "unknown";
    let detectedColor = "grey";

    for (const [type, { regex, color }] of Object.entries(cardTypeRegex)) {
      if (regex.test(number.replace(/\s+/g, ""))) {
        detectedType = type;
        detectedColor = color;
        break;
      }
    }

    setCardType(detectedType);
    setBaseColor(detectedColor);
		console.log(detectedColor);
		
  }, [number]);

  // Handle flip animation
  const handleCardFlip = () => {
    setCardClass((prev) =>
      prev.includes("flipped") ? s.creditcard : `${s.creditcard} ${s.flipped}`
    );
  };

  return (
    <div className={`${s.container} ${s.preload}`} onClick={handleCardFlip}>
      <div className={cardClass}>
        {/* Front of the card */}
        <div className={s.front}>
					<div className={s.logo}>{cardType}</div>
          <svg
            version="1.1"
            id="cardfront"
            className={s.cardfront}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 750 471"
            xmlSpace="preserve"
          >
            <g id="Front">
              <g id="CardBackground">
                <path
                  id="Rectangle-1_1_"
                  className={`${s.lightcolor} ${s[baseColor]}`}
                  d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"
                />
                <path
                  className={`${s.darkcolor} ${s[baseColor + 'dark']}`}
                  d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                />
              </g>
              <text
                transform="matrix(1 0 0 1 60.106 295.0121)"
                id="svgnumber"
                className={`${s.st2} ${s.st3} ${s.st4}`}
              >
                {number || "0123 4567 8910 1112"}
              </text>
              <text
                transform="matrix(1 0 0 1 54.1064 428.1723)"
                id="svgname"
                className={`${s.st2} ${s.st5} ${s.st6}`}
              >
                {name || "JOHN DOE"}
              </text>
							<text transform="matrix(1 0 0 1 54.1074 389.8793)" className={`${s.st7} ${s.st5} ${s.st8}`}>cardholder name</text>
							<text transform="matrix(1 0 0 1 479.7754 388.8793)" className={`${s.st7} ${s.st5} ${s.st8}`}>expiration</text>
							<text transform="matrix(1 0 0 1 65.1054 241.5)" className={`${s.st7} ${s.st5} ${s.st8}`}>card number</text>
							<g>
								<text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire" className={`${s.st2} ${s.st5} ${s.st9}`}>
									{expiration || "01/23"}
								</text>
								<text transform="matrix(1 0 0 1 479.3848 417.0097)" className={`${s.st2} ${s.st10} ${s.st11}`}>VALID</text>
								<text transform="matrix(1 0 0 1 479.3848 435.6762)" className={`${s.st2} ${s.st10} ${s.st11}`}>THRU</text>
								<polygon className={s.st2} points="554.5,421 540.4,414.2 540.4,427.9 		" />
							</g>
							<g id="cchip">
								<g>
											<path className={s.st2} d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
							c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
									</g>
									<g>
											<g>
													<rect x="82" y="70" className={s.st12} width="1.5" height="60" />
											</g>
											<g>
													<rect x="167.4" y="70" className={s.st12} width="1.5" height="60" />
											</g>
											<g>
													<path className={s.st12} d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
									c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
									C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
									c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
									c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
											</g>
											<g>
													<rect x="82.8" y="82.1" className={s.st12} width="25.8" height="1.5" />
											</g>
											<g>
													<rect x="82.8" y="117.9" className={s.st12} width="26.1" height="1.5" />
											</g>
											<g>
													<rect x="142.4" y="82.1" className={s.st12} width="25.8" height="1.5" />
											</g>
											<g>
													<rect x="142" y="117.9" className={s.st12} width="26.2" height="1.5" />
											</g>
									</g>
							</g>
            </g>
          </svg>
        </div>

        {/* Back of the card */}
        <div className={s.back}>
          <svg
            version="1.1"
            id="cardback"
            className={s.cardback}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 750 471"
            xmlSpace="preserve"
          >
						<g id="Front">
								<line className="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
						</g>
						<g id="Back">
								<g id="Page-1_2_">
										<g id="amex_2_">
												<path id="Rectangle-1_2_" className={`${s.darkcolor} ${s[baseColor + 'dark']}`} d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
								C0,17.9,17.9,0,40,0z" />
										</g>
								</g>
								<rect y="61.6" className={s.st2} width="750" height="78" />
								<g>
										<path className={s.st3} d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
						C707.1,246.4,704.4,249.1,701.1,249.1z" />
										<rect x="42.9" y="198.6" className={s.st4} width="664.1" height="10.5" />
										<rect x="42.9" y="224.5" className={s.st4} width="664.1" height="10.5" />
										<path className={s.st5} d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
								</g>
								<text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" className={`${s.st6} ${s.st7}`}>{securityCode || "985"}</text>
								<g className="st8">
										<text transform="matrix(1 0 0 1 518.083 280.0879)" className={`${s.st9} ${s.st6} ${s.st10}`}>security code</text>
								</g>
								<rect x="58.1" y="378.6" className={s.st11} width="375.5" height="13.5" />
								<rect x="58.1" y="405.6" className={s.st11} width="421.7" height="13.5" />
								<text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback" className={`${s.st12} ${s.st13}`}>{name || "JOHN DOE"}</text>
						</g>
          </svg>

					
        </div>
      </div>
    </div>
  );
};

export default CreditCardSVG;
