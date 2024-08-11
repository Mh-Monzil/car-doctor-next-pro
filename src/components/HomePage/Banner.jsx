import React from "react";

const Banner = () => {
  const banners = [
    {
      id: "slide1",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alternation in some form",
      prev: "#slide4",
      next: "#slide2",
    },
    {
      id: "slide2",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alternation in some form",
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: "slide3",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alternation in some form",
      prev: "#slide2",
      next: "#slide4",
    },
    {
      id: "slide4",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alternation in some form",
      prev: "#slide3",
      next: "#slide1",
    },
  ];

  return (
    <div className="w-full">
      <div className="carousel w-full rounded-2xl">
        {banners.map((banner,idx) => (
          <div
            key={idx}
            id={banner.id}
            style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${idx + 1}.jpg)`
            }}
            className="carousel-item relative w-full h-[70vh] bg-cover bg-top bg-no-repeat"
          >
            <div className="w-[500px] flex flex-col justify-center pl-24">
              <h1 className="text-6xl leading-[75px] font-bold">{banner.title}</h1>
              <p className="text-lg font-medium mt-7">{banner.description}</p>
              <div className="flex items-center gap-5 mt-7">
                <button className="bg-primary py-4 px-5 rounded-md border-2 border-primary">Discover More</button>
                <button className="py-4 px-5 rounded-md border-2">Latest Project</button>
              </div>
            </div>
            <div className="absolute right-12 bottom-12 flex gap-5">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
