
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaImage, FaVideo, FaFile } from 'react-icons/fa';


const workData = [
    {
        "id": 1,
        "title": "Conducting a Grama Sabha",
        "description": "To discuss our village's problems and review the panchayat's financial statement, we have submitted a request letter to the village sarpanch to conduct a Gram Sabha.",
        "date":"02/09/2024",
        "photos": [
        "https://res.cloudinary.com/dbohmpxko/image/upload/v1730729557/WhatsApp_Image_2024-11-04_at_7.01.15_PM_wtcwif.jpg"
        ],
        "videos":[
            "gXbjujix5lU"
        ],
        
        "documents": [
        {
            "name": "Request Letter",
            "url": "https://drive.google.com/file/d/1pnWNNMtWVrqcvySgkNco8eBAv6ICB16u/view"
        }
        ]
    },
    {
        "id":2,
        "title":"Accountability Initiative: Panchayat Funds",
        "description":"Initiative to promote accountability and good governance in panchayat financial management By RTI Act - 2005",
        "date":"09/09/2024",
        "photos":[
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730961033/%E0%B0%AE%E0%B0%BE_%E0%B0%97%E0%B1%8D%E0%B0%B0%E0%B0%BE%E0%B0%AE_%E0%B0%A8%E0%B0%BF%E0%B0%A7%E0%B1%81%E0%B0%B2_%E0%B0%AE%E0%B0%B0%E0%B0%BF%E0%B0%AF%E0%B1%81_%E0%B0%96%E0%B0%B0%E0%B1%8D%E0%B0%9A%E0%B1%81%E0%B0%B2%E0%B0%AA%E0%B1%88_%E0%B0%B5%E0%B0%BF%E0%B0%B5%E0%B0%B0%E0%B0%BE%E0%B0%B2%E0%B1%81_-_RTI_%E0%B0%9A%E0%B0%9F%E0%B1%8D%E0%B0%9F%E0%B0%82_%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82_-_Google_Docs_page-0001_pilqay.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730961239/WhatsApp_Image_2024-11-07_at_12.03.33_PM_o9kenm.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730976398/WhatsApp_Image_2024-11-07_at_4.15.24_PM_wpmoum.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730976399/WhatsApp_Image_2024-11-07_at_4.15.23_PM_eafxy0.jpg"
        ],
        "videos":[
            "gXbjujix5lU"
        ],
        "documents":[
            {
                "name":"RTI Application",
                "url":"https://drive.google.com/file/d/1n-4Aso4I2_EY-RnecIV26pxPDhGzwyIO/view?usp=sharing"
            }
        ]
    },
    {
        "id":3,
        "title":"Road Repair Request: Village Entrance to Vakrauni Kuni",
        "description":"We have filed a complaint on Meekosam website regarding the road problems from our village entrance to Vakrauni Kuni and are awaiting government funding to initiate road repair works",
        "date":"26/09/2024",
        "photos":[
            "https://res.cloudinary.com/dbohmpxko/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1730977131/WhatsApp_Image_2024-11-07_at_4.28.17_PM_mvz1bl.jpg"
        ],
        "videos":[
            ""
        ],
        "documents":[
            {
                "name":"R&B Road Complaint",
                "url":"https://drive.google.com/file/d/1tKgyRDx3yKhNK0vzjtzm9EkC6wD7vsSk/view?usp=sharing"
            },
            {
                "name":"R&B Complaint Replay",
                "url":"https://drive.google.com/file/d/1Fw05BA9_puEZd-DwkWPDcpfKtkneKlLD/view?usp=sharing"
            }
        ]
    },
    {
        "id":4,
        "title":"Raising Village Concerns at Gram Sabha on October 2",
        "description":"On October 2, our village participated in the Gram Sabha meeting to address pressing local issues. To ensure everyone's voice was heard, we created a Google Form to collect problems faced by villagers. This initiative enabled us to gather valuable insights and present a unified front for positive change in our community.",
        "date":"02/10/2024",
        "photos":[""],
        "videos":[""],
        "documents":[
            {
                "name":"Request Letter to the Grama Sabha",
                "url":"https://drive.google.com/file/d/1ZFBwEte1igV73u9gy1oodZ8aN7NfoXN2/view?usp=sharing"
            },
            {
                "name":"Vinathi Patram to Secretary ",
                "url":"https://drive.google.com/file/d/1E5xwPv4yUy6fUU9naulPUiW29bj2NkKF/view?usp=sharing"
            },
            {
                "name":"Dumping Yard Solution",
                "url":"https://drive.google.com/file/d/1H0MKoP7afb-R2KdZ9nG-vmEDJR51h53W/view?usp=sharing"
            }
        ]
    },
    {
        "id":5,
        "title":"Empowering Young Minds: Anganwadi Center Assessment and Recommendations",
        "description":"Our assessment of local Anganwadi centers reveals opportunities to strengthen early childhood care and education, ensuring a brighter future for our community's children.",
        "date":"",
        "photos":[""],
        "videos":[
            "XNRgnWWDFws"
        ],
        "documents":[
            {
                "name":"List Of Food Given At Anganwadi School",
                "url":"https://db.and.nic.in/socialwelfare/icds/foodsupply.htm"
            }
        ]
    },
    {
        "id":6,
        "title":"Supporting Local Education: Mandal Parishad School Initiative",
        "description":"We visited the Mandal Parishad Primary Telugu School in our village to assess its condition. We spoke with the Headmaster (HM) to understand the challenges faced by the school. Unfortunately, the school lacks permission to utilize its funds for essential works. To address some pressing issues, we met with our village Sarpanch, Ramu sir, who kindly agreed to provide a new drinking water connection. Additionally, we took the initiative to paint the school gate at our own expense. Our next step is to meet with the Mandal Education Officer (MEO) to discuss the school's overall situation and potential solutions.",
        "date":"",
        "photos":[
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724846/WhatsApp_Image_2024-11-04_at_6.07.48_PM_gdefc1.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724858/WhatsApp_Image_2024-11-04_at_6.07.49_PM_a167j7.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724847/WhatsApp_Image_2024-11-04_at_6.07.47_PM_1_xsax3d.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724857/WhatsApp_Image_2024-11-04_at_6.07.44_PM_k87h6o.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724862/WhatsApp_Image_2024-11-04_at_6.07.41_PM_1_gpjoem.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730729779/WhatsApp_Image_2024-11-04_at_7.01.14_PM_1_rhc9wb.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730729571/WhatsApp_Image_2024-11-04_at_7.01.13_PM_ky0nxa.jpg"
        ],
        "videos":[
            "Fxy1ufl11Uo"
        ],
        "documents":[
            {
                "name":"Bill Of Paint purchased for Gate",
                "url":"https://drive.google.com/file/d/1MW00mfapaT1hcBsgeYOgHS_ag9Ej4n14/view?usp=sharing"
            }
        ]
    },
    {
        "id":7,
        "title":"Invitation for Village Development: Request to Hon'ble MLA Dr. Partha Saradhi",
        "description":"We respectfully invite Dr. Partha Saradhi, Hon'ble MLA of Adoni, to visit our village and discuss key development projects. Our request focuses on enhancing infrastructure and community growth, and we believe your presence will greatly contribute to our village's progress.",
        "date":"18/10/2024",
        "photos":[""],
        "videos":["TtRVU2XCnaE"],
        "documents":[
            {
                "name":"Request Letter to MLA",
                "url":"https://drive.google.com/file/d/1Wg4DnF8s3WOSK5cx0StZmgmor4GwSweK/view?usp=sharing"
            }
        ]
    },
    {
        "id":8,
        "title":"Exploring PWS Water Filtration in Our Village and Taking action towards solving the issue",
        "description":"We visited the PWS facility in our village to understand their water filtration process. We observed how they filter water through granular beds, ensuring removal of suspended solids. The team checks materials for filter bed construction, considering factors like granulometry, grain shape, friability, and loss to acid. Our discussion with the water treatment specialists and PWS representatives provided valuable insights into their operations. As the panchayt secretory do not done the work on time, we have raised the complaint on the Meekosam website to solve the issue of filter be as soon as possible",
        "date":"",
        "photos":[
            "https://res.cloudinary.com/dbohmpxko/image/upload/WhatsApp_Image_2024-11-04_at_6.06.46_PM_c5h1md.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724862/WhatsApp_Image_2024-11-04_at_6.07.15_PM_tusmh1.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724861/WhatsApp_Image_2024-11-04_at_6.07.41_PM_d4wjqu.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724861/WhatsApp_Image_2024-11-04_at_6.07.38_PM_kmn7yi.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1730724863/WhatsApp_Image_2024-11-04_at_6.07.24_PM_jefuk1.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1734017255/WhatsApp_Image_2024-12-12_at_8.53.05_PM_eh92do.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1734017247/WhatsApp_Image_2024-12-12_at_8.53.12_PM_1_wihep5.jpg",
            "https://res.cloudinary.com/dbohmpxko/image/upload/v1734017252/WhatsApp_Image_2024-12-12_at_8.53.12_PM_xl7idw.jpg"
        ],
        "videos":[
            "MJ-tSXXhprg",
            "HKLNHyDQnnY"
        ],
        "documents":[
            
            {
                "name":"Complait Letter",
                "url":"https://drive.google.com/file/d/1AHLketeG-mFxA6teAH84h_8Hmrup5DoC/view?usp=sharing"
            },
            {
                "name":"Solution to Our Complaint",
                "url":"https://drive.google.com/file/d/1fgyoVqq0KD3renrLEnpJED2_Ls_Itqsu/view?usp=sharing"
            }
        ]
    },
    {
        "id":9,
        "title":"Helping To MPP(T) School On the Occation Of Parents-Teachers Meeting",
        "description":"As the Telugu school HM requested our help to make the Parent-Teacher Meeting a success, our group members assisted accordingly and successfully contributed to the meeting's accomplishment.",
        "date":"7/12/2024",
        "photos":["https://res.cloudinary.com/dbohmpxko/image/upload/v1734014935/WhatsApp_Image_2024-12-12_at_8.16.23_PM_ngldwq.jpg",
    "https://res.cloudinary.com/dbohmpxko/image/upload/v1734014935/WhatsApp_Image_2024-12-12_at_8.16.23_PM_1_e06ad1.jpg",
"https://res.cloudinary.com/dbohmpxko/image/upload/v1734014935/WhatsApp_Image_2024-12-12_at_8.16.22_PM_hcawy4.jpg"],
        "videos":["zgpSmkYzEUg", "LWlorxXpPFo"],
        "documents":[]
    }

]


export default function OurWorkPage() {
    const [selectedWork, setSelectedWork] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
      // Simulate loading data
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000); 
        return () => clearTimeout(timer);
      }, []);
  
    const handleOpenModal = (type, content) => {
      setIsModalOpen(true);
      setModalContent({ type, content });
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setModalContent(null);
    };
  
    const renderMedia = (work) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {work.photos.map((photo, index) => (
          photo && (
            <motion.img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleOpenModal('image', photo)}
            />
          )
        ))}
        {work.videos.map((videoId, index) => (
          videoId && (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover"
                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                alt={`Video Thumbnail ${index + 1}`}
                onClick={() => handleOpenModal('video', videoId)}
              />
            </div>
          )
        ))}
      </div>
    );
  
    if (isLoading) {
      // Render loading state
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-0">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] bg-green-600 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <h1 className="text-5xl font-bold text-white px-4">
              Our Impact In The Community
            </h1>
          </div>
        </motion.div>
  
        {/* Work Cards Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workData.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {work.title}
                      </h3>
                      {work.date && (
                        <div className="flex items-center text-green-600">
                          <FaCalendar className="mr-2" />
                          <span>{work.date}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {work.description}
                    </p>
  
                    <div className="flex space-x-4 mt-4">
                      {work.photos.some(photo => photo) && (
                        <div className="flex items-center text-green-600">
                          <FaImage className="mr-1" />
                          <span>{work.photos.filter(p => p).length}</span>
                        </div>
                      )}
                      {work.videos.some(video => video) && (
                        <div className="flex items-center text-green-600">
                          <FaVideo className="mr-1" />
                          <span>{work.videos.filter(v => v).length}</span>
                        </div>
                      )}
                      {work.documents.length > 0 && (
                        <div className="flex items-center text-green-600">
                          <FaFile className="mr-1" />
                          <span>{work.documents.length}</span>
                        </div>
                      )}
                    </div>
  
                    {/* Documents Section */}
                    {work.documents.length > 0 && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {work.documents.map((doc, idx) => (
                            <a
                              key={idx}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                            >
                              <FaFile className="mr-2" />
                              {doc.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {renderMedia(work)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-4xl w-[800px]"
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent.type === 'image' && (
                <img
                  src={modalContent.content}
                  alt="Modal Image"
                  className="w-full h-auto rounded-lg"
                />
              )}
              {modalContent.type === 'video' && (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${modalContent.content}`}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        )}
  
        {/* Call to Action */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Help Us Make a Bigger Impact
              </h2>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Join our initiative to create positive change in our community.
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
                Get Involved
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }