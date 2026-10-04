export const SITE = 'https://punit-portfolio.vercel.app'; // replace with your real domain after deploying
export const EMAIL = 'punityadavmakhanpur@gmail.com';
export const socials = {
  github: 'https://github.com/punitWebDeveloper',
  linkedin: 'https://www.linkedin.com/in/punit-yadav-301366335/',
  whatsapp: 'https://wa.me/918171684730',
};

export const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'PHP', 'Laravel', 'Node.js', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'WordPress'];

export const experience = {
  role: 'Web Developer', role_hi: 'वेब डेवलपर', company: 'VFX ERA',
  place: 'Kakadeo, Kanpur', place_hi: 'काकादेव, कानपुर',
  since: 'May 2024 – Present', since_hi: 'मई 2024 – वर्तमान',
  points: [
    'Worked on 20+ client and company projects using HTML, CSS, JavaScript, PHP, Bootstrap and WordPress.',
    'Built and deployed responsive websites with Next.js and React.',
    'Collaborated with the team to deliver projects within deadlines.',
  ],
  points_hi: [
    'HTML, CSS, JavaScript, PHP, Bootstrap और WordPress से 20 से ज़्यादा क्लाइंट व कंपनी प्रोजेक्ट्स पर काम किया।',
    'Next.js और React से रेस्पॉन्सिव वेबसाइट बनाईं और डिप्लॉय कीं।',
    'टीम के साथ मिलकर प्रोजेक्ट समय पर पूरे किए।',
  ],
};

export const education = [
  { t: 'B.Sc.', t_hi: 'बी.एससी.', s: 'Sri Gyadeen Mahavidyalaya, Auraiya', s_hi: 'श्री ग्यादीन महाविद्यालय, औरैया', y: '2025' },
  { t: 'Diploma in Computer Applications (ADCA)', t_hi: 'कंप्यूटर एप्लीकेशन में डिप्लोमा (ADCA)', s: 'Aryan Computer Institute, Auraiya', s_hi: 'आर्यन कंप्यूटर इंस्टीट्यूट, औरैया', y: '2022–23' },
  { t: 'Intermediate', t_hi: 'इंटरमीडिएट', s: 'S.S. Inter College, Auraiya', s_hi: 'एस.एस. इंटर कॉलेज, औरैया', y: '2022' },
];

// Real GitHub projects. Put a screenshot in public/images/ and change `img` to its name.
export const projects = [
  { slug: 'project1', name: 'Project 1', img: 'project1', year: '2024',
    tag: 'Frontend · HTML, CSS, Bootstrap', tag_hi: 'फ्रंटएंड · HTML, CSS, Bootstrap',
    role: 'Frontend developer', role_hi: 'फ्रंटएंड डेवलपर',
    desc: 'A responsive front-end website built with HTML, CSS and Bootstrap.',
    desc_hi: 'HTML, CSS और Bootstrap से बनी एक रेस्पॉन्सिव फ्रंट-एंड वेबसाइट।',
    stack: ['HTML', 'CSS', 'Bootstrap'], live: null, github: 'https://github.com/punitWebDeveloper/project1' },
  { slug: 'bootstrap-project', name: 'Bootstrap Website', img: 'project2', year: '2024',
    tag: 'Frontend · Bootstrap', tag_hi: 'फ्रंटएंड · Bootstrap',
    role: 'Frontend developer', role_hi: 'फ्रंटएंड डेवलपर',
    desc: 'A Bootstrap-based website made while learning responsive layouts and components.',
    desc_hi: 'Bootstrap आधारित वेबसाइट, जो रेस्पॉन्सिव लेआउट और कंपोनेंट सीखते समय बनाई गई।',
    stack: ['HTML', 'CSS', 'Bootstrap'], live: null, github: 'https://github.com/punitWebDeveloper/myfirstbootstrpproject' },
  { slug: 'toshconfinal', name: 'Toshcon', img: 'project3', year: '2024',
    tag: 'Frontend website', tag_hi: 'फ्रंटएंड वेबसाइट',
    role: 'Frontend developer', role_hi: 'फ्रंटएंड डेवलपर',
    desc: 'A front-end website project. Edit this description and stack in lib/data.js.',
    desc_hi: 'एक फ्रंट-एंड वेबसाइट प्रोजेक्ट।',
    stack: ['Frontend'], live: null, github: 'https://github.com/punitWebDeveloper/toshconfinal' },
];

export const posts = [
  { slug: 'how-to-start-with-nextjs', date: '2026-09-10',
    title: 'How to start learning Next.js in 2026', title_hi: '2026 में Next.js सीखना कैसे शुरू करें',
    excerpt: 'A simple roadmap for beginners who already know basic React.', excerpt_hi: 'उन शुरुआती लोगों के लिए एक आसान रोडमैप, जो React की बेसिक जानकारी रखते हैं।',
    body: ['Start with solid React basics: components, props, state and hooks. Next.js builds on top of them, so do not skip this step.',
      'Then learn the App Router: file-based routing, layouts, server and client components. Build one small project, like a portfolio, instead of watching ten tutorials.',
      'Finally deploy on Vercel and share the link. Real deployment teaches more than any course.'],
    body_hi: ['सबसे पहले React की बुनियादी बातें पक्की करें: कंपोनेंट, props, state और hooks। Next.js इन्हीं पर बना है, इसलिए इस कदम को न छोड़ें।',
      'फिर App Router सीखें: फ़ाइल-आधारित राउटिंग, लेआउट, और सर्वर व क्लाइंट कंपोनेंट। दस ट्यूटोरियल देखने के बजाय एक छोटा प्रोजेक्ट बनाएं, जैसे अपना पोर्टफोलियो।',
      'अंत में Vercel पर डिप्लॉय करें और लिंक शेयर करें। असली डिप्लॉयमेंट किसी भी कोर्स से ज़्यादा सिखाता है।'] },
  { slug: 'make-website-load-faster', date: '2026-09-18',
    title: '5 ways to make your website load faster', title_hi: 'अपनी वेबसाइट को तेज़ लोड कराने के 5 तरीके',
    excerpt: 'Speed is a ranking factor. Here are five fixes you can do today.', excerpt_hi: 'स्पीड एक रैंकिंग फैक्टर है। यहाँ पाँच सुधार हैं जो आप आज ही कर सकते हैं।',
    body: ['Compress images and use modern formats like WebP. Large images are the most common reason for a slow site.',
      'Load only the JavaScript you need, lazy-load below-the-fold content, and use fonts with next/font.',
      'Measure with PageSpeed Insights after every change, so you know what actually helped.'],
    body_hi: ['इमेज को कंप्रेस करें और WebP जैसे आधुनिक फॉर्मेट इस्तेमाल करें। धीमी साइट की सबसे आम वजह बड़ी इमेज होती हैं।',
      'सिर्फ़ ज़रूरी JavaScript लोड करें, स्क्रीन के नीचे का कंटेंट lazy-load करें, और फ़ॉन्ट के लिए next/font इस्तेमाल करें।',
      'हर बदलाव के बाद PageSpeed Insights से जाँचें, ताकि पता चले कि असल में क्या काम आया।'] },
  { slug: 'portfolio-seo-basics', date: '2026-09-25',
    title: 'Portfolio SEO basics: get found on Google', title_hi: 'पोर्टफोलियो SEO की बुनियादी बातें: Google पर कैसे दिखें',
    excerpt: 'Titles, descriptions, sitemap and Search Console explained simply.', excerpt_hi: 'टाइटल, डिस्क्रिप्शन, साइटमैप और Search Console आसान भाषा में।',
    body: ['Give every page a unique title and description that includes your name and what you do.',
      'Add a sitemap, submit it in Google Search Console, and link to your portfolio from GitHub and LinkedIn.',
      'Publish helpful articles regularly. Fresh, useful content is what moves you from page five to page one.'],
    body_hi: ['हर पेज का अलग टाइटल और डिस्क्रिप्शन रखें, जिसमें आपका नाम और आपका काम हो।',
      'साइटमैप बनाएं, उसे Google Search Console में जमा करें, और GitHub व LinkedIn से अपने पोर्टफोलियो का लिंक दें।',
      'काम के लेख नियमित रूप से लिखें। नया और उपयोगी कंटेंट ही आपको पाँचवें पेज से पहले पेज पर लाता है।'] },
];