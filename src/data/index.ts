import { path } from "../constants/path";
import { Facebook, Instagram, LinkedIn, Twitter, bluebook, instituteAdministrator, lecturers, orangebook, pinkbook, students } from "./images";

export const navLinks = [
    { label: "Features", path: path.FEATURES },
    { label: "Pricing", path: path.PRICING },
    { label: "Support", path: path.SUPPORT }
]

export const socials = [
    { label: "Facebook", link: "", icon: Facebook },
    { label: "Instagram", link: "", icon: Instagram },
    { label: "LinkedIn", link: "", icon: LinkedIn },
    { label: "Twitter", link: "", icon: Twitter },
]

export const footerLinks = {
    features: [
        { label: "For Schools", path: path.HOME },
        { label: "For lecturers", path: path.HOME },
        { label: "For students", path: path.HOME },
    ],
    pricing: [
        { label: "Pricing 1", path: path.HOME },
        { label: "Pricing 2", path: path.HOME },
        { label: "Pricing 3", path: path.HOME },
    ],
    support: [
        { label: "FAQs", path: path.HOME },
        { label: "Help  & Support", path: path.HOME },
        { label: "Privacy Policy", path: path.HOME },
        { label: "Terms & Conditions", path: path.HOME },
    ],
}

export const testimonials = [
    {
        testimony: "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful. ",
        user: "Adebisi Olamide",
        role: "VC University of Ibadan",
    },
    {
        testimony: "Since using McLearnMS, my learning experience has been transformed. The platform is so easy to use, and I love the interactive features that make learning more engaging. The customer support team is also fantastic and always available to help with any issues",
        user: "Amantha Sina",
        role: "Student, OAU",
    },
    {
        testimony: "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful. ",
        user: "Adebisi Olamide",
        role: "VC University of Ibadan",
    },
    {
        testimony: "Since using McLearnMS, my learning experience has been transformed. The platform is so easy to use, and I love the interactive features that make learning more engaging. The customer support team is also fantastic and always available to help with any issues",
        user: "Amantha Sina",
        role: "Student, OAU",
    },
    {
        testimony: "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful. ",
        user: "Adebisi Olamide",
        role: "VC University of Ibadan",
    },
    {
        testimony: "Since using McLearnMS, my learning experience has been transformed. The platform is so easy to use, and I love the interactive features that make learning more engaging. The customer support team is also fantastic and always available to help with any issues",
        user: "Amantha Sina",
        role: "Student, OAU",
    },
]

export const features = [
    {
        img: bluebook,
        title: 'Seamless learning experience',
        desc: 'With powerful tools for content development, online collaboration, and real-time communication, Mclearnms helps to foster engagement, retention, and success in the classroom.',
    },
    {
        img: orangebook,
        title: 'Course management simplified',
        desc: 'A system built for lecturers to create, manage, and deliver learning content. Save time and reduce the effort dedicated to infrastructure and course management, using features like: course registration, and assignment and test management',
    },
    {
        img: pinkbook,
        title: 'An all in one robust learning system',
        desc: 'Whether it\'s a small classroom or a large university, Mclearnms provides the tools and features needed to deliver and track learning and eLearning initiatives in one place.',
    },
]

export const services = [
    {
        title: "Institution Administrator",
        desc: "A comprehensive platform for managing the e-learning process, from course creation to student enrollment to assessment and grading",
        img: instituteAdministrator,
        duties: [
            "Manage course catalogs",
            "Manage lecturers and students",
            "Manage academic semesters and sessions",
        ]
    },
    {
        title: "Lecturers",
        desc: "With our powerful suite of tools, you'll have everything you need to create top-notch content and engage with your students like never before.",
        img: lecturers,
        duties: [
            "Create and publish courses",
            "Host live classes",
            "Easily publish assessments",
            "Grade assessments on the go",
        ]
    },
    {
        title: "Students",
        desc: "Students are not left behind as Mclearnms offers a seamless online learning experience with intuitive interfaces and easy-to-use features. The platform allows students to access course materials, learn at their convenience, interact with their peers, and submit assignments online, all in one convenient location.",
        img: students,
        duties: [
            "Watch recorded classes at convenience",
            "Never miss a test or class with a schedule tailored to you",
            "Access discussion forums for every course",
            "Take tests and submit assignments seamlessly ",
        ]
    },
]
export const faqs = [
    {
        question: "Is Mclearnms and LMS?",
        answer: "Yes, mclearanms is a Learning management system that jdhvfk schbkz hbzx jcnxbm xcnvb bn jxjvhxbcjbxjkbch xbnvxmkvnbcm.",
    },
    {
        question: "What does an LMS do?",
        answer: "Yes, mclearanms is a Learning management system that jdhvfk schbkz hbzx jcnxbm xcnvb bn jxjvhxbcjbxjkbch xbnvxmkvnbcm.",
    },
    {
        question: "Can I ise it for free?",
        answer: "Yes, mclearanms is a Learning management system that jdhvfk schbkz hbzx jcnxbm xcnvb bn jxjvhxbcjbxjkbch xbnvxmkvnbcm.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Yes, mclearanms is a Learning management system that jdhvfk schbkz hbzx jcnxbm xcnvb bn jxjvhxbcjbxjkbch xbnvxmkvnbcm.",
    },
    {
        question: "Can I assign a department admin?",
        answer: "Yes, mclearanms is a Learning management system that jdhvfk schbkz hbzx jcnxbm xcnvb bn jxjvhxbcjbxjkbch xbnvxmkvnbcm.",
    },
]