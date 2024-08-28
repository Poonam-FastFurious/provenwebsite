import axios from "axios";
import { useEffect, useState } from "react";
import { Baseurl } from "../../confige";

/* eslint-disable react/no-unescaped-entities */
function Faqs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(Baseurl + "/api/v1/faq/all");
        if (response.data && response.data.data) {
          setFaqs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
      <section className="bg-[#DEEDEA] w-[100%] mx-auto pt-8 container">
        <div className="flex flex-col md:flex-row items-center justify-center   p-8">
          {/* Text Section */}
          <div className="text-left md:w-1/2 p-4">
            <h1 className="text-2xl font-bold text-orange-600 mb-4">FAQ’s</h1>
            <p className="text-gray-700 mb-6">
              Have questions? Here you’ll find the answers most valued by our
              partners, along with access to step-by-step instructions and
              support
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center md:w-1/2 p-4">
            <svg
              width="596"
              height="332"
              viewBox="0 0 596 532"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2908_7390)">
                <path
                  d="M578.744 384.819C568.997 362.66 550.276 344.168 527.786 335.07C504.365 325.591 477.471 329.039 452.8 325.866C431.366 323.105 415.916 313.546 403.12 296.55C390.862 280.264 379.874 262.229 359.846 254.695C344.009 248.745 326.004 250.394 310.263 256.598C281.249 268.005 259.341 292.305 240.891 316.509C224.047 338.615 210.308 362.818 179.151 363.606C147.994 364.395 118.293 346.63 86.9048 351.335C45.4143 357.559 10.872 392.078 3.62458 433.169C-3.16175 471.681 13.8647 509.037 43.1171 530.986H545.912C582.772 491.932 602.116 437.927 578.744 384.819Z"
                  fill="#F7F0E3"
                />
                <path
                  d="M124.225 530.994H125.608C135.432 520.111 142.893 507.311 147.52 493.403C155.261 470.4 154.937 446.257 146.602 425.425C142.388 414.915 136.305 405.085 130.425 395.595C124.459 385.975 118.292 376.023 114.106 365.356C112.349 360.847 111.081 356.163 110.325 351.383C109.981 351.339 109.633 351.302 109.285 351.262C110.044 356.211 111.345 361.063 113.164 365.728C117.382 376.476 123.578 386.468 129.567 396.128C135.423 405.582 141.482 415.356 145.664 425.8C153.91 446.415 154.229 470.307 146.561 493.084C141.881 507.156 134.268 520.077 124.225 530.994Z"
                  fill="white"
                />
                <path
                  d="M543.481 487.166C553.843 489.373 563.828 491.354 573.482 492.599C573.648 492.279 573.805 491.956 573.971 491.637C564.237 490.4 554.154 488.403 543.696 486.18C527.761 482.785 510.532 479.115 493.409 479.115C482.817 479.115 472.281 480.521 462.146 484.276C458.293 485.707 454.587 487.507 451.081 489.652C441.929 485.751 432.728 481.495 423.616 476.823C430.229 471.847 436.91 466.968 443.668 462.272C493.817 427.28 540.08 407.442 584.786 401.811C584.697 401.484 584.604 401.156 584.511 400.829C539.684 406.488 493.308 426.395 443.086 461.459C436.21 466.273 429.367 471.257 422.617 476.342C412.263 471.022 402.191 465.172 392.439 458.816C374.664 447.175 353.517 430.558 335.05 408.481C406.634 400.453 479.472 390.344 538.972 350.603C541.229 349.091 543.732 347.313 546.324 345.296C546.037 345.09 545.75 344.892 545.459 344.69C542.976 346.614 540.578 348.328 538.41 349.762C478.926 389.495 405.931 399.528 334.274 407.563C321.227 391.799 309.567 373.255 301.463 351.783C288.844 318.368 289.508 285.58 303.295 261.821C303.893 260.786 304.508 259.771 305.175 258.765C304.601 259.032 304.031 259.307 303.46 259.573C303.104 260.147 302.757 260.725 302.417 261.307C288.48 285.333 287.789 318.437 300.52 352.139C308.576 373.473 320.131 391.929 333.077 407.668C328.927 408.134 324.783 408.594 320.645 409.046C305.721 410.696 290.312 412.397 275.308 414.301C269.84 415.008 264.279 415.829 258.726 416.856C246.86 391.832 233.83 367.422 216.985 346.484C216.747 346.727 216.5 346.957 216.257 347.196C232.956 367.972 245.906 392.203 257.699 417.05C233.559 421.649 210.122 430.299 197.609 450.428C185.921 469.228 185.933 495.214 197.641 527.663C198.046 528.787 198.45 529.894 198.887 530.994H199.967C199.506 529.781 199.045 528.568 198.592 527.319C186.993 495.177 186.952 469.486 198.466 450.962C210.834 431.071 234.141 422.539 258.144 417.991C262.37 426.855 266.415 435.772 270.418 444.64L270.855 445.606C284.82 476.414 299.262 506.143 318.174 530.99H319.435C300.35 506.099 285.827 476.188 271.777 445.19L271.341 444.224C267.353 435.429 263.341 426.577 259.208 417.797C264.635 416.795 270.091 415.991 275.454 415.303C290.418 413.375 305.851 411.666 320.75 410.049C325.107 409.567 329.471 409.083 333.841 408.598C352.485 431.023 373.88 447.87 391.881 459.644C401.526 465.94 411.485 471.741 421.72 477.025C404.519 490.024 387.788 503.702 371.457 517.041C365.795 521.665 360.081 526.321 354.313 531.01H355.931C361.372 526.596 366.764 522.2 372.108 517.821C388.556 504.373 405.405 490.594 422.727 477.518C431.79 482.178 440.926 486.41 450.042 490.319C437.589 498.233 427.438 510.489 421.303 525.375C420.535 527.239 419.863 529.118 419.245 531.01H420.308C420.895 529.247 421.521 527.497 422.237 525.755C428.393 510.832 438.625 498.585 451.174 490.796C476.621 501.6 501.627 509.619 523.118 515.974L523.927 516.212C532.982 518.888 542.244 521.632 550.433 526.038C550.664 525.775 550.895 525.517 551.121 525.254C542.798 520.739 533.399 517.958 524.21 515.246L523.401 515.007C502.132 508.714 477.414 500.796 452.222 490.149C455.489 488.204 458.926 486.559 462.49 485.234C488.73 475.509 517.82 481.701 543.481 487.166Z"
                  fill="white"
                />
                <path
                  d="M45.6511 421.71C50.0998 439.98 48.1221 459.705 40.1832 475.844C34.9822 486.41 27.472 495.978 18.2227 504.191C18.4046 504.478 18.5947 504.761 18.7808 505.044C28.1797 496.721 35.8113 487.016 41.0891 476.289C49.1332 459.947 51.1554 439.968 46.6338 421.471C43.0991 407.021 35.9973 394.794 26.1859 385.926C25.9675 386.181 25.7491 386.439 25.5347 386.698C35.1804 395.421 42.1689 407.474 45.6511 421.71Z"
                  fill="white"
                />
                <path
                  d="M274.503 190.285C283.295 199.291 287.243 214.432 282.385 228.393C277.682 241.922 267.373 253.126 254.989 260.325C245.024 266.121 232.026 269.318 222.231 263.247C214.906 258.712 211.109 249.812 210.906 241.206C210.704 232.601 213.592 224.206 217.171 216.376C222.218 205.334 229.009 194.63 239.128 187.917C253.068 178.677 266.01 181.635 274.503 190.285Z"
                  fill="#F7F0E3"
                />
                <path
                  d="M157.732 32.5664H84.7969V0.0202637H157.732V32.5664ZM86.3135 31.0507H156.215V1.51581H86.3135V31.0507Z"
                  fill="#E9DDCA"
                />
                <path
                  d="M110.305 63.7059H37.3496V31.1436H110.305V63.7059ZM38.8864 62.1902H108.768V32.6593H38.8662L38.8864 62.1902Z"
                  fill="#E9DDCA"
                />
                <path
                  d="M572.718 98.4065C567.994 82.7127 559.687 68.2868 547.797 55.1288C535.907 41.9707 519.657 31.087 499.047 22.4775C478.461 13.8761 452.308 9.57544 420.588 9.57544C395.281 9.57544 369.491 12.9869 343.216 19.8098C316.942 26.6327 294.117 36.3793 274.742 49.0496L299.93 118.168L286.43 129.081L306.009 134.833C325.332 124.725 342.938 117.385 358.827 112.812C374.716 108.239 391.579 105.965 409.417 105.989C427.266 105.989 440.779 110.29 449.957 118.891C459.134 127.517 463.708 137.889 463.708 150.015C463.708 164.695 459.002 177.728 449.589 189.113C440.177 200.498 429.756 212.016 418.327 223.668C410.403 231.752 402.719 240.097 395.274 248.704C387.841 257.305 381.241 266.59 375.562 276.436C369.765 286.499 365.151 297.198 361.812 308.32C358.326 319.715 356.591 332.493 356.607 346.654C356.607 351.225 356.704 356.662 356.971 362.992C357.015 364.156 357.076 365.296 357.145 366.419H338.638L358.835 380.069H457.035C456.498 376.553 456.247 372.999 456.287 369.443V360.32C456.319 351.582 458.088 342.937 461.492 334.888C464.995 326.484 469.362 318.466 474.522 310.963C479.772 303.306 485.618 296.076 492.006 289.338C498.45 282.491 504.651 276.032 510.61 269.961C518.528 261.877 526.706 253.276 535.142 244.157C543.436 235.231 550.909 225.578 557.471 215.313C564.034 204.938 569.396 193.851 573.454 182.266C577.668 170.377 579.783 157.344 579.799 143.168C579.816 128.991 577.455 114.071 572.718 98.4065Z"
                  fill="#E49B31"
                />
                <path
                  d="M388.625 101.171C370.962 101.171 354.297 103.373 338.629 107.776C322.962 112.179 305.562 119.282 286.43 129.085L255.531 46.0627C274.655 33.8154 297.209 24.3841 323.192 17.7687C349.176 11.1533 374.664 7.85229 399.658 7.86576C431.015 7.86576 456.863 12.0277 477.203 20.3515C497.543 28.6753 513.603 39.2074 525.383 51.9478C537.133 64.699 545.342 78.6614 550.009 93.8351C554.676 109.009 557.005 123.456 556.997 137.177C556.997 150.904 554.908 163.518 550.729 175.019C546.706 186.248 541.406 196.979 534.931 206.999C528.433 216.949 521.048 226.292 512.866 234.913C504.535 243.738 496.446 252.062 488.6 259.884C482.712 265.77 476.584 272.021 470.219 278.639C463.915 285.15 458.137 292.148 452.937 299.569C447.847 306.815 443.532 314.575 440.06 322.721C436.699 330.495 434.949 338.869 434.916 347.337V356.161C434.876 359.605 435.124 363.046 435.66 366.448H338.597C337.535 360.998 336.919 355.47 336.753 349.92C336.49 343.796 336.393 338.534 336.393 334.108C336.393 320.4 338.109 308.033 341.541 297.006C344.85 286.225 349.412 275.869 355.134 266.15C360.768 256.601 367.303 247.613 374.648 239.307C381.998 230.98 389.593 222.896 397.433 215.055C408.704 203.791 419.003 192.644 428.332 181.615C437.618 170.589 442.269 157.975 442.285 143.774C442.285 132.004 437.759 121.984 428.692 113.633C419.625 105.282 406.266 101.171 388.625 101.171Z"
                  fill="#FBC343"
                />
                <path
                  d="M463.748 475.36C463.748 493.055 458.018 506.716 446.556 516.341C435.094 525.967 422.132 530.786 407.67 530.8C393.183 530.8 380.216 525.98 368.768 516.341C357.32 506.703 351.594 493.042 351.592 475.36C351.592 457.688 357.317 444.029 368.768 434.382C386.413 419.499 412.515 416.193 433.177 426.625C451.506 435.897 463.748 454.717 463.748 475.36Z"
                  fill="#E49B31"
                />
                <path
                  d="M444.537 475.359C444.537 493.055 438.807 506.716 427.345 516.341C415.883 525.967 402.922 530.786 388.459 530.799C373.972 530.799 361.005 525.98 349.557 516.341C338.109 506.702 332.384 493.042 332.381 475.359C332.381 457.688 338.106 444.028 349.557 434.382C361.008 424.735 373.975 419.915 388.459 419.923C402.924 419.923 415.886 424.743 427.345 434.382C438.804 444.02 444.535 457.68 444.537 475.359Z"
                  fill="#FBC343"
                />
                <path
                  d="M153.83 224.535C154.907 218.797 151.125 213.274 145.385 212.198C139.644 211.122 134.117 214.901 133.041 220.639C131.964 226.377 135.746 231.9 141.486 232.976C147.227 234.052 152.754 230.273 153.83 224.535Z"
                  fill="#D3DFFF"
                />
                <path
                  d="M158.854 244.329C159.459 241.101 157.314 237.991 154.062 237.382C150.811 236.774 147.685 238.897 147.08 242.124C146.475 245.352 148.62 248.462 151.872 249.071C155.123 249.679 158.249 247.556 158.854 244.329Z"
                  fill="#D3DFFF"
                />
                <path
                  d="M146.766 198.765C163.027 182.513 163.027 156.163 146.766 139.91C130.504 123.658 104.139 123.658 87.8776 139.91C71.6161 156.163 71.6161 182.513 87.8776 198.765C104.139 215.017 130.504 215.017 146.766 198.765Z"
                  fill="#D3DFFF"
                />
                <path
                  d="M101.333 174.582C104.23 174.582 106.579 172.235 106.579 169.34C106.579 166.444 104.23 164.097 101.333 164.097C98.4364 164.097 96.0879 166.444 96.0879 169.34C96.0879 172.235 98.4364 174.582 101.333 174.582Z"
                  fill="white"
                />
                <path
                  d="M117.322 174.582C120.219 174.582 122.567 172.235 122.567 169.34C122.567 166.444 120.219 164.097 117.322 164.097C114.425 164.097 112.076 166.444 112.076 169.34C112.076 172.235 114.425 174.582 117.322 174.582Z"
                  fill="white"
                />
                <path
                  d="M133.312 174.582C136.209 174.582 138.557 172.235 138.557 169.34C138.557 166.444 136.209 164.097 133.312 164.097C130.415 164.097 128.066 166.444 128.066 169.34C128.066 172.235 130.415 174.582 133.312 174.582Z"
                  fill="white"
                />
                <path
                  d="M87.4951 509.967L91.3857 524.959C91.9192 526.884 93.1078 528.563 94.7466 529.706C96.3854 530.85 98.372 531.387 100.364 531.224C113.124 530.359 139.626 527.234 154.841 516.03L150.517 494.425C129.6 493.241 110.038 494.405 93.0884 500.084C88.8702 501.531 86.4072 505.779 87.4951 509.967Z"
                  fill="#102048"
                />
                <path
                  d="M111.87 521.899C111.76 521.898 111.653 521.862 111.566 521.796C111.479 521.729 111.415 521.637 111.384 521.531L106.159 502.845C106.141 502.781 106.136 502.714 106.144 502.648C106.152 502.582 106.173 502.519 106.206 502.461C106.239 502.403 106.282 502.352 106.335 502.311C106.387 502.271 106.447 502.24 106.511 502.223C106.575 502.204 106.642 502.199 106.708 502.207C106.774 502.214 106.838 502.235 106.896 502.268C106.954 502.301 107.005 502.345 107.046 502.397C107.087 502.45 107.117 502.51 107.134 502.574L112.359 521.269C112.381 521.344 112.386 521.423 112.371 521.5C112.357 521.577 112.325 521.65 112.277 521.712C112.229 521.775 112.168 521.825 112.097 521.859C112.026 521.893 111.948 521.909 111.87 521.907V521.899Z"
                  fill="white"
                />
                <path
                  d="M123.161 519.373C123.051 519.373 122.943 519.337 122.856 519.271C122.768 519.204 122.705 519.111 122.675 519.005L117.45 500.311C117.414 500.181 117.431 500.043 117.497 499.927C117.563 499.81 117.673 499.724 117.802 499.688C117.931 499.652 118.069 499.669 118.186 499.735C118.303 499.801 118.389 499.911 118.425 500.04L123.65 518.734C123.685 518.863 123.668 519.001 123.602 519.117C123.536 519.234 123.427 519.32 123.298 519.357C123.253 519.368 123.207 519.373 123.161 519.373Z"
                  fill="white"
                />
                <path
                  d="M136.273 428.933L87.6602 443.351L123.764 492.793L175.595 496.911L247.086 466.697L219.917 425.845L136.273 428.933Z"
                  fill="#FBC343"
                />
                <path
                  d="M196.209 435.8C302.979 404.216 320.127 498.516 153.55 515.682C147.666 509.066 140.79 497.582 138.061 487.987L226.028 447.36L196.209 435.8Z"
                  fill="#FBC343"
                />
                <path
                  d="M200.742 503.387C195.747 501.77 190.963 498.629 190.963 498.629L173.799 504.009L177.73 522.663L195.553 526.301C200.993 516.357 201.3 508.205 200.742 503.387Z"
                  fill="#F9B384"
                />
                <path
                  d="M138.444 488.641L137.68 487.332C156.033 476.673 203.036 451.063 243.086 443.512L243.365 445.004C203.549 452.51 156.724 478.023 138.444 488.641Z"
                  fill="#E49B31"
                />
                <path
                  d="M136.273 428.933C36.9009 410.053 11.167 505.497 177.74 522.651C183.931 515.758 188.456 507.535 190.964 498.617C165.38 481.507 136.771 465.242 105.415 449.749L136.273 428.933Z"
                  fill="#FBC343"
                />
                <path
                  d="M190.559 499.268C185.832 496.261 180.906 493.084 175.689 489.717C149.514 472.825 119.841 453.682 94.6328 442.765L95.2395 441.374C120.561 452.34 150.286 471.519 176.53 488.443C181.743 491.81 186.665 494.987 191.389 497.991L190.559 499.268Z"
                  fill="#E49B31"
                />
                <path
                  d="M63.3656 476.257L62.0391 475.525C65.7679 468.775 71.7454 464.208 79.7935 461.997L80.198 463.456C72.445 465.602 66.9408 469.79 63.3656 476.257Z"
                  fill="#E49B31"
                />
                <path
                  d="M270.77 470.509C267.195 464.042 261.687 459.854 253.934 457.704L254.338 456.245C262.39 458.476 268.364 463.027 272.092 469.777L270.77 470.509Z"
                  fill="#E49B31"
                />
                <path
                  d="M168.432 521.842L167.328 520.791C175.279 512.283 180.161 503.298 182.256 493.33L183.74 493.641C181.58 503.888 176.577 513.108 168.432 521.842Z"
                  fill="#E49B31"
                />
                <path
                  d="M250.302 497.829C237.571 489.967 212.888 503.552 206.692 504.236C204.885 504.438 202.798 504.042 200.743 503.387C201.309 508.205 200.994 516.358 195.562 526.281L198.592 526.895C198.592 526.895 219.521 534.575 241.724 530.1C262.217 525.982 260.312 504.009 250.302 497.829Z"
                  fill="#102048"
                />
                <path
                  d="M232.947 523.544C232.895 523.544 232.843 523.536 232.793 523.52C232.665 523.479 232.559 523.389 232.498 523.27C232.436 523.151 232.425 523.013 232.465 522.885C233.978 518.1 234.637 508.682 230.257 502.356C230.203 502.305 230.161 502.242 230.134 502.172C230.107 502.103 230.096 502.028 230.101 501.954C230.106 501.879 230.128 501.807 230.164 501.742C230.201 501.677 230.252 501.621 230.312 501.577C230.373 501.534 230.443 501.505 230.517 501.492C230.59 501.479 230.666 501.482 230.738 501.502C230.81 501.521 230.877 501.557 230.933 501.605C230.99 501.654 231.036 501.714 231.066 501.782C235.656 508.403 234.981 518.213 233.408 523.205C233.374 523.301 233.312 523.385 233.23 523.445C233.147 523.506 233.049 523.54 232.947 523.544Z"
                  fill="white"
                />
                <path
                  d="M222.962 525.436C222.912 525.436 222.861 525.427 222.813 525.411C222.749 525.392 222.69 525.36 222.639 525.318C222.588 525.276 222.546 525.224 222.515 525.165C222.485 525.107 222.466 525.043 222.46 524.977C222.454 524.911 222.461 524.844 222.481 524.781C223.994 519.991 224.653 510.577 220.273 504.252C220.235 504.197 220.209 504.135 220.195 504.07C220.181 504.005 220.18 503.938 220.192 503.873C220.204 503.808 220.229 503.746 220.265 503.69C220.301 503.634 220.348 503.586 220.402 503.548C220.457 503.511 220.519 503.484 220.584 503.47C220.649 503.456 220.716 503.455 220.781 503.467C220.846 503.479 220.909 503.504 220.964 503.54C221.02 503.576 221.068 503.623 221.106 503.678C225.692 510.298 225.017 520.108 223.444 525.1C223.409 525.2 223.344 525.285 223.257 525.346C223.171 525.406 223.068 525.437 222.962 525.436Z"
                  fill="white"
                />
                <path
                  d="M118.692 305.87C118.692 305.87 143.718 284.601 142.792 280.559C142.133 277.669 135.043 281.905 135.043 281.905C135.043 281.905 144.984 270.119 144.479 268.684C143.577 266.129 136.698 270.895 136.698 270.895C136.698 270.895 141.348 264.209 139.124 263.122C136.9 262.035 132.059 266.154 132.059 266.154C132.059 266.154 134.89 262.439 133.559 261.465C132.229 260.491 126.494 264.496 126.494 264.496C126.494 264.496 128.552 259.816 124.176 261.59C119.8 263.365 89.1406 291.501 89.1406 291.501L118.692 305.87Z"
                  fill="#F9B384"
                />
                <path
                  d="M128.932 280.644C128.806 280.644 128.685 280.596 128.592 280.511C124.297 276.59 122.401 275.636 117.673 274.177C117.605 274.161 117.541 274.132 117.485 274.091C117.429 274.049 117.382 273.997 117.347 273.937C117.312 273.876 117.29 273.809 117.282 273.74C117.275 273.671 117.281 273.601 117.302 273.534C117.323 273.468 117.357 273.406 117.403 273.353C117.448 273.301 117.504 273.258 117.567 273.228C117.63 273.198 117.699 273.182 117.768 273.179C117.838 273.177 117.907 273.189 117.972 273.215C122.882 274.723 124.847 275.709 129.296 279.763C129.373 279.832 129.426 279.922 129.45 280.022C129.474 280.122 129.467 280.227 129.429 280.322C129.392 280.418 129.326 280.5 129.241 280.558C129.156 280.615 129.055 280.645 128.952 280.644H128.932Z"
                  fill="#E28B6D"
                />
                <path
                  d="M121.393 292.18H121.32C121.188 292.161 121.069 292.09 120.988 291.984C120.908 291.877 120.873 291.742 120.892 291.61C121.381 288.094 122.509 285.895 124.277 284.888C125.805 284.031 127.795 284.12 130.185 285.151C130.309 285.205 130.406 285.305 130.455 285.43C130.504 285.555 130.502 285.695 130.448 285.818C130.395 285.941 130.294 286.038 130.169 286.087C130.044 286.137 129.904 286.134 129.781 286.081C127.694 285.179 126.008 285.074 124.77 285.769C123.298 286.578 122.343 288.599 121.886 291.748C121.87 291.867 121.811 291.976 121.72 292.056C121.63 292.135 121.514 292.179 121.393 292.18Z"
                  fill="#E28B6D"
                />
                <path
                  d="M120.212 270.919C120.143 270.918 120.075 270.903 120.011 270.876C119.948 270.848 119.891 270.808 119.844 270.757C119.75 270.663 119.697 270.535 119.697 270.402C119.697 270.268 119.75 270.141 119.844 270.046L126.125 264.128C126.222 264.036 126.352 263.987 126.487 263.99C126.621 263.994 126.748 264.051 126.84 264.149C126.933 264.246 126.982 264.376 126.979 264.511C126.975 264.645 126.918 264.772 126.82 264.864L120.539 270.778C120.451 270.863 120.335 270.914 120.212 270.919Z"
                  fill="#E28B6D"
                />
                <path
                  d="M126.029 272.94C125.93 272.939 125.833 272.91 125.751 272.855C125.668 272.8 125.604 272.723 125.565 272.632C125.526 272.541 125.514 272.441 125.531 272.343C125.548 272.246 125.593 272.155 125.661 272.083L131.695 265.802C131.74 265.75 131.795 265.708 131.856 265.678C131.918 265.648 131.985 265.631 132.054 265.628C132.122 265.625 132.191 265.635 132.255 265.66C132.319 265.684 132.378 265.721 132.427 265.768C132.477 265.816 132.516 265.873 132.543 265.936C132.569 265.999 132.583 266.067 132.583 266.136C132.582 266.204 132.568 266.272 132.54 266.335C132.513 266.398 132.473 266.454 132.423 266.501L126.393 272.782C126.346 272.832 126.289 272.871 126.227 272.898C126.164 272.925 126.097 272.94 126.029 272.94Z"
                  fill="#E28B6D"
                />
                <path
                  d="M131.966 276.493C131.838 276.491 131.716 276.442 131.622 276.356C131.525 276.264 131.468 276.137 131.463 276.003C131.459 275.869 131.507 275.739 131.598 275.64L136.33 270.567C136.423 270.476 136.547 270.423 136.677 270.421C136.808 270.419 136.934 270.468 137.029 270.556C137.125 270.645 137.183 270.767 137.19 270.897C137.198 271.027 137.155 271.155 137.07 271.255L132.338 276.331C132.29 276.382 132.233 276.423 132.169 276.45C132.105 276.478 132.036 276.493 131.966 276.493Z"
                  fill="#E28B6D"
                />
                <path
                  d="M213.232 448.132L121.73 451.669L111.619 368.303C111.619 368.303 142.251 339.261 154.036 328.57L173.934 327.552C235.678 355.591 225.567 390.615 213.232 448.132Z"
                  fill="#3A6BEA"
                />
                <path
                  d="M173.934 327.552C173.934 327.552 244.575 333.586 266.819 381.945C288.606 429.26 199.077 446.111 199.077 446.111L173.934 327.552Z"
                  fill="#3A6BEA"
                />
                <path
                  d="M93.2084 337.931L122.392 302.439L95.1012 285.911C83.7165 293.821 61.7034 311.739 43.047 332.03C38.9299 336.509 35.7107 341.731 34.0929 347.499C32.739 352.217 32.4463 357.177 33.2356 362.022C35.2577 374.41 45.0125 383.974 58.0311 385.498C69.1489 386.795 111.618 383.477 145.995 373.372L156.105 334.37C150.908 331.408 112.298 330.894 93.2084 337.931Z"
                  fill="#3A6BEA"
                />
                <g opacity="0.8">
                  <path
                    d="M232.867 346.739L233.324 346.634L232.365 346.076C227.189 347.268 221.85 348.501 216.592 349.12C213.426 349.5 202.842 350.199 199.768 343.162C198.231 339.661 199.396 335.765 201.135 333.032L200.375 332.814C198.595 335.712 197.455 339.775 199.077 343.465C202.373 350.983 213.385 350.272 216.681 349.871C222.093 349.221 227.589 347.96 232.867 346.739Z"
                    fill="white"
                  />
                  <path
                    d="M265.827 401.278C262.454 399.976 258.952 398.63 255.312 398.974C248.881 399.584 243.381 405.934 243.05 413.121C242.823 418.028 244.7 423.173 248.275 427.7L248.922 427.296C245.424 422.898 243.587 417.902 243.806 413.149C244.125 406.31 249.318 400.283 255.381 399.709C258.867 399.386 262.118 400.635 265.56 401.965C266.773 402.442 268.039 402.919 269.309 403.327C269.374 403.08 269.439 402.838 269.495 402.591C268.25 402.199 267.028 401.743 265.827 401.278Z"
                    fill="white"
                  />
                  <path
                    d="M87.5753 377.175C83.167 373.537 76.316 372.559 68.7814 374.503C62.0679 376.241 56.3088 379.677 52.3535 384.228C52.6124 384.309 52.8671 384.406 53.13 384.483C56.9802 380.166 62.5249 376.904 68.9715 375.239C76.2513 373.351 82.8718 374.273 87.094 377.761C89.0344 379.431 90.5577 381.531 91.5428 383.893L92.3273 383.804C91.2917 381.249 89.6629 378.977 87.5753 377.175Z"
                    fill="white"
                  />
                  <path
                    d="M47.7148 327.05C55.9773 325.001 64.0417 322.119 71.4751 317.839C74.2859 316.222 77.4566 314.16 79.6891 311.133C82.0631 307.899 82.8517 304.072 81.8002 300.87C81.3849 299.642 80.6786 298.533 79.7416 297.637L79.1593 298.114C80.0374 298.94 80.6961 299.973 81.0763 301.117C82.055 304.084 81.3068 307.665 79.0784 310.688C76.9309 313.603 73.8208 315.611 71.099 317.188C64.0821 321.23 56.4991 324.019 48.7057 326.036L47.7148 327.05Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M180.397 309.015V310.308L180.19 330.409L180.166 332.588C180.024 335.812 178.642 338.858 176.309 341.09C173.976 343.321 170.871 344.567 167.641 344.567C164.411 344.567 161.306 343.321 158.973 341.09C156.639 338.858 155.258 335.812 155.116 332.588L154.873 307.746L180.397 309.015Z"
                  fill="#F9B384"
                />
                <path
                  d="M180.383 310.308L180.177 330.409C168.999 325.862 164.404 313.768 164.404 313.768L180.383 310.308Z"
                  fill="#102048"
                />
                <path
                  d="M184.804 275.232C188.811 280.038 200.508 307.261 188.65 316.549C175.303 327.002 155.001 309.823 155.001 309.823L152.279 278.11L169.904 273.466L184.804 275.232Z"
                  fill="#F9B384"
                />
                <path
                  d="M143.297 273.486C143.297 273.486 104.205 293.866 136.082 352.608C140.175 360.15 149.242 363.445 156.999 359.762C158.965 358.825 160.716 357.493 162.144 355.849C163.571 354.205 164.645 352.285 165.298 350.208C165.95 348.132 166.168 345.943 165.937 343.779C165.706 341.614 165.032 339.521 163.955 337.628C158.742 328.372 153.707 316.452 155.867 307.58L143.297 273.486Z"
                  fill="#102048"
                />
                <path
                  d="M154.472 290.606C158.602 286.478 158.602 279.785 154.472 275.658C150.342 271.53 143.645 271.53 139.515 275.658C135.385 279.785 135.385 286.478 139.515 290.606C143.645 294.733 150.342 294.733 154.472 290.606Z"
                  fill="#FBC343"
                />
                <path
                  d="M160 295.83C158.856 289.237 158.16 284.714 164.829 281.315C164.829 281.315 188.33 285.588 192.816 276.727C197.301 267.867 190.466 253.878 176.153 263.595C139.512 256.441 134.598 290.713 145.708 302.135L156.672 300.454C157.196 300.373 157.699 300.189 158.151 299.912C158.604 299.634 158.996 299.27 159.306 298.839C159.616 298.409 159.837 297.921 159.956 297.404C160.075 296.888 160.09 296.353 160 295.83Z"
                  fill="#102048"
                />
                <path
                  d="M178.196 297.41C179.058 297.41 179.757 296.712 179.757 295.85C179.757 294.989 179.058 294.29 178.196 294.29C177.334 294.29 176.635 294.989 176.635 295.85C176.635 296.712 177.334 297.41 178.196 297.41Z"
                  fill="#102048"
                />
                <path
                  d="M188.772 292.204C189.634 292.204 190.333 291.506 190.333 290.644C190.333 289.783 189.634 289.084 188.772 289.084C187.91 289.084 187.211 289.783 187.211 290.644C187.211 291.506 187.91 292.204 188.772 292.204Z"
                  fill="#102048"
                />
                <path
                  d="M187.688 300.656C187.575 300.656 187.466 300.613 187.385 300.535C187.302 300.452 187.256 300.339 187.256 300.222C187.256 300.104 187.302 299.992 187.385 299.908C188.012 299.249 188.699 298.324 188.412 297.653C188.125 296.982 186.843 296.654 186.264 296.654C185.019 296.654 184.42 294.435 184.311 293.991C184.291 293.932 184.283 293.87 184.289 293.808C184.294 293.747 184.312 293.687 184.342 293.633C184.372 293.578 184.413 293.531 184.462 293.493C184.512 293.456 184.568 293.429 184.628 293.415C184.689 293.4 184.751 293.398 184.812 293.41C184.873 293.421 184.931 293.445 184.982 293.479C185.034 293.514 185.077 293.559 185.11 293.612C185.142 293.665 185.164 293.723 185.172 293.785C185.399 294.722 185.913 295.769 186.264 295.769C186.859 295.769 188.691 296.048 189.221 297.301C189.605 298.199 189.221 299.278 188.008 300.535C187.965 300.575 187.915 300.606 187.86 300.627C187.805 300.648 187.747 300.658 187.688 300.656Z"
                  fill="#102048"
                />
                <path
                  d="M187.768 306.582C187.68 306.582 187.594 306.555 187.522 306.505C184.581 304.52 181.609 306.185 181.58 306.202C181.53 306.231 181.475 306.249 181.417 306.257C181.36 306.265 181.302 306.261 181.246 306.246C181.19 306.231 181.137 306.205 181.091 306.169C181.045 306.134 181.007 306.09 180.978 306.04C180.92 305.938 180.905 305.817 180.935 305.704C180.965 305.59 181.039 305.493 181.14 305.434C181.281 305.353 184.622 303.481 188.015 305.773C188.064 305.805 188.105 305.847 188.138 305.895C188.17 305.944 188.193 305.998 188.204 306.055C188.215 306.112 188.215 306.171 188.203 306.228C188.192 306.285 188.169 306.339 188.136 306.388C188.095 306.447 188.041 306.496 187.976 306.53C187.912 306.564 187.841 306.582 187.768 306.582Z"
                  fill="#102048"
                />
                <path
                  d="M177.513 289.088C178.403 290.757 176.854 291.109 175.038 292.059C173.222 293.009 171.366 293.376 170.941 292.576C170.516 291.776 171.645 290.353 173.461 289.387C175.276 288.421 176.825 287.811 177.513 289.088Z"
                  fill="#102048"
                />
                <path
                  d="M184.129 286.069C184.533 287.56 185.633 286.909 187.255 286.473C188.877 286.036 190.183 285.236 189.993 284.525C189.803 283.813 188.343 283.579 186.725 284.003C185.107 284.427 183.825 284.917 184.129 286.069Z"
                  fill="#102048"
                />
                <path
                  opacity="0.4"
                  d="M174.119 306.481C175.989 304.757 176.106 301.845 174.381 299.976C172.656 298.107 169.742 297.989 167.872 299.713C166.002 301.437 165.885 304.35 167.61 306.219C169.335 308.088 172.249 308.205 174.119 306.481Z"
                  fill="#EB5D60"
                />
                <path
                  d="M159.1 307.505C161.206 304.778 160.4 300.629 157.3 298.238C154.201 295.847 149.981 296.119 147.875 298.846C145.77 301.573 146.575 305.722 149.675 308.113C152.775 310.504 156.995 310.231 159.1 307.505Z"
                  fill="#F9B384"
                />
                <path
                  d="M156.232 305.462C156.115 305.462 156.003 305.415 155.92 305.333C155.838 305.25 155.791 305.138 155.791 305.021C155.795 304.384 155.642 303.755 155.345 303.191C155.048 302.627 154.617 302.145 154.089 301.788C153.672 301.491 153.189 301.301 152.683 301.234C152.176 301.167 151.66 301.225 151.181 301.404C151.079 301.426 150.972 301.412 150.88 301.364C150.787 301.315 150.715 301.236 150.675 301.14C150.635 301.044 150.63 300.936 150.661 300.837C150.692 300.737 150.757 300.652 150.845 300.595C151.459 300.362 152.121 300.284 152.773 300.366C153.424 300.449 154.045 300.69 154.582 301.068C155.23 301.506 155.76 302.096 156.125 302.787C156.491 303.478 156.68 304.248 156.677 305.029C156.675 305.146 156.627 305.256 156.544 305.337C156.46 305.418 156.348 305.463 156.232 305.462Z"
                  fill="#102048"
                />
                <path
                  d="M92.8399 337.548L76.8789 354.804L77.6214 355.49L93.5824 338.234L92.8399 337.548Z"
                  fill="#102048"
                />
                <path
                  d="M205.289 411.734L204.998 410.768C216.617 407.227 227.893 402.991 238.113 390.219L238.922 390.849C228.504 403.848 217.074 408.145 205.289 411.734Z"
                  fill="#102048"
                />
                <path
                  d="M212.354 372.604H113.507C109.952 372.604 107.068 375.716 107.068 379.56V450.097C107.068 453.941 109.952 457.057 113.507 457.057H212.354C215.908 457.057 218.792 453.941 218.792 450.097V379.564C218.792 375.716 215.908 372.604 212.354 372.604Z"
                  fill="#D3DFFF"
                />
                <path
                  d="M168.138 410.372C168.231 410.376 168.322 410.398 168.406 410.437C168.491 410.476 168.567 410.531 168.63 410.599C168.693 410.667 168.742 410.748 168.774 410.835C168.806 410.922 168.821 411.015 168.817 411.108V418.553C168.824 418.74 168.756 418.923 168.629 419.061C168.502 419.198 168.325 419.28 168.138 419.289H157.711C157.524 419.28 157.348 419.198 157.22 419.061C157.093 418.923 157.025 418.74 157.032 418.553V411.092C157.028 410.999 157.043 410.906 157.075 410.819C157.107 410.731 157.156 410.651 157.219 410.583C157.282 410.515 157.358 410.459 157.443 410.42C157.527 410.381 157.618 410.36 157.711 410.356H168.138M168.138 408.335H157.711C156.988 408.343 156.297 408.638 155.791 409.155C155.284 409.672 155.003 410.368 155.01 411.092V418.537C155.003 419.26 155.284 419.957 155.791 420.473C156.297 420.99 156.988 421.285 157.711 421.294H168.138C168.861 421.285 169.552 420.99 170.059 420.473C170.565 419.957 170.846 419.26 170.839 418.537V411.092C170.846 410.368 170.565 409.672 170.059 409.155C169.552 408.638 168.861 408.343 168.138 408.335Z"
                  fill="#1F3C88"
                />
                <path d="M596 529.979H0V532H596V529.979Z" fill="#102048" />
              </g>
              <defs>
                <clipPath id="clip0_2908_7390">
                  <rect width="596" height="532" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      <section className="gi-faq py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap">
            {faqs.map((faq, index) => (
              <div
                key={faq._id}
                className="min-[992px]:w-[50%] w-full px-[12px]"
              >
                <div className="gi-accordion style-1">
                  <div className="gi-accordion-item border-[#eee] overflow-hidden mb-[10px]">
                    <h4
                      className="gi-accordion-header m-[0] py-[15px] pl-[30px] pr-[35px] bg-[#f8f8fb] text-[#4b5966] text-[16px] leading-[28px] font-medium relative font-Poppins border-[1px] border-solid border-[#eee] rounded-[5px] tracking-[0.01rem] max-[767px]:text-[15px]"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                    </h4>
                    <div
                      className={`gi-accordion-body py-[15px] text-[14px] text-[#777] leading-[24px] ${
                        openFaq === index ? "" : "hidden"
                      }`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
