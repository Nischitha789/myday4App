import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Components/All";
import Stack from "./Components/Stack";
import Datascience from "./Components/Datascience";
import Cyber from "./Components/Cyber";
import Career from "./Components/Career";
import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import Middile from "./Components/Middile";
import Footer from "./Components/Footer";

const App = () => {
  let data = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      head: "Full Stack Development",

      content:
        "Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise, 'This involves creating the user interface and experience that users interact with directly",

      date: "28/2007",

      month: "JANUARY",
    },
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2023/06/cybersecurity.png",

      head: "Cyber",

      content:
        "Cybersecurity encompasses a range of crucial topics aimed at safeguarding digital assets and mitigating cyber threats. From understanding the fundamentals of cybersecurity and common attack vectors like malware and phishing, to implementing best practices such as strong password management and regular software updates, the field requires a multifaceted approach.",
      date: "11/2003",

      month: "SEPTEMBER",
    },

    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png ",

      head: "Full Stack Development",

      content:
        "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",

      date: "20/1995",

      month: "FEBRUARY",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL45tobd61VgDWPQvTwPFmgEoLuM0ETDkHkA&usqp=CAU",

      head: "Cyber",

      content:
        "Cybersecurity developers are specialists that write programs with a focus on safeguarding computer systems and data/information",

      date: "30/1984",

      month: "MARCH",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
      head: "Full Stack Development",

      content:
        "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",

      date: "10/2003",

      month: "APRIL",
    },
    {
      image:
        "https://www.droptica.com/sites/droptica.com/files/inline-images/Full%20stack%20developer%20infographics.png",

      head: "Full Stack Development",

      content:
        "Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.",

      date: "20/2003",

      month: "DECEMBER",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHixfD5bh7EeJunEAywpv8gGcH2QzCXflXiA&usqp=CAU",

      head: "Cyber",

      content:
        " security software developer is responsible for designing and developing software applications with a strong focus on security. ",
      date: "15/2019",

      month: "JANUARY",
    },
    {
      image:
        "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",

      head: "Data Science",

      content:
        "Data scientists collect data from various sources such as databases, sensors, social media, websites, and other digital platforms. Feature engineering involves selecting, transforming, and creating new features from the raw data to improve the performance of machine learning models. This may include feature scaling, encoding categorical variables, and creating interaction terms.This may involve scraping data from the web, accessing APIs, or working with internal databases.",
      date: "12/2007",

      month: "MAY",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTHNYVVCC4qZbSTP7siwoy4iL9i1zouCZxw&usqp=CAU",

      head: "Data Science",

      content:
        "Data science is a multidisciplinary field that utilizes scientific methods, algorithms, processes, and systems to extract insights and knowledge from structured and unstructured data.  Data visualization plays a crucial role in communicating insights and findings from data analysis. It combines elements of statistics, mathematics, computer science, domain expertise, and visualization techniques to analyze and interpret complex datasets. ",

      date: "20/1996",

      month: "AUGUST",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXBKpC15mjZlxx_BMnh8e2j6JQpYL0XAkXQ&usqp=CAU",

      head: "Career",

      content:
        "Collaboration and version control using tools like Git will enable you to work effectively within development teams, while continuous learning will be crucial to staying updated with the latest technologies and industry trends.",

      date: "30/1989",

      month: "MARCH",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/nQTD_dg3ZC00KzReGMEa0rcI2OF89sA4x2cHgZ45wzxZvy3DQvnVfWrJd0Ywo4QmV6o",

      head: "Data Science",

      content:
        "Machine learning is a subset of artificial intelligence (AI) that focuses on developing algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed.EDA involves visually exploring and summarizing data to understand its characteristics, patterns, and relationships. Data scientists use descriptive statistics, data visualization tools, and exploratory techniques to gain insights into the data.",

      date: "05/2002",

      month: "JUNE",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8t9xeCSpcaycBa0axAEh3_QWLLJWhAXg5w&usqp=CAU",

      head: "Cyber",

      content:
        "Cybersecurity refers to the practice of protecting computer systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft. It encompasses various technologies, processes, and practices designed to safeguard information and ensure the confidentiality, integrity, and availability of digital assets. Cybersecurity refers to the practice of protecting computer systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft.",

      date: "14/2014",

      month: "FEBRUARY",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGYWBPz7xJhYV3_E1vOmvQDchHywCwzF5vA&usqp=CAU",

      head: "Career",

      content:
        "The modern job market offers diverse career opportunities across industries and fields. From the dynamic realm of Information Technology (IT) where roles like software developers, network engineers, and cybersecurity analysts are in high demand, to business and management positions such as marketing managers, project managers, and financial analysts driving organizational success. ",

      date: "10/2017",

      month: "MARCH",
    },
    {
      image:
        "https://www.ecpi.edu/sites/default/files/Blog%20-%2010%20Careers%20in%20IT_0.png",

      head: "Career",

      content:
        "In todays interconnected and digitized world, cybersecurity is essential for protecting individuals, organizations, and societies from the growing array of cyber threats and attacks. It requires a proactive and holistic approach that combines technology, policy, and human expertise to effectively mitigate risks and safeguard digital assets.",
      date:"04/1987",

      month: "JANUARY",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwAUfMJiJF8-DIMaVcCO1HptM6xBPN6onVw&usqp=CAU",

      head: "Career",

      content:
        "Each field offers unique opportunities for personal and professional growth, allowing individuals to pursue careers aligned with their passions, skills, and values. Additionally, the rapidly evolving job market continues to create new roles and opportunities, making it important for individuals to stay adaptable and continuously develop their skills throughout their careers.",

      date: "7/2014",

      month: "JUNE",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png",

      head: "Full Stack Development",

      content:
        "In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.",

      date: "02/1980",

      month: "MARCH",
    },
    {
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg",

      head: "Data Science",

      content:
        "Data scientists collect data from various sources such as databases, sensors, social media, websites, and other digital platforms. Feature engineering involves selecting, transforming, and creating new features from the raw data to improve the performance of machine learning models. This may include feature scaling, encoding categorical variables, and creating interaction terms.This may involve scraping data from the web, accessing APIs, or working with internal databases.",
      date: "15/2001",

      month: "SEPTEMBER",
    },
  ];

  return (
    <div>
      <Heading />
      <Middile />

      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<Stack data={data} />} />
          <Route path="/datascience" element={<Datascience data={data} />} />
          <Route path="/cyber" element={<Cyber data={data} />} />
          {/*<Route path='/boostrap' element={<Boostrap data={data}/>}/>*/}
          <Route path="/Career" element={<Career data={data} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
