import {
    logo,
    name,
    insta,
    facebook,
    linkdin,
    github,
    sev1,
    Youtube,
    search,
    sev2,
    sev3
} from "@/assets"

// FILE RELATED ALL TESTIMONIAL , SERVICES, FAQ ETC TEXT IS HERE 
//  CHANGE THE TEXT OF THE CLIENT, IMAGELINKS, COUNTUPS , FAQS, SERVICEDATA , PROJECTDATA, WORKS, SERVICES DATA

export const clients = [
    {
        id: 1,
        url: "https://th.bing.com/th/id/OIP.dn-sSm17qGgT7C0yfebJNgHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7",
        alt: "Image 1",
        name: "Abhishek RG",
        work: "Software Engineer",
        testimonial: "The training provided was top-notch and helped me gain essential skills in cybersecurity. Highly recommend!"
    },
    {
        id: 2,
        url: "https://randomuser.me/api/portraits/men/5.jpg",
        alt: "Image 2",
        name: "Ganesh HY",
        work: "Security Analyst",
        testimonial: "An excellent program that covered all the key areas of cybersecurity. The practical exercises were very useful."
    },
    {
        id: 3,
        url: "https://randomuser.me/api/portraits/women/9.jpg",
        alt: "Image 3",
        name: "Jane Smith",
        work: "Network Security Engineer",
        testimonial: "The course was well-structured, and the instructors were knowledgeable. I feel more confident in my cybersecurity skills now."
    }
];






export const images = [
    'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3'
];

export const navLinks = [
    {
        id: '',
        title: "Home"
    },
    {
        id: 'about',
        title: "About"
    },
    {
        id: 'services',
        title: "Services"
    },
    {
        id: "internships",
        title: "Internships"
    },
    {
        id: "blog",
        title: "Blog",
    },
    {
        id: 'contact',
        title: "Contact"
    },
]

export const CountUps = [
    {
        num: "20",
        sig: "+",
        define: "Workshops"
    },
    {
        num: "1000",
        sig: "+",
        define: "Students"

    },
    {
        num: "15",
        sig: "+",
        define: "Courses offered"

    },
]


export const FAQS = [
    {
        id: 1,
        Question: "1. What is cybersecurity, and why is it important?",
        Answer: "Cybersecurity refers to the practice of protecting systems, networks, and data from digital attacks. It is essential because it safeguards sensitive information, maintains privacy, and ensures the continuity of operations."
    },
    {
        id: 2,
        Question: "2. Who can benefit from Hacfy’s cybersecurity courses?",
        Answer: "Our courses are designed for individuals at all skill levels—from beginners wanting to start a career in cybersecurity to experienced professionals looking to enhance their skills and knowledge."
    },
    {
        id: 3,
        Question: "3. What types of cybersecurity courses does Hacfy offer?",
        Answer: "We offer a variety of courses covering foundational cybersecurity principles, ethical hacking, risk management, network security, secure coding practices, and more. Our courses cater to diverse interests and career paths within cybersecurity."
    },
    {
        id: 4,
        Question: "4. Are Hacfy’s courses  for beginners with no prior cybersecurity knowledge?",
        Answer: "Yes, our Cybersecurity Foundations Certificate (CFC) is specifically designed for beginners. It provides a solid introduction to cybersecurity concepts, making it accessible to those new to the field."
    },
    {
        id: 5,
        Question: "5. How are Hacfy’s courses structured, what learning formats are available?",
        Answer: "Our courses are structured with modules that cover essential topics in cybersecurity. We offer flexible learning formats, including self-paced online courses and live virtual sessions, to accommodate different learning preferences and schedules."
    }
];




export const Services_data = [
    {
        name: "Cybersecurity and Ethical Hacking",
        main_img: sev1,
        description: "Learn the fundamentals of cybersecurity and ethical hacking, including how to identify vulnerabilities, secure systems, and conduct penetration tests. Gain hands-on experience with real-world tools and techniques to defend against cyber threats."
    },
    {
        name: "Website Penetration Testing",
        main_img: sev2,
        description: "Dive into the process of website penetration testing, where you will assess web applications for security flaws. Learn how to identify, exploit, and report vulnerabilities in websites to help businesses enhance their web security."
    },
    {
        name: "Mobile Application Penetration Testing",
        main_img: sev3,
        description: "Focus on securing mobile apps by learning how to conduct penetration testing on Android and iOS platforms. This internship will cover various attack vectors and methods to safeguard mobile applications against potential threats."
    },
]


export const project_data = [
    {
        name: "Cybersecurity Foundations Certificate (CFC)",
        main_img: sev1,
        description: "The Cybersecurity Foundations Certificate (CFC) is designed for individuals who are new to cybersecurity and want to establish a strong understanding of foundational concepts.This certificate program covers essential principles and practices in cybersecurity, providing participants with a comprehensive introduction to the field."
    },
    {
        name: "Ethical Hacker Specialist (EHS) Certification",
        main_img: sev2,
        description: "The Ethical Hacker Specialist (EHS) Certification is tailored for individuals interested in learning offensive security techniques and ethical hacking principles. This certification program prepares participants to identify vulnerabilities, conduct penetration testing, and secure systems and networks from potential cyber threats."
    },
    {
        name: "Cybersecurity Risk Management Expert (CRME) Certification",
        main_img: sev3,
        description: "The Cybersecurity Risk Management Expert (CRME) Certification is designed for cybersecurity professionals responsible for managing and mitigating cyber risks within organizations. This certification program focuses on risk assessment methodologies, compliance frameworks, incident response planning, and business continuity strategies.."
    },
]


export const Card_profile = [
    {
        img: logo
    },
    {
        img: logo
    },
    {
        img: logo
    },
    {
        img: logo
    }
]






export const Contact_link = [
    {
        img: facebook,
        linke: "https://www.facebook.com/profile.php?id=61562353171045 "
    },
    {
        img: linkdin,
        linke: "https://www.linkedin.com/company/hacfy"
    },
    {
        img: Youtube,
        linke: "https://www.youtube.com/@HacFy"
    },
    {
        img: insta,
        linke: "https://www.instagram.com/hacfy.co/"
    }
]

export const wedo = [
    {
        img: logo,
        headname: "Unleashing Ability through Network Management.",
        link: "/services Details"
    },
    {
        img: logo,
        headname: "Unleashings Ability through Network Management.",
        link: "/services Details"
    },
    {
        img: logo,
        headname: "Unleashinsg Ability through Network Management.",
        link: "/services Details"
    },

]

export const page = [
    {
        link: "",
        name: "Login ",
        from: "home",
        to: "Login"
    },

]


export const footerQlink = [

    {
        id: 'about',
        title: "About"
    },
    {
        id: 'services',
        title: "Services"
    },
    {
        id: "testimonial",
        title: "Testimonial"
    },
    {
        id: "blog",
        title: "Blog",
    },

]

export const Resources = [
    {
        id: "fAQs",
        title: "Faqs"
    },
    {
        id: "privacy&policy",
        title: "Privacy & policy"
    },
    {
        id: "Terms&conditions",
        title: "terms & conditions"
    },
    {
        id: 'Contact_us',
        title: "Contact us"
    },
]

export const projectData = [
    {
        id: 1,

        description:
            'Comprehensive Curriculum from Scratch .',
    }, {

        id: 2,

        description:
            'Pratical learning approach with hands-on labs .',
    },
    {
        id: 3,

        description:
            'Community and Networking Opportunities  .',
    },
    {
        id: 4,

        description:
            'Commitment to Continuous Improvement .',
    },
    {
        id: 5,

        description:
            'Ethical and Responsible Cybersecurity Education',
    },

];