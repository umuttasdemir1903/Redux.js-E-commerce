import Slider from "react-slick";

const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay : true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
       <Slider {...settings}>
          <div className="!flex items-center bg-gray-100 px-5">
            <div>
                <div className="text-6xl font-bold">Top quality shoes here</div>
                <div className="text-large my-3 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, quidem illo excepturi nesciunt voluptatem quasi maiores est quis earum nam quo possimus ipsa in debitis temporibus, nostrum ut magnam.</div>
                <button className="border rounded-full cursor-pointer text-2xl w-[150px] h-16 bg-gray-200 hover:bg-gray-300 duration-100">Review</button>
            </div>
            <img src="https://www.kickgame.com/cdn/shop/products/Air-Force-1-Mid-07-Supreme-AQ8017-001-black_1.png?v=1661316972" width={750} />
          </div>
          <div className="!flex items-center bg-gray-100 px-4">
          <div>
                <div className="text-6xl font-bold">Top quality shoes here</div>
                <div className="text-large my-3 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, quidem illo excepturi nesciunt voluptatem quasi maiores est quis earum nam quo possimus ipsa in debitis temporibus, nostrum ut magnam.</div>
                <button className="border rounded-full cursor-pointer text-2xl w-[150px] h-16 bg-gray-200 hover:bg-gray-300 duration-100">Review</button>
            </div>
           <img src="https://www.kickgame.co.uk/cdn/shop/products/AF1-07-Virgil-CI1173-400-MCA_1.png?v=1658245042" width={750}/>
          </div>
          <div className="!flex items-center bg-gray-100 px-4">
          <div>
                <div className="text-6xl font-bold">Top quality shoes here</div>
                <div className="text-large my-3 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, quidem illo excepturi nesciunt voluptatem quasi maiores est quis earum nam quo possimus ipsa in debitis temporibus, nostrum ut magnam.</div>
                <button className="border rounded-full cursor-pointer text-2xl w-[150px] h-16 bg-gray-200 hover:bg-gray-300 duration-100">Review</button>
            </div>
           <img src="https://www.surchshop.com/cdn/shop/files/nike-air-force-1-low-supreme-mini-box-logo-black-cu9225-001_1.webp?v=1682860143" width={750}/>
          </div>
          </Slider>
    </div>
  )
}

export default SliderComp
