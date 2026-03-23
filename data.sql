-- Data Migration Script for PSS Empower Cambodia
-- This script populates the database with static content from the frontend

USE pss_empower_cambodia;

-- Insert page translations for Home page
INSERT INTO page_translations (page_id, language_id, title, content, meta_description) VALUES
(1, 1, 'PSS Empower Cambodia - Transforming Lives Through IT Education', 'Empowering Cambodian youth through quality IT training and education', 'PSS provides 2-year IT training programs for underprivileged Cambodian youth, opening pathways to quality employment and brighter futures.'),
(1, 2, 'PSS Empower Cambodia - ផ្តល់អំណាចដល់យុវវ័យខ្មែរតាមរយៈការអប់រំ IT', 'ផ្តល់អំណាចដល់យុវវ័យខ្មែរតាមរយៈការបណ្តុះបណ្តាល IT ដ៏ល្អ', 'PSS ផ្តល់ការបណ្តុះបណ្តាល IT ២ ឆ្នាំដល់យុវវ័យខ្មែរដែលខ្វះខាត ដើម្បីបើកឱកាសការងារ និងជីវិតល្អប្រសើរ។');

-- Insert page translations for About page
INSERT INTO page_translations (page_id, language_id, title, content, meta_description) VALUES
(2, 1, 'About PSS - Our Story & Mission', 'Founded in 2025, PSS carries forward the transformative legacy of Passerelles Numériques Cambodia', 'Learn about PSS mission to provide quality IT education to underprivileged Cambodian youth.'),
(2, 2, 'អំពី PSS - ប្រវត្តិ និងបេសកកម្ម', 'PSS បានបង្កើតក្នុងឆ្នាំ ២០២៥ ដើម្បីបន្តបេសកកម្មរបស់ PNC', 'ស្វែងយល់ពីបេសកកម្មរបស់ PSS ក្នុងការផ្តល់ការអប់រំ IT ដ៏ល្អដល់យុវវ័យខ្មែរដែលខ្វះខាត។');

-- Insert page translations for Programs page
INSERT INTO page_translations (page_id, language_id, title, content, meta_description) VALUES
(3, 1, 'IT Training Programs - 2-Year Scholarship Program', 'A comprehensive, scholarship-based program built on 20 years of PNC experience', 'PSS 2-year IT training program transforms underprivileged Cambodian youth into employable software developers.'),
(3, 2, 'កម្មវិធីបណ្តុះបណ្តាល IT - កម្មវិធីអាហារូបករណ៍ ២ ឆ្នាំ', 'ការបណ្តុះបណ្តាលពេញលេញ ស្ថាបនាលើបទពិសោធន៍ PNC ២០ ឆ្នាំ', 'កម្មវិធីបណ្តុះបណ្តាល IT ២ ឆ្នាំរបស់ PSS ផ្លាស់ប្តូរយុវវ័យខ្មែរដែលខ្វះខាតជាអ្នកអភិវឌ្ឍន៍ software ដែលអាចរកការងារបាន។');

-- Insert sections for Home page
INSERT INTO sections (page_id, type, `order`) VALUES
(1, 'hero', 1),
(1, 'stats', 2),
(1, 'programs', 3),
(1, 'testimonials', 4),
(1, 'donation', 5),
(1, 'partners', 6);

-- Insert sections for About page
INSERT INTO sections (page_id, type, `order`) VALUES
(2, 'hero', 1),
(2, 'mission', 2),
(2, 'vision', 3),
(2, 'values', 4),
(2, 'timeline', 5),
(2, 'team', 6);

-- Insert sections for Programs page
INSERT INTO sections (page_id, type, `order`) VALUES
(3, 'hero', 1),
(3, 'curriculum', 2),
(3, 'steps', 3);

-- Insert section translations for Home page hero
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(1, 1, 'Established 2025 — Phnom Penh, Cambodia', 'Empowering Cambodian Youth Through Skills & Education\nPSS provides a 2-year IT training program for underprivileged Cambodian youth — opening pathways to quality employment and a brighter future.\nDonate Now\nJoin Program\nPartner With Us'),
(1, 2, 'ស្ថាបនា ២០២៥ — ភ្នំពេញ, កម្ពុជា', 'ផ្តល់អំណាចដល់យុវវ័យខ្មែរ\nតាមរយៈជំនាញ និងការអប់រំ\nPSS ផ្តល់ការបណ្តុះបណ្តាល IT ២ ឆ្នាំដល់យុវវ័យខ្មែរដែលខ្វះខាត — បើកឱកាសការងារដ៏ល្អ និងជីវិតល្អប្រសើរ។\nបរិច្ចាគឥឡូវ\nចូលរួមកម្មវិធី\nជាដៃគូ');

-- Insert section translations for Home page stats
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(2, 1, 'Our Impact in Numbers', 'Building on 20 years of PNC\'s legacy, PSS continues to transform lives across Cambodia'),
(2, 2, 'ផលប៉ះពាល់របស់យើងក្នុងលេខ', 'ជាបន្តនៃ PNC ២០ ឆ្នាំ យើងបន្តផ្លាស់ប្តូរជីវិត');

-- Insert section translations for Home page programs
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(3, 1, 'What We Offer', 'A comprehensive program combining technical skills, soft skills, and professional development to ensure our graduates are job-ready.\nWeb Development\nFull-stack web development with modern technologies\nSoft Skills\nCommunication, leadership, and professional development\nCareer Readiness\nInterview prep, resume writing, and job placement\nExplore Full Program'),
(3, 2, 'កម្មវិធីសិក្សា', 'កម្មវិធីបណ្តុះបណ្តាលរួមមាន ការអភិវឌ្ឍន៍ Software ជំនាញទន់ និងការត្រៀមខ្លួន\nការអភិវឌ្ឍន៍ Web\nHTML, CSS, JavaScript, React, PHP, MySQL\nជំនាញទន់\nការទំនាក់ទំនង, ភាពជាអ្នកដឹកនាំ\nការត្រៀមខ្លួន\nការសម្ភាសន៍, ចំណងជើងការងារ\nស្វែងយល់ពីកម្មវិធី');

-- Insert section translations for Home page testimonials
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(4, 1, 'Success Stories', 'Hear directly from students whose lives have been transformed through PSS\nSophea Meng\nSoftware Engineer, Grab Cambodia\nPSS completely transformed my life. I went from a rural student who had never touched a computer to a professional software developer in just two years.\nDara Keo\nFront-end Developer, Pathmazing\nThe 2-year IT training program gave me both the technical skills and the confidence to compete in the job market. Today I work at a leading tech company.\nView All Success Stories'),
(4, 2, 'រឿងជោគជ័យ', 'ជោគជ័យរបស់ students ជាការបំណង្ហាញ\nSophea Meng\nវិស្វករសូហ្វវែរ, Grab Cambodia\nPSS បានផ្លាស់ប្តូរជីវិតខ្ញុំ។ ខ្ញុំបានឡើងពីអ្នកស្រុកស្រែដែលមិនដែលប៉ះកុំព្យូទ័រ ដល់ក្លាយជាអ្នកអភិវឌ្ឍន៍ software ។\nDara Keo\nអ្នកអភិវឌ្ឍន៍ Front-end, Pathmazing\nកម្មវិធីបណ្តុះបណ្តាល IT ២ ឆ្នាំបានផ្តល់ឱ្យខ្ញុំនូវវិជ្ជាជីវៈ និងទំនុកចិត្ត។\nពិនិត្យរឿងទាំងអស់');

-- Insert section translations for Home page donation
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(5, 1, 'Support Our Mission', 'One Donation, One Changed Life\nYour donation funds scholarships, equipment, and mentorship for underprivileged youth in Cambodia.\n$34,000 raised\n68%\nGoal: $50,000\nDonate Now'),
(5, 2, 'ជួយដល់យើង', 'ការបរិច្ចាគម្នាក់ — ផ្លាស់ប្តូរជីវិតមួយ\nការបរិច្ចាគរបស់អ្នកផ្តល់ឱ្យសិស្សម្នាក់នូវឱកាសសិក្សា\nបានប្រមូល $34,000\n68%\nគោលដៅ $50,000\nបរិច្ចាគឥឡូវ');

-- Insert section translations for Home page partners
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(6, 1, 'Our Trusted Partners', 'Grab,Pathmazing,Manulife,Smart Axiata,Wing Bank,USAID,AFD'),
(6, 2, 'ដៃគូរបស់យើង', 'Grab,Pathmazing,Manulife,Smart Axiata,Wing Bank,USAID,AFD');

-- Insert section translations for About page mission
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(8, 1, 'Mission', 'To provide high-quality IT training, professional skills, and employment support to underprivileged Cambodian youth, enabling them to access quality employment and build sustainable livelihoods.'),
(8, 2, 'បេសកកម្ម', 'ផ្តល់ការបណ្តុះបណ្តាល IT ដ៏ល្អ ជំនាញវិជ្ជាជីវៈ និងជំនួយសម្រាប់ការស្វែងរកការងារ ដល់យុវវ័យខ្វះខាត');

-- Insert section translations for About page vision
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(9, 1, 'Vision', 'A Cambodia where all youth, regardless of background, have access to quality education and the opportunities to fulfil their potential in the digital economy.'),
(9, 2, 'ចក្ខុវិស័យ', 'ប្រទេសកម្ពុជាដែលយុវវ័យទាំងអស់ ដោយមិនគិតពីប្រវត្តិ មានសិទ្ធិទទួលបានឱកាសសិក្សា');

-- Insert section translations for About page values
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(10, 1, 'Core Values', 'Excellence\nDelivering top-quality IT education and mentorship\nInclusion\nPrioritizing youth from underprivileged rural backgrounds\nTransformation\nLife-changing education that creates lasting impact\nLeadership\nCultivating the next generation of Cambodian leaders'),
(10, 2, 'គុណតម្លៃស្នូល', 'គុណភាព\nផ្តល់ការបណ្តុះបណ្តាលកម្រិតខ្ពស់\nការចូលរួម\nផ្តោតលើយុវវ័យខ្វះខាត\nការផ្លាស់ប្តូរ\nផ្លាស់ប្តូរជីវិតតាមរយៈការអប់រំ\nភាពជាអ្នកដឹកនាំ\nបណ្តុះអ្នកដឹកនាំថ្ងៃស្អែក');

-- Insert section translations for About page timeline
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(11, 1, 'Our Journey', 'From PNC to PSS — 20 years of transforming lives\n2005\nPNC Founded\nPasserelles Numériques Cambodia launches its first IT training program\n2010\nProgram Expansion\nExpanded to reach more rural provinces across Cambodia\n2019\n400+ Graduates Employed\nOver 400 graduates placed in quality employment\n2025\nPSS Established\nPSS is founded, continuing and expanding PNC\'s transformative mission'),
(11, 2, 'ប្រវត្តិសាស្ត្រ', 'ពី PNC ដល់ PSS — ២០ ឆ្នាំនៃការផ្លាស់ប្តូរជីវិត\n2005\nPNC ត្រូវបានស្ថាបនា\nPasserelles Numériques Cambodia ចាប់ផ្តើម\n2010\nពង្រីកកម្មវិធី\nពង្រីកទៅស្រុកបន្ថែម\n2019\nជោគជ័យ 400+\n400+ ស្ថាបត្យករ\n2025\nPSS ត្រូវបានបង្កើត\nPSS បន្តបេសកកម្ម PNC');

-- Insert section translations for About page team
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(12, 1, 'Our Team', 'Dr. Sovannara Chan\nExecutive Director\nSC\nPisey Heng\nDirector of Training\nPH\nSopheak Lim\nOperations Manager\nSL\nRatana Khim\nFinance Director\nRK'),
(12, 2, 'ក្រុមការងារ', 'Dr. Sovannara Chan\nនាយកប្រតិបត្តិ\nSC\nPisey Heng\nនាយកបណ្តុះបណ្តាល\nPH\nSopheak Lim\nប្រធានគ្រប់គ្រង\nSL\nRatana Khim\nប្រធានហិរញ្ញវត្ថុ\nRK');

-- Insert section translations for Programs page curriculum
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(14, 1, '2-Year Curriculum', 'Year 1\nHTML & CSS Fundamentals\nIntroduction to JavaScript\nLinux & Command Line\nSQL & Databases\nEnglish Communication\nProfessional Skills\nYear 2\nReact / Vue.js\nNode.js / PHP Backend\nGit & Version Control\nProject Management\nPublic Speaking\nJob Placement Support'),
(14, 2, 'កម្មវិធីសិក្សា ២ ឆ្នាំ', 'ឆ្នាំ ១\nHTML & CSS គ្រឹះ\nJavaScript ចំណូលទៅក្នុង\nការប្រើប្រាស់ Linux\nSQL & Databases\nEnglish Communication\nជំនាញការងារ\nឆ្នាំ ២\nReact / Vue.js\nNode.js / PHP Backend\nGit & Version Control\nProject Management\nការបង្ហាញ\nការស្វែងរកការងារ');

-- Insert section translations for Programs page steps
INSERT INTO section_translations (section_id, language_id, title, content) VALUES
(15, 1, 'How to Join', 'Apply Online\nFill in our online application form with your background\nSelection Test\nTake our aptitude and motivation test\nInterview\nShort interview with our admissions team\nEnroll\nBegin your 2-year transformative journey with PSS'),
(15, 2, 'របៀបចូលរួម', 'ដាក់ពាក្យ\nបំពេញពាក្យស្នើ\nការអានអ្នកដាក់ពាក្យ\nធ្វើតេស្ត\nការសម្ភាស\nការសម្ភាសសង្ខេប\nចូលរៀន\nចូលរៀន ២ ឆ្នាំ');

-- Insert menu items for main menu
INSERT INTO menu_items (menu_id, `order`, url) VALUES
(1, 1, '/'),
(1, 2, '/about'),
(1, 3, '/programs'),
(1, 4, '/impact'),
(1, 5, '/news'),
(1, 6, '/contact'),
(1, 7, '/get-involved');

-- Insert menu item translations for main menu
INSERT INTO menu_item_translations (menu_item_id, language_id, label) VALUES
(1, 1, 'Home'),
(1, 2, 'ទំព័រដើម'),
(2, 1, 'About'),
(2, 2, 'អំពីយើង'),
(3, 1, 'Programs'),
(3, 2, 'កម្មវិធី'),
(4, 1, 'Impact'),
(4, 2, 'ផលប៉ះពាល់'),
(5, 1, 'News'),
(5, 2, 'ព័ត៌មាន'),
(6, 1, 'Contact'),
(6, 2, 'ទំនាក់ទំនង'),
(7, 1, 'Get Involved'),
(7, 2, 'ចូលរួម');

-- Insert media records for images
INSERT INTO media (url, alt_text, type) VALUES
('/src/assets/hero-students.jpg', 'Cambodian students learning IT', 'image'),
('/src/assets/about-team.jpg', 'PSS team members', 'image'),
('/src/assets/student-success-1.jpg', 'Sophea Meng success story', 'image'),
('/src/assets/student-success-2.jpg', 'Dara Keo success story', 'image');