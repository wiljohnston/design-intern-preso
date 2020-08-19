import React from "react";
import PropTypes from "prop-types";

const HillThree = ({ className }) => (
  <svg className={className} viewBox="0 0 1440 868" fill="none">
    <path
      d="M-15.4702 832.435C-34.271 843.136 -50.2734 384 -50.2734 384C-38.1951 359.148 1.08388 357.291 28.7459 348.938C68.6034 336.901 158.104 336.909 192.07 362.252C210.639 376.108 213.439 376.974 237.367 368.022C280.567 351.861 315.464 323.722 350.109 296.566C397.875 259.124 443.932 241.638 504.876 224.221C532.406 216.354 560.483 211.472 588.425 205.137C603.277 201.769 615.091 191.823 630.2 189.159C669.307 182.262 706.968 187.023 737.908 208.243C798.352 249.699 850.827 252.326 919.099 222.224C1005.09 184.309 1085.37 132.015 1172.77 95.5104C1193.04 87.0429 1200.96 82.0197 1221.59 89.2968C1246.88 98.2184 1245.09 138.094 1256.57 156.093C1274.68 184.492 1430.51 130.833 1452.5 124.5C1452.5 124.5 1563.74 652.982 1537 635.55C1489.87 604.833 1439.22 575.98 1388.31 556.114C1346.41 539.764 1305.48 538.564 1261.83 540.054C1222.42 541.399 1175.96 546.765 1138.3 561.64C1106.23 574.305 1075.58 594.14 1041.89 600.149C981.244 610.966 922.172 585.959 864.11 567.856C834.923 558.756 799.507 564.488 769.67 564.748C726.714 565.122 682.409 565.148 639.534 568.547C568.238 574.199 498.81 586.689 429.431 608.61C350.722 633.48 277.373 684.957 203.309 725.001C175.226 740.184 149.249 764.236 122.219 782.16C101.272 796.051 -1.46842 862.065 -15.4702 832.435Z"
      fill="#F8F8F8"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

HillThree.defaultProps = {
  className: ``
};

HillThree.propTypes = {
  className: PropTypes.string
};

export default HillThree;