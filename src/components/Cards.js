import React from "react";
import CardPost from "./CardPost";

const Cards = () => {
  
  const datas = [
    {
      img: "https://www.w3schools.com/w3images/woods.jpg",
      title: "TITLE HEADING",
      titleDescription: "Title description,",
      date: "April 7, 2014",
      comments:0,
      description:
        "  Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      id: 1,
    },
    {
      img: "	https://www.w3schools.com/w3images/bridge.jpg",
      title: "BLOG ENTRY",
      titleDescription: "Title description,",
      date: "April 2, 2014",
      comments:2,
      description:
        "  Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      id: 2,
    },
  ];
 
  return datas.map((data) => (
    <CardPost data={data} key={data.id} />
  ));

};

export default Cards;
