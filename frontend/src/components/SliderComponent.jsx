import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ jobFields }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-center mb-3">Job Categories Provide By Us!</h2>
      <Slider {...settings}>
        {jobFields.map((jobField, index) => (
          <div key={index} className="card mb-5">
            <div className="card-body text-center">
              <h3>{jobField._id}</h3>
              <p>Number of Vacancies: {jobField.count}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderComponent = ({ jobFields }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center mb-3">Job Categories Provide By Us!</h2>
//       <Slider {...settings}>
//         {jobFields.map((jobField, index) => (
//           <div key={index} className="card mb-5">
//             <div className="card-body text-center">
//               <h3>{jobField}</h3>
//               <p>count</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;



// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function Arrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style,margin:"1px", display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }

// const SliderComponent = () => {
//     var settings = {
       
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         // nextArrow: <Arrow />,
//         // prevArrow: <Arrow />,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
              
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 1,
             
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
           
//             }
//           }
//         ]
//       };
  
//   return (
//     <div className='container'>
//         <h2 className='text-center mb-3'> Job Categories Provide By Us!</h2>
//         <Slider {...settings}>
//           <div className='card mb-5'>
          
//             <div className="card-body text-center">
//                 <h3>slack</h3>
//                 <p>we use react slick   ...</p>
//             </div>
//           </div>
//           <div className='card mb-5'>
          
//             <div className="card-body text-center">
//                 <h3>slack</h3>
//                 <p>we use react slick   ...</p>
//             </div>
//           </div>
//           <div className='card mb-5'>
          
//             <div className="card-body text-center">
//                 <h3>slack</h3>
//                 <p>we use react slick   ...</p>
//             </div>
//           </div>
//           <div className='card mb-5'>
          
//             <div className="card-body text-center">
//                 <h3>slack</h3>
//                 <p>we use react slick   ...</p>
//             </div>
//           </div>
          
          
         
         
          
          
//         </Slider>
//       </div>
//   )
// }

// export default SliderComponent
