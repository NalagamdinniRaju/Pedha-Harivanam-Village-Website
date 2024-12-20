
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    "Name":"YERUKULA MAHESH",
    "Age" :"27",
    "Qualification":"I.T.I & DEGREE",
    "Motivation":"I am passionate about driving real development in my village, which is why I am committed to working tirelessly to address the pending projects and initiatives. Through my efforts, I aim to bring about transformative change and improvement to our village",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729675330/Mahesh_wqfnbx.jpg",
    "Id.No":"1"
},
{
    "Name":"BARIKI SHIVA KUMAR",
    "Age" :"",
    "Qualification":"MBA",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729675328/Shiva_bkezcw.jpg",
    "Id.No":"2"
},
{
    "Name":"Podalakaunta srinivasulu ",
    "Age" :"24",
    "Qualification":"BI.P.C (DROP OUT)",
    "Motivation":"The current situation of Our village motivate me to join this group. ",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729940864/Sreenu_tisivm.jpg",
    "Id.No":"3"
},
{
    "Name":"Bariki Jagadeeesh",
    "Age" :"24",
    "Qualification":"MCA",
    "Motivation":"The Situation of MPP Telugu School motivate me to join this group, I have asked village leaders about school situation but there is no response from there so that I have decided to join this group",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/c_fill,w_339,h_452,ar_3:4/v1729500266/Jagadeesh_gb3zfe.png",
    "Id.No":"4"
},
{
    "Name":"UPPARA RAJASEKHAR",
    "Age" :"24",
    "Qualification":"MBA",
    "Motivation":"I want to see real development in my village, which is why I’m dedicated to working with the Pedda Harivanam Development Youth Association. Together, we can solve local issues and create a brighter future for everyone in our community",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729675328/RajaShekhar_nj3izn.jpg",
    "Id.No":"5"
},
{
    "Name":"Kotekallu Mohana Krishna",
    "Age" :"23",
    "Qualification":"MCA",
    "Motivation":"I want my village to feel like home. That’s why I joined this group, to help bring positive change, tackle local issues, and make Pedda Harivanam a place we can all be proud of, just like our own homes.",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/b_rgb:C2C9D6/c_fill,w_800,h_1067,ar_3:4/v1729440540/WhatsApp_Image_2024-10-20_at_6.45.34_PM_jkh6ul.jpg",
    "Id.No":"6"
},
{
    "Name":"Chakali Manikanta",
    "Age" :"24",
    "Qualification":"Intermediate ",
    "Motivation":"A group of friends gathered to discuss village development and raise social awareness. Together, they brainstormed ways to improve community resources and uplift local well-being, aiming to inspire positive changes in their village.",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729941878/ManikantaC_ncnwhp.png",
    "Id.No":"7"
},
{
    "Name":"Adoni Naresh",
    "Age" :"24",
    "Qualification":"BA",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729675329/Naresh_wgxqse.jpg",
    "Id.No":"8"
},
{
    "Name":"Adoni Mounesh",
    "Age" :"26",
    "Qualification":"M.Com",
    "Motivation":"My motivation to join the group is to empower youth and raise awareness among village residents about government schemes, public healthcare facilities, schools, and other essential resources. I aim to help people access available opportunities, enhancing both community knowledge and overall village development.",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730364906/WhatsApp_Image_2024-10-31_at_2.16.51_PM_fzzezw.jpg",
    "Id.No":"9"
},
{
    "Name":" UPPARA CHIRANJEEVI ",
    "Age" :"22",
    "Qualification":"",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/b_rgb:C2C9D6/c_fill,w_600,h_800,ar_3:4/v1729577884/WhatsApp_Image_2024-10-21_at_7.28.11_PM_jejgi3.jpg",
    "Id.No":"10"
},
{
    "Name":"Uppara Sunil Kumar ",
    "Age" :"24",
    "Qualification":"MBA",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730364906/WhatsApp_Image_2024-10-31_at_2.16.51_PM_1_wpsapw.jpg",
    "Id.No":"11"
},
{
    "Name":"Mangali guru Murthy",
    "Age" :"27",
    "Qualification":"PUC inter",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1729507690/1729502274249-removebg-preview_e2shuc.png",
    "Id.No":"12"
},
{
    "Name":"Roopa",
    "Age" :"27",
    "Qualification":"B.A Graduate",
    "Motivation":"Joining in this group to struggle& supporting for  sustainable development of our village.. 💪💪",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730364462/WhatsApp_Image_2024-10-31_at_2.16.53_PM_ht8omn.jpg",
    "Id.No":"14"
},
{
    "Name":"AMEDALI VENKATESH REDDY",
    "Age" :"27",
    "Qualification":":B.COM GENERAL",
    "Motivation":"I've observed my village since childhood, noticing improvement in buildings but not roads and infrastructure. I envision our village as a model for others. As I'm away for work, our youth are leading the development efforts",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730364635/WhatsApp_Image_2024-10-31_at_2.16.52_PM_qjynfl.jpg",
    "Id.No":"15"
},
{
    "Name":"B. Shashi",
    "Age":"27",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730365205/WhatsApp_Image_2024-10-31_at_2.16.53_PM_1_ugs3ef.jpg",
    "Id.No":"16"
},
{
    "Name":"Abbu ",
    "Age":"25",
    "Qualification":"BA",
    "Motivation":"",
    "ImageURL":"https://cdn-icons-png.flaticon.com/128/17798/17798443.png",
    "Id.No":"17"
},
{
    "Name":" K prakash  ",
    "Age":"21",
    "Qualification":"B.Com",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730376213/WhatsApp_Image_2024-10-31_at_5.10.39_PM_xxa0st.jpg",
    "Id.No":"18"
},
{
    "Name":" Y.Dasarath  ",
    "Age":"24",
    "Qualification":"B.Sc",
    "Motivation":"I am also part of that village, Empowering Peddaharivanam's growth, one initiative at a time.",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730946621/Dasaratha_qnnsj9.jpg",
    "Id.No":"19"
},
{
    "Name":"Adoni Bheerappa ",
    "Age":"25",
    "Qualification":"B.Sc,B.Ed,Veternary Diploma",
    "Motivation":"",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1730946624/Bheerappa_zio3xe.jpg",
    "Id.No":"20"
},
{
    "Name":"Girish",
    "Age":"21",
    "Qualification":"Degree",
    "Motivation":"For the development of our Village",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1732549336/Girish_pauadm.jpg",
    "Id.No":"21"
},
{
    "Name":"Mangali Ayyanna",
    "Age":"32",
    "Qualification":"Nill",
    "Motivation":"Need to see Pedda Harivanam as a developed one",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1732550032/MAyyanna_llrnio.jpg",
    "Id.No":"22"
},
{
    "Name":"Uppara Sai Kiran",
    "Age":"19",
    "Qualification":"Studying B.Tech",
    "Motivation":"I want to see my village as inspiration to other villages",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1732550144/Sai_df17ku.jpg",
    "Id.No":"23"
},
{
    "Name":"B Nagaraju",
    "Age":"19",
    "Qualification":"Studying Diploma",
    "Motivation":"I want development in our Village",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1732551572/Nagaraju_iqc6yf.jpg",
    "Id.No":"24"
},
{
    "Name":"Manvi Eranna",
    "Age":"26",
    "Qualification":"M.Sc and B.Ed",
    "Motivation":"Because I know all about our village problems, so we are all raise our hands towards problems for solving. ಏತಕೆಂದರೆ ಈಗಿನ ಕಾಲ ಎಲ್ಲಾ ಸ್ವಾರ್ಥಿಗಳ ಪ್ರಪಂಚ . So i am interest to join our village development group, First off all I am said Thankful to all our group members.I support always this group. ಯಾವದೇ ಕಾರಣಕ್ಕೂ ರಾಜಕೀಯಕ್ಕೆ ತಲೆಬಾಗಬೇಡಿ. Group ನ ಯಲ್ಲಾ friends ಅಲ್ಲಿ ವಿನಂತಿ ಮಾಡುವುದು ಏನಂದರೆ,ಏನೇ ಬರಲಿ ಒಗ್ಗಟ್ಟು ಇರಲಿ. ",
    "ImageURL":"https://cdn-icons-png.flaticon.com/128/17798/17798443.png",
    "Id.No":"25"
},
{
    "Name":"M.Lakshmikanth",
    "Age":"41",
    "Qualification":"B.Tech and AMICE",
    "Motivation":"Going in the way of change in every one’s life  ",
    "ImageURL":"https://cdn-icons-png.flaticon.com/128/17798/17798443.png",
    "Id.No":"26"
},
{
    "Name":"Seshagiri Jagadeesh",
    "Age":"23",
    "Qualification":"B.Tech",
    "Motivation":"I'm excited to join your group as I'm passionate about social activism and community development, and I believe that collective efforts can drive meaningful change.",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1734533878/WhatsApp_Image_2024-12-17_at_5.52.09_PM_o2j4cv.jpg",
    "Id.No":"27"
},
{
    "Name":"  G Garjappa",
    "Age":"23",
    "Qualification":"Intermediate ",
    "Motivation":"I have inspired by these group work and I want to part of this group to Develop our village",
    "ImageURL":"https://res.cloudinary.com/dbohmpxko/image/upload/v1734534344/Pi7_Passport_Photo_mxaggp.jpg",
    "Id.No":"27"
}
]

export default function OurTeamPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Default values
  const defaults = {
    age: "25",
    qualification: "Not Specified",
    motivation: "Committed to village development and community service.",
    image: "https://cdn-icons-png.flaticon.com/128/17798/17798443.png"
  };

  // Process member data with defaults
  const processedMembers = members.map(member => ({
    name: member.Name,
    age: member.Age || defaults.age,
    qualification: member.Qualification || defaults.qualification,
    motivation: member.Motivation || defaults.motivation,
    image: member.ImageURL || defaults.image,
    id: member["Id.No"]
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[40vh] bg-green-600 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white px-4">Our Team</h1>
      </div>
    </motion.div>

    <section className="pt-32 pb-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {processedMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[300px] rounded-xl hover:z-20"
            >
              {/* Normal Card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 group-hover:opacity-0 transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="flex flex-col items-center h-full">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {e.target.src = defaults.image}}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 mb-2 text-center">
                    {member.qualification}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-center line-clamp-2">
                    {member.motivation}
                  </p>
                </div>
              </div>

              {/* Hover Card */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 group-hover:h-auto min-h-[400px] bg-white dark:bg-gray-800 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                    {member.name}
                  </h3>
                  <div className="border-t dark:border-gray-700 pt-4">
                    <p className="text-green-600 dark:text-green-400 mb-3">
                      <span className="font-semibold">Age:</span> {member.age}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      <span className="font-semibold">Qualification:</span> {member.qualification}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Motivation:</span><br/>
                      {member.motivation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}