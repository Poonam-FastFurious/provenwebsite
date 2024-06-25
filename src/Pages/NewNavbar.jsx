// /* eslint-disable react/no-unescaped-entities */

// function NewNavbar() {
//   return (
//     <>
//       <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
//         <div className="gi-header-bottom py-[12px] max-[991px]:py-[10px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
//           <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
//             <div className="w-full flex flex-wrap px-[12px]">
//               <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
//                 <div className="self-center gi-header-logo max-[575px]:mb-[15px]">
//                   <div className="header-logo text-left">
//                     <a href="index.html">
//                       <img
//                         src="assets/img/logo/logo.png"
//                         alt="Site Logo"
//                         className="w-[230px] max-[1399px]:w-[180px] max-[1199px]:w-[150px] max-[991px]:w-[120px] max-[767px]:w-[100px]"
//                       />
//                     </a>
//                   </div>
//                 </div>

//                 <div
//                   id="gi-main-menu-desk"
//                   className="w-full  items-center min-[992px]:block hidden"
//                 >
//                   <div className="nav-desk">
//                     <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
//                       <div className="basis-auto w-full self-center">
//                         <div className="gi-main-menu flex">
//                           <ul className="w-full flex justify-center flex-wrap pl-[0]">
//                             <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                               <a
//                                 href="javascript:void(0)"
//                                 className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 Water Purifier
//                                 <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
//                               </a>
//                               <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                 <li>
//                                   <a
//                                     href="index.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Grocery
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="demo-2.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Fashion
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="demo-3.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Fashion 2
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="dropdown drop-list static ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                               <a
//                                 href="javascript:void(0)"
//                                 className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 Categories
//                                 <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
//                               </a>
//                               <ul className="mega-menu block transition-all duration-[0.3s] ease-in-out w-full max-[1399px]:mx-[12px] max-[1399px]:w-[calc(100%-24px)] mt-[15px] absolute bg-[#fff] pl-[30px] opacity-0 invisible left-0 z-[15] border-[1px] border-solid border-[#eee] truncate">
//                                 <li className="flex">
//                                   <span className="bg"></span>
//                                   <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
//                                     <li className="menu_title">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
//                                       >
//                                         Classic
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-left-sidebar-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Left sidebar 3 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-left-sidebar-col-4.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Left sidebar 4 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-right-sidebar-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Right sidebar 3 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-right-sidebar-col-4.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Right sidebar 4 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-full-width.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Full width 4 column
//                                       </a>
//                                     </li>
//                                   </ul>
//                                   <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
//                                     <li className="menu_title">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
//                                       >
//                                         Banner
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-left-sidebar-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         left sidebar 3 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-left-sidebar-col-4.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         left sidebar 4 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-right-sidebar-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         right sidebar column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-right-sidebar-col-4.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         right sidebar 4 column
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-full-width.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Full width 4 column
//                                       </a>
//                                     </li>
//                                   </ul>
//                                   <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
//                                     <li className="menu_title">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
//                                       >
//                                         Columns
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-full-width-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         3 Columns full width
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-full-width-col-4.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         4 Columns full width
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-full-width-col-5.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         5 Columns full width
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-full-width-col-6.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         6 Columns full width
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-banner-full-width-col-3.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Banner 3 Columns
//                                       </a>
//                                     </li>
//                                   </ul>
//                                   <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
//                                     <li className="menu_title">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
//                                       >
//                                         List
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-list-left-sidebar.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Shop left sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-list-right-sidebar.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Shop right sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-list-banner-left-sidebar.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Banner left sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-list-banner-right-sidebar.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Banner right sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="shop-list-full-col-2.html"
//                                         className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
//                                       >
//                                         Full width 2 columns
//                                       </a>
//                                     </li>
//                                   </ul>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                               <a
//                                 href="javascript:void(0)"
//                                 className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 Products
//                                 <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
//                               </a>
//                               <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                 <li className="dropdown position-static">
//                                   <a
//                                     href="javascript:void(0)"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Product page
//                                     <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[2px] text-[18px] flex"></i>
//                                   </a>
//                                   <ul className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                     <li>
//                                       <a
//                                         href="product-left-sidebar.html"
//                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                       >
//                                         Product left sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="product-right-sidebar.html"
//                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                       >
//                                         Product right sidebar
//                                       </a>
//                                     </li>
//                                   </ul>
//                                 </li>
//                                 <li className="dropdown position-static">
//                                   <a
//                                     href="javascript:void(0)"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Product Accordion
//                                     <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[2px] text-[18px] flex"></i>
//                                   </a>
//                                   <ul className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                     <li>
//                                       <a
//                                         href="product-accordion-left-sidebar.html"
//                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                       >
//                                         left sidebar
//                                       </a>
//                                     </li>
//                                     <li>
//                                       <a
//                                         href="product-accordion-right-sidebar.html"
//                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                       >
//                                         right sidebar
//                                       </a>
//                                     </li>
//                                   </ul>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="product-full-width.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Product full width
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="product-accordion-full-width.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     accordion full width
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                               <a
//                                 href="javascript:void(0)"
//                                 className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 Blog
//                                 <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
//                               </a>
//                               <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                 <li>
//                                   <a
//                                     href="blog-left-sidebar.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     left sidebar
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="blog-right-sidebar.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     right sidebar
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="blog-full-width.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Full Width
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="blog-detail-left-sidebar.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Detail left sidebar
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="blog-detail-right-sidebar.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Detail right sidebar
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="blog-detail-full-width.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Detail Full Width
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                               <a
//                                 href="javascript:void(0)"
//                                 className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 Others
//                                 <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
//                               </a>
//                               <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block border-[1px] border-solid border-[#eee] py-[5px]">
//                                 <li>
//                                   <a
//                                     href="about-us.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     About Us
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="contact-us.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Contact Us
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="cart.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Cart
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="checkout.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Checkout
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="compare.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Compare
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="faq.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     FAQ
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="login.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Login
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="register.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Register
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="track-order.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Track Order
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="terms-condition.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Terms Condition
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="privacy-policy.html"
//                                     className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
//                                   >
//                                     Privacy Policy
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
//                               <a
//                                 href="shop-banner-left-sidebar-col-3.html"
//                                 className="transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
//                               >
//                                 <i className="fi-rr-badge-percent transition-all duration-[0.3s] ease-in-out mr-[5px] text-[18px] text-[#4b5966] flex"></i>
//                                 Offers
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="gi-header-action self-center max-[991px]:hidden">
//                   <div className="gi-header-bottons flex justify-end">
//                     <div className="gi-acc-drop relative">
//                       <a
//                         href="javascript:void(0)"
//                         className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
//                         title="Account"
//                       >
//                         <div className="header-icon relative flex">
//                           <i className="fi-rr-user text-[24px] leading-[17px]"></i>
//                         </div>
//                         <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
//                           <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
//                             Account
//                           </span>
//                           <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
//                             Login
//                           </span>
//                         </div>
//                       </a>
//                       <ul className="gi-dropdown-menu min-w-[150px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff] block opacity-0 invisible left-[0] right-[auto] border-[1px] border-solid border-[#eee]">
//                         <li>
//                           <a
//                             className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
//                             href="register.html"
//                           >
//                             Register
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
//                             href="checkout.html"
//                           >
//                             Checkout
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
//                             href="login.html"
//                           >
//                             Login
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     <a
//                       href="wishlist.html"
//                       className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
//                       title="Wishlist"
//                     >
//                       <div className="header-icon relative flex">
//                         <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
//                       </div>
//                       <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
//                         <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
//                           Wishlist
//                         </span>
//                         <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
//                           <b className="gi-wishlist-count">3</b>-items
//                         </span>
//                       </div>
//                     </a>

//                     <a
//                       href="javascript:void(0)"
//                       className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
//                       title="Cart"
//                     >
//                       <div className="header-icon relative flex">
//                         <i className="fi-rr-shopping-bag text-[24px] leading-[17px]"></i>
//                         <span className="main-label-note-new transition-all duration-[0.3s] ease-in-out h-[10px] w-[10px] m-auto bg-[#ec716d] rounded-[50%] cursor-default hidden absolute bottom-[15px] left-[0] right-[0] z-[3]"></span>
//                       </div>
//                       <div className="gi-btn-desc flex flex-col uppercase ml-[10px] max-[1199px]:hidden">
//                         <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
//                           Cart
//                         </span>
//                         <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
//                           <b className="gi-cart-count">3</b>-items
//                         </span>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="grow-[1] shrink-[0] basis-[0%] sm:flex justify-end items-center hidden min-[992px]:hidden">
//                   <div className="gi-header-bottons flex justify-end">
//                     <div className="right-icons flex flex-row">
//                       <a
//                         href="login.html"
//                         className="gi-header-btn gi-header-user mr-[15px] sm:mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
//                       >
//                         <div className="header-icon relative flex">
//                           <i className="fi-rr-user text-[20px] sm:text-[24px] leading-[17px]"></i>
//                         </div>
//                       </a>

//                       <a
//                         href="wishlist.html"
//                         className="gi-header-btn gi-wish-toggle mr-[15px] sm:mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
//                       >
//                         <div className="header-icon relative flex">
//                           <i className="fi-rr-heart text-[20px] sm:text-[24px] leading-[17px]"></i>
//                         </div>
//                         <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
//                           3
//                         </span>
//                       </a>

//                       <a
//                         href="javascript:void(0)"
//                         className="gi-header-btn gi-cart-toggle mr-[15px] sm:mr-[30px] relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
//                       >
//                         <div className="header-icon relative flex">
//                           <i className="fi-rr-shopping-bag text-[20px] sm:text-[24px] leading-[17px]"></i>
//                           <span className="main-label-note-new"></span>
//                         </div>
//                         <span className="gi-header-count gi-cart-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
//                           3
//                         </span>
//                       </a>

//                       <a
//                         href="javascript:void(0)"
//                         className="gi-header-btn gi-site-menu-icon relative transition-all duration-[0.3s] ease-in-out flex text-[#4b5966] w-[auto] items-center"
//                       >
//                         <i className="fi-rr-menu-burger text-[20px] sm:text-[24px] leading-[17px]"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="gi-header-cat transition-all duration-[0.3s] ease-in-out bg-[#fff] border-t-[1px] border-b-[1px] border-solid border-[#eee] hidden min-[992px]:block">
//           <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
//             <div className="gi-nav-bar flex flex-row justify-between relative w-full px-[12px]">
//               <div className="gi-category-icon-block py-[5px] static">
//                 <div className="gi-category-menu relative">
//                   <div className="gi-category-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#5caf90] cursor-pointer max-[1199px]:w-auto max-[991px]:border-[0]">
//                     <i className="fi fi-rr-apps text-[18px] text-[#fff] leading-[0]"></i>
//                     <span className="text ml-[10px] text-[15px] text-[#fff] font-medium max-[1199px]:hidden">
//                       All Categories
//                     </span>
//                     <i
//                       className="fi-rr-angle-small-down gi-angle text-[18px] uppercase text-[#fff] text-center absolute right-[15px] leading-[0] max-[1199px]:hidden"
//                       aria-hidden="true"
//                     ></i>
//                   </div>
//                 </div>
//                 <div className="gi-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[600px] mt-[15px] p-[15px] absolute bg-[#fff] opacity-[0] invisible left-[0] z-[-15] border-[1px] border-solid border-[#eee]">
//                   <div className="gi-cat-block">
//                     <div className="gi-cat-tab flex">
//                       <ul
//                         className="nav-tabs min-w-[240px] p-[10px] flex-col justify-center mr-[16px]"
//                         id="myTab"
//                       >
//                         <li className="active transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] flex items-center mb-[10px]">
//                           <a href="#v-pills-home" className="flex">
//                             <img
//                               src="assets/img/category/c-1.png"
//                               alt="category"
//                               className="w-[20px] mr-[10px]"
//                             />
//                             Cothes & Footwear
//                           </a>
//                         </li>
//                         <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] flex items-center mb-[10px]">
//                           <a href="#v-pills-profile" className="flex">
//                             <img
//                               src="assets/img/category/c-8.png"
//                               alt="category"
//                               className="w-[20px] mr-[10px]"
//                             />
//                             Jewellery
//                           </a>
//                         </li>
//                         <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] flex items-center mb-[10px]">
//                           <a href="#v-pills-messages" className="flex">
//                             <img
//                               src="assets/img/category/c-9.png"
//                               alt="category"
//                               className="w-[20px] mr-[10px]"
//                             />
//                             perfume & cosmetics
//                           </a>
//                         </li>
//                         <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] flex items-center">
//                           <a href="#v-pills-settings" className="flex">
//                             <img
//                               src="assets/img/category/c-4.png"
//                               alt="category"
//                               className="w-[20px] mr-[10px]"
//                             />
//                             glasses & bags
//                           </a>
//                         </li>
//                       </ul>
//                       <div
//                         className="tab-content transition-all w-full"
//                         id="myTabContent"
//                       >
//                         <div className="tab-pane" id="v-pills-home">
//                           <div className="tab-list w-full flex flex-wrap">
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 Cothes
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Shirt
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     shorts
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     jacket
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     dress & frock
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 Footwear
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Sports
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Formal
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Casual
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     safety shoes
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="tab-pane" id="v-pills-profile">
//                           <div className="tab-list w-full flex flex-wrap">
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 jewelry
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Earrings
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Couple Rings
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Necklace
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 jewelry
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Earrings
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Couple Rings
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Necklace
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="tab-pane" id="v-pills-messages">
//                           <div className="tab-list w-full flex flex-wrap">
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 perfume
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Clothes perfume
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     deodorant
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Flower fragrance
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Air Freshener
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 cosmetics
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     shampoo
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Sunscreen
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     body wash
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     makeup kit
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="tab-pane" id="v-pills-settings">
//                           <div className="tab-list w-full flex flex-wrap">
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 glasses
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Sunglasses
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Lenses
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="px-[12px] grow-[1]">
//                               <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
//                                 bags
//                               </h6>
//                               <ul className="cat-list">
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     shopping bag
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     Gym backpack
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     purse
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a
//                                     href="shop-left-sidebar-col-3.html"
//                                     className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
//                                   >
//                                     wallet
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="self-center gi-header-search my-[0] mx-[auto] max-[991px]:m-0">
//                 <div className="header-search w-full min-w-[700px] px-[30px] flex justify-center relative max-[1399px]:min-w-[500px] max-[1199px]:min-w-[400px] max-[991px]:p-0 max-[767px]:min-w-[350px] max-[480px]:min-w-[300px] max-[320px]:min-w-full">
//                   <form
//                     className="gi-search-group-form h-[50px] max-w-[500px] w-[100%] relative flex border-[1px] border-solid border-[#eee] items-center"
//                     action="#"
//                   >
//                     <input
//                       className="form-control gi-search-bar block w-full min-h-[50px] h-[50px] max-[991px]:h-[40px] max-[991px]:min-h-[40px] px-[15px] text-[13px] font-normal leading-[1] text-[#777] bg-transparent outline-[0] border-[0] tracking-[0.6px]"
//                       placeholder="Search Products..."
//                       type="text"
//                     />
//                     <button
//                       type="submit"
//                       className="search_submit relative flex items-center justify-center w-[48px] h-[40px] basis-[48px]"
//                     >
//                       <i className="fi-rr-search text-[#4b5966] h-[18px] w-[18px] transition-all duration-[0.3s] ease-in-out"></i>
//                     </button>
//                   </form>
//                 </div>
//               </div>

//               <div className="gi-location-block py-[5px]">
//                 <div className="gi-location-menu transition-all duration-[0.3s] ease-in-out relative">
//                   <div className="gi-location-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#5caf90] cursor-pointer">
//                     <i className="fi fi-rr-marker location text-[#fff] text-[18px] leading-[0]"></i>
//                     <span className="gi-location-title gi-location w-[calc(100%-30px)] px-[10px] text-[15px] text-[#fff] font-medium tracking-[0.2px] whitespace-nowrap truncate">
//                       New York
//                     </span>
//                     <i
//                       className="fi-rr-angle-small-down gi-angle text-[18px] uppercase text-[#fff] text-center absolute right-[15px] leading-[0]"
//                       aria-hidden="true"
//                     ></i>
//                   </div>
//                   <div className="gi-location-content transition-all duration-[0.3s] ease-in-out w-[200px] py-[15px] px-[13px] mt-[15px] block absolute invisible left-auto right-0 top-[100%] z-[14] border-[1px] border-solid border-[#eee] bg-[#fff] overflow-auto">
//                     <div className="gi-location-dropdown">
//                       <div className="w-full flex flex-wrap gi-location-wrapper">
//                         <ul className="loc-grid w-full">
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               current Location
//                             </span>
//                           </li>
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               Los Angeles
//                             </span>
//                           </li>
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               Chicago
//                             </span>
//                           </li>
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               Houston
//                             </span>
//                           </li>
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               Phoenix
//                             </span>
//                           </li>
//                           <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90]">
//                             <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
//                             <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
//                               San Diego
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
//         <div
//           id="gi-mobile-menu"
//           className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]"
//         >
//           <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
//             <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold">
//               My Menu
//             </span>
//             <button
//               type="button"
//               className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]"
//             >
//               ×
//             </button>
//           </div>
//           <div className="gi-menu-inner">
//             <div className="gi-menu-content"></div>
//             <div className="header-res-lan-curr">
//               <div className="header-res-social mt-[30px]">
//                 <div className="header-top-social">
//                   <ul className="flex flex-row justify-center">
//                     <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] mr-[15px]">
//                       <a href="#">
//                         <i className="gicon gi-facebook text-[#fff]"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] mr-[15px]">
//                       <a href="#">
//                         <i className="gicon gi-twitter text-[#fff]"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] mr-[15px]">
//                       <a href="#">
//                         <i className="gicon gi-instagram text-[#fff]"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966]">
//                       <a href="#">
//                         <i className="gicon gi-linkedin text-[#fff]"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="gi-side-cart-overlay w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[17] hidden"></div>
//       <div
//         id="gi-side-cart"
//         className="gi-side-cart w-[350px] max-[480px]:w-[300px] h-full pt-[15px] px-[20px] text-[14px] font-normal fixed z-[17] top-[0] right-0 left-auto block transition-all duration-[0.5s] ease delay-0 bg-[#fff] overflow-auto"
//       >
//         <div className="gi-cart-inner relative z-[9] flex flex-col h-full justify-between">
//           <div className="gi-cart-top">
//             <div className="gi-cart-title w-full flex flex-wrap justify-between">
//               <span className="cart_title text-[15px] text-[#4b5966] font-Poppins font-semibold mb-[20px]">
//                 My Cart
//               </span>
//               <a
//                 href="javascript:void(0)"
//                 className="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4b5966]"
//               >
//                 <i className="fi-rr-cross-small text-[20px] leading-[0]"></i>
//               </a>
//             </div>
//             <ul className="gi-cart-pro-items">
//               <li className="mb-[15px] p-[15px] flex overflow-hidden border-[1px] border-solid border-[#eee]">
//                 <a
//                   href="product-left-sidebar.html"
//                   className="gi-pro-img flex grow-[1] basis-[20%] items-center"
//                 >
//                   <img
//                     src="assets/img/product-images/35_1.jpg"
//                     className="w-full"
//                     alt="product"
//                   />
//                 </a>
//                 <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
//                   <a
//                     href="product-left-sidebar.html"
//                     className="cart-pro-title w-full pr-[30px] text-[#777] whitespace-normal overflow-hidden text-ellipsis block text-[15px] leading-[18px] font-normal"
//                   >
//                     Shirt for Mens
//                   </a>
//                   <span className="cart-price text-[14px] block mt-[5px]">
//                     <span className="text-[#777] font-semibold text-[16px]">
//                       $45.00
//                     </span>
//                     x 1
//                   </span>
//                   <div className="qty-plus-minus border-[1px] border-solid border-[#eee] h-[35px] overflow-hidden relative w-[85px] flex items-center justify-between py-[7px] mt-[7px]">
//                     <input
//                       className="qty-input"
//                       type="text"
//                       name="gi-qtybtn"
//                       value="1"
//                     />
//                   </div>
//                   <a
//                     href="javascript:void(0)"
//                     className="remove leading-[15px] absolute top-[0] right-[0] pl-[10px] text-[#ff0000] text-[22px]"
//                   >
//                     ×
//                   </a>
//                 </div>
//               </li>
//               <li className="mb-[15px] p-[15px] flex overflow-hidden border-[1px] border-solid border-[#eee]">
//                 <a
//                   href="product-left-sidebar.html"
//                   className="gi-pro-img flex grow-[1] basis-[20%] items-center"
//                 >
//                   <img
//                     src="assets/img/product-images/34_1.jpg"
//                     className="w-full"
//                     alt="product"
//                   />
//                 </a>
//                 <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
//                   <a
//                     href="product-left-sidebar.html"
//                     className="cart-pro-title w-full pr-[30px] text-[#777] whitespace-normal overflow-hidden text-ellipsis block text-[15px] leading-[18px] font-normal"
//                   >
//                     Women's Dress
//                   </a>
//                   <span className="cart-price text-[14px] block mt-[5px]">
//                     <span className="text-[#777] font-semibold text-[16px]">
//                       $25.00
//                     </span>
//                     x 1
//                   </span>
//                   <div className="qty-plus-minus border-[1px] border-solid border-[#eee] h-[35px] overflow-hidden relative w-[85px] flex items-center justify-between py-[7px] mt-[7px]">
//                     <input
//                       className="qty-input"
//                       type="text"
//                       name="gi-qtybtn"
//                       value="1"
//                     />
//                   </div>
//                   <a
//                     href="javascript:void(0)"
//                     className="remove leading-[15px] absolute top-[0] right-[0] pl-[10px] text-[#ff0000] text-[22px]"
//                   >
//                     ×
//                   </a>
//                 </div>
//               </li>
//               <li className="mb-[15px] p-[15px] flex overflow-hidden border-[1px] border-solid border-[#eee]">
//                 <a
//                   href="product-left-sidebar.html"
//                   className="gi-pro-img flex grow-[1] basis-[20%] items-center"
//                 >
//                   <img
//                     src="assets/img/product-images/45_1.jpg"
//                     className="w-full"
//                     alt="product"
//                   />
//                 </a>
//                 <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
//                   <a
//                     href="product-left-sidebar.html"
//                     className="cart-pro-title w-full pr-[30px] text-[#777] whitespace-normal overflow-hidden text-ellipsis block text-[15px] leading-[18px] font-normal"
//                   >
//                     Men Shoes
//                   </a>
//                   <span className="cart-price text-[14px] block mt-[5px]">
//                     <span className="text-[#777] font-semibold text-[16px]">
//                       $49.00
//                     </span>
//                     x 1
//                   </span>
//                   <div className="qty-plus-minus border-[1px] border-solid border-[#eee] h-[35px] overflow-hidden relative w-[85px] flex items-center justify-between py-[7px] mt-[7px]">
//                     <input
//                       className="qty-input"
//                       type="text"
//                       name="gi-qtybtn"
//                       value="1"
//                     />
//                   </div>
//                   <a
//                     href="javascript:void(0)"
//                     className="remove leading-[15px] absolute top-[0] right-[0] pl-[10px] text-[#ff0000] text-[22px]"
//                   >
//                     ×
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="gi-cart-bottom">
//             <div className="cart-sub-total flex flex-wrap justify-between pt-[0] pb-[8px] border-t-[1px] border-solid border-[#eee] mt-[20px]">
//               <table className="table cart-table w-full">
//                 <tbody className="mt-[10px]">
//                   <tr>
//                     <td className="text-left font-medium text-[#777] p-[6px]">
//                       Sub-Total :
//                     </td>
//                     <td className="text-right font-bold text-[#777] p-[6px]">
//                       $300.00
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-left font-medium text-[#777] p-[6px]">
//                       VAT (20%) :
//                     </td>
//                     <td className="text-right font-bold text-[#777] p-[6px]">
//                       $60.00
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-left font-medium text-[#777] p-[6px]">
//                       Total :
//                     </td>
//                     <td className="text-right font-bold text-[#777] primary-color p-[6px]">
//                       $360.00
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="cart_btn flex justify-between mb-[20px]">
//               <a
//                 href="cart.html"
//                 className="gi-btn-1 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative hover:bg-[#5caf90] hover:text-[#fff]"
//               >
//                 View Cart
//               </a>
//               <a
//                 href="checkout.html"
//                 className="gi-btn-2 w-[48%] h-[40px] block uppercase font-semibold text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#5caf90] text-[#fff] text-center transition-all dummy-[0.3s] ease-in-out hover:bg-[#4b5966]"
//               >
//                 Checkout
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewNavbar;
