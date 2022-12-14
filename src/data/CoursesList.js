const CoursesList = [
    {
        id: 1,
        name: 'Javascript For Absolute Beginner',
        price: '230.000',
        totalHours: 18.32,
        mentor: 'Deen Somally',
        verified: true,
        rating: '4.90',
        totalRating: '5,233',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVkTvWSssQQK5orcj29MjKQ0x6jKGAA_k5g&usqp=CAU',
        bestSeller: true,
        category: 'Beginner',
        language: 'Javascipt'
    },
    {
        id: 2,
        name: 'C++ In A Nutshell',
        price: '410.000',
        totalHours: 5.32,
        mentor: 'Angela Yu',
        verified: true,
        rating: '4.30',
        totalRating: '4,257',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysdVCpY847sq0IzYqToTwaH8-Z4XAIZMb7Q&usqp=CAU',
        bestSeller: false,
        category: 'Beginner',
        language: 'C++'
    },
    {
        id: 3,
        name: 'Python As A Backend',
        price: '570.000',
        totalHours: 12.98,
        mentor: 'Colt Steele',
        verified: true,
        rating: '4.25',
        totalRating: '3,231',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe0DWiD02mZCubc8hIe-12Tcy5Y_e9X_cWg&usqp=CAU',
        bestSeller: false,
        category: 'Intermediate',
        language: 'Python'
    },
    {
        id: 4,
        name: 'Zero To Hero Ruby On Rails',
        price: '622.000',
        totalHours: 31.93,
        mentor: 'Mikey Mike',
        verified: true,
        rating: '4.95',
        totalRating: '8,432',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JeKxyEX5c5l1HcgdbDRC-TFN7qEz8sgnOw&usqp=CAU',
        bestSeller: false,
        category: 'Beginner',
        language: 'Ruby'
    },
    {
        id: 5,
        name: 'Springboot Full Course',
        price: '792.000',
        totalHours: 9,
        mentor: 'Jack Harrington',
        verified: false,
        rating: '4.60',
        totalRating: '6,321',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjqdoq3MEALxXw9fxi5zq5L_RPFXc9A5n7Q&usqp=CAU',
        bestSeller: false,
        category: 'Intermediate',
        language: 'Java'
    },
    {
        id: 6,
        name: 'Flutter For Schooler',
        price: '356.000',
        totalHours: 6,
        mentor: 'Brad Traversy',
        verified: false,
        rating: '4.70',
        totalRating: '10,923',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl6MYXHMPJg-VkRIL3oEKwpgSQ9JkUJxWuQ&usqp=CAU',
        bestSeller: false,
        category: 'Beginner',
        language: 'Dart'
    },
    {
        id: 7,
        name: 'Laravel Full Stack',
        price: '325.000',
        totalHours: 14.12,
        mentor: 'Ben Awad',
        verified: false,
        rating: '4.80',
        totalRating: '9,213',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEZbM5HpzPzcYVxeRmqACNWDRKPDLPjwHBw&usqp=CAU',
        bestSeller: false,
        category: 'Expert',
        language: 'PHP'
    },
    {
        id: 8,
        name: 'Solidty Blockchain Introduction',
        price: '488.000',
        totalHours: 2.32,
        mentor: 'Moralis',
        verified: false,
        rating: '4.55',
        totalRating: '2,412',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeE8JNqRVO8YfouYqCYFj4QEU91vbnqaebFg&usqp=CAU',
        bestSeller: false,
        category: 'Beginner',
        language: 'Solidity'
    },
    {
        id: 9,
        name: 'Slicing Figma To Html & Css',
        price: '545.000',
        totalHours: 9.82,
        mentor: 'Kevin Powell',
        verified: true,
        rating: '4.75',
        totalRating: '12,374',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSva_m1K9w5Gc_8S_7gV5UnwAFuJV2S7DvM0Q&usqp=CAU',
        bestSeller: true,
        category: 'Beginner',
        language: 'HTML,CSS'
    },
    {
        id: 10,
        name: 'mySQL Integration With Vue',
        price: '632.000',
        totalHours: 14.21,
        mentor: 'Sarah Buck',
        verified: false,
        rating: '4.85',
        totalRating: '3,419',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4jqDdbAxZqyLGlgpJo8F2ZsQAuIidcgthQ&usqp=CAU',
        bestSeller: false,
        category: 'Intermediate',
        language: 'SQL'
    },
    {
        id: 11,
        name: 'ASP.NET Advanced Development',
        price: '432.000',
        totalHours: 37.32,
        mentor: 'Justine Ezarik',
        verified: false,
        rating: '4.00',
        totalRating: '4,932',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpT_ijTsQdVQRUzmF6FgmLy5J3nT-Km6Tm2Q&usqp=CAU',
        bestSeller: false,
        category: 'Expert',
        language: '.NET'
    },
    {
        id: 12,
        name: 'WebGL Graphic Intregation',
        price: '923.000',
        totalHours: 10.38,
        mentor: 'Clementschu Ariz',
        verified: false,
        rating: '4.15',
        totalRating: '2,032',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrt9wHuMe2YKH6VJcaqTpVq6wxK7ZnrKfzUQ&usqp=CAU',
        bestSeller: false,
        category: 'Expert',
        language: 'C++'
    },
]

export default CoursesList